import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2>Privacy Policy</h2>
          <p>
            * We at Ecomm-WebApp respect your privacy and are committed to
            protecting your personal data.
          </p>
          <p>
            * We collect personal information such as your name, email address,
            phone number, and shipping address when you register, place an
            order, or fill out a form on our site.
          </p>
          <p>
            * Your payment information, including credit card numbers and
            billing address, is collected to process your transactions securely.
          </p>
          <p>
            * We do not share your personal information with third parties
            except to fulfill your order or comply with the law.
          </p>
          <p>* By using our site, you consent to our Privacy Policy.</p>
          <p>
            * If you have any questions about our Privacy Policy, please contact
            us at +91 9000000000.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
