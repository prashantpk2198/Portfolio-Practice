export default function ContactPage() {
  return (
    <>
      <div id="contact-section">
        <div className="item" id="contact-details">
          <h4>Get in touch</h4>
          <h6 className="description">
            I'd love to hear from you! Whether you have a question about a
            project, want to discuss potential collaborations, or just want to
            say hello, feel free to reach out to me.
          </h6>
          <div className="contact-details">
            <h5>Chat to us</h5>
            <h6 className="description">I'm here to help you</h6>
            <h6>prashant.bk@iitgn.ac.in</h6>
          </div>
          <div className="contact-details">
            <h5>Office</h5>
            <h6 className="description">Come say hello at our office</h6>
            <h6>Bsquare Workspace</h6>
            <h6>Sindhu Bhavan Road,Ahmedabad</h6>
          </div>
          <div className="contact-details">
            <h5>Phone</h5>
            <h6 className="description">Mon-Fri from 8am to 5pm</h6>
            <h6>+91 8897033914</h6>
          </div>
        </div>

        <div className="item" id="contact-form">
          <h2 className="page-header">Let's Collab</h2>
          <p>Send us a Message!</p>
          <InputForm />
        </div>
      </div>
    </>
  );
}

function InputForm() {
  return (
    <form>
      <div className="control-row">
        <div className="control">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" placeholder="First name" />
        </div>
        <div className="control">
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" placeholder="Last name" />
        </div>
      </div>
      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@company.com"
        />
      </div>
      <div className="control">
        <label htmlFor="phone">Phone Number</label>
        <input type="number" name="phone" id="phone" />
      </div>
      <div className="control">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Leave us a message..."
        />
          </div>
          <button className="button">Send</button>
    </form>
  );
}
