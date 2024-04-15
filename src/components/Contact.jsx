import { useState } from 'react';

import '../utils/Contact.css'

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks for your message ${name}`);

    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                className="form-control"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="text-danger">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;