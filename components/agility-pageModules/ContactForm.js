import React, { useState } from "react";
import styles from "styles/components/contact-panel.module.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import RichTextArea from "components/RichTextArea";

const ContactForm = ({ module }) => {
  const { title, description, agreement } = module.fields;

  const CustomForm = ({ status, message, onValidated }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [inquiryType, setInquiryType] = useState("General Info");
    const [messageSub, setMessageSub] = useState("");
    const [agreementBool, setAgreementBool] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();

      email &&
        firstName &&
        lastName &&
        phoneNumber &&
        email.indexOf("@") > -1 &&
        onValidated({
          EMAIL: email,
          MERGE1: firstName,
          MERGE2: lastName,
          MERGE4: phoneNumber,
          MERGE6: inquiryType,
          MERGE5: messageSub,
          MERGE3: agreementBool,
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
          <div>
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
          <div className={styles.full_width}>
            <label htmlFor="tel">Inquiry Type</label>
            <select
              name="inqiryType"
              id="inqiryType"
              required
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
            >
              <option value="General Info">General Info</option>
              <option value="Sales Opportunities">Sales Opportunities</option>
              <option value="Community Events & Discovery Centre">
                Community Events & Discovery Centre
              </option>
              <option value="Media/PR">Media/PR</option>
              <option value="Retail & New Business Opportunities">
                Retail & New Business Opportunities
              </option>
            </select>
          </div>
          <div className={styles.full_width}>
            <label htmlFor="messageSub">Message</label>
            <textarea
              name="messageSub"
              id="messageSub"
              value={messageSub}
              onChange={(e) => setMessageSub(e.target.value)}
            />
            <p>
              <i>
                Maximum message length is 255 characters. If your request is
                longer, please email us directly.
              </i>
            </p>
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
          <label htmlFor="agreement">{agreement && <p>{agreement}</p>}</label>
        </div>
        <div>
          <button type="submit" className="btn">
            Get In Touch
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
        </div>
      </form>
    );
  };

  const u = "2172e3cbd0c78a3830a1f6484";
  const id = "fdfa602594";
  const postURL = `https://lakeviewcommunitypartners.us19.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <div className={styles.contact_panel}>
      <div className="container">
        <div className="content">
          {title && <h2 className="minor">{title}</h2>}
          <div className={styles.grid}>
            <div className={styles.grid_left}>
              {description && <RichTextArea html={description} />}
            </div>
            <div className={styles.grid_right}>
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

export default ContactForm;
