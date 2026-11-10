// 各ジャンルの初級学習ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'


const genreNames = {
  site: 'サイト作成',
  game: 'ゲーム制作',
  robot: 'ロボットソフト',
}

function BeginnerPage({ genre }) {
  const name = genreNames[genre]
  return (
    <PageLayout
      eyebrow="BEGINNER"
      title={genre === 'site' ? 'サイトづくり · 初級' : `${name}・初級`}
      description={genre === 'site' ? '専門用語を覚えなくても、文字や色を選んでページを作れます。' : '部品を選び、順番を考えながら基本の流れを完成させましょう。'}
    >
      <section className="content-panel lesson-panel">
        <span className="status-label">Lesson 01</span>
        <h2>{genre === 'site' ? '自分の紹介ページを作る' : '基本の流れを組み立てる'}</h2>
        <p>{genre === 'site' ? '見出しや文章を書き、好きな雰囲気を選ぶだけでページが変わります。' : '画面に表示するものと、その動きを部品で組み合わせます。'}</p>
        <Link className="primary-button" to={`/genre/${genre}/beginner/lesson`}>
          {genre === 'site' ? 'ページを作ってみる' : '練習をはじめる'}
        </Link>
      </section>
      <Link className="exam-link" to={`/genre/${genre}/beginner/exam`}>
        初級試験へ進む →
      </Link>
    </PageLayout>
  )
}

export default BeginnerPage
