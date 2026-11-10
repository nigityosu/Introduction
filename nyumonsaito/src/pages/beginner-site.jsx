import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'
import BlockPuzzle from '../components/BlockPuzzle.jsx'
import { beginnerPuzzles } from '../data/puzzles.js'
import SiteWorkshop from '../components/SiteWorkshop.jsx'

const lessonInfo = {
  game: {
    title: 'ゲーム制作の基本',
    description: 'ゲームの目的やルールを決め、遊びの基本構造を知りましょう。',
    points: [['目的', 'プレイヤーが何を目指すゲームか決めます。'], ['ルール', '成功や失敗の条件、操作方法を決めます。'], ['くり返し', '入力を受け取り、ゲームの状態を更新して画面に反映します。']],
  },
  robot: {
    title: 'ロボットプログラムの基本',
    description: '命令とセンサーを組み合わせ、ロボットの動き方を考えましょう。',
    points: [['命令', '前進や停止など、ロボットにしてほしい動作を伝えます。'], ['センサー', '周囲の距離や明るさなどを調べます。'], ['条件', 'センサーの値に応じて、実行する命令を切り替えます。']],
  },
}

function BeginnerSitePage({ genre = 'site', examMode = false }) {
  if (genre === 'site') {
    return (
      <PageLayout
        eyebrow={examMode ? 'BEGINNER EXAM · PAGE MAKING' : 'BEGINNER · PAGE MAKING'}
        title={examMode ? '初級の実技課題' : 'サイトづくり · 初級'}
        description={examMode ? '文字やページの雰囲気を決めて、自分の紹介ページを完成させましょう。' : '文字や色を選びながら、実際のページを作ってみましょう。'}
      >
        <SiteWorkshop examMode={examMode} />
      </PageLayout>
    )
  }

  const lesson = lessonInfo[genre] ?? lessonInfo.game
  const puzzle = beginnerPuzzles[genre] ?? beginnerPuzzles.game
  return (
    <PageLayout eyebrow={`${genre.toUpperCase()} · LESSON 01`} title={lesson.title} description={lesson.description}>
      <section className="content-panel lesson-panel">
        <span className="status-label">今日のポイント</span>
        <h2>{lesson.points.map(([name]) => name).join('・')}</h2>
        <ol className="step-list">
          {lesson.points.map(([name, description]) => <li key={name}><strong>{name}</strong><span>{description}</span></li>)}
        </ol>
        <p>部品を並べて、学んだ内容を使ったプログラムを組み立てましょう。</p>
      </section>
      <BlockPuzzle {...puzzle} nextHref={`/genre/${genre}/beginner/exam`} />
      <Link className="exam-link" to={`/genre/${genre}/beginner`}>コースに戻る →</Link>
    </PageLayout>
  )
}
export default BeginnerSitePage
