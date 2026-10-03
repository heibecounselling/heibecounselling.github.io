/*
 * 網站文字內容 Website text
 * ------------------------------------------------------------
 * 所有頁面的中英文文字都在這個檔案。zh = 中文，en = 英文。
 * 修改方法：只改引號 ' ' 或 " " 裡面的文字，不要刪除引號、逗號、括號。
 * 英文用單引號 ' ' 包住的句子中如有撇號（例如 I'm），要寫成 I\'m。
 * 想換行（例如常見問題答案）可以寫 \n。
 *
 * All Chinese and English wording for every page is in this file.
 * Only change text inside the quotes; keep quotes, commas and brackets.
 */
window.CONTENT = {};

/* ============================================================
 * 首頁 Home page (index.html)
 * ============================================================ */
window.CONTENT.home = {
      zh: {
        nav: { about: '關於我', owners: '寵物主人', vets: '獸醫同業', blog: '隨筆手記', faq: '常見問題', book: '優先登記' },
        hero: {
          eyebrow: '寵物哀傷輔導 · 獸醫業界心理支援',
          l1: '用獸醫的角度照顧動物，', l2: '用輔導的視角理解人',
          body: '無論你正面對毛孩離世、照顧患病毛孩的疲累，還是在獸醫工作中感到身心疲憊，這裡是一個可以慢慢說、不必急著堅強的空間。',
          cta: '優先登記', cta2: '認識 Dr. Heibe',
          launch: '輔導服務預計於 11 月正式開始，歡迎先優先登記。',
          p1: '我是寵物主人', p1d: '失去毛孩、照顧年老或患病的毛孩、面對艱難的醫療抉擇',
          p2: '我是獸醫同業', p2d: '為獸醫、獸醫護士及診所團隊而設的心理支援'
        },
        about: {
          eyebrow: '關於 DR. HEIBE',
          title: '關於 Dr. Heibe',
          p1: '我是 Dr. Heibe，香港註冊獸醫（Lau Wing Chi, DVM），亦是受專業訓練的輔導員。',
          p2: '做獸醫的這些年，我見過很多主人在寵物生病的時候，承受著很大的情緒壓力。在急症室裡，我經常陪伴家庭面對突如其來的離別與艱難抉擇，也看見同事們在高壓下默默承受的情緒。這些經歷令我想更好地支援這些同樣愛寵物的人，於是我修讀了輔導。',
          p3: '我明白寵物生病和主人面對離世是怎樣的過程，也受過輔導學的專業訓練。因此，我希望透過我的專業，為主人和照顧者提供一個空間，讓你慢慢整理自己的感受，用自己的步伐走過哀傷。',
          approachTitle: '我的取向',
          approach: [ { v: '尊重每個人的選擇，珍視人和寵物之間獨特的關係' }, { v: '不批判，以你的需要為先' }, { v: '保密原則，遵守 HKPCA 的守則規範' } ],
          qualTitle: '資歷',
          qual: [ { v: '香港獸醫管理局註冊獸醫（DVM）' }, { v: '香港大學社會科學輔導學碩士（MSSc Counselling）' } ],
          methodTitle: '輔導手法',
          method: [ { v: '人本取向（Person-centered Approach）' }, { v: '敘事治療（Narrative Therapy）' }, { v: '接納與承諾治療（ACT）' }, { v: '情緒取向治療（Emotionally Focused Therapy, EFT）' } ],
          expTitle: '輔導經驗',
          exp: [ { v: '超過 250 小時臨床及督導時數' }, { v: '寵物哀傷支持小組' }, { v: 'MARS Veterinary Health 實習輔導員' }, { v: '機構個別輔導' }, { v: '一對一情緒輔導服務' } ],
          more: '查看完整背景及經歷 →'
        },
        owners: {
          eyebrow: '給寵物主人',
          title: '陪你走過與寵物告別的路',
          intro: '失去寵物，或者照顧一隻長期患病的寵物，都可能令人很累、很沮喪，甚至有時會覺得孤單。身邊的人未必理解你，但這份感受是真實的。',
          items: [
            { n: 1, title: '寵物哀傷輔導', sub: 'Pet Bereavement Counselling', body: '寵物離世前後的哀傷、內疚、思念，以及適應生活的轉變。' },
            { n: 2, title: '照顧者情緒支援', sub: 'Caregiver Emotional Support', body: '照顧長期患病或年老寵物時的壓力、疲累和情緒起伏。' },
            { n: 3, title: '同路人小組和心理健康活動', sub: 'Support Group and Activities', body: '認識其他同路人，成為彼此的陪伴者，從活動中感受彼此療癒的過程。' },
            { n: 4, title: '成人心理健康輔導', sub: 'Adult Mental Health', body: '在安全、保密且具支持性的環境中，探索與處理情緒困擾、壓力、人際關係及生活適應等問題，包括焦慮、抑鬱、強烈情緒波動、失眠、職場或學業壓力。' },
            { n: 5, title: '心理教育', sub: 'Psychoeducation', body: '認識自己的情緒狀況、寵物罹患疾病或離世的失落及哀傷過程，學習照顧自己的方法。' }
          ],
          blogTitle: '隨筆手記：寫給寵物主人', blogMore: '看更多 →', blogPosts: [ { title: "那些深夜裡的照顧者", excerpt: "你的累，是愛留下的痕跡，不是愛的反面。" }, { title: "關於「放手」這個詞", excerpt: "很多主人不是放手，而是用另一種方式繼續握著。" } ],
          note: '本服務屬輔導服務，不提供獸醫診症、醫療或精神科診斷及治療。有關毛孩的醫療問題，請與你的主診獸醫商討。'
        },
        vets: {
          eyebrow: '給獸醫同業',
          title: '獸醫，你也值得被好好照顧',
          intro: '職場壓力、高強度溝通與情緒負荷，不該只靠自己撐過去。',
          items: [
            { tag: '機構', title: '機構身心工作坊／講座', body: '職業倦怠的認識與預防、臨床有效溝通、職場壓力調適、身心健康自我覺察等。' },
            { tag: '個人', title: '獸醫／醫護一對一輔導', body: '處理職業倦怠、壓力或個人議題的一對一情緒支援。' },
            { tag: '轉介', title: '正式轉介合作方案', body: '與診所建立轉介流程，讓面對安樂死、離世的寵物主人得到支援。' },
            { tag: '團隊', title: '團隊身心健康活動', body: '正念紓壓、團體支持活動，依團隊人數與時間彈性安排。' }
          ],
          eap: '方案可依診所或機構的規模與需求客製，歡迎洽談報價。',
          cta: '了解合作方案 →'
        },
        process: {
          eyebrow: '輔導流程',
          title: '三個步驟，按你的步伐開始',
          steps: [
            { n: '01', title: '預約', body: '透過網上預約，選擇合適的時間。' },
            { n: '02', title: '初次傾談', body: '了解你的需要與目標，一起決定最適合你的輔導方式。' },
            { n: '03', title: '持續陪伴', body: '按你的步伐進行輔導，所有內容均嚴格保密。' }
          ],
          format: [ { v: '面談或網上視像' }, { v: '每節 50 分鐘' }, { v: '粵語／國語／英語' } ]
        },
        res: {
          eyebrow: '文章與故事', title: '在預約之前，先讀一點', more: '前往隨筆手記 →',
          posts: [
            { tag: '隨筆手記', title: '一些想法，一些故事', body: '記錄我在獸醫與輔導這條路上的感想與故事。', go: '閱讀隨筆', href: 'blog.html', tint: '#DDE5D5', img: 'images/cover-blog.jpg', hasImg: true, noImg: false },
            { tag: '分享你的故事', title: '說說你與寵物的故事', body: '每一則投稿我都會親自閱讀，你可選擇是否公開。', go: '分享故事', href: 'blog.html', tint: '#EAD9C8', img: 'images/cover-share-story.jpg', hasImg: true, noImg: false },
            { tag: '獸醫身心健康', title: '給獸醫與醫護的職場身心文章', body: 'Burnout、困難對話、Mental Health Awareness。', go: '閱讀文章', href: 'vets.html', tint: '#D9DCCB', img: 'images/cover-vet-wellbeing.jpg', hasImg: true, noImg: false }
          ]
        },
        faq: { title: '常見問題' },
        faqs: [
          { q: '預約流程是怎樣的？', a: '① 填寫表單：按本頁「優先登記」按鈕填寫，數分鐘即可完成。\n② 電郵聯繫及免費初步評估：我會以電郵與你聯繫，預約一次免費的簡短初步評估（約 15 分鐘），了解你的需要和目前狀況。如評估後發現你的需要超出我能提供的服務範圍，我會盡力協助你轉介至其他合適的服務。\n③ 確認服務：確認輔導安排，並簽署服務同意書。\n④ 付款後取得服務確認書。\n⑤ 預約第一次輔導：每節 50 分鐘，按你的步伐進行，所有內容保密。' },
          { q: '我怎樣知道自己是否需要輔導？', a: '輔導不只是在「撐不住」時才需要。如果你發現自己有以下情況，都可以考慮找人談談：\n· 持續感到悲傷、內疚、憤怒或麻木\n· 睡眠、胃口、工作或人際關係受到影響\n· 反覆想著同一件事，例如毛孩離世前的決定或某個工作個案\n· 對工作失去熱情，下班後仍放不下\n· 覺得身邊的人不太明白你的感受\n如果不確定，也歡迎先填寫登記表格，我們可以先初步傾談，再一起決定是否適合。' },
          { q: '輔導和看獸醫有甚麼不同？', a: '輔導專注於你的情緒與想法，不涉及診斷或治療建議。我會陪你整理感受與顧慮，讓你更有力量與主診獸醫溝通。' },
          { q: '毛孩離開很久了，還適合尋求輔導嗎？', a: '哀傷沒有時間表。無論是數天還是數年，只要它仍影響你的生活，都值得被聆聽。' },
          { q: '我是獸醫／獸醫護士，同行身份會令我尷尬嗎？', a: '所有輔導內容均嚴格保密（法律規定的例外情況除外），我不會向任何人揭示你正在接受輔導、你的個人身分，以及輔導期間分享的私人內容。除非你願意，否則無需公開你所在診所和同事的真實姓名。在輔導空間內，我們的身分是輔導員（我）和客戶（你），輔導的內容及方式以你的最大利益為優先。正因為我了解這個行業，你不必花時間解釋工作背景，可以更快談到真正困擾你的事。' },
          { q: '輔導內容會保密嗎？', a: '會。除涉及人身安全等法律規定的例外情況外，所有內容均嚴格保密，並會在初次傾談時清楚說明及簽署保密協議書和服務同意書。' },
          { q: '輔導形式和收費是怎樣的？', a: '可選擇面談或網上視像，每節 50 分鐘，以粵語、國語或英語進行。服務預計於 11 月正式開始，收費將於優先登記後通知。機構方案請洽談報價。' },
          { q: '面談和網上視像輔導，應該怎樣選擇？', a: '兩種形式同樣保密，可按你的生活節奏和需要選擇：\n· 網上視像：適合時間緊湊、需要輪班，或想在熟悉環境（例如家中）傾談的人。請預備一個安靜、不會被打擾的私人空間及穩定的網絡。\n· 面談：適合希望暫時離開日常環境、專心面對面傾談的人。\n你可以隨時轉換形式，我們會在初次聯絡時一起決定最合適的安排。' }
        ],
        contact: {
          title: '慢慢來，我在這裡。',
          body: '輔導服務預計於 11 月正式開始。歡迎先填寫優先登記表格，或以電郵查詢。',
          cta: '優先登記', mail: '電郵查詢', emailK: '電郵',
          rows: [
            { k: '形式', v: '面談或網上視像｜每節 50 分鐘' },
            { k: '語言', v: '粵語／國語／英語' },
            { k: 'Instagram / Threads', v: '@dr.heibe_counsellingvet' }
          ],
          crisis: '如你或身邊的人有即時危險，請致電 999 或前往最近的急症室。24 小時精神健康支援熱線「情緒通」18111。'
        },
        foot: { home: '首頁', vets: '獸醫同業', blog: '隨筆手記' }
      },
      en: {
        nav: { about: 'About', owners: 'Pet owners', vets: 'Vet professionals', blog: 'Blog', faq: 'FAQ', book: 'Priority registration' },
        hero: {
          eyebrow: 'PET LOSS COUNSELLING · SUPPORT FOR VET PROFESSIONALS',
          l1: 'Caring for animals as a vet,', l2: 'understanding people as a counsellor',
          body: 'Whether you are grieving a pet, exhausted from caring for a sick one, or worn down by veterinary work, this is a space to talk at your own pace, without needing to be strong.',
          cta: 'Priority registration', cta2: 'Meet Dr. Heibe',
          launch: 'Counselling services are expected to begin in November — register early for priority.',
          p1: 'I\'m a pet owner', p1d: 'Losing a pet, caring for a senior or sick pet, facing difficult decisions',
          p2: 'I work in veterinary care', p2d: 'Support for vets, vet nurses and clinic teams'
        },
        about: {
          eyebrow: 'ABOUT DR. HEIBE',
          title: 'About Dr. Heibe',
          p1: 'I\'m Dr. Heibe — a registered veterinarian in Hong Kong (Lau Wing Chi, DVM) and a professionally trained counsellor.',
          p2: 'Over my years as a vet, I have seen many owners carry heavy emotional strain when their pets fall ill. In the emergency room I often walk alongside families through sudden goodbyes and difficult decisions, and I see colleagues quietly carrying their emotions under pressure. These experiences made me want to better support people who love their animals just as much — so I trained in counselling.',
          p3: 'I understand what it is like when a pet is ill and when owners face a loss, and I am professionally trained in counselling. Through my work, I hope to offer owners and caregivers a space to slowly make sense of their feelings and move through grief at their own pace.',
          approachTitle: 'My approach',
          approach: [ { v: 'Respecting every person\'s choices and the unique bond between people and their pets' }, { v: 'Non-judgemental, putting your needs first' }, { v: 'Confidentiality, following the HKPCA code of ethics' } ],
          qualTitle: 'Qualifications',
          qual: [ { v: 'Registered Veterinarian, Veterinary Surgeons Board of Hong Kong (DVM)' }, { v: 'Master of Social Sciences in Counselling (MSSc Counselling), HKU' } ],
          methodTitle: 'Counselling approaches',
          method: [ { v: 'Person-centred Approach' }, { v: 'Narrative Therapy' }, { v: 'Acceptance and Commitment Therapy (ACT)' }, { v: 'Emotionally Focused Therapy (EFT)' } ],
          expTitle: 'Counselling experience',
          exp: [ { v: '250+ hours of clinical and supervised practice' }, { v: 'Pet bereavement support groups' }, { v: 'Trainee counsellor, MARS Veterinary Health' }, { v: 'Individual counselling in organisational settings' }, { v: 'One-to-one emotional counselling' } ],
          more: 'Full background and experience →'
        },
        owners: {
          eyebrow: 'FOR PET OWNERS',
          title: 'Walking with you through saying goodbye to your pet',
          intro: 'Losing a pet, or caring for one with a long-term illness, can leave you exhausted, discouraged, and sometimes deeply alone. The people around you may not fully understand — but what you\'re feeling is real.',
          items: [
            { n: 1, title: 'Pet Bereavement Counselling', sub: '寵物哀傷輔導', body: 'Grief, guilt and longing before and after a pet\'s death, and adjusting to life\'s changes.' },
            { n: 2, title: 'Caregiver Emotional Support', sub: '照顧者情緒支援', body: 'The stress, fatigue and emotional ups and downs of caring for a chronically ill or senior pet.' },
            { n: 3, title: 'Support Group and Activities', sub: '同路人小組和心理健康活動', body: 'Meet others on the same path, keep each other company, and heal together through activities.' },
            { n: 4, title: 'Adult Mental Health', sub: '成人心理健康輔導', body: 'A safe, confidential and supportive space to explore emotional distress, stress, relationships and life adjustment — including anxiety, low mood, intense emotions, insomnia, and work or study stress.' },
            { n: 5, title: 'Psychoeducation', sub: '心理教育', body: 'Understand your emotions, the process of loss and grief when a pet is ill or dies, and ways to care for yourself.' }
          ],
          blogTitle: 'From the blog: for pet owners', blogMore: 'See more →', blogPosts: [ { title: "The carers of the small hours", excerpt: "Your tiredness is a mark that love leaves behind, not its opposite." }, { title: "On the words “letting go”", excerpt: "Many owners don't let go — they keep holding on, in a different way." } ],
          note: 'This is a counselling service — not veterinary diagnosis, medical treatment, or psychiatric diagnosis or treatment. Please discuss medical questions with your pet\'s attending vet.'
        },
        vets: {
          eyebrow: 'FOR VETERINARY PROFESSIONALS',
          title: 'Vets, you deserve to be cared for too',
          intro: 'Workplace stress, intense communication and emotional load shouldn\'t be carried alone.',
          items: [
            { tag: 'ORGANISATIONS', title: 'Workshops & talks', body: 'Understanding and preventing burnout, effective clinical communication, managing workplace stress, self-awareness of mental wellbeing.' },
            { tag: 'INDIVIDUAL', title: '1:1 counselling for vets & nurses', body: 'Emotional support for burnout, stress or personal issues.' },
            { tag: 'REFERRAL', title: 'Referral partnership', body: 'A referral pathway so clients facing euthanasia or loss can receive support.' },
            { tag: 'TEAMS', title: 'Team wellbeing activities', body: 'Mindfulness and group support, arranged around your team.' }
          ],
          eap: 'All packages can be tailored to your clinic\'s size and needs — get in touch for a quote.',
          cta: 'See partnership options →'
        },
        process: {
          eyebrow: 'HOW IT WORKS',
          title: 'Three steps, at your own pace',
          steps: [
            { n: '01', title: 'Book', body: 'Choose a suitable time through online booking.' },
            { n: '02', title: 'First conversation', body: 'We explore your needs and goals, and decide together what suits you best.' },
            { n: '03', title: 'Ongoing support', body: 'Sessions continue at your pace, and everything stays confidential.' }
          ],
          format: [ { v: 'In-person or online video' }, { v: '50-minute sessions' }, { v: 'Cantonese / Mandarin / English' } ]
        },
        res: {
          eyebrow: 'ARTICLES & STORIES', title: 'A little reading before you book', more: 'Go to Blog →',
          posts: [
            { tag: 'Blog', title: 'Some thoughts, some stories', body: 'Notes from my path between veterinary medicine and counselling.', go: 'Read', href: 'blog.html', tint: '#DDE5D5', img: 'images/cover-blog.jpg', hasImg: true, noImg: false },
            { tag: 'Share your story', title: 'Tell me about you and your pet', body: 'I read every story personally — you choose whether it\'s shared.', go: 'Share', href: 'blog.html', tint: '#EAD9C8', img: 'images/cover-share-story.jpg', hasImg: true, noImg: false },
            { tag: 'Vet wellbeing', title: 'Articles for vets and vet nurses', body: 'Burnout, difficult conversations, mental health awareness.', go: 'Read', href: 'vets.html', tint: '#D9DCCB', img: 'images/cover-vet-wellbeing.jpg', hasImg: true, noImg: false }
          ]
        },
        faq: { title: 'Frequently asked questions' },
        faqs: [
          { q: 'How does booking work?', a: '① Fill in the form — use the “Priority registration” button on this page; it only takes a few minutes.\n② Email contact and free initial screening — I\'ll email you to book a free, brief initial screening (about 15 minutes) to understand your needs and current situation. If the screening shows that your needs are beyond the scope of what I can offer, I\'ll do my best to help refer you to other suitable services.\n③ Confirm the service — we confirm the arrangements and you sign the service consent form.\n④ Receive your service confirmation after payment.\n⑤ Book your first session — 50 minutes, at your own pace, with everything kept confidential.' },
          { q: 'How do I know if I need counselling?', a: 'Counselling isn\'t only for when you can\'t cope any more. It may help to talk to someone if you notice:\n· Ongoing sadness, guilt, anger or numbness\n· Changes in your sleep, appetite, work or relationships\n· Going over the same thing again and again — a decision before your pet died, or a case at work\n· Losing your passion for work, or being unable to switch off after a shift\n· Feeling that the people around you don\'t quite understand\nIf you\'re not sure, you\'re welcome to fill in the registration form first; we can have an initial chat and decide together whether it\'s a good fit.' },
          { q: 'How is counselling different from seeing a vet?', a: 'Counselling focuses on your emotions and thoughts — no diagnosis or treatment advice. I help you sort through feelings and concerns so you can talk with your vet with more clarity.' },
          { q: 'My pet passed away a long time ago. Is counselling still for me?', a: 'Grief has no timetable. Whether it has been days or years, if it still affects your life, it deserves to be heard.' },
          { q: 'I\'m a vet / vet nurse — will it feel awkward to see a colleague?', a: 'Everything is strictly confidential (apart from legally required exceptions). I will not reveal to anyone that you are receiving counselling, your identity, or anything personal you share in our sessions. Unless you choose to, you don\'t need to name your clinic or colleagues. In the counselling space, our roles are counsellor (me) and client (you), and the content and approach of our work always put your best interests first. Because I know the industry, you won\'t spend time explaining your work and can get to what really matters sooner.' },
          { q: 'Is what I share confidential?', a: 'Yes. Apart from legally required exceptions such as risk to safety, everything is kept strictly confidential. I explain this clearly in our first conversation, and we sign a confidentiality agreement and a service consent form.' },
          { q: 'What are the format and fees?', a: 'In-person or online video, 50-minute sessions, in Cantonese, Mandarin or English. Services are expected to begin in November; fees will be shared after priority registration. Please enquire for organisational packages.' },
          { q: 'Should I choose in-person or online counselling?', a: 'Both are equally confidential — choose whichever fits your life and needs:\n· Online video: good if your schedule is tight, you work shifts, or you\'d rather talk somewhere familiar such as home. Please find a quiet, private space where you won\'t be interrupted, with a stable internet connection.\n· In person: good if you\'d like to step away from your everyday surroundings and talk face to face.\nYou can switch between formats at any time; we\'ll decide on the best arrangement together when we first talk.' }
        ],
        contact: {
          title: 'Take your time. I\'m here.',
          body: 'Counselling services are expected to begin in November. Register early for priority, or reach out by email.',
          cta: 'Priority registration', mail: 'Email me', emailK: 'Email',
          rows: [
            { k: 'Format', v: 'In-person or online video｜50 minutes' },
            { k: 'Languages', v: 'Cantonese / Mandarin / English' },
            { k: 'Instagram / Threads', v: '@dr.heibe_counsellingvet' }
          ],
          crisis: 'If you or someone near you is in immediate danger, call 999 or go to the nearest emergency room. 24-hour mental health support hotline: 18111.'
        },
        foot: { home: 'Home', vets: 'Vet professionals', blog: 'Blog' }
      }
    };

/* ============================================================
 * 獸醫同業頁 Vets page (vets.html)
 * ============================================================ */
window.CONTENT.vets = {
      zh: {
        sub: '獸醫身心支援',
        nav: { home: '首頁', owners: '寵物主人', about: '關於', services: '合作方案', articles: '職場身心文章', blog: '隨筆手記', contact: '洽詢合作' },
        hero: {
          eyebrow: '獸醫 × 心理輔導 · 給獸醫與診所',
          title: '獸醫，你也值得被好好照顧',
          sub: '職場壓力、高強度溝通與情緒負荷，不該只靠自己撐過去。',
          cta: '洽詢合作方案', cta2: '了解服務內容'
        },
        about: {
          title: '關於 Dr. Heibe',
          p1: 'Dr. Heibe 是香港註冊獸醫，畢業於國立臺灣大學獸醫學系，同時持有香港大學社會科學碩士（輔導）學位，並已完成在學期間的督導訓練。',
          p2: '她在急重症動物醫院第一線工作，讓她深刻了解獸醫與護理團隊每天要承受的壓力、疲憊與說不出口的情緒。在臨床實習期間，她加入 MARS Veterinary Health 為內部員工提供輔導服務，並在社區中心設計及提供具私隱性的個人輔導服務。',
          p3: '獸醫因著工作的性質，常態性地把自己的需求放在病患和工作之後。她相信，每一個人都值得被好好理解和重視；只有真正懂得獸醫這份工作的重量，才知道如何陪你把說不清楚的感受梳理清楚，陪你走過職業裡最難的部分。',
          talksLabel: '曾受邀分享主題',
          momentsLabel: '活動花絮',
          momentsHint: '← 左右滑動查看更多 →',
          moments: [
            { src: 'images/moment-hku-lecture.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #DCD2BF;', caption: '香港大學 SOWK 2126A Lecture：Animal-Related Grief and Bereavement' },
            { src: 'images/moment-taiwo-talk.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #DCD2BF;', caption: '賽馬會太和婦女中心：寵物離世講座' },
            { src: 'images/moment-petloss-group-works.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: center 45%; display: block; background: #DCD2BF;', caption: '寵物離世同路人小組：參加者的分享與創作' },
            { src: 'images/moment-talk-slide.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #FFFFFF;', caption: '寵物離世講座簡報：促成「好的告別」· 善後安排' },
            { src: 'images/moment-peticare.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #DCD2BF;', caption: 'The Peticare Medical Group：獸醫身心健康系列講座' },
            { src: 'images/moment-candle-poster.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #B7A08E;', caption: '蠟燭製作與心理健康支援工作坊' },
            { src: 'images/moment-candle-photo.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #DCD2BF;', caption: '工作坊花絮：參加者親手製作的蠟燭' },
            { src: 'images/moment-vsh-emotional-labor.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #FFF5EA;', caption: 'Veterinary Specialty Hospital：Emotional Labor in Veterinary Medicine 講座' },
            { src: 'images/moment-petloss-group.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #EDE6DF;', caption: '「道別·道謝·道愛」喪寵同行小組：敘事治療、故事分享、同路人交流、紀念儀式' },
            { src: 'images/moment-taiwo-counselling.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #EFE3DA;', caption: '香港婦女中心協會賽馬會太和中心：【心靈同路人】情緒輔導服務（已完結）' },
            { src: 'images/moment-peer-support-group.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #F7EBD1;', caption: '獸醫同業朋輩支援小組：哀傷與失落、同理心疲勞、壓力管理、自我關懷、靜觀' }
          ]
        },
        services: {
          title: '提供診所與機構的合作方案',
          intro: '以下方案可依貴機構規模與需求客製，歡迎聯繫討論詳情與報價。',
          quote: '洽談報價',
          items: [
            { tag: '機構', title: '機構身心工作坊／講座', body: '主題可包括職業倦怠的認識與預防、臨床有效溝通、職場壓力調適、身心健康自我覺察等，依團隊需求設計。' },
            { tag: '個人', title: '獸醫／醫護一對一輔導', body: '給個別獸醫、護士的一對一情緒支援與陪伴，處理職業倦怠、壓力或個人議題。' },
            { tag: '轉介', title: '正式轉介合作方案', body: '與診所建立正式轉介流程，讓有需要的寵物主人（例如面對安樂死、離世）可被轉介予 Dr. Heibe。' },
            { tag: '團隊', title: '團隊身心健康活動', body: '正念紓壓、團體支持活動等，依團隊人數與時間彈性安排。' }
          ]
        },
        articlesTitle: '給獸醫與醫護的職場身心文章',
        articlesHint: '點擊標題可展開閱讀全文。',
        open: '收合', closed: '閱讀全文',
        articles: [
          { title: '認識獸醫行業的 Burnout：不是你不夠堅強',
            p1: '高強度的工作節奏、情緒勞動、面對生死的日常，讓 Burnout 在獸醫行業中相當普遍——這不是個人意志力的問題，而是長期處於高壓環境下，身心會出現的正常反應。',
            p2: '常見徵兆包括：對工作逐漸失去熱情、容易疲憊或情緒麻木、對病例或同事感到不耐煩、睡眠與食慾改變。留意這些訊號，是照顧自己的第一步，也是團隊可以一起建立的文化，而不是等到撐不住才處理。' },
          { title: '壞消息之外：與主人溝通中，你也需要被理解',
            p1: '傳遞壞消息、面對主人的情緒反應、在有限時間內做出清楚解釋——這些溝通時刻，對獸醫來說同樣耗費心力。很多時候，我們習慣把焦點放在「怎麼說對主人比較好」，卻很少談「說完之後，你自己好嗎」。',
            p2: '學習溝通技巧很重要，但同樣重要的是：允許自己在困難對話之後，也需要一點時間消化情緒，而不是立刻接著下一個病例。' },
          { title: '職場壓力調適與 Mental Health Awareness：從覺察開始',
            p1: 'Mental Health Awareness 不是等到出現嚴重狀況才談，而是在日常工作中，建立對自己與同事身心狀態的基本覺察——留意壓力累積的訊號，也願意在同行之間坦誠地說「我最近有點吃力」。',
            p2: '團隊層級的支持（例如定期的身心健康活動、開放討論壓力的空間）與個人層級的求助（一對一輔導），可以互相補足，讓照顧彼此不再只是口號。' }
        ],
        blogTitle: '隨筆手記：寫給獸醫同業', blogMore: '看更多 →', blogPosts: [ { title: "下班後帶回家的那些個案", excerpt: "那份不安，其實是職業道德在說話。" }, { title: "寫給我身邊的護士們", excerpt: "倦怠不是個人的失敗。" } ],
        crisis: '如果你正處於情緒危機，或有傷害自己的念頭，請立即致電「情緒通」18111 精神健康支援熱線（24 小時），或前往就近急症室求助。',
        contact: {
          title: '洽詢合作',
          body: '按下方按鈕會開啟一封已填好格式的電郵，填上診所／機構名稱、聯絡人、有興趣的方案等資料後寄出即可，我們會盡快回覆討論細節與報價。',
          gmail: '用 Gmail 網頁版寄出', app: '開啟郵件程式', or: '或直接寄到', include: '電郵內需包括',
          fields: [ { v: '診所／機構名稱' }, { v: '聯絡人姓名' }, { v: '職稱／角色' }, { v: '聯絡方式（Email／電話）' }, { v: '有興趣的方案' }, { v: '補充說明（團隊人數、時間、預算）' } ],
          subject: '機構合作洽詢：',
          lines: ['診所／機構名稱：', '聯絡人姓名：', '職稱／角色：', '聯絡方式（Email／電話）：', '有興趣的方案（工作坊／講座、一對一輔導、轉介合作、團隊活動、未確定）：', '補充說明（團隊人數、預計時間、預算範圍）：']
        },
        picsOpenLabel: '收合個人資料收集聲明 ▲', picsClosedLabel: '個人資料收集及使用聲明（請詳閱）▼',
        pics: [
          { k: '收集目的：', v: '你提供的資料僅用於處理及回覆你的合作／講座／轉介洽詢。' },
          { k: '資料轉交：', v: '資料只會直接寄送到 Dr. Heibe 本人的電郵信箱，不經第三方系統或資料庫儲存，亦不會轉交予任何其他人士或機構。' },
          { k: '自願提供：', v: '聯絡人姓名及聯絡方式為回覆洽詢所必需；如未能提供，我們將無法與你聯繫。' },
          { k: '查閱及更正：', v: '你有權要求查閱或更正我們所持有關於你的個人資料，請電郵至 dr.heibelau.work@gmail.com。本聲明遵守香港《個人資料（私隱）條例》（第486章）。' }
        ],
        slogan: '用獸醫的角度照顧動物，用輔導的視角理解人',
        footTag: '與同行一起，把彼此照顧好',
        talkOrgs: { taiwo: '賽馬會太和婦女中心', hku: '香港大學', hrTitle: 'Human-and-Animal Relation 講座：Pet Bereavement' }
      },
      en: {
        sub: 'Wellbeing support for vets',
        nav: { home: 'Home', owners: 'Pet owners', about: 'About', services: 'Partnerships', articles: 'Articles', blog: 'Blog', contact: 'Enquire' },
        hero: {
          eyebrow: 'VETERINARY × COUNSELLING · FOR VETS AND CLINICS',
          title: 'Vets, you deserve to be cared for too',
          sub: 'Workplace stress, intense communication and emotional load shouldn\'t be carried alone.',
          cta: 'Enquire about partnerships', cta2: 'See services'
        },
        about: {
          title: 'About Dr. Heibe',
          p1: 'Dr. Heibe is a registered veterinarian in Hong Kong. She graduated from the School of Veterinary Medicine at National Taiwan University and holds a Master of Social Science (Counselling) from the University of Hong Kong, having completed the programme\'s supervised clinical training.',
          p2: 'Working on the front line of emergency and critical care animal hospitals has given her a deep understanding of the stress, exhaustion and unspoken emotions that vet and nursing teams carry every day. During her clinical practicum, she joined MARS Veterinary Health to provide counselling for its staff, and designed and delivered confidential individual counselling at a community centre.',
          p3: 'By the nature of their work, vets routinely put their own needs behind their patients and their work. She believes everyone deserves to be truly understood and valued — and that only someone who knows the weight of veterinary work can help you untangle feelings that are hard to put into words, and walk with you through the hardest parts of the profession.',
          talksLabel: 'Invited talks',
          momentsLabel: 'Event moments',
          momentsHint: '← Swipe to see more →',
          moments: [
            { src: 'images/moment-hku-lecture.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #DCD2BF;', caption: 'The University of Hong Kong · SOWK 2126A Lecture: Animal-Related Grief and Bereavement' },
            { src: 'images/moment-taiwo-talk.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #DCD2BF;', caption: 'Jockey Club Taiwo women\'s centre · Pet Bereavement Talk' },
            { src: 'images/moment-petloss-group-works.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: center 45%; display: block; background: #DCD2BF;', caption: 'Pet loss peer support group: participants\' reflections and creations' },
            { src: 'images/moment-talk-slide.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #FFFFFF;', caption: 'Pet bereavement talk slide: facilitating a “good goodbye” · aftercare' },
            { src: 'images/moment-peticare.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #DCD2BF;', caption: 'The Peticare Medical Group · Veterinary Mental Health Series' },
            { src: 'images/moment-candle-poster.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #B7A08E;', caption: 'Candle-making & Mental Health Support Workshop' },
            { src: 'images/moment-candle-photo.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #DCD2BF;', caption: 'Workshop moment: candles made by participants' },
            { src: 'images/moment-vsh-emotional-labor.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #FFF5EA;', caption: 'Veterinary Specialty Hospital · Emotional Labor in Veterinary Medicine' },
            { src: 'images/moment-petloss-group.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #EDE6DF;', caption: '“Goodbye · Thank you · I love you” pet loss support group: narrative therapy, story sharing, peer connection, memorial ritual' },
            { src: 'images/moment-taiwo-counselling.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #EFE3DA;', caption: 'HK Federation of Women\'s Centres, Jockey Club Tai Wo Centre · Emotional counselling service (completed)' },
            { src: 'images/moment-peer-support-group.jpg', imgStyle: 'width: 100%; aspect-ratio: 4 / 3; object-fit: contain; display: block; background: #F7EBD1;', caption: 'Peer Support Group for Veterinary Professions: grief, compassion fatigue, stress, self-compassion, mindfulness' }
          ]
        },
        services: {
          title: 'Partnerships for clinics and organisations',
          intro: 'All packages can be tailored to your organisation\'s size and needs — get in touch to discuss details and pricing.',
          quote: 'Quote on request',
          items: [
            { tag: 'ORGANISATIONS', title: 'Wellbeing workshops & talks', body: 'Topics include understanding and preventing burnout, effective clinical communication, managing workplace stress and self-awareness of mental wellbeing, designed around your team.' },
            { tag: 'INDIVIDUAL', title: '1:1 counselling for vets & nurses', body: 'One-to-one emotional support for individual vets and nurses dealing with burnout, stress or personal issues.' },
            { tag: 'REFERRAL', title: 'Formal referral partnership', body: 'A formal referral pathway so clients who need support — for example around euthanasia or loss — can be referred to Dr. Heibe.' },
            { tag: 'TEAMS', title: 'Team wellbeing activities', body: 'Mindfulness, stress relief and group support activities, arranged flexibly around team size and schedules.' }
          ]
        },
        articlesTitle: 'Wellbeing articles for vets and vet nurses',
        articlesHint: 'Click a title to read the full article.',
        open: 'Close', closed: 'Read more',
        articles: [
          { title: 'Burnout in veterinary work: it\'s not that you aren\'t strong enough',
            p1: 'An intense pace, emotional labour and facing life and death every day make burnout common in the veterinary profession. It is not a matter of willpower — it is the body and mind\'s normal response to a long-term high-pressure environment.',
            p2: 'Common signs include losing enthusiasm for work, feeling easily exhausted or emotionally numb, growing impatient with cases or colleagues, and changes in sleep and appetite. Noticing these signals is the first step in caring for yourself — and a culture teams can build together, rather than waiting until someone can\'t cope.' },
          { title: 'Beyond bad news: you need to feel understood too',
            p1: 'Delivering bad news, facing clients\' emotional reactions and explaining clearly in limited time all take a toll on vets. We often focus on “how to say it best for the client”, yet rarely ask “how are you after saying it?”',
            p2: 'Communication skills matter — but so does allowing yourself time to process your emotions after a difficult conversation, instead of moving straight on to the next case.' },
          { title: 'Workplace stress and mental health awareness: it starts with noticing',
            p1: 'Mental health awareness isn\'t something to discuss only when things become serious. It means building everyday awareness of your own and your colleagues\' wellbeing — noticing when stress builds up, and being willing to tell a colleague honestly, “I\'ve been struggling a bit lately.”',
            p2: 'Team-level support (such as regular wellbeing activities and space to talk openly about stress) and individual help (one-to-one counselling) complement each other, so caring for one another becomes more than a slogan.' }
        ],
        blogTitle: 'From the blog: for vet professionals', blogMore: 'See more →', blogPosts: [ { title: "The cases we take home", excerpt: "That unease is really our professional ethics speaking." }, { title: "To the nurses beside me", excerpt: "Burnout is not a personal failure." } ],
        crisis: 'If you are in emotional crisis or having thoughts of harming yourself, please call the 24-hour mental health support hotline 18111 immediately, or go to the nearest emergency room.',
        contact: {
          title: 'Partnership enquiry',
          body: 'The buttons below open a pre-formatted email. Fill in your clinic or organisation, contact person and the package you\'re interested in, then send — we\'ll reply soon to discuss details and pricing.',
          gmail: 'Send with Gmail', app: 'Open email app', or: 'Or email directly:', include: 'Please include',
          fields: [ { v: 'Clinic / organisation name' }, { v: 'Contact person' }, { v: 'Job title / role' }, { v: 'Email or phone' }, { v: 'Package of interest' }, { v: 'Notes (team size, timing, budget)' } ],
          subject: 'Partnership enquiry: ',
          lines: ['Clinic / organisation name:', 'Contact person:', 'Job title / role:', 'Email or phone:', 'Package of interest (workshop/talk, 1:1 counselling, referral partnership, team activities, not sure yet):', 'Notes (team size, timing, budget):']
        },
        picsOpenLabel: 'Hide personal data statement ▲', picsClosedLabel: 'Personal Information Collection Statement ▼',
        pics: [
          { k: 'Purpose: ', v: 'The information you provide is used only to handle and reply to your partnership, talk or referral enquiry.' },
          { k: 'Transfer: ', v: 'Your information is sent directly to Dr. Heibe\'s own email inbox. It is not stored in any third-party system or database and is not passed to any other person or organisation.' },
          { k: 'Voluntary: ', v: 'A contact name and contact details are needed to reply; without them we cannot get back to you.' },
          { k: 'Access and correction: ', v: 'You may request access to or correction of your personal data by emailing dr.heibelau.work@gmail.com. This statement follows the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486).' }
        ],
        slogan: 'Caring for animals as a vet, understanding people as a counsellor',
        footTag: 'Caring for each other, together with colleagues',
        talkOrgs: { taiwo: 'Jockey Club Taiwo women\'s centre', hku: 'The University of Hong Kong', hrTitle: 'Human-and-Animal Relation Talk: Pet Bereavement' }
      }
    };

/* ============================================================
 * 隨筆手記 Blog page (blog.html)
 * ============================================================ */
window.CONTENT.blog = {
      zh: {
        sub: '隨筆手記',
        nav: { home: '首頁', owners: '寵物主人', vets: '獸醫同業', share: '分享你的故事', book: '優先登記' },
        hero: { eyebrow: '隨筆 · Blog', title: '一些想法，一些故事', sub: '這裡記錄我在獸醫與輔導這條路上的感想與故事，寫給願意停下來讀一讀的你。', tag: '' },
        postsTitle: '最新文章', ownersPostsTitle: '寫給寵物主人', vetsPostsTitle: '寫給獸醫同業', readMore: '閱讀全文', collapse: '收合', sourceLabel: '資料來源：', sourceLink: '閱讀原文',
        posts: [
          { group: "owners", tag: "寵物主人", date: "2026年10月", title: "那些深夜裡的照顧者",
            excerpt: "你的累，是愛留下的痕跡，不是愛的反面。",
            paras: [
              "在急症室值夜班時，半夜的候診區常常坐著一些很安靜的人。他們不是第一次來，手上拿著藥袋，熟練地說出毛孩的病歷和用藥。我總會留意他們的眼睛。",
              "以前做獸醫時，我的注意力大多放在病床上的那隻動物。讀輔導之後，我開始看見站在病床旁邊的人。他們很少談自己，好像說一句「我好累」，就等於承認自己愛得不夠。",
              "我想對這些照顧者說：你的累，是愛留下的痕跡，不是愛的反面。如果某一晚你只想坐下來，甚麼都不做，那也沒關係。"
            ] },
          { group: "owners", tag: "寵物主人", date: "2026年10月", title: "關於「放手」這個詞",
            excerpt: "很多主人不是放手，而是用另一種方式繼續握著。",
            paras: [
              "我做過很多次安樂死。每一次，主人在簽名前都會停頓一下，那幾秒很長。有時候會有人問我：「醫生，如果係你，你會點做？」我明白，他們其實是在問：「我這樣做，是不是對的？」",
              "後來在輔導室裡，我聽到另一個版本的故事：決定之後的幾個月、甚至幾年，那個問題仍然在心裡迴響。而就算毛孩是自然離世，很多主人一樣會內疚——會想如果早一點發現、如果多陪一晚。",
              "我慢慢覺得，「放手」這個詞不太準確。很多主人不是放手，而是用另一種方式繼續握著——握著回憶、握著問題、握著那份愛。也許療癒不是停止發問，而是有一天，可以溫柔地回答自己。"
            ] },
          { group: "owners", tag: "寵物主人", date: "2026年10月", title: "還在身邊，卻已經開始想念",
            excerpt: "有一種哀傷，是在失去之前就開始的。",
            paras: [
              "有一種哀傷，是在失去之前就開始的。毛孩還在身邊，會吃飯、會撒嬌，可是你看著牠的時候，心裡已經在預習告別。",
              "很多主人跟我說，他們不敢在牠面前哭，怕牠感受到；也不敢跟別人說，怕被說「牠還在啊，別想太多」。於是這份哀傷，變得很孤單。",
              "我想說，提早出現的哀傷，不代表你放棄了牠。那只是愛提早開始學習告別。在這段日子裡，你可以哭，也可以笑；可以照顧牠，也可以照顧那個正在不捨的自己。"
            ] },
          { group: "owners", tag: "寵物主人", date: "2026年10月", title: "診症室裡緊張的你",
            excerpt: "你的緊張很正常，因為你在乎。",
            paras: [
              "在診症室裡，我常常見到比毛孩更緊張的主人：抱得很緊、說話很快、一直問「牠會不會痛」。有些人會向我道歉：「對不起，我太緊張了。」",
              "以前我會想，該怎樣讓主人冷靜下來。現在我更想說：你的緊張很正常，因為你在乎。",
              "下次如果你在候診室心跳加速，深呼吸一下，有我們一起努力，你做得很好了。"
            ] },
          { group: "vets", tag: "獸醫同業", date: "2026年10月", title: "下班後帶回家的那些個案",
            excerpt: "那份不安，其實是職業道德在說話。",
            paras: [
              "有些個案，下班換了衫、坐上車，還是會跟著你回家。不一定是最嚴重的那一個，而是那個「其實可以救，但最後沒有」的。",
              "剛入行時，我以為那份沉重是因為自己不夠堅強，要學會「放下」。後來讀到「道德困擾」這個概念，我才明白：那是因為我知道對動物最好的是甚麼，卻因為費用、主人的決定或者制度，沒辦法做到。那份不安，其實是職業道德在說話。",
              "我不再要求自己「不要想」。我開始允許自己承認：這件事令我難過。有時候，承認本身已經是一種照顧。"
            ] },
          { group: "vets", tag: "獸醫同業", date: "2026年10月", title: "寫給我身邊的護士們",
            excerpt: "倦怠不是個人的失敗。",
            paras: [
              "在急症室，我最依賴的人是護士。凌晨病房一下子來了三個急症，是她們先把靜脈導管放好、把氧氣接上，記得每一隻動物下一次吃藥的時間。",
              "我也見過很多很好的護士離開這個行業。不是因為不愛動物，而是因為太累、太少被看見。每次聽到「其實我好鍾意呢份工，但我撐唔落去」，我都很心痛。",
              "倦怠不是個人的失敗。我希望我們這一行可以少一點「辛苦是正常的」，多一點「你辛苦了，我們一起想辦法」。"
            ] },
          { group: "vets", tag: "獸醫同業", date: "2026年10月", title: "當獸醫，最累的是甚麼？",
            excerpt: "每一件單獨看都不算甚麼，加起來卻很重。",
            paras: [
              "朋友常問我：「做獸醫最辛苦嘅，係咪見到動物死？」我通常會笑一笑，不知道怎樣解釋。",
              "其實最累的，往往是那些疊在一起的東西：連續的夜班、一邊做手術一邊想著候診區的主人、要在幾分鐘內解釋費用、面對一個情緒激動的家庭，然後下一個病例已經在等。每一件單獨看都不算甚麼，加起來卻很重。",
              "讀輔導之後，我學會先把這些東西一件件拿出來看清楚，而不是一下子全部背在身上。看清楚，不一定能讓工作變輕，但會讓我對自己溫柔一點。"
            ] },
          { group: "vets", tag: "獸醫同業", date: "2026年10月", title: "櫃檯後面的那個人",
            excerpt: "他們很少被問：「你今天還好嗎？」",
            paras: [
              "在動物醫院裡，最先見到主人眼淚的，通常不是醫生，而是前台同事。電話響起時的慌亂、付款時的爭拗、毛孩離開後來接牠回家的那一刻——很多都發生在櫃檯前。",
              "我常常覺得，前台同事做的是一份沒有被寫進職位描述的工作：接住別人最脆弱的時刻，同時保持微笑，然後轉身接聽下一個電話。",
              "他們很少被問：「你今日還好嗎？」我希望我們都記得問。"
            ] }
        ],
        empty: { title: '目前還沒有文章發布，敬請期待。', sub: '之後有新的感想或故事，會在這裡分享。', link: '先讀讀給獸醫與醫護的職場身心文章 →' },
        share: {
          title: '分享你的故事',
          p1: '如果你也想說說自己與寵物的故事，或是一些感想，歡迎寄給我。每一則投稿我都會親自閱讀；若你同意公開分享，經整理後可能會刊登在這個部落格（不會顯示你的真實姓名或 Email）。',
          p2: '按下方按鈕會開啟一封已填好格式的電郵，想說多少都可以，不需要很完整或很正式。如有照片，也可以直接附加在郵件中。',
          gmail: '用 Gmail 網頁版寄出', app: '開啟郵件程式', or: '或直接寄到', include: '電郵內請註明',
          fields: [
            { k: '暱稱', v: '刊登時只會顯示暱稱' },
            { k: '是否同意公開分享', v: '願意公開，或不公開、只寫給 Dr. Heibe 看' },
            { k: '希望的回覆方式', v: '電郵私下回覆／部落格公開回應／不需要回覆' },
            { k: '你的故事或感想', v: '想說多少都可以' }
          ],
          subject: '部落格故事投稿：',
          lines: ['暱稱：', '是否同意公開分享（願意公開／不公開，僅給 Dr. Heibe 看）：', '希望的回覆方式（電郵私下回覆／可於部落格公開回應／不需要回覆）：', '', '我的故事或感想：', '']
        },
        picsOpenLabel: '收合個人資料收集聲明 ▲', picsClosedLabel: '個人資料收集及使用聲明（請詳閱）▼',
        pics: [
          { k: '收集目的：', v: '你提供的資料僅用於審核你希望分享的故事、考慮是否於本部落格刊登，以及在你需要時與你聯繫回覆。' },
          { k: '資料類別：', v: '暱稱、Email、故事內容，以及你對是否公開分享及回覆方式的選擇（若你附加照片，亦包括該等照片）。' },
          { k: '資料轉交：', v: '資料只會直接寄送到 Dr. Heibe 本人的電郵信箱，不經第三方系統或資料庫儲存。若你選擇公開分享並經審核通過，故事內容（不含真實姓名或 Email）可能會刊登於本部落格；除此以外，不會轉交予任何第三方。' },
          { k: '查閱及更正：', v: '你有權要求查閱、更正或移除我們所持有關於你的個人資料，請電郵至 dr.heibelau.work@gmail.com。本聲明遵守香港《個人資料（私隱）條例》（第486章）。' }
        ],
        slogan: '用獸醫的角度照顧動物，用輔導的視角理解人',
        footTag: '診療室外的輔導員'
      },
      en: {
        sub: 'Blog',
        nav: { home: 'Home', owners: 'Pet owners', vets: 'Vet professionals', share: 'Share your story', book: 'Priority registration' },
        hero: { eyebrow: 'Blog', title: 'Some thoughts, some stories', sub: 'Notes and stories from my path between veterinary medicine and counselling — for anyone willing to pause and read for a while.', tag: '' },
        postsTitle: 'Latest posts', ownersPostsTitle: 'For pet owners', vetsPostsTitle: 'For vet professionals', readMore: 'Read more', collapse: 'Close', sourceLabel: 'Source: ', sourceLink: 'Read the original',
        posts: [
          { group: "owners", tag: "Pet owners", date: "October 2026", title: "The carers of the small hours",
            excerpt: "Your tiredness is a mark that love leaves behind, not its opposite.",
            paras: [
              "On ER night shifts, the waiting area in the middle of the night often holds a few very quiet people. It isn't their first visit — they carry bags of medication and recite their pet's history and doses from memory. I always notice their eyes.",
              "As a vet, my attention used to rest mostly on the animal on the table. Since training as a counsellor, I've started to see the person standing beside it. They rarely talk about themselves, as if saying “I'm exhausted” would mean admitting they don't love enough.",
              "What I'd like to tell these carers is this: your tiredness is a mark that love leaves behind, not its opposite. And if one night all you want is to sit down and do nothing at all, that's okay too."
            ] },
          { group: "owners", tag: "Pet owners", date: "October 2026", title: "On the words “letting go”",
            excerpt: "Many owners don't let go — they keep holding on, in a different way.",
            paras: [
              "I have performed many euthanasias. Every time, there is a pause before the owner signs, and those few seconds feel very long. Sometimes someone asks me, “Doctor, what would you do if it were you?” I understand that what they are really asking is, “Am I doing the right thing?”",
              "Later, in the counselling room, I heard the other half of the story: months or even years after the decision, that question still echoes. And even when a pet dies naturally, many owners feel the same guilt — if only I'd noticed sooner, if only I'd stayed one more night.",
              "I've come to feel that “letting go” isn't quite the right phrase. Many owners don't let go; they keep holding on in another way — holding the memories, the questions, the love. Perhaps healing isn't about no longer asking, but about one day being able to answer yourself gently."
            ] },
          { group: "owners", tag: "Pet owners", date: "October 2026", title: "Still here, already missed",
            excerpt: "There is a kind of grief that begins before the loss.",
            paras: [
              "There is a kind of grief that begins before the loss. Your pet is still here — still eating, still curling up beside you — yet when you look at them, part of you is already rehearsing goodbye.",
              "Many owners tell me they don't dare cry in front of their pet in case they sense it, and don't dare tell anyone else in case they hear, “They're still here — don't overthink it.” So this grief becomes a lonely one.",
              "Grief that arrives early doesn't mean you've given up on them. It's simply love starting to learn how to say goodbye. In these days you can cry and you can laugh; you can care for them, and you can care for the part of you that doesn't want to let them go."
            ] },
          { group: "owners", tag: "Pet owners", date: "October 2026", title: "To the nervous owner in the consult room",
            excerpt: "Your nerves are normal, because you care.",
            paras: [
              "In the consult room I often meet owners more nervous than their pets: holding on tight, talking fast, asking again and again, “Will it hurt?” Some apologise to me: “Sorry, I'm just so anxious.”",
              "I used to wonder how to calm owners down. Now I'd rather say: your nerves are normal, because you care.",
              "Next time your heart races in the waiting room, take a breath. We're in this together — and you're doing really well."
            ] },
          { group: "vets", tag: "Vet professionals", date: "October 2026", title: "The cases we take home",
            excerpt: "That unease is really our professional ethics speaking.",
            paras: [
              "Some cases follow you home — after you've changed, after you've got in the car. Not always the most serious one, but the one that “could have been saved, and wasn't”.",
              "When I first started, I thought that heaviness meant I wasn't strong enough and needed to learn to “let it go”. It was only when I came across the idea of moral distress that I understood: it came from knowing what was best for the animal, yet being unable to do it because of cost, an owner's decision or the system. That unease is really our professional ethics speaking.",
              "I no longer tell myself “don't think about it”. Instead I let myself admit: this made me sad. Sometimes, admitting it is already a form of care."
            ] },
          { group: "vets", tag: "Vet professionals", date: "October 2026", title: "To the nurses beside me",
            excerpt: "Burnout is not a personal failure.",
            paras: [
              "In the ER, the people I rely on most are the nurses. When three emergencies arrive on the ward at once in the middle of the night, they're the ones who place the IV lines, connect the oxygen and remember when every animal's next dose is due.",
              "I've also watched many wonderful nurses leave the profession — not because they stopped loving animals, but because they were too tired and too rarely seen. Every time I hear, “I really love this job, but I can't keep going,” it breaks my heart.",
              "Burnout is not a personal failure. I hope our profession can say a little less “it's supposed to be hard” and a little more “you've worked so hard — let's figure this out together.”"
            ] },
          { group: "vets", tag: "Vet professionals", date: "October 2026", title: "What is the hardest part of being a vet?",
            excerpt: "Each thing on its own is small; together they weigh a lot.",
            paras: [
              "Friends often ask me, “Is the hardest part of being a vet seeing animals die?” I usually just smile; it's hard to explain.",
              "What's most tiring is often everything stacked together: back-to-back night shifts, operating while thinking about the owner in the waiting room, explaining costs in a few minutes, supporting a distressed family — and then the next case is already waiting. Each thing on its own is small; together they weigh a lot.",
              "Counselling taught me to take these things out one by one and look at them clearly, instead of carrying them all at once. Seeing them clearly doesn't always make the work lighter, but it helps me be a little gentler with myself."
            ] },
          { group: "vets", tag: "Vet professionals", date: "October 2026", title: "The person behind the front desk",
            excerpt: "They are rarely asked, “Are you okay today?”",
            paras: [
              "In an animal hospital, the first person to see an owner's tears is often not the vet but the front-desk team. The panic when the phone rings, the arguments at payment, the moment someone comes to take their pet home for the last time — so much of it happens at the counter.",
              "I often think the front desk does a job that was never written into the job description: holding people in their most fragile moments, keeping a smile, and then turning to answer the next call.",
              "They are rarely asked, “Are you okay today?” I hope we all remember to ask."
            ] }
        ],
        empty: { title: 'No posts yet — stay tuned.', sub: 'New reflections and stories will be shared here.', link: 'Meanwhile, read the wellbeing articles for vets and vet nurses →' },
        share: {
          title: 'Share your story',
          p1: 'If you\'d like to tell me about you and your pet, or share some thoughts, I\'d love to hear from you. I read every story personally; if you agree to share it publicly, it may be edited and published on this blog (without your real name or email).',
          p2: 'The buttons below open a pre-formatted email. Write as much or as little as you like — it doesn\'t need to be complete or formal. You can attach photos to the email too.',
          gmail: 'Send with Gmail', app: 'Open email app', or: 'Or email directly:', include: 'Please include',
          fields: [
            { k: 'Nickname', v: 'Only your nickname is shown if published' },
            { k: 'Consent to publish', v: 'Happy to share publicly, or only for Dr. Heibe to read' },
            { k: 'Preferred reply', v: 'Private email reply / public reply on the blog / no reply needed' },
            { k: 'Your story or thoughts', v: 'As much or as little as you like' }
          ],
          subject: 'Blog story submission: ',
          lines: ['Nickname:', 'Consent to publish (yes, share publicly / no, only for Dr. Heibe):', 'Preferred reply (private email / public reply on the blog / no reply needed):', '', 'My story or thoughts:', '']
        },
        picsOpenLabel: 'Hide personal data statement ▲', picsClosedLabel: 'Personal Information Collection Statement ▼',
        pics: [
          { k: 'Purpose: ', v: 'The information you provide is used only to review the story you wish to share, decide whether to publish it on this blog, and contact you if you would like a reply.' },
          { k: 'Data collected: ', v: 'Nickname, email, your story, and your choices about publication and replies (including any photos you attach).' },
          { k: 'Transfer: ', v: 'Your information is sent directly to Dr. Heibe\'s own email inbox and is not stored in any third-party system or database. If you agree to publication and your story is approved, its content (without your real name or email) may appear on this blog; otherwise it is not passed to any third party.' },
          { k: 'Access and correction: ', v: 'You may request access to, correction or removal of your personal data by emailing dr.heibelau.work@gmail.com. This statement follows the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486).' }
        ],
        slogan: 'Caring for animals as a vet, understanding people as a counsellor',
        footTag: 'A counsellor beyond the consultation room'
      }
    };
