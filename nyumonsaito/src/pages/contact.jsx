// お問い合わせページ
import { useState } from 'react'
import PageLayout from './layout.jsx'

function ContactPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  function prepareEmail(event) {
    event.preventDefault()
    const subject = encodeURIComponent('まなびのプログラミングへのお問い合わせ')
    const body = encodeURIComponent(`返信先: ${email}\n\n${message}`)
    setStatus('メールアプリに下書きを作成しました。宛先を入力して送信してください。')
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  return (
    <PageLayout
      eyebrow="CONTACT"
      title="お問い合わせ"
      description="入力内容をメールアプリの下書きにして送信できます。"
    >
      <form className="content-panel contact-form" onSubmit={prepareEmail}>
        <label>
          メールアドレス
          <input type="email" autoComplete="email" required placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          お問い合わせ内容
          <textarea required rows="6" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="お問い合わせ内容を入力してください" />
        </label>
        <p className="contact-note">このサイトには送信サーバーがないため、お使いのメールアプリを開きます。宛先を入力して送信してください。</p>
        <button className="primary-button" type="submit">
          メールアプリで下書きを作成
        </button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </PageLayout>
  )
}

export default ContactPage
