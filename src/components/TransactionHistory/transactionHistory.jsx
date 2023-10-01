import React from "react";
import PropTypes from "prop-types";
import styles from './transactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <div>
    <table className={styles['transaction-history']}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currently}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
); 
}

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currently: PropTypes.string.isRequired,
        })
    ).isRequired,
};




// import transactions from "../data/transactions.json";

// const transactionHistoryApp = () => {
//     return (
//         <div>
//             <TransactionHistory
//             id={transactions.id}
//             type={transactions.type}
//             amount={transactions.amount}
//             currently={transactions.currently}>
//             </TransactionHistory>
//         </div>
//     )
// }
// transactionHistoryApp();
