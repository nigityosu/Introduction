import { useState } from 'react'
import { Link } from 'react-router-dom'

const starterPage = {
	heading: '小さなお店の紹介',
	description: '焼きたてのお菓子と、ゆっくりできる時間をお届けします。',
	button: 'お店を見てみる',
}

const themes = [
	{ id: 'forest', name: '森', color: '#dfead8' },
	{ id: 'ocean', name: '海', color: '#dcebf2' },
	{ id: 'sunset', name: '夕焼け', color: '#f5e1d3' },
]

function SiteWorkshop({ examMode = false }) {
	const [page, setPage] = useState(examMode ? { heading: '', description: '', button: '' } : starterPage)
	const [theme, setTheme] = useState(examMode ? null : 'forest')
	const [previewMessage, setPreviewMessage] = useState('')
	const [checks, setChecks] = useState(null)
	const [buttonClicked, setButtonClicked] = useState(false)
	const passed = checks?.every((check) => check.passed) ?? false

	function updateField(field, value) {
		setPage((current) => ({ ...current, [field]: value }))
		setChecks(null)
	}

	function submitPage() {
		setChecks([
			{ label: '目立つ見出しが入っている', passed: page.heading.trim().length >= 2 },
			{ label: '紹介する文章が12文字以上ある', passed: page.description.trim().length >= 12 },
			{ label: 'ボタンの言葉が入っている', passed: page.button.trim().length >= 2 },
			{ label: 'ページの雰囲気を選んでいる', passed: Boolean(theme) },
			{ label: 'ページのボタンを押して動きを確かめた', passed: buttonClicked },
		])
	}

	function resetPage() {
		setPage(examMode ? { heading: '', description: '', button: '' } : starterPage)
		setTheme(examMode ? null : 'forest')
		setPreviewMessage('')
		setChecks(null)
		setButtonClicked(false)
	}

	return (
		<div className="site-workshop">
			{examMode ? (
				<section className="content-panel workshop-brief">
					<span className="status-label">初級の実技課題</span>
					<h2>好きなお店や場所を紹介しよう</h2>
					<p>大きく見せる言葉と紹介文を書き、ページの雰囲気を選んでください。最後に右のページのボタンを押して、動くことを確かめましょう。</p>
				</section>
			) : (
				<section className="content-panel workshop-brief">
					<span className="status-label">初級 · ページづくり</span>
					<h2>文字や色を変えて、自分のページにしよう</h2>
					<p>専門用語を覚える必要はありません。左の内容を変えると、右のページがすぐに変わります。</p>
				</section>
			)}
			<div className="workshop-grid">
				<section className="workshop-controls" aria-label="ページの内容を決める">
					<label>
						<span>いちばん大きく見せる言葉</span>
						<input maxLength={48} value={page.heading} onChange={(event) => updateField('heading', event.target.value)} placeholder="例: まちの小さな本屋" />
					</label>
					<label>
						<span>ページを見た人に伝える文章</span>
						<textarea maxLength={180} rows={5} value={page.description} onChange={(event) => updateField('description', event.target.value)} placeholder="どんな場所か、何が好きかを書いてみましょう。" />
					</label>
					<label>
						<span>ボタンに書く言葉</span>
						<input maxLength={28} value={page.button} onChange={(event) => updateField('button', event.target.value)} placeholder="例: くわしく見る" />
					</label>
					<fieldset className="theme-picker">
						<legend>ページの雰囲気</legend>
						<div className="theme-options">
							{themes.map((option) => (
								<button className={`theme-option${theme === option.id ? ' is-selected' : ''}`} key={option.id} type="button" aria-pressed={theme === option.id} onClick={() => { setTheme(option.id); setChecks(null) }}>
									<span className="theme-swatch" style={{ backgroundColor: option.color }} />{option.name}
								</button>
							))}
						</div>
					</fieldset>
					{examMode ? (
						<div className="workshop-actions">
							<button className="primary-button" type="button" onClick={submitPage}>ページを提出する</button>
							<button className="secondary-button" type="button" onClick={resetPage}>最初からやり直す</button>
						</div>
					) : (
						<button className="secondary-button" type="button" onClick={resetPage}>見本に戻す</button>
					)}
				</section>
				<section className="workshop-preview-wrap" aria-label="できあがりの見本">
					<h2>いまのページ</h2>
					<div className={`workshop-preview ${theme ? `theme-${theme}` : 'theme-unset'}`}>
						<div className="preview-topline">わたしのページ</div>
						<main className="preview-card">
							<p className="preview-kicker">WELCOME</p>
							<h3>{page.heading || 'ここに見出しが入ります'}</h3>
							<p>{page.description || 'ここに紹介する文章が入ります。'}</p>
							<button type="button" onClick={() => { setPreviewMessage('ボタンが動きました！'); setButtonClicked(true) }}>{page.button || 'ボタン'}</button>
							<p className="preview-feedback" aria-live="polite">{previewMessage || 'ボタンを押すと、ここにメッセージが出ます。'}</p>
						</main>
					</div>
				</section>
			</div>
			{examMode && checks && (
				<section className={`project-result${passed ? ' is-correct' : ' is-incorrect'}`} aria-live="polite">
					<h2>{passed ? 'ページが完成しました！' : 'あと少し。ページを見直してみましょう。'}</h2>
					<ul>{checks.map((check) => <li key={check.label}>{check.passed ? '✓' : '○'} {check.label}</li>)}</ul>
					{passed && <Link className="primary-button" to="/genre/site/intermediate/html-css-js">中級へ進む →</Link>}
				</section>
			)}
			{!examMode && <Link className="exam-link" to="/genre/site/beginner/exam">初級の実技課題へ進む →</Link>}
		</div>
	)
}

export default SiteWorkshop
