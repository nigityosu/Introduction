import { useMemo, useState } from 'react'

const courses = [
	{ id: 'site', name: 'Webサイト制作', short: 'WEB', color: 'mint', description: 'ページの見た目や動きを作りながら、HTML・CSS・JavaScriptの基本を学びます。', ready: true },
	{ id: 'game', name: 'ゲーム制作', short: 'GAME', color: 'peach', description: 'ゲームのルールや、プレイヤーの操作に反応する仕組みを考えます。', ready: false },
	{ id: 'robot', name: 'ロボット・ソフト', short: 'ROBOT', color: 'blue', description: 'センサーや条件を組み合わせて、ロボットの動きを考えます。', ready: false },
]

const path = window.location.pathname.replace(/\/$/, '') || '/'
const go = (href) => { window.location.href = href }
const PROGRESS_KEY = 'manabi-code-progress'

function readProgress() {
	try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}') } catch { return {} }
}

function markComplete(id) {
	try {
		const progress = readProgress()
		if (!progress[id]) localStorage.setItem(PROGRESS_KEY, JSON.stringify({ ...progress, [id]: true }))
	} catch { /* Storage may be unavailable in private or restricted browsing modes. */ }
}

function Header() {
	return <header className="topbar"><a className="wordmark" href="/" aria-label="まなびのコード ホーム"><span className="mark">m.</span><span>まなびのコード</span></a><nav aria-label="メインメニュー"><a href="/genre">学習コース</a><a href="/about">学び方</a><a href="/contact">お問い合わせ</a></nav><a className="top-cta" href="/genre">学習をはじめる <span>↗</span></a></header>
}

function Footer() {
	return <footer className="footer"><a className="wordmark" href="/"><span className="mark">m.</span><span>まなびのコード</span></a><span>学ぶ・試す・つくる。</span><small>© まなびのコード</small></footer>
}

function Shell({ children }) {
	return <><Header/><main>{children}</main><Footer/></>
}

function Eyebrow({ children }) { return <p className="eyebrow"><span className="eyebrow-dot"/>{children}</p> }

function Home() {
	return <Shell><section className="hero home-hero"><div className="hero-copy"><Eyebrow>はじめてのプログラミング</Eyebrow><h1>つくりながら、<br/><span>考える力</span>を育てよう。</h1><p className="lead">パズルからコードへ。自分のペースで学びながら、アイデアを小さな作品にしてみよう。</p><div className="hero-buttons"><a className="button button-dark" href="/genre">学習をはじめる <span>→</span></a><a className="button button-quiet" href="/about">このサイトについて</a></div><div className="hero-caption"><span className="caption-check">✓</span> はじめてでも大丈夫。準備なしで始められます。</div></div><div className="hero-art" aria-label="コードを組み立ててページを作るイメージ"><div className="art-sun"/><div className="art-note note-one"><span>YOUR IDEA</span><strong>ひらめきを形に</strong></div><div className="art-window"><div className="window-bar"><i/><i/><i/><span>my-first-page.html</span></div><div className="window-code"><span className="code-tag">&lt;main&gt;</span><div className="code-line"><b>こんにちは！</b></div><div className="code-line code-small">はじめてのページ</div><span className="code-tag">&lt;/main&gt;</span></div><div className="window-sticker">✳</div></div><div className="art-note note-two"><span>STEP 01</span><strong>まずはパズルから</strong></div><span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✳</span></div></section>
		<section className="section learning-section"><div className="section-heading"><div><Eyebrow>HOW YOU LEARN</Eyebrow><h2>小さくつくって、<br/>少しずつステップアップ。</h2></div><p>むずかしい言葉を覚えるより、まずは触ってみることから。できた！を重ねて、コードへ進みます。</p></div><div className="steps-grid"><article className="step-card"><span className="step-number">01</span><div className="step-icon icon-puzzle">▧</div><h3>パズルで考える</h3><p>部品を並べて、ページやプログラムの構造をつかみます。</p><span className="step-level">初級</span></article><article className="step-card"><span className="step-number">02</span><div className="step-icon icon-code">&lt;/&gt;</div><h3>言語の部品を使う</h3><p>本物のHTMLやJavaScriptをパズルで組み合わせます。</p><span className="step-level">中級</span></article><article className="step-card"><span className="step-number">03</span><div className="step-icon icon-create">✳</div><h3>自分の作品をつくる</h3><p>雛形を編集して、アイデアを動く形にしていきます。</p><span className="step-level">上級・卒業試験</span></article></div></section>
		<section className="section featured-course"><div className="featured-copy"><Eyebrow>まずはこちらから</Eyebrow><h2>Webサイト制作</h2><p>見出しや色を選んで、自分だけのページを作ってみよう。書いた内容がすぐプレビューに反映されます。</p><a className="button button-dark" href="/genre/site">コースを見る <span>→</span></a></div><div className="featured-preview"><div className="mini-browser"><div className="mini-browser-bar"><i/><i/><i/><span>はじめてのページ</span></div><div className="mini-page"><span className="mini-badge">MY FIRST WEB</span><strong>好きなことを<br/>ページにしよう。</strong><span className="mini-button">見てみる　→</span></div></div><span className="feature-flower">✳</span></div></section>
		<section className="section course-section"><div className="section-heading compact"><div><Eyebrow>COURSES</Eyebrow><h2>興味のある分野を選ぼう。</h2></div><a href="/genre" className="inline-link">コース一覧 <span>→</span></a></div><CourseCards/></section>
		<section className="bottom-cta"><span className="cta-spark">✳</span><div><p>小さな「できた！」からはじめよう。</p><h2>次につくるのは、あなたのアイデア。</h2></div><a href="/genre" className="button button-light">学習をはじめる <span>→</span></a></section>
	</Shell>
}

function CourseCards() {
	return <div className="course-grid">{courses.map((course, index) => <a className={`course-card ${course.color}`} href={course.ready ? `/genre/${course.id}` : '/genre'} key={course.id}><div className="course-card-top"><span className="course-index">0{index + 1} / COURSE</span><span className="course-arrow">↗</span></div><div className="course-symbol">{course.short === 'WEB' ? <span>&lt;/&gt;</span> : course.short === 'GAME' ? <span>✳</span> : <span>⌁</span>}</div><h3>{course.name}</h3><p>{course.description}</p><span className={`course-state ${course.ready ? 'is-ready' : ''}`}>{course.ready ? '学習できます' : '準備中'}</span></a>)}</div>
}

function PageIntro({ eyebrow, title, description }) { return <section className="page-intro"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{description && <p className="lead">{description}</p>}</section> }

function CourseSelect() {
	return <Shell><div className="content-wrap"><PageIntro eyebrow="COURSE SELECT" title={<>好きな分野から<br/>はじめよう。</>} description="気になるテーマを選んで、プログラミングの世界をのぞいてみよう。"/><CourseCards/><div className="notice"><span>✳</span><p><strong>どれを選んでも、最初はパズルから。</strong><br/>専門用語を知らなくても大丈夫です。</p></div></div></Shell>
}

function CourseHome({ genre }) {
	const course = courses.find((item) => item.id === genre) || courses[0]
	const progress = readProgress()
	if (!course.ready) return <Shell><div className="content-wrap"><a className="back-link" href="/genre">← 分野選択へ戻る</a><PageIntro eyebrow={course.short} title={course.name} description={course.description}/><div className="coming-card"><span className="coming-symbol">✳</span><Eyebrow>COMING SOON</Eyebrow><h2>このコースは準備中です。</h2><p>教材と課題を準備しています。先にWebサイト制作のコースを体験できます。</p><a className="button button-dark" href="/genre/site">Web制作を見てみる <span>→</span></a></div></div></Shell>
	return <Shell><div className="content-wrap"><a className="back-link" href="/genre">← 分野選択へ戻る</a><PageIntro eyebrow="WEB DESIGN · COURSE 01" title={<>Webサイト制作を<br/>はじめよう。</>} description="ページの骨組みから、見た目、動きへ。3つのステップでWeb制作の基本を学びます。"/><div className="course-overview"><div className="overview-top"><span className="status-pill"><i/> 学習コース</span><span>進捗はこのブラウザに保存されます</span></div><div className="level-list"><LevelRow number="01" title="ページの骨組み" text="見出しや文章を組み合わせて、ページの構造を知る" state={progress.beginner ? '合格済み · もう一度見る' : '学習をはじめる'} href="/genre/site/beginner"/><LevelRow number="02" title="ページに動きをつける" text="HTML・CSS・JavaScriptの部品で、クリックの動きを作る" state={progress.intermediate ? '合格済み · もう一度見る' : 'コースを見る'} href="/genre/site/intermediate/html-css-js"/><LevelRow number="03" title="自分の作品をつくる" text="コードを書いて、アイデアを形にする" state={progress.advanced ? '修了済み · もう一度見る' : 'コースを見る'} href="/genre/site/advanced/html-css-js"/></div></div></div></Shell>
}

function LevelRow({ number, title, text, state, href }) { return <a className="level-row" href={href}><span className="level-number">{number}</span><span className="level-copy"><strong>{title}</strong><small>{text}</small></span><span className="level-action">{state} <b>→</b></span></a> }

const beginnerTokens = [
	{ id: 'main', label: 'ページの範囲', code: '<main>' },
	{ id: 'heading', label: '見出し', code: '<h1>こんにちは！</h1>' },
	{ id: 'text', label: '説明文', code: '<p>はじめてのページです。</p>' },
	{ id: 'button', label: 'ボタン', code: '<button>見てみる</button>' },
	{ id: 'close', label: '範囲を閉じる', code: '</main>' },
	{ id: 'wrong', label: 'まちがい部品', code: '</p>' },
]
const middleTokens = [
	{ id: 'button', label: 'ボタンを取得', code: "const button = document.querySelector('#hello');" },
	{ id: 'message', label: '文章を取得', code: "const message = document.querySelector('#message');" },
	{ id: 'listen', label: 'クリックを待つ', code: "button.addEventListener('click', () => {" },
	{ id: 'update', label: '文章を書きかえる', code: "message.textContent = 'こんにちは！';" },
	{ id: 'close', label: '処理を閉じる', code: '});' },
	{ id: 'wrong', label: 'まちがい部品', code: "button.addEventListener('hover', () => {" },
]

function Puzzle({ tokens, answer, exam = false, onPass, title }) {
	const [slots, setSlots] = useState(() => answer.map(() => null))
	const [checked, setChecked] = useState(false)
	const [hint, setHint] = useState(false)
	const used = new Set(slots.filter(Boolean))
	const byId = Object.fromEntries(tokens.map((token) => [token.id, token]))
	const complete = slots.every((id, index) => id === answer[index])
	function place(index, id) { setSlots((current) => { const next = current.map((item) => item === id ? null : item); next[index] = id; return next }); setChecked(false) }
	function remove(index) { setSlots((current) => current.map((item, slot) => slot === index ? null : item)); setChecked(false) }
	function reset() { setSlots(answer.map(() => null)); setChecked(false); setHint(false) }
	return <section className="panel puzzle-panel"><div className="panel-heading"><span className="panel-icon">{exam ? '✓' : '▦'}</span><div><Eyebrow>{title}</Eyebrow><h2>{exam ? '順番を考えて組み立てよう。' : '部品を正しい順番に並べよう。'}</h2></div></div><p className="muted">{exam ? '学んだことを使って、課題を完成させてください。' : '部品を選んで、置きたい番号の場所を押してください。置いた部品をもう一度押すと外せます。'}</p><div className="puzzle-slots">{slots.map((id, index) => <button className={`puzzle-slot ${id ? 'filled' : ''}`} key={index} onClick={() => id ? remove(index) : null} aria-label={`順番 ${index + 1}: ${id ? `${byId[id].label}を外す` : '空欄'}`}><span>{String(index + 1).padStart(2, '0')}</span><code>{id ? byId[id].code : '部品をここに置く'}</code></button>)}</div><div className="token-grid">{tokens.filter((item) => !used.has(item.id)).map((token) => <button className="token" key={token.id} onClick={() => { const empty = slots.findIndex((item) => !item); if (empty !== -1) place(empty, token.id) }} disabled={!slots.includes(null)}><small>{token.label}</small><code>{token.code}</code></button>)}</div><div className="puzzle-controls"><button className="button button-dark" disabled={slots.includes(null)} onClick={() => setChecked(true)}>{exam ? '回答を確認' : 'できあがりを確認'} <span>→</span></button><button className="button button-outline" onClick={reset}>やり直す</button>{!exam && <button className="button button-quiet" onClick={() => setHint((value) => !value)}>{hint ? 'ヒントを隠す' : 'ヒントを見る'}</button>}</div>{hint && !exam && <p className="hint-box" role="status">最初に置くのは「{byId[answer[0]].label}」です。部品の意味を考えてみましょう。</p>}{checked && <div className={`result-box ${complete ? 'success' : 'retry'}`} role="status"><strong>{complete ? 'できました！正しい順番です。' : 'もう少し。順番を見直してみよう。'}</strong><p>{complete ? '考えた流れを、しっかり組み立てられました。' : '部品を外して、もう一度並べ替えられます。'}</p>{complete && onPass && <button className="inline-link" onClick={onPass}>次へ進む →</button>}</div>}</section>
}

function Workshop({ exam = false }) {
	const [heading, setHeading] = useState(exam ? '' : '小さな本屋さん')
	const [description, setDescription] = useState(exam ? '' : 'お気に入りの本と、ゆっくり過ごせる場所です。')
	const [button, setButton] = useState(exam ? '' : 'お店を見てみる')
	const [theme, setTheme] = useState(exam ? '' : 'forest')
	const [clicked, setClicked] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [message, setMessage] = useState('')
	const checks = useMemo(() => [heading.trim().length >= 2, description.trim().length >= 12, button.trim().length >= 2, Boolean(theme), clicked], [heading, description, button, theme, clicked])
	const passed = checks.every(Boolean)
	function submit() { setSubmitted(true); if (passed) { markComplete('beginner'); setMessage('おめでとうございます。入門コースを修了しました。これからは実際の制作にも挑戦してみましょう。') } }
	return <><div className="workshop-grid"><section className="panel workshop-controls"><div className="panel-heading"><span className="panel-icon">✎</span><div><Eyebrow>{exam ? 'BEGINNER CHECK' : 'TRY IT YOURSELF'}</Eyebrow><h2>{exam ? '紹介ページを完成させよう。' : 'ページの内容を考えよう。'}</h2></div></div><p className="muted">{exam ? '見出し・紹介文・ボタンを決めて、ページの雰囲気を選びます。最後にプレビューのボタンも押してください。' : '左の内容を変えると、右のページがすぐに変わります。'}</p><label>ページの見出し<input value={heading} maxLength={48} onChange={(event) => { setHeading(event.target.value); setSubmitted(false) }} placeholder="例: まちの小さな本屋"/></label><label>紹介する文章<textarea value={description} maxLength={180} rows={3} onChange={(event) => { setDescription(event.target.value); setSubmitted(false) }} placeholder="どんな場所か、何が好きかを書いてみましょう。"/></label><label>ボタンの言葉<input value={button} maxLength={28} onChange={(event) => { setButton(event.target.value); setSubmitted(false) }} placeholder="例: くわしく見る"/></label><fieldset className="theme-field"><legend>ページの雰囲気</legend><div className="theme-options">{[['forest','森'],['ocean','海'],['sunset','夕焼け']].map(([id, name]) => <button type="button" className={`theme-option ${theme === id ? 'selected' : ''}`} key={id} onClick={() => { setTheme(id); setSubmitted(false) }}><i className={id}/>{name}</button>)}</div></fieldset>{exam && <div className="workshop-actions"><button className="button button-dark" onClick={submit}>課題を提出する <span>→</span></button><button className="button button-outline" onClick={() => { setHeading(''); setDescription(''); setButton(''); setTheme(''); setClicked(false); setSubmitted(false); setMessage('') }}>最初から</button></div>}</section><section className="preview-column"><div className="preview-label"><Eyebrow>LIVE PREVIEW</Eyebrow><span>入力するとすぐ反映</span></div><div className={`site-preview theme-${theme || 'none'}`}><div className="preview-nav"><span>わたしのページ</span><span>ABOUT　✳</span></div><article className="preview-card"><span className="preview-kicker">WELCOME TO MY PAGE</span><h3>{heading || 'ここに見出しが入ります'}</h3><p>{description || 'ここに紹介する文章が入ります。'}</p><button onClick={() => { setClicked(true); setSubmitted(false); setMessage('ボタンが動きました！') }}>{button || 'ボタン'}</button><small aria-live="polite">{message || 'ボタンを押すと、ここにメッセージが出ます。'}</small></article></div>{exam && submitted && <div className={`criteria ${passed ? 'passed' : ''}`}><h3>{passed ? '課題クリア！' : 'チェック結果'}</h3><ul>{['見出しが入力されている','紹介文が12文字以上','ボタンの言葉が入力されている','ページの雰囲気を選んでいる','プレビューのボタンを押した'].map((label, i) => <li key={label}><span>{checks[i] ? '✓' : '○'}</span>{label}</li>)}</ul>{passed && <p className="graduate-message">{message}</p>}</div>}</section></div>{!exam && <div className="lesson-next"><div><strong>できたら、実技課題に挑戦。</strong><p>自分の紹介ページを完成させてみよう。</p></div><a className="button button-dark" href="/genre/site/beginner/exam">初級試験へ <span>→</span></a></div>}</>
}

function LessonPage({ level, exam = false }) {
	if (level === 'beginner') return <Shell><div className="content-wrap"><a className="back-link" href="/genre/site">← Web制作コース</a><PageIntro eyebrow={exam ? 'BEGINNER · PRACTICAL CHECK' : 'BEGINNER · LESSON 01'} title={exam ? 'はじめてのページを完成させよう。' : 'ページの骨組みをつくろう。'} description={exam ? '学んだことを使って、自分の紹介ページを作ります。' : 'ページの見出しや文章、ボタンを考えながら、Webサイトの基本を体験します。'}/><Workshop exam={exam}/></div></Shell>
	if (level === 'intermediate') return <Shell><div className="content-wrap"><a className="back-link" href="/genre/site">← Web制作コース</a><PageIntro eyebrow={exam ? 'INTERMEDIATE · CHECK' : 'INTERMEDIATE · LESSON 01'} title={exam ? 'コードの部品を組み立てよう。' : 'クリックで文章を変えてみよう。'} description={exam ? 'イベントの流れを考えて、正しい順番に並べます。' : 'ボタンを押したときに文章が変わる処理を作ってみましょう。'}/><div className="concept-strip"><span>学ぶこと</span><p><code>querySelector</code>で要素を選び、<code>addEventListener</code>でクリックに反応させます。</p></div><Puzzle tokens={middleTokens} answer={['button','message','listen','update','close']} exam={exam} title={exam ? 'ヒントなしで挑戦' : '練習パズル'} onPass={exam ? () => { markComplete('intermediate'); go('/genre/site/advanced/html-css-js') } : () => go('/genre/site/intermediate/html-css-js/exam')}/></div></Shell>
	return <Advanced exam={exam}/>
}

function Advanced({ exam = false }) {
	const [html, setHtml] = useState(exam ? '' : '<main>\n  <h1>こんにちは！</h1>\n  <p>自分のページを作っています。</p>\n  <button>見てみる</button>\n</main>')
	const [css, setCss] = useState('body { font-family: sans-serif; padding: 2rem; }\nbutton { padding: .7rem 1rem; }')
	const [submitted, setSubmitted] = useState(false)
	const safeMarkup = html.replace(/<script[\s\S]*?<\/script\s*>/gi, '').replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
	const safeStyles = css.replace(/<\/style/gi, '<\\/style')
	const safeHtml = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; font-src data:"><style>${safeStyles}</style></head><body>${safeMarkup}</body></html>`
	const checks = [/<h1\b[^>]*>[^<]{2,}/i.test(html), /<p\b[^>]*>[^<]{12,}/i.test(html), /<button\b[^>]*>[^<]{2,}/i.test(html)]
	function submit() { setSubmitted(true); if (checks.every(Boolean)) markComplete('advanced') }
	return <Shell><div className="content-wrap"><a className="back-link" href="/genre/site">← Web制作コース</a><PageIntro eyebrow={exam ? 'GRADUATION PROJECT' : 'ADVANCED · WORKSHOP'} title={exam ? '学んだことを作品にしよう。' : 'コードでページをつくろう。'} description={exam ? '見出し・紹介文・ボタンを含むページを作ります。コードの実行スクリプトは無効にしたプレビューで確認できます。' : '雛形を編集して、HTMLの構造やCSSの見た目を変えてみましょう。'}/><div className="editor-layout"><section className="panel editor-panel"><div className="panel-heading"><span className="panel-icon">&lt;/&gt;</span><div><Eyebrow>HTML EDITOR</Eyebrow><h2>ページの構造</h2></div></div><label className="editor-label">HTML<textarea spellCheck="false" value={html} onChange={(event) => { setHtml(event.target.value); setSubmitted(false) }} placeholder={'<main>\n  <h1>見出し</h1>\n  <p>紹介文</p>\n  <button>ボタン</button>\n</main>'}/></label><label className="editor-label">CSS<textarea spellCheck="false" value={css} onChange={(event) => setCss(event.target.value)}/></label><p className="editor-note">プレビューではスクリプトを実行しません。HTMLとCSSの表示を確認できます。</p>{exam && <button className="button button-dark" onClick={submit}>作品を提出する <span>→</span></button>}</section><section className="editor-preview"><div className="preview-label"><Eyebrow>PREVIEW</Eyebrow><span>安全な表示モード</span></div><iframe title="作品プレビュー" sandbox="" srcDoc={safeHtml}/></section></div>{exam && submitted && <div className={`criteria ${checks.every(Boolean) ? 'passed' : ''}`}><h3>{checks.every(Boolean) ? '作品が完成しました！' : '要件を確認しましょう。'}</h3><ul>{['見出し（h1）がある','紹介文（p）が12文字以上ある','ボタンがある'].map((item, i) => <li key={item}><span>{checks[i] ? '✓' : '○'}</span>{item}</li>)}</ul>{checks.every(Boolean) && <p className="graduate-message">おめでとうございます。入門コースを修了しました。これからは実際の制作にも挑戦してみましょう。</p>}</div>}</div></Shell>
}

function About() { return <Shell><div className="content-wrap"><PageIntro eyebrow="ABOUT" title={<>「つくる」を通して、<br/>学ぶ楽しさを。</>} description="まなびのコードは、プログラミングが初めての人のための学習サイトです。"/><div className="about-grid"><article className="panel"><span className="about-num">01</span><h2>まず、さわってみる。</h2><p>むずかしい用語を覚える前に、部品を動かして仕組みを体験します。</p></article><article className="panel"><span className="about-num">02</span><h2>自分のペースで進む。</h2><p>初級から中級、上級へ。少しずつできることを増やしていきます。</p></article><article className="panel"><span className="about-num">03</span><h2>アイデアを形にする。</h2><p>最後は自分の考えたページを作り、学んだことをひとつにつなげます。</p></article></div><a className="button button-dark" href="/genre">コースを見てみる <span>→</span></a></div></Shell> }

function Contact() { const [confirmed, setConfirmed] = useState(false); return <Shell><div className="content-wrap"><PageIntro eyebrow="CONTACT" title="お問い合わせ" description="サイトについての質問や感想をお送りください。"/><section className="panel contact-panel"><div className="notice"><span>✳</span><p>この試作版ではメッセージの送信・保存は行いません。入力内容の確認画面としてお使いください。</p></div><form onSubmit={(event) => { event.preventDefault(); setConfirmed(true) }}><label>お名前<input required maxLength={60} placeholder="お名前"/></label><label>メールアドレス<input required type="email" placeholder="name@example.com"/></label><label>お問い合わせ内容<textarea required rows={6} maxLength={1000} placeholder="お問い合わせ内容をご記入ください"/></label><button className="button button-dark" type="submit">入力内容を確認する <span>→</span></button>{confirmed && <p className="form-feedback" role="status">入力を確認しました。この試作版からは送信されません。</p>}</form></section></div></Shell> }

function NotFound() { return <Shell><div className="content-wrap"><PageIntro eyebrow="404 · PAGE NOT FOUND" title="ページが見つかりません。" description="URLをご確認いただくか、ホームからもう一度お進みください。"/><a className="button button-dark" href="/">ホームへ戻る <span>→</span></a></div></Shell> }

function App() {
	if (path === '/') return <Home/>
	if (path === '/about') return <About/>
	if (path === '/contact') return <Contact/>
	if (path === '/genre') return <CourseSelect/>
	if (path === '/genre/site' || path === '/genre/game' || path === '/genre/robot') return <CourseHome genre={path.split('/')[2]}/>
	if (path === '/genre/site/beginner') return <LessonPage level="beginner"/>
	if (path === '/genre/site/beginner/lesson') return <LessonPage level="beginner"/>
	if (path === '/genre/site/beginner/exam') return <LessonPage level="beginner" exam/>
	if (path.startsWith('/genre/site/intermediate/html-css-js')) return <LessonPage level="intermediate" exam={path.endsWith('/exam')}/>
	if (path === '/genre/site/advanced/html-css-js') return <Advanced/>
	if (path === '/genre/site/advanced/html-css-js/exam') return <Advanced exam/>
	return <NotFound/>
}

export default App
