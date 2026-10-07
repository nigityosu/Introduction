// お問い合わせページ
import PageLayout from './layout.jsx'

function ContactPage() {
  return (
    <PageLayout
      eyebrow="CONTACT"
      title="お問い合わせ"
      description="質問や不具合の報告はこちらから送信できます。"
    >
      <form className="content-panel contact-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          メールアドレス
          <input type="email" required placeholder="you@example.com" />
        </label>
        <label>
          お問い合わせ内容
          <textarea required rows="6" placeholder="お問い合わせ内容を入力してください" />
        </label>
        <button className="primary-button" type="submit">
          送信する
        </button>
      </form>
    </PageLayout>
  )
}

export default ContactPage
