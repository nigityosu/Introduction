// 各ジャンルの初級学習ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

const genreNames = { site: 'サイト作成', game: 'ゲーム制作', robot: 'ロボットソフト' }

function BeginnerPage({ genre }) {
  const name = genreNames[genre]
  return (
    <PageLayout eyebrow="BEGINNER" title={`${name}・初級`} description="部品を選び、順番を考えながら基本の構造を完成させましょう。">
      <section className="content-panel lesson-panel">
        <span className="status-label">Lesson 01</span>
        <h2>基本の構造を組み立てる</h2>
        <p>画面に表示するものと、その動きをパズルのように組み合わせます。</p>
        <button className="primary-button" type="button">練習をはじめる</button>
      </section>
      <Link className="exam-link" to={`/genre/${genre}/beginner/exam`}>初級試験へ進む →</Link>
    </PageLayout>
  )
}

export default BeginnerPage
