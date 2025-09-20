import React from 'react'

const Contact = () => {
  
  // React 19's features are used here..(formData)
  const handleFormSubmit = (formData) => { 
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    alert("Thank you for using Atlasio.");
  }; // 1:25:00

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name:"
            name="username" // Mandatory field!
            required
            autoComplete="off"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter you email:"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            rows="5"
            placeholder="Enter your message:"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button
           type="submit" 
           value="send"
           className="submit_button"
           >Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
