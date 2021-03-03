import React, { useState } from "react"
import { connect } from "react-redux"

function Contact() {

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setForm({
      name: '',
      email: '',
      message: ''
    })
    alert('Thanks! We\'ll be in touch soon!')
  }

  const [form, setForm] = useState ({
    name: '',
    email: '',
    message: ''
  })


  return (
    <section className="hero is-fullheight">
      <div className="hero-body vertical-center">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">
            <div className="column is-two-thirds contact-center">
              <h1 className="title is-1">Contact Us</h1>
              <p className="is-size-4">If you'd like to give us feedback or lodge a complaint, please complete our contact form. We aim to respond to all queries within 5 working days.</p>
            </div>
            
              <form className="column is-one-third has-text-left" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input is-medium" name="name" type="text" value={form.name} onChange={handleChange} required />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input is-medium" name="email" type="text" value={form.email} onChange={handleChange}  required/>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea is-medium" name="message" value={form.message} onChange={handleChange} required></textarea>
                  </div>
                </div>

                <div className="control">
                  <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
                </div>

              </form>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default connect()(Contact)