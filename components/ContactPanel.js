import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import styles from 'styles/components/contact-panel.module.scss';
import SEOImage from './SEOImage';

const ContactPanel = ({ copy }) => {

    const titleOne = 'Register';
    const titleTwo = 'Today';
    const image = 'https://cdn.aglty.io/tgbxpvs6/home/register-image.jpg?format=auto';

    const CustomForm = () => {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [postal, setPostal] = useState('');
        const [email, setEmail] = useState('');
        const [userType, setUserType] = useState('');
        const [userAge, setUserAge] = useState('');
        const [bedrooms, setBedrooms] = useState('');
        const [agreement, setAgreement] = useState(false);
        const [agreementWarning, setAgreementWarning] = useState(false);
        const [status, setStatus] = useState('');
        const [buttonStatus, setButtonStatus] = useState('SIGN UP');
        const [buttonActive, setButtonActive] =  useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();

            if (!agreement) setAgreementWarning(true);
            if (agreement) setAgreementWarning(false);

            if (agreement &&
                email &&
                firstName &&
                lastName &&
                phoneNumber &&
                postal &&
                userType &&
                userAge &&
                bedrooms &&
                email.indexOf("@") > -1) {
                    registerUser();
                }
        }

    const registerUser = async event => {

        const res = await fetch('https://crm.joeyai.email/do/register-json.php',
            {
                body: JSON.stringify({
                                    aid : 23,
                                    cid : 1,
                                    apikey : 'rKApX4rUjVKqM6LPvQ$8rn6EtXmD7m3A',
                                    Email: email,
                                    FirstName: firstName,
                                    LastName: lastName,
                                    Mobile: phoneNumber,
                                    PostalCode: postal,
                                    Bedrooms: bedrooms,
                                    IsBroker: userType == "1" ? "yes" : "no",
                                    WorksWithBroker: userType == "2" ? "yes" : "no",
                                    Custom1: userAge
                }),
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // mode: 'no-cors',
                method: 'POST'
            }
        )

        const result = await res.json();

        if(result.result === 1){
            setButtonActive(true);
            setButtonStatus("success");
            setStatus("success");
        }
        // console.log(result);
        // result.user => 'Ada Lovelace'
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
                    <div>
                        <label htmlFor="userType">I am...</label>
                        <select name="userType" id="userType" required value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="">Please select</option>
                            <option value="2">Working with a Realtor</option>
                            <option value="3">Not working with a Realtor</option>
                            <option value="1">A Realtor</option>
                        </select>
                    </div>
                   <div>
                        <label htmlFor="userAge">Age Range</label>
                        <select name="userAge" id="userAge" required value={userAge} onChange={(e) => setUserAge(e.target.value)}>
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
                        <select name="bedrooms" id="bedrooms" required value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
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
                    <input type="checkbox" name="agreement" id="agreement" value={agreement} onChange={() => setAgreement(!agreement)} />
                    <label htmlFor="agreement">
                        <p>{copy.contactCompliance}</p>
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={buttonActive}>{buttonStatus}</button>
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
                            <img src={image} className="w-100" width={1} height={1} alt="" />
                        </div>
                        <div className={styles.grid_right}>
                            <h3>{copy.contactHeading}</h3>
                             <CustomForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPanel;