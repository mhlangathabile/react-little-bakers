import React from "react";
import NavBar from "./NavBar";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <NavBar />
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold text-body-emphasis mb-3">
              TINY BAKERS CLUB
            </h1>
            <p className="col-lg-10 fs-4">
              We'd love to hear from you! Whether you have questions,
              suggestions, or just want to share your baking adventures, we're
              here to help. Reach out to us, and our friendly team at Tiny
              Bakers will get back to you as soon as possible. Let's make sweet
              memories together!
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-4">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea">Dear Bakers...</label>
              </div>
              <button className="w-100 btn btn-lg" type="submit">
                Let's Bake
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
