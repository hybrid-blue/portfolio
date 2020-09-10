import React, {useContext} from 'react'

const Contact = (props) => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="section-content">
        <form>
          <div className="form-wrapper">
            <div className="form-column">
              <div className="form-item_block">
                <label>Name: </label><input placeholder="Name" required />
              </div>
              <div className="form-item_block">
                <label>Email: </label><input placeholder="Email" required />
              </div>
              <div className="form-item_block">
                <label>Number: </label><input placeholder="Phone/Mobile Number" required />
              </div>
              <div className="form-item_block">
                <label>Subject: </label>
                <select>
                  <option value="Work Qoute">Work Qoute</option>
                  <option value="Work Request">Work Request</option>
                  <option value="General">General</option>
                </select>
              </div>
            </div>
            <div className="form-column">
              <div className="form-item_block">
                <label>Message:</label>
                <textarea placeholder="Your message"></textarea>
              </div>
            </div>
          </div>
          <div className="form-wrapper">
            <button className="form-button">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;
