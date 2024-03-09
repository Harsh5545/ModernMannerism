import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Code Connect</div>
      <div className={styles.text}>
        Code Connect  agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;