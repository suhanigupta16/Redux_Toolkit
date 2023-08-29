import React from "react";
import styles from "./payment.module.scss";
import { AiOutlineEye } from "react-icons/ai";

const PaymentContent = () => {
  return (
    <div className={styles.paymentWrapper}>
      <div className={styles.header}>
        <h3>Payment Details</h3>
      </div>
      <hr />
      <div className={styles.ptmDetails}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Name</th>
              <th>Payment Schedule</th>
              <th>Bill Number</th>
              <th>Amount Paid</th>
              <th>Balance Amount</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody className={styles.wrap}>
            <tr>
              <td className={styles.check}>Karthi</td>
              <td className={styles.check}>First</td>
              <td className={styles.check}>00012223</td>
              <td className={styles.check}>INR 35,000</td>
              <td className={styles.check}>INR 55,000</td>
              <td className={styles.check}>08-Dec,2021</td>
              <td className={styles.check}>
                <AiOutlineEye className={styles.icon} />
              </td>
            </tr>
            &nbsp;
            <tr>
              <td className={styles.tdData}>Karthi</td>
              <td className={styles.tdData}>First</td>
              <td className={styles.tdData}>00012223</td>
              <td className={styles.tdData}>INR 35,000</td>
              <td className={styles.tdData}>INR 55,000</td>
              <td className={styles.tdData}>08-Dec,2021</td>
              <td className={styles.tdData}>
                <AiOutlineEye className={styles.icon} />
              </td>
            </tr>
            &nbsp;
            <tr>
              <td className={styles.check}>Karthi</td>
              <td className={styles.check}>First</td>
              <td className={styles.check}>00012223</td>
              <td className={styles.check}>INR 35,000</td>
              <td className={styles.check}>INR 55,000</td>
              <td className={styles.check}>08-Dec,2021</td>
              <td className={styles.check}>
                <AiOutlineEye className={styles.icon} />
              </td>
            </tr>
            &nbsp;
            <tr>
              <td className={styles.tdData}>Karthi</td>
              <td className={styles.tdData}>First</td>
              <td className={styles.tdData}>00012223</td>
              <td className={styles.tdData}>INR 35,000</td>
              <td className={styles.tdData}>INR 55,000</td>
              <td className={styles.tdData}>08-Dec,2021</td>
              <td className={styles.tdData}>
                <AiOutlineEye className={styles.icon} />
              </td>
            </tr>
            &nbsp;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentContent;
