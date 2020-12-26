import React from 'react';
import Title from '../Title/Title';

function ContactUs() {
  return (
    <section className="contact container-fluid py-5">
      <Title title="Contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Jhon Doe"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="example@mail.com"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                placeholder="Your message here..."
                rows="8"
                autoComplete="off"
              />
            </div>
            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-yellow text-capitalize">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
