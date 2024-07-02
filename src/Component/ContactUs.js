import React from "react";
import NavBar from "./NavBar";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <NavBar />
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              TINY BAKERS CLUB
            </h1>
            <p class="col-lg-10 fs-4">
              We'd love to hear from you! Whether you have questions,
              suggestions, or just want to share your baking adventures, we're
              here to help. Reach out to us, and our friendly team at Tiny
              Bakers will get back to you as soon as possible. Let's make sweet
              memories together!
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="textarea"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Dear Bakers...</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Let's Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
