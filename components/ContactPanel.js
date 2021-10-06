import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import styles from 'styles/components/contact-panel.module.scss';
import Link from 'next/link';

import MailchimpSubscribe from "react-mailchimp-subscribe";
import RichTextArea from './RichTextArea';

const ContactPanel = ({ copy }) => {

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
                        <label htmlFor="tel">Phone</label>
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
                    <button type="submit" className="btn">Submit</button>
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
    const id = 'fdfa602594';
    const postURL = `https://lakeviewcommunitypartners.us19.list-manage.com/subscribe/post?u=${u}&id=${id}`;

    return (
        <div className={styles.contact_panel}>
            <div className="container">
                <div className="content">
                    <h2 className="minor">{copy.contactHeading}</h2>
                    <div className={styles.grid}>
                        <div className={styles.grid_left}>
                            <RichTextArea html={copy.contactIntro} />
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

export default ContactPanel;