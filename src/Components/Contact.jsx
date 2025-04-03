import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [email, setEmail] = useState('')

    const handleJoinNow = () => {
        const recipient = 'parikshitkamate022@gmail.com'
        const subject = 'Join Fitness Program'
        const body = `Hi, I am interested in joining your fitness program. My email is: ${email}`

        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoLink, '_blank')
    }

    return (
        <div className="contact-section d-flex flex-column justify-content-center align-items-center text-center py-5">
            <h2 className="contact-heading">
                IF YOU WANT TO <span className="bold">LEVEL UP </span>
                <span className="bold">YOUR BODY</span> <br /> CONTACT WITH US ?
            </h2>

            <div className="contact-form d-flex">
                <input
                    type="email"
                    className="email-input"
                    placeholder="enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="join-btn" onClick={handleJoinNow}>
                    Join Now
                </button>
            </div>
        </div>
    )
}

export default Contact
