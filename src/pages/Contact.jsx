import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="form">
        <div>
          <label for="name" className="form-label">
            Your name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div>
          <label for="email" className="form-label">
            Your email
          </label>
          <input type="text" className="form-control" id="email" />
        </div>

        <div>
          <label for="message" className="form-label">
            Your message
          </label>
          <textarea className="form-control" rows={3} id="message"></textarea>
        </div>

        <div className="controls">
          <button className="btn btn-outline-dark" id="form-btn">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
