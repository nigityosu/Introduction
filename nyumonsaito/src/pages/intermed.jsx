// HTML・CSS・JavaScriptの中級学習ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

function IntermediatePage() {
  return (
    <PageLayout
      eyebrow="INTERMEDIATE"
      title="HTML・CSS・JavaScript・中級"
      description="言語の要素を使ったパズルで、Webページに実際の動きを加えます。"
    >
      <section className="content-panel lesson-panel">
        <span className="status-label">Lesson 01</span>
        <h2>イベントと動きを組み合わせる</h2>
        <p>部品の説明を読み、正しい関数や要素を組み合わせましょう。</p>
        <button className="primary-button" type="button">
          中級の練習をはじめる
        </button>
      </section>
      <Link
        className="exam-link"
        to="/genre/site/intermediate/html-css-js/exam"
      >
        中級試験へ進む →
      </Link>
    </PageLayout>
  )
}

export default IntermediatePage
