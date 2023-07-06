import React, { useState } from "react";
import styles from "styles/components/contact-panel.module.scss";
import SectionTitle from "components/SectionTitle";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import RichTextArea from "components/RichTextArea";

const ContactFormLeadCapture = ({ copy }) => {
  const { title, description, agreement } = "";
  const titleOne = "Register";
  const titleTwo = "Today";
  const image =
    "https://cdn.aglty.io/tgbxpvs6/home/register-image.jpg?format=auto";
  const CustomForm = ({ status, message, onValidated }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [postal, setPostal] = useState("");
    const [userType, setUserType] = useState("");
    const [userAge, setUserAge] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const agreement =
      "Yes, I would like to receive email communications from Lakeview Village and their partners.";

    const [agreementWarning, setAgreementWarning] = useState(false);
    const [agreementBool, setAgreementBool] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!agreementBool) setAgreementWarning(true);
      if (agreementBool) setAgreementWarning(false);

      agreementBool &&
        email &&
        firstName &&
        lastName &&
        phoneNumber &&
        email.indexOf("@") > -1 &&
        postal &&
        userType &&
        userAge &&
        bedrooms &&
        onValidated({
          EMAIL: email,
          MERGE1: firstName,
          MERGE2: lastName,
          MERGE4: phoneNumber,
          MERGE3: postal,
          MERGE5: userType,
          MERGE6: userAge,
          MERGE7: bedrooms,
          MERGE8: userType == "1" ? "yes" : "no",
          MERGE9: userType == "2" ? "yes" : "no",
        });
    };

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.form_grid}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.full_width}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tel">Phone</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="postal">Postal Code</label>
            <input
              type="text"
              id="postal"
              name="postal"
              value={postal}
              required
              onChange={(e) => setPostal(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="userType">I am...</label>
            <select
              name="userType"
              id="userType"
              required
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Please select</option>
              <option value="2">Working with a Realtor</option>
              <option value="3">Not working with a Realtor</option>
              <option value="1">A Realtor</option>
            </select>
          </div>
          <div>
            <label htmlFor="userAge">Age Range</label>
            <select
              name="userAge"
              id="userAge"
              required
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            >
              <option value="">Please select</option>
              <option value="18-29">18-29</option>
              <option value="30-39">30-39</option>
              <option value="40-49">40-49</option>
              <option value="50-59">50-59</option>
              <option value="60+">60+</option>
              <option value="Prefer Not To Answer">Prefer Not To Answer</option>
            </select>
          </div>
          <div className={styles.full_width}>
            <label htmlFor="bedrooms">I am interested in</label>
            <select
              name="bedrooms"
              id="bedrooms"
              required
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="">Please select</option>
              <option value="Bachelor">Bachelor</option>
              <option value="1 bedroom">1 bedroom</option>
              <option value="1 bedroom + den">1 bedroom + den</option>
              <option value="2 bedroom">2 bedroom</option>
              <option value="2 bedroom + den">2 bedroom + den</option>
              <option value="3 bedroom">3 bedroom</option>
              <option value="3 bedroom + den">3 bedroom + den</option>
              <option value="4 bedroom">4 bedroom</option>
            </select>
          </div>
        </div>
        <div className={styles.agreement}>
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            value={agreementBool}
            onChange={() => setAgreementBool(!agreementBool)}
          />
          <label htmlFor="agreement">
            {copy.contactCompliance && <p>{copy.contactCompliance}</p>}
          </label>
        </div>
        <div>
          <button type="submit" className="btn">
            Sign up
          </button>
        </div>
        <div className={styles.status}>
          {status === "sending" && (
            <div className={styles.sending}>sending...</div>
          )}
          {status === "error" && (
            <div
              className={styles.error}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <p className={styles.success}>Thank you for your inquiry.</p>
          )}
          {agreementWarning && !agreementBool && (
            <div className={styles.error}>
              <p>
                You must agree to receive email communications from Lakeview
                Community Partners Limited and their partners to complete your
                subscription.
              </p>
            </div>
          )}
        </div>
      </form>
    );
  };

  const u = "2172e3cbd0c78a3830a1f6484";
  const id = "47b8ca018a";
  const postURL = `https://lakeviewcommunitypartners.us19.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <div id="register" className={styles.contact_panel}>
      <div className="container">
        <div className="content">
          <SectionTitle titleOne={titleOne} titleTwo={titleTwo} />

          <div className={styles.grid}>
            <div className={styles.grid_left}>
              {copy.contactImage && (
                <SEOImage
                  img={copy.contactImage}
                  sizes={[900, 600, 400]}
                  className="w-100"
                />
              )}
              <img src={image} className="w-100" width={1} height={1} alt="" />
            </div>
            <div className={styles.grid_right}>
              <h3>{copy.contactHeading}</h3>
              <MailchimpSubscribe
                url={postURL}
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormLeadCapture;
