import "./contact.css";
import "bootstrap";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! <br></br>Please fill out the form below
        and we will get back to you as soon as possible.
      </p>
      <div className="contactForm">
        <div class="mb-3">
          <label for="name" class="form-label">
            {" "}
            Name{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control shadow-none"
            placeholder="Name"
            minlength="2"
          ></input>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            {" "}
            Email{" "}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            class="form-control shadow-none"
            placeholder="add email here"
          ></input>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">
            {" "}
            Message{" "}
          </label>
          <textarea
            type="textarea"
            rows={3}
            id="message"
            name="message"
            class="form-control shadow-none"
            placeholder="add message here"
          ></textarea>
        </div>

        <div className="formBtn">
          <button className="btn btn-primary m1" id="form-btn">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
