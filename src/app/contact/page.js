import React from 'react'
import './contact.css';
const page = () => {
  return (
    <section className='sec'>
      <div className='contact'>
        <h5>Ask Me Question</h5>
        <h2 className='c-text'>Contact</h2>
        <form className='form'>
          <input name="fullname" type='text' required className='in' placeholder='Your Name' />
          <input name="email" type='email' className='inp' placeholder='Your Email' required />
          <input name="address" type='text' placeholder='Your Address' required />
          <input name="phonenumber" type='number' placeholder='Your Phone Number' required />
          <textarea name="message" autoComplete='off' cols='20' rows={10} placeholder='Your Message' />
        </form>
        <div className='c-m-btn'>
          <button type='submit' className='c-btn-btn'>Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default page
