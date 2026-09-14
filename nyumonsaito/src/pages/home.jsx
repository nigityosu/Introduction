// ホームページ
import { Link } from 'react-router-dom'
import PageLayout, { GenreLinks } from './layout.jsx'

function HomePage() {
  return (
    <PageLayout
      eyebrow="WELCOME"
      title="つくりながら学ぶ、プログラミング入門"
      description="パズルからコードへ。自分のペースで、プログラムの組み立て方を身につけよう。"
    >
      <section className="hero-actions">
        <Link className="primary-button" to="/genre/site">学習をはじめる</Link>
        <Link className="text-link" to="/about">このサイトについて</Link>
      </section>
      <section className="section-block">
        <h2>学習する分野を選ぶ</h2>
        <GenreLinks />
      </section>
    </PageLayout>
  )
}

export default HomePage
