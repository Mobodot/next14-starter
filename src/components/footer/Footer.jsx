import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <p>MOBODOTT</p>
      <p className={styles.footerRights}>
        Mobodott creative thoughts agency © All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
