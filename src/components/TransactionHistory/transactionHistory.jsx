import styles from './transactionHistory.module.css';


export const TransactionHistory = ({ items }) => {
    return (
       
    <table className={styles.transactionHistory}>
        <thead>
            <tr className={styles.head}>
                <th className={styles.headItem}>Type</th>
                <th className={styles.headItem}>Amount</th>
                <th className={styles.headItem}>Currently</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => (
                <tr key={item.id} className={styles.eachItem} >
                    <td className={styles.itemType}>{item.type}</td>
                    <td className={styles.itemPart}>{item.amount}</td>
                    <td className={styles.itemPart}>{item.currently}</td>
                </tr>
            ))}
        </tbody>
    </table>
    
); 
}







