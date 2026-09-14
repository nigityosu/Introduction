// Web基礎コースの卒業試験ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

function GraduationExamPage() {
  return (
    <PageLayout eyebrow="GRADUATION EXAM" title="Web基礎・卒業試験" description="仕様書を読み、補助機能なしでWebページを完成させます。">
      <section className="content-panel exam-panel"><div><span className="status-label">最終課題</span><h2>20問のスピードテスト</h2><p>16問以上の正解でコース修了</p></div><button className="primary-button" type="button">卒業試験を開始する</button></section>
      <Link className="text-link" to="/genre/site/advanced/html-css-js">上級ページに戻る</Link>
    </PageLayout>
  )
}

export default GraduationExamPage
