// 存在しないURLの404ページ
import { Link } from 'react-router-dom'
import PageLayout from './layout.jsx'

function NotFoundPage() {
  return (
    <PageLayout
      eyebrow="404"
      title="ページが見つかりません"
      description="指定されたページは存在しないか、移動した可能性があります."
    >
      <Link className="primary-button" to="/">
        ホームへ戻る
      </Link>
    </PageLayout>
  )
}

export default NotFoundPage
