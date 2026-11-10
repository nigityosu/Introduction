import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

const starterHtml = `<main class="card">
  <h1>こんにちは、Web制作</h1>
  <p id="message">ボタンを押してみましょう。</p>
  <button id="greet">あいさつする</button>
</main>`

const starterCss = `body {
  font-family: sans-serif;
  background: #f3f7f1;
  padding: 2rem;
}
.card {
  max-width: 32rem;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 8px 28px #20342e20;
}
button { padding: .7rem 1rem; cursor: pointer; }`

const starterJs = `document.querySelector('#greet').addEventListener('click', () => {
  document.querySelector('#message').textContent = 'こんにちは！';
});`

const examHtml = `<main class="card">
  <!-- ここに見出し・説明文・ボタンを作ります -->
</main>`

function makePreview(html, css, js) {
	const safeScript = js.replace(/<\/script/gi, '<\\/script')
	return `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css}</style></head><body>${html}<script>${safeScript}</script></body></html>`
}

function AdvancedPage({ examMode = false }) {
	const initialHtml = examMode ? examHtml : starterHtml
	const initialCss = examMode ? '' : starterCss
	const initialJs = examMode ? '' : starterJs
	const [html, setHtml] = useState(initialHtml)
	const [css, setCss] = useState(initialCss)
	const [js, setJs] = useState(initialJs)
	const [preview, setPreview] = useState(() => makePreview(initialHtml, initialCss, initialJs))
	const [checks, setChecks] = useState(null)

	function updatePreview(event) {
		event.preventDefault()
		setPreview(makePreview(html, css, js))
		setChecks(null)
	}

	function checkProject() {
		setPreview(makePreview(html, css, js))
		setChecks([
			{ label: 'HTMLに見出し・説明文・ボタンがある', passed: /<h1\b/i.test(html) && /<p\b/i.test(html) && /<button\b/i.test(html) },
			{ label: 'CSSで色または背景を指定している', passed: /(color|background)\s*:/i.test(css) },
			{ label: 'クリック時に説明文を書き換える', passed: /addEventListener\s*\(\s*['"]click['"]/.test(js) && /textContent\s*=/.test(js) },
		])
	}
	const projectPassed = checks?.every((check) => check.passed) ?? false
	function resetEditor() {
		setHtml(initialHtml)
		setCss(initialCss)
		setJs(initialJs)
		setPreview(makePreview(initialHtml, initialCss, initialJs))
		setChecks(null)
	}

	return (
		<PageLayout
			eyebrow={examMode ? 'GRADUATION EXAM' : 'ADVANCED'}
			title={examMode ? '卒業試験・Webページ制作' : 'HTML・CSS・JavaScript・上級'}
			description={examMode ? '仕様に合わせてページを作り、条件を満たしたら課題を提出してください。' : 'コードを編集して、ブラウザー内のプレビューで動作を確認できます。'}
		>
			<section className="content-panel lesson-panel">
				<span className="status-label">{examMode ? '課題の仕様' : 'PROJECT'}</span>
				<h2>{examMode ? '操作に反応する紹介ページを作る' : 'オリジナルページをつくる'}</h2>
				<p>{examMode ? '見出し・説明文・ボタンを用意し、CSSで色を設定してください。ボタンを押すと説明文が変わるようJavaScriptで動きをつけます。' : 'HTMLで内容、CSSで見た目、JavaScriptで動きを編集し、「プレビューを更新」を押してください。'}</p>
			</section>
			<form className="editor-grid" onSubmit={updatePreview}>
				<label className="editor-field">
					<span>HTML · ページの内容</span>
					<textarea aria-label="HTMLコード" spellCheck="false" rows="12" value={html} onChange={(event) => { setHtml(event.target.value); setChecks(null) }} />
				</label>
				<label className="editor-field">
					<span>CSS · 見た目</span>
					<textarea aria-label="CSSコード" spellCheck="false" rows="12" value={css} onChange={(event) => { setCss(event.target.value); setChecks(null) }} />
				</label>
				<label className="editor-field">
					<span>JavaScript · 動き</span>
					<textarea aria-label="JavaScriptコード" spellCheck="false" rows="8" value={js} onChange={(event) => { setJs(event.target.value); setChecks(null) }} />
				</label>
				<div className="editor-actions">
					<button className="primary-button" type="submit">プレビューを更新</button>
					{examMode && <button className="secondary-button" type="button" onClick={checkProject}>課題を提出して確認</button>}
					<button className="secondary-button" type="button" onClick={resetEditor}>{examMode ? '課題を最初からやり直す' : '見本に戻す'}</button>
				</div>
			</form>
			{examMode && checks && (
				<section className={`project-result${projectPassed ? ' is-correct' : ' is-incorrect'}`} aria-live="polite">
					<h2>{projectPassed ? '課題クリア！' : '仕様をもう一度確認しましょう'}</h2>
					<ul>{checks.map((check) => <li key={check.label}>{check.passed ? '✓' : '○'} {check.label}</li>)}</ul>
					{projectPassed && <p>卒業課題を完成しました。おめでとうございます！</p>}
				</section>
			)}
			<section className="preview-panel" aria-label="コードのプレビュー">
				<h2>プレビュー</h2>
				<iframe title="作成したページのプレビュー" sandbox="allow-scripts" srcDoc={preview} />
			</section>
			{!examMode && <Link className="exam-link" to="/genre/site/advanced/html-css-js/exam">卒業試験へ進む →</Link>}
		</PageLayout>
	)
}

export default AdvancedPage
