// 各ジャンルのトップページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

const genreData = {
  site: { name: 'サイトづくり', description: '文字や色を選びながら、実際に紹介ページを作ります。', beginner: '/genre/site/beginner' },
  game: { name: 'ゲーム制作', description: 'ゲームの要素や動きを組み立てる考え方を学びます。', beginner: '/genre/game/beginner' },
  robot: { name: 'ロボットソフト', description: 'ロボットを動かす命令とプログラムの流れを学びます。', beginner: '/genre/robot/beginner' },
}

function GenreTopPage({ genre }) {
  const data = genreData[genre]
  return (
    <PageLayout
      eyebrow="LEARNING COURSE"
      title={data.name}
      description={data.description}
    >
      <div className="level-grid">
        <Link className="level-card" to={data.beginner}>
          <strong>初級</strong>
          <span>{genre === 'site' ? '文字や色を変えてページを作る' : '部品で基本の流れをつくる'}</span>
        </Link>
        {genre === 'site' ? (
          <>
            <Link className="level-card" to="/genre/site/intermediate/html-css-js">
              <strong>中級</strong>
              <span>コードの部品を組み立てる</span>
            </Link>
            <Link className="level-card" to="/genre/site/advanced/html-css-js">
              <strong>上級</strong>
              <span>コードを書いてプレビューする</span>
            </Link>
          </>
        ) : (
          <>
            <div className="level-card is-disabled" aria-label="中級は準備中">
              <strong>中級</strong>
              <span>準備中</span>
            </div>
            <div className="level-card is-disabled" aria-label="上級は準備中">
              <strong>上級</strong>
              <span>準備中</span>
            </div>
          </>
        )}
      </div>
    </PageLayout>
  )
}

export default GenreTopPage
