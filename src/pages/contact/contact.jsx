import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <h1> Connect With Us </h1>
      <div className="contact-us">
        <div className="contact--left">
           <h3>Send your request</h3>
           <form>
              <div className="input--row">
                <div className="input--group">
                  <label>Name</label>
                  <input type="text" placeholder="Jon Doe" />
                </div>

                <div className="input--group">
                  <label>Phone</label>
                  <input type="text" placeholder="+234 813 456 7845" />
                </div>
              </div>
              <div className="input--row">
                <div className="input--group">
                  <label>Email</label>
                  <input type="email" placeholder="johnDoe27@gmail.com" />
                </div>

                <div className="input--group">
                  <label>Subject</label>
                  <input type="text" placeholder="Enter subject" />
                </div>
              </div>

              <label>Message</label>
              <textarea rows="5" placeholder='Your message'></textarea>
              <button>Send</button>
           </form>
        </div>

        <div className="contact--right">
           <h3>Reach Us</h3>
           <table>
              <tr>
                  <td>Email</td>
                  <td>contact-us@gmail.com</td>
              </tr>
              <tr>
                  <td>Phone</td>
                  <td>+234 873 459 7856</td>   
              </tr>
              <tr>
                  <td>Address </td>
                  <td>64, Allen street Ikoyi Radio,<br/>
                  Area 1, Gatsue Danramba road 560001<br/>
                  Lagos, Nigeria
                  </td>   
              </tr>
           </table>
        </div> 

        

      </div>
    </div>
  )
}

export default Contact
