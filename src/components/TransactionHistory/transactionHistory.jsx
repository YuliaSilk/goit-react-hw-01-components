import styles from './transactionHistory.module.css';

//    <thead>
// {/* <tr className={style.head}>
// <th className={style.headItem}>Type</th>
// <th className={style.headItem}>Amount</th>
// <th className={style.headItem}>Currency</th>
// // </tr> */}
// </thead>


export const TransactionHistory = ({ items }) => {
    return (
       
    <table className={styles.transactionHistory}>
        <thead>
            <tr className={styles.head}>
                <th className={styles.headItem}>Type</th>
                <th className={styles.headItem}>Amount</th>
                <th className={styles.headItem}>Currency</th>
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







