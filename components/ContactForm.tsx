'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const topics = ['General inquiry', 'Story tip', 'Correction', 'Advertising', 'Careers', 'Data and privacy']

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState(topics[0])
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section className="contact-form" aria-label="Message the newsroom">
      <h2>Message the newsroom</h2>
      {sent ? (
        <p className="form-success">Thanks{name.trim() ? `, ${name.trim().split(' ')[0]}` : ''} — your message is with the duty editor. We reply to every message, usually within two working days.</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); if (name.trim() && email.trim() && message.trim()) setSent(true) }}>
          <div className="form-row">
            <label>Name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" /></label>
          </div>
          <label>Topic<select value={topic} onChange={(e) => setTopic(e.target.value)}>{topics.map((t) => <option key={t}>{t}</option>)}</select></label>
          <label>Message<textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what's on your mind..." rows={6} /></label>
          <button type="submit" className="form-submit"><Send size={15} aria-hidden="true" />Send message</button>
        </form>
      )}
    </section>
  )
}
