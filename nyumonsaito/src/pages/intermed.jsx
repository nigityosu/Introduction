// HTML・CSS・JavaScriptの中級学習ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'
import BlockPuzzle from '../components/BlockPuzzle.jsx'
import { beginnerPuzzles, intermediatePuzzle } from '../data/puzzles.js'

function IntermediatePage() {
  return (
    <PageLayout
      eyebrow="INTERMEDIATE"
      title="HTML・CSS・JavaScript・中級"
      description="言語の要素を使ったパズルで、Webページに実際の動きを加えます。"
    >
      <section className="content-panel lesson-panel">
        <span className="status-label">Lesson 01</span>
        <h2>イベントと動きを組み合わせる</h2>
        <p>コードの部品を正しい順に並べ、ボタンのクリックに反応する処理を作りましょう。</p>
      </section>
      <BlockPuzzle {...beginnerPuzzles.site} title="HTML · PARTS" />
      <BlockPuzzle {...intermediatePuzzle} nextHref="/genre/site/intermediate/html-css-js/exam" />
      <Link
        className="exam-link"
        to="/genre/site/intermediate/html-css-js/exam"
      >
        中級試験へ進む →
      </Link>
    </PageLayout>
  )
}

export default IntermediatePage
