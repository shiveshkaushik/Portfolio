import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const [nerror, setnerror] = useState('');
    const [eerror, seteerror] = useState('');
    const [perror, setperror] = useState('');
    const [serrorr, setserrorr] = useState('');
    const [merror, setMessageError] = useState('');
    const [isSent, setMessageSent] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        setnerror('');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        seteerror('');
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setperror('');
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
        setserrorr('');
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageError('');
    }

    const validateForm = () => {
        let isValid = true;

        if (!name.trim()) {
            setnerror('Please enter your name.');
            isValid = false;
        }

        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setMessageSent(true); 
            setTimeout(() => {
                setMessageSent(false);
            }, 3000);
        }
    }

    return (
        <section id="contact" className='contact'>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} action="#">
                <div className='input-box'>
                    <div className='input-field'>
                        <input type="text" id="name" value={name} onChange={handleNameChange} className='item' placeholder='Full Name' autoComplete='off' />
                        {nerror && <span className="error">{nerror}</span>}
                    </div>
                    <div className='input-field'>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} className='item' placeholder='Email Address' autoComplete='off' />
                        {eerror && <span className="error">{eerror}</span>}
                    </div>
                </div>

                <div className='input-box'>
                    <div className='input-field'>
                        <input type="text" id="phone" value={phone} onChange={handlePhoneChange} className='item' placeholder='Phone Number' autoComplete='off' />
                        {perror && <span className="error">{perror}</span>}
                    </div>
                    <div className='input-field'>
                        <input type="text" id="subject" value={subject} onChange={handleSubjectChange} className='item' placeholder='Subject' autoComplete='off' />
                        {serrorr && <span className="error">{serrorr}</span>}
                    </div>
                </div>
                <div className='textarea-field'>
                    <textarea id="message" value={message} onChange={handleMessageChange} className='item' placeholder='Your Message' rows="10" cols="30"></textarea>
                    {merror && <span className="error">{merror}</span>}
                </div>
                {isSent ? (
                    <div className="message-sent">Message Sent!</div>
                ) : (
                    <button type='submit' className='submit-button'>Submit</button>
                )}
            </form>
        </section>
    );
}

export default Contact;


