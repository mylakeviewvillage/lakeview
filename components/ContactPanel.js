import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import styles from 'styles/components/contact-panel.module.scss';
import Link from 'next/link';

import MailchimpSubscribe from "react-mailchimp-subscribe";

const ContactPanel = () => {

    // const { title, description, formID } = module.fields;

    const [state, handleSubmit] = useForm('aaa');

    const [formValid, setFormValid] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [agreement, setAgreement] = useState(false);

    useEffect(() => {
        // Check the form for validation on every update of the input fields
        if (firstName.length && lastName.length && phoneNumber.length && email.length && agreement) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [firstName, lastName, phoneNumber, email, agreement]);

    // Check for valid form before submitting
    const validateForm = (e) => {
        console.log('test');
        e.preventDefault();
        // If formValid state is true, submit the form
        if (formValid) {
            handleSubmit(e);

            const section = document.querySelector('#contact');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        } else {
            // If it's not log the error in the console
            console.log('Form values are invalid.');
        }
    }

    return (
        <div className={styles.contact_panel}>
            <div className="container">
                <div className="content">
                    <h2 className="minor">Stay in the know on all things Lakview Village</h2>
                    <div className={styles.grid}>
                        <div className={styles.grid_left}>
                            <p>Subscribe to our newsletter and get the latest on importtant project updates, community events and more.</p>
                        </div>
                        <div className={styles.grid_right}>
                            <form onSubmit={validateForm} data-aos="fade-up">
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
                                        <p>I agree to the <Link href="/privacy-statement"><a>privacy statement</a></Link></p>
                                    </label>
                                </div>
                                <div>
                                    <button type="submit" disabled={state.submitting} className="btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPanel;