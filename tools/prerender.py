"""Pre-render the JS-templated pages (index, vets, blog) in Chinese and write the
result into #page-root so search engines can read the text without JavaScript.
site.js still redraws the page on load, so behaviour is unchanged."""
import sys, re, threading, functools, http.server, socketserver
from playwright.sync_api import sync_playwright

root = sys.argv[1]
PAGES = ['index.html', 'vets.html', 'blog.html']

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=root)
class Q(Handler.func):
    def log_message(self, *a): pass
srv = socketserver.TCPServer(('127.0.0.1', 0), functools.partial(Q, directory=root))
port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()

with sync_playwright() as p:
    b = p.chromium.launch()
    for page_name in PAGES:
        pg = b.new_page()
        pg.route(re.compile(r'^https?://(?!127\.0\.0\.1).*'), lambda r: r.abort())
        pg.goto(f'http://127.0.0.1:{port}/{page_name}', wait_until='load')
        pg.wait_for_function("document.getElementById('page-root').children.length > 0")
        inner = pg.eval_on_selector('#page-root', 'e => e.innerHTML')
        assert '{{' not in inner, page_name
        path = f'{root}/{page_name}'
        src = open(path, encoding='utf-8').read()
        # replace existing #page-root contents (empty or previously pre-rendered)
        start = src.index('<div id="page-root">') + len('<div id="page-root">')
        end = src.index('<template id="page-template">')
        before_tpl = src[start:end]
        close = before_tpl.rstrip().rfind('</div>')
        new = src[:start] + '\n' + inner + '\n</div>\n' + src[end:]
        # the no-JS warning is no longer true: content is visible without JS
        new = re.sub(r'<noscript>.*?</noscript>\n?', '', new, flags=re.S)
        open(path, 'w', encoding='utf-8').write(new)
        text = re.sub(r'<[^>]+>', ' ', inner)
        print(page_name, 'visible text chars:', len(re.sub(r'\s+', ' ', text)))
        pg.close()
    b.close()
srv.shutdown()
