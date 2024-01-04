//code from https://web3forms.com/platforms/nextjs-contact-form however it is edited to my specifications
import {useState} from "react";
import styles from './contactForm.module.scss'
import clsx from "clsx";
export default function ContactForm() {
    const [recipient, setRecipient] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [company, setCompany] = useState('')
    async function handleSubmit(event) {
        event.preventDefault();

        if (recipient.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all required fields.');
            return;
        }

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
            setCompany('')
        }
    }

    return (
        <>
            <div className={styles.container}>
                <h3>Get in Touch</h3>
                <form onSubmit={handleSubmit}>
                        <div className={styles.input_container}>
                            <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)}/>
                            <label className={clsx({[styles['filled']]:recipient})} htmlFor={"name"}>
                                Name
                            </label>
                        </div>

                        <div className={styles.input_container}>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label className={clsx({[styles['filled']]:email})} htmlFor={"email"}>
                                Email
                            </label>
                        </div>

                        <div className={styles.input_container}>
                            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}/>
                            <label className={clsx({[styles['filled']]:company})} htmlFor={"company"}>
                                Company (optional)
                            </label>
                        </div>

                    <div className={styles.input_container}>
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