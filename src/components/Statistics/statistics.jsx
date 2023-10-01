import styles from "./statistics.module.css";


export const Statistics = ({ title, stats }) => {
return ( <div>
    <section className={styles.statistics}>
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







