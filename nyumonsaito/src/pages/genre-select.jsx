// 学習分野の選択画面
import PageLayout, { GenreLinks } from './layout.jsx'

function GenreSelectPage() {
  return (
    <PageLayout
      eyebrow="COURSE SELECT"
      title="学習する分野を選ぶ"
      description="興味のある分野を選んで、学習をはじめましょう。"
    >
      <section className="section-block">
        <GenreLinks />
      </section>
    </PageLayout>
  )
}

export default GenreSelectPage
