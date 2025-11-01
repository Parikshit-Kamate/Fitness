import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [email, setEmail] = useState('')

    const handleJoinNow = (e) => {
        e.preventDefault()

        const recipient = ' To : parikshitkamate022@gmail.com'
        const subject = 'Subject : Join Fitness Program'

        // No body param — opens a blank compose window
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}`
        window.open(mailtoLink, '_blank')
    }

    return (
        <div className="contact-section d-flex flex-column justify-content-center align-items-center text-center py-5">
            <h2 className="contact-heading">
                IF YOU WANT TO <span className="bold">LEVEL UP </span>
                <span className="bold">YOUR BODY</span> <br /> CONTACT WITH US ?
            </h2>

            <form className="contact-form d-flex" onSubmit={handleJoinNow}>
                <input
                    type="email"
                    className="email-input"
                    placeholder="enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="join-btn" type="submit">
                    Join Now
                </button>
            </form>
        </div>
    )
}

export default Contact
