import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const [nerror, setNError] = useState('');
    const [eerror, setEError] = useState('');
    const [perror, setPError] = useState('');
    const [serror, setSError] = useState('');
    const [merror, setMError] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNError('');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEError('');
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setPError('');
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
        setSError('');
    }

    const handleMessageChange = (e) => {
        const messageText = e.target.value;
        if (messageText.trim().split(/\s+/).length > 50) {
            setMError('Message should not exceed 50 words.');
        } else {
            setMessage(messageText);
            setMError('');
        }
    }

    const validateForm = () => {
        let isValid = true;

        if (!name.trim()) {
            setNError('Please enter your name.');
            isValid = false;
        }

        if (!email.trim()) {
            setEError('Please enter your email.');
            isValid = false;
        }

        if (!phone.trim()) {
            setPError('Please enter your phone number.');
            isValid = false;
        }

        if (!subject.trim()) {
            setSError('Please enter a subject.');
            isValid = false;
        }

        if (!message.trim()) {
            setMError('Please enter your message.');
            isValid = false;
        } else if (message.trim().split(/\s+/).length > 50) {
            setMError('Message should not exceed 50 words.');
            isValid = false;
        }

        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSent(true);
            setTimeout(() => {
                setName('');
                setEmail('');
                setPhone('');
                setSubject('');
                setMessage('');
                setIsSent(false);
            }, 6000);
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
                        {serror && <span className="error">{serror}</span>}
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
