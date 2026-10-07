// サイトの説明ページ
import PageLayout from './layout.jsx'

function ExplanationPage() {
  return (
    <PageLayout
      eyebrow="ABOUT"
      title="このサイトについて"
      description="初心者が、考えて組み立てて、実際につくるまでを支える学習サイトです。"
    >
      <section className="content-panel">
        <h2>4つのステップ</h2>
        <ol className="step-list">
          <li>
            <strong>初級</strong>
            <span>パズルでプログラムの構造を組み立てます。</span>
          </li>
          <li>
            <strong>中級</strong>
            <span>HTML、CSS、JavaScriptなどの要素を使います。</span>
          </li>
          <li>
            <strong>上級</strong>
            <span>雛形をもとに、自分でコードを書きます。</span>
          </li>
          <li>
            <strong>卒業試験</strong>
            <span>仕様を読み、作品を完成させます。</span>
          </li>
        </ol>
      </section>
    </PageLayout>
  )
}

export default ExplanationPage
