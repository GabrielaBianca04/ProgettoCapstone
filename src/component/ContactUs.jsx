import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const ContactUs = () => {
  return (
    <div style={{padding:'5%',backgroundColor:'#FFE0B5',color:'red'}}>
      <h2>Contact Us</h2>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-danger mt-2">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
