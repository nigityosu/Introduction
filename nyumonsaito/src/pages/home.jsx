import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

function HomePage() {
  return <PageLayout eyebrow="WELCOME · はじめての方へ" title={<>つくりながら、<br />プログラミングを学ぼう。</>} description="パズルからコードへ。自分のペースで、考え方を身につけて作品をつくる入門サイトです。">
    <section className="hero-actions"><Link className="primary-button" to="/genre">学習をはじめる <span aria-hidden="true">→</span></Link><Link className="text-link" to="/about">このサイトについて</Link></section>
    <section className="home-note"><span className="note-mark" aria-hidden="true">✳</span><div><strong>はじめの一歩を、気軽に。</strong><p>興味のあるコースを選んで、基礎から少しずつ進めましょう。</p></div></section>
  </PageLayout>
}
export default HomePage
