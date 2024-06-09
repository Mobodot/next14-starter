// "use client";

import Image from "next/image";

import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact page",
  description: "Next.js starter app Contact page",
};

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.imgContact}
          src="/contact.png"
          alt="contact"
          fill
        />
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.contactForm}>
          <input
            className={styles.input}
            type="text"
            name=""
            placeholder="Name and Surname"
          />
          <input
            className={styles.input}
            type="text"
            name=""
            placeholder="Email address"
          />
          <input
            className={styles.input}
            type="text"
            name=""
            placeholder="Phone NUmber (Optional)"
          />
          <textarea
            className={styles.input}
            name=""
            rows="8"
            placeholder="Message"
          ></textarea>
          <button className={styles.btn}>send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
