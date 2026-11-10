// 各ジャンルの初級試験ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'
import BlockPuzzle from '../components/BlockPuzzle.jsx'
import { beginnerExamPuzzles } from '../data/puzzles.js'

const genreNames = { site: 'サイト作成', game: 'ゲーム制作', robot: 'ロボットソフト' }

function BeginnerExamPage({ genre }) {
  return (
    <PageLayout
      eyebrow="BEGINNER EXAM"
      title={`${genreNames[genre]}・初級試験`}
      description="部品を正しい順に組み立てると合格です。"
    >
      <BlockPuzzle
        {...(beginnerExamPuzzles[genre] ?? beginnerExamPuzzles.site)}
        nextHref={genre === 'site' ? '/genre/site/intermediate/html-css-js' : '/genre'}
      />
      <Link className="text-link" to={`/genre/${genre}/beginner`}>
        初級ページに戻る
      </Link>
    </PageLayout>
  )
}

export default BeginnerExamPage
