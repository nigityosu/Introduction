// 共通レイアウトと学習分野リンク
import { Link } from 'react-router-dom'

const genreNames = {
  site: 'サイト作成',
  game: 'ゲーム制作',
  robot: 'ロボットソフト',
}

function PageLayout({ eyebrow, title, description, children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/">はじめてのプログラミング</Link>
        <nav aria-label="メインメニュー">
          <Link to="/">ホーム</Link>
          <Link to="/about">説明</Link>
          <Link to="/contact">お問い合わせ</Link>
        </nav>
      </header>
      <main className="page-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
        {children}
      </main>
      <footer className="site-footer">学ぶ、試す、つくる。</footer>
    </div>
  )
}

export function GenreLinks() {
  return (
    <div className="genre-grid">
      {Object.entries(genreNames).map(([genre, name]) => (
        <Link className="genre-card" key={genre} to={`/genre/${genre}`}>
          <span>{name}</span>
          <small>学習コースを見る</small>
        </Link>
      ))}
    </div>
  )
}

export default PageLayout
