import { Link } from 'react-router-dom'

const genreNames = { site: 'Webサイト制作', game: 'ゲーム制作', robot: 'ロボット・ソフト' }

function PageLayout({ eyebrow, title, description, children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="ホームへ">まなびのプログラミング</Link>
        <nav aria-label="メインメニュー"><Link to="/">ホーム</Link><Link to="/genre">学習コース</Link><Link to="/about">このサイトについて</Link><Link to="/contact">お問い合わせ</Link></nav>
      </header>
      <main className="page-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{description && <p className="page-description">{description}</p>}{children}</main>
      <footer className="site-footer"><span>まなびのプログラミング</span><span>学ぶ・試す・つくる</span></footer>
    </div>
  )
}

export function GenreLinks() {
  return <div className="genre-grid">{Object.entries(genreNames).map(([genre, name], index) => <Link className="genre-card" key={genre} to={`/genre/${genre}`}><span className="card-number">0{index + 1}</span><span>{name}</span><small>コースを見る <b aria-hidden="true">↗</b></small></Link>)}</div>
}

export default PageLayout
