// HTML・CSS・JavaScriptの上級学習ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

function AdvancedPage() {
  return (
    <PageLayout eyebrow="ADVANCED" title="HTML・CSS・JavaScript・上級" description="雛形と辞書を使いながら、自分でコードを書いて作品をつくります。">
      <section className="content-panel lesson-panel"><span className="status-label">PROJECT</span><h2>オリジナルページをつくる</h2><p>用意された環境で、目的に合わせたWebページを設計します。</p><button className="primary-button" type="button">エディタを開く</button></section>
      <Link className="exam-link" to="/genre/site/advanced/html-css-js/exam">卒業試験へ進む →</Link>
    </PageLayout>
  )
}

export default AdvancedPage
