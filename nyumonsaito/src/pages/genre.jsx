// 各ジャンルのトップページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

const genreData = {
  site: { name: 'サイト作成', description: 'Webページを組み立てながら、HTML・CSS・JavaScriptを学びます。', beginner: '/genre/site/beginner' },
  game: { name: 'ゲーム制作', description: 'ゲームの要素や動きを組み立てる考え方を学びます。', beginner: '/genre/game/beginner' },
  robot: { name: 'ロボットソフト', description: 'ロボットを動かす命令とプログラムの流れを学びます。', beginner: '/genre/robot/beginner' },
}

function GenreTopPage({ genre }) {
  const data = genreData[genre]
  return (
    <PageLayout eyebrow="LEARNING COURSE" title={data.name} description={data.description}>
      <div className="level-grid">
        <Link className="level-card" to={data.beginner}><strong>初級</strong><span>パズルで基本構造をつくる</span></Link>
        <div className="level-card is-disabled"><strong>中級</strong><span>初級試験合格後に解放</span></div>
        <div className="level-card is-disabled"><strong>上級</strong><span>中級試験合格後に解放</span></div>
      </div>
    </PageLayout>
  )
}

export default GenreTopPage
