// 各ジャンルの初級試験ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

const genreNames = { site: 'サイト作成', game: 'ゲーム制作', robot: 'ロボットソフト' }

function BeginnerExamPage({ genre }) {
  return (
    <PageLayout
      eyebrow="BEGINNER EXAM"
      title={`${genreNames[genre]}・初級試験`}
      description="これまでの学習を使って、基本の構造を一人で完成させます。"
    >
      <section className="content-panel exam-panel">
        <div>
          <span className="status-label">試験条件</span>
          <h2>基本課題を完成させる</h2>
          <p>正解率 80%以上で合格</p>
        </div>
        <button className="primary-button" type="button">
          試験を開始する
        </button>
      </section>
      <Link className="text-link" to={`/genre/${genre}/beginner`}>
        初級ページに戻る
      </Link>
    </PageLayout>
  )
}

export default BeginnerExamPage
