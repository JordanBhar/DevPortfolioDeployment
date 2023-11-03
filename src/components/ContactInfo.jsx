import React from "react";
import styles from "../style";
function ContactInfo(props) {
  const { contactIcon, contactName } = props;

  return (
    <div className="items-start space-y-5">
      <div className="flex gap-x-4">
        <object
          data={contactIcon}
          height="35"
          width="35"
          className={styles.icons}
        ></object>
        <p className={`${styles.regularText}`}>{contactName}</p>
      </div>
    </div>
  );
}

export default ContactInfo;
