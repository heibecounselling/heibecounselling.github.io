# Dr. Heibe｜輔導空間 網站

## 檔案說明
| 檔案 | 用途 |
|---|---|
| `index.html` | 首頁 |
| `vets.html` | 獸醫同業頁 |
| `blog.html` | 隨筆手記 |
| `content.js` | **所有中英文文字都在這裡**，日常修改只需改這個檔案 |
| `images/` | 所有圖片 |
| `site.js` | 網頁運作程式，一般不需要修改 |

## 修改文字（在 GitHub 網頁上）
1. 打開 `content.js`，按鉛筆圖示（Edit this file）。
2. 用 Ctrl+F／Cmd+F 搜尋想改的句子。`zh` 是中文，`en` 是英文。
3. 只改引號內的文字，不要刪除引號、逗號、括號。
4. 英文句子如用單引號 ' ' 包住，而句中有撇號（如 I'm），要寫成 `I\'m`。
5. 按 Commit changes 儲存，約 1–2 分鐘後網站更新。
6. 如果頁面變成空白，到 History 還原上一個版本。

## 更換圖片
- 到 `images/` 按 Add file → Upload files，上傳同名檔案即可直接取代。
- 新增圖片時，記得在 `content.js` 或頁面檔案中填上新檔名。

## 之後加入預約系統
取得 Google Calendar 預約頁連結後，把連結貼到 `content.js` 對應位置，或請 Claude 協助加入「預約時段」按鈕。

## Google 搜尋（SEO）相關檔案
| 檔案 | 用途 |
|---|---|
| `sitemap.xml` | 網站所有網頁的清單，提交給 Google Search Console |
| `robots.txt` | 告訴搜尋引擎可以讀取全站，並指出 sitemap 位置 |
| `essay-*.html` | 9 篇隨筆手記的獨立網頁（衛教資源頁的小故事亦連結到這裡） |
| `tools/prerender.py` | 把首頁、獸醫頁、寵物牆的中文內容預先寫入 HTML，讓 Google 不用執行 JavaScript 也讀到文字 |

### 每次新增網頁或文章時
1. 新網頁必須有自己的 `.html` 檔，正文直接寫在 HTML 裡（不要只放在 `content.js`）。
2. 在 `<head>` 加上 `<title>`、`<meta name="description">` 和 `<link rel="canonical" href="https://heibecounselling.com/檔名.html">`。
3. 在 `sitemap.xml` 加一行該網頁的網址，然後到 Google Search Console「要求建立索引」。

### 修改了 `content.js` 之後
訪客看到的內容會即時更新；但 Google 讀到的首頁／獸醫頁文字要重新預先寫入，請 Claude 執行 `tools/prerender.py`（約一分鐘）。
