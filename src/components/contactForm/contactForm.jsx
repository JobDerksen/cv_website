//code from https://web3forms.com/platforms/nextjs-contact-form however it is edited to my specifications
import {useState} from "react";
import styles from './contactForm.module.scss'
import clsx from "clsx";
export default function ContactForm() {
    const [recipient, setRecipient] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [company, setCompany] = useState('');

    const [errorRecipient, setErrorRecipient] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();

        let isValid = true;

        if (!recipient.trim()) {
            setErrorRecipient(true);
            isValid = false;
        }else {
            setErrorRecipient(false);
        }

        if (!email.trim()) {
            setErrorEmail(true);
            isValid = false;
        } else {
            setErrorEmail(false);
        }

        if (!message.trim()) {
            setErrorMessage(true);
            isValid = false;
        } else {
            setErrorMessage(false)
        }

        if(isValid){
            const formData = new FormData();
            formData.append("name", recipient);
            formData.append("company", company);
            formData.append("email", email);
            formData.append("message", message);
            formData.append("access_key", "c6186122-32fd-4d49-bb20-95694fc75f89");

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (result.success) {
                console.log(result);
                setRecipient('');
                setEmail('');
                setMessage('');
                setCompany('');
                setErrorRecipient(false);
                setErrorEmail(false);
                setErrorMessage(false);
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <h3>Get in Touch</h3>
                <form onSubmit={handleSubmit}>
                        <div className={clsx({
                            [styles['input_container']]:!errorRecipient,
                            [styles['input_container_error']]:errorRecipient,
                        })}>
                            <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)}/>
                            <label className={clsx({[styles['filled']]:recipient})} htmlFor={"name"}>
                                Name
                            </label>
                        </div>

                    <div className={clsx({
                        [styles['input_container']]: !errorEmail,
                        [styles['input_container_error']]: errorEmail,
                    })}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label className={clsx({[styles['filled']]: email})} htmlFor={"email"}>
                            Email
                        </label>
                    </div>

                    <div className={styles.input_container}>
                        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}/>
                        <label className={clsx({[styles['filled']]: company})} htmlFor={"company"}>
                            Company (optional)
                        </label>
                    </div>

                    <div className={clsx({
                        [styles['input_container']]: !errorMessage,
                        [styles['input_container_error']]: errorMessage,
                    })}>
                         <textarea
                             name="message"
                             value={message}
                             onChange={(e) => setMessage(e.target.value)}
                         />
                        <label className={clsx({[styles['filled']]: message})} htmlFor={"message"}>
                            Message
                        </label>
                    </div>
                    <button className={styles.button} type="submit">Say Hello!</button>
                </form>
            </div>
        </>
    );
}