// HTML・CSS・JavaScriptの中級試験ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

function IntermediateExamPage() {
  return (
    <PageLayout
      eyebrow="INTERMEDIATE EXAM"
      title="HTML・CSS・JavaScript・中級試験"
      description="10個の課題のうち8個以上を完成させると合格です。"
    >
      <section className="content-panel exam-panel">
        <div>
          <span className="status-label">試験条件</span>
          <h2>10課題に挑戦</h2>
          <p>8課題以上の自動テスト通過で合格</p>
        </div>
        <button className="primary-button" type="button">
          試験を開始する
        </button>
      </section>
      <Link className="text-link" to="/genre/site/intermediate/html-css-js">
        中級ページに戻る
      </Link>
    </PageLayout>
  )
}

export default IntermediateExamPage
