/* Dr. Heibe Counselling — page renderer.
   You normally do NOT need to edit this file.
   All website wording lives in content.js. */
(function () {
  var LANG_KEY = 'drheibe-lang';

  function readLang() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q === 'zh' || q === 'en') return q;
      var s = localStorage.getItem(LANG_KEY);
      if (s === 'zh' || s === 'en') return s;
    } catch (e) {}
    return 'zh';
  }
  function saveLang(l) {
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
  }

  function lookup(path, scope) {
    var parts = path.trim().split('.');
    var v = scope[parts[0]];
    for (var i = 1; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }
  var HOLE = /\{\{([^}]+)\}\}/g;
  var PURE = /^\s*\{\{([^}]+)\}\}\s*$/;
  function interp(str, scope) {
    return str.replace(HOLE, function (_, p) {
      var v = lookup(p, scope);
      return v == null ? '' : String(v);
    });
  }

  function renderNodes(nodes, scope, out) {
    for (var i = 0; i < nodes.length; i++) renderNode(nodes[i], scope, out);
  }

  function renderNode(node, scope, out) {
    if (node.nodeType === 3) {
      out.push(document.createTextNode(interp(node.nodeValue, scope)));
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.localName;
    if (tag === 'sc-for') {
      var lm = PURE.exec(node.getAttribute('list') || '');
      var list = lm ? lookup(lm[1], scope) : null;
      var as = node.getAttribute('as') || 'item';
      if (list && list.length) {
        for (var j = 0; j < list.length; j++) {
          var child = Object.create(scope);
          child[as] = list[j];
          renderNodes(node.childNodes, child, out);
        }
      }
      return;
    }
    if (tag === 'sc-if') {
      var vm = PURE.exec(node.getAttribute('value') || '');
      if (vm && lookup(vm[1], scope)) renderNodes(node.childNodes, scope, out);
      return;
    }
    var el = node.namespaceURI && node.namespaceURI !== 'http://www.w3.org/1999/xhtml'
      ? document.createElementNS(node.namespaceURI, node.tagName)
      : document.createElement(tag);
    for (var a = 0; a < node.attributes.length; a++) {
      var at = node.attributes[a];
      var name = at.name;
      if (name.indexOf('hint-') === 0) continue;
      if (name.toLowerCase() === 'onclick') {
        var fm = PURE.exec(at.value);
        var fn = fm ? lookup(fm[1], scope) : null;
        if (typeof fn === 'function') el.addEventListener('click', fn);
        continue;
      }
      el.setAttribute(name, interp(at.value, scope));
    }
    var src = tag === 'template' ? node.content.childNodes : node.childNodes;
    var kids = [];
    renderNodes(src, scope, kids);
    for (var k = 0; k < kids.length; k++) el.appendChild(kids[k]);
    out.push(el);
  }

  window.mountPage = function (ComponentClass) {
    var tpl = document.getElementById('page-template');
    var root = document.getElementById('page-root');
    var comp = new ComponentClass({ startLang: readLang() });
    comp.setState = function (patch) {
      var next = typeof patch === 'function' ? patch(this.state) : patch;
      this.state = Object.assign({}, this.state, next);
      if (next && next.lang) saveLang(next.lang);
      draw();
    };
    function draw() {
      var vals = comp.renderVals();
      var out = [];
      renderNodes(tpl.content.childNodes, vals, out);
      var frag = document.createDocumentFragment();
      out.forEach(function (n) { frag.appendChild(n); });
      root.replaceChildren(frag);
      var lang = comp.state.lang || comp.props.startLang || 'zh';
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant-HK';
    }
    draw();
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  };

  window.DCLogic = function DCLogic(props) {
    this.props = props || {};
    this.state = {};
  };
})();
