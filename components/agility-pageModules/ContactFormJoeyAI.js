import React, { useState } from 'react';
import styles from 'styles/components/contact-panel.module.scss';

import MailchimpSubscribe from "react-mailchimp-subscribe";
import RichTextArea from 'components/RichTextArea';

const ContactFormJoeyAI = ({ module }) => {

    const { title, description, agreement } = module.fields;

    const CustomForm = ({ status, message, onValidated }) => {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [postal, setPostal] = useState('');
        const [email, setEmail] = useState('');
        const [userType, setUserType] = useState('');
        const [userAge, setUserAge] = useState('');
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
                    MERGE3: agreementBool
                });

        }

        return (
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.form_grid}>
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" value={firstName} required onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" value={lastName} required onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className={styles.full_width}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tel">Mobile (for SMS alerts)</label>
                        <input type="tel" id="tel" name="tel" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="postal">Postal Code</label>
                        <input type="text" id="postal" name="postal" value={postal} required onChange={(e) => setPostal(e.target.value)} />
                    </div>
                    <div className={styles.full_width}>
                        <label htmlFor="userType">Tell us about yourself</label>
                        <select name="userType" id="userType" required value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option>Please select</option>
                            <option value="I am a broker">I am a broker</option>
                            <option value="I am a working with a broker">I am a working with a broker</option>
                            <option value="I am an agent">I am an agent</option>
                            <option value="I am media">I am media</option>
                        </select>
                    </div>
                   <div className={styles.full_width}>
                        <label htmlFor="userAge">Tell us about yourself</label>
                        <select name="userAge" id="userAge" required value={userAge} onChange={(e) => setUserAge(e.target.value)}>
                            <option>Please select</option>
                            <option value="20-30">20-30</option>
                            <option value="31-40">31-40</option>
                            <option value="41-50">41-50</option>
                            <option value="51-60">51-60</option>
                            <option value="61-70">61-70</option>
                            <option value="70+">70+</option>
                        </select>
                    </div>
                </div>
                <div className={styles.agreement}>
                    <input type="checkbox" name="agreement" id="agreement" value={agreementBool} onChange={() => setAgreementBool(!agreementBool)} />
                    <label htmlFor="agreement">
                        {agreement && <p>{agreement}</p>}
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn">Sign Up</button>
                </div>
                <div className={styles.status}>
                    {status === "sending" && (
                        <div className={styles.sending}>
                            sending...
                        </div>
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

    const u = '2172e3cbd0c78a3830a1f6484';
    const id = 'fdfa602594';
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
                                        onValidated={formData => subscribe(formData)}
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

export default ContactFormJoeyAI;