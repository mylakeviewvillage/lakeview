import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import styles from 'styles/components/contact-panel.module.scss';
import RichTextArea from './RichTextArea';
import SEOImage from './SEOImage';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const ContactPanel = ({ copy }) => {

    const titleOne = 'Register';
    const titleTwo = 'Today';
    const image = 'https://cdn.aglty.io/tgbxpvs6/home/register-today.jpg?format=auto';

    const CustomForm = ({ status, message, onValidated }) => {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [email, setEmail] = useState('');
        const [agreement, setAgreement] = useState(false);
        const [agreementWarning, setAgreementWarning] = useState(false);



        const handleSubmit = (e) => {

            e.preventDefault();

            if (!agreement) setAgreementWarning(true);
            if (agreement) setAgreementWarning(false);

            agreement &&
                email &&
                firstName &&
                lastName &&
                phoneNumber &&
                email.indexOf("@") > -1 &&
                onValidated({
                    EMAIL: email,
                    MERGE1: firstName,
                    MERGE2: lastName,
                    MERGE4: phoneNumber
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
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tel">Mobile (for SMS alerts)</label>
                        <input type="tel" id="tel" name="tel" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                </div>
                <div className={styles.agreement}>
                    <input type="checkbox" name="agreement" id="agreement" value={agreement} onChange={() => setAgreement(!agreement)} />
                    <label htmlFor="agreement">
                        <p>{copy.contactCompliance}</p>
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn">SIGN UP</button>
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
                        <p className={styles.success}>{copy.contactThankYou}</p>
                    )}
                    {agreementWarning && !agreement && (
                        <div className={styles.error}>
                            <p>You must agree to receive email communications from Lakeview Community Partners Limited and their partners to complete your subscription.</p>
                        </div>
                    )}
                </div>
            </form>
        );
    };

    const u = '2172e3cbd0c78a3830a1f6484';
    const id = '47b8ca018a';
    const postURL = `https://lakeviewcommunitypartners.us19.list-manage.com/subscribe/post?u=${u}&id=${id}`;

    return (
        <div id="register" className={styles.contact_panel}>
            <div className="container">
                <div className="content">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} />

                    <div className={styles.grid}>
                        <div className={styles.grid_left}>
                            {copy.contactImage && (
                                <SEOImage img={copy.contactImage} sizes={[900, 600, 400]} className="w-100" />
                            )}
                            <img src={image} className="w-100" width={1} height={1} />
                        </div>
                        <div className={styles.grid_right}>
                            <h3>{copy.contactHeading}</h3>
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

export default ContactPanel;