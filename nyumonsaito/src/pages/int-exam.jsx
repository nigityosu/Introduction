// HTML・CSS・JavaScriptの中級試験ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'
import BlockPuzzle from '../components/BlockPuzzle.jsx'
import siteBeginnerData from '../jason/site-beginner.json'
import siteIntermediateData from '../jason/site-intermediate.json'

function IntermediateExamPage() {
  return (
    <PageLayout
      eyebrow="INTERMEDIATE EXAM"
      title="HTML・CSS・JavaScript・中級試験"
      description="コードの部品を正しく組み立てて、イベント処理を完成させる試験です。"
    >
      <BlockPuzzle {...siteBeginnerData.lesson} title="HTML · STRUCTURE EXAM" />
      <BlockPuzzle {...siteIntermediateData.exam} title="INTERMEDIATE EXAM" nextHref="/genre/site/advanced/html-css-js" />
      <Link className="text-link" to="/genre/site/intermediate/html-css-js">
        中級ページに戻る
      </Link>
    </PageLayout>
  )
}

export default IntermediateExamPage
