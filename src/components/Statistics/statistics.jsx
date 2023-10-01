import styles from "./statistics.module.css";


export const Statistics = ({ title, stats }) => {
return ( <div>
    <section className={styles.Statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {stats.map((stat) => (
                <li key={stat.id} className={styles.item}>
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>{stat.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
    </div>
);
}





// Statistics.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             label: PropTypes.string.isRequired,
//             percentage: PropTypes.number.isRequired,
//         })
//     ).isRequired,
// };


// import data from "../data/data.json";


// const statisticsApp = () => {
//     return (
//         <div>
//             <Statistics
//                 id={data.id}
//                 label={data.label}
//                 percentage={data.percentage}
//                 />
//         </div>
//     );
// };
// statisticsApp();