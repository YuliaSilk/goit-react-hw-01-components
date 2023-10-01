import React from "react";
import PropTypes from "prop-types";
import styles from "./statistics.module.css";
import data from "../data/data.json";


const statisticsApp = () => {
    return (
        <div>
            <Statistics
                id={data.id}
                label={data.label}
                percentage={data.percentage}
                />
        </div>
    );
};
statisticsApp();

export const Statistics = ({ title, stats }) => {
return (
    <section className={styles.Statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles['stat-list']}>
            {Statistics.map((stat) => (
                <li key={stats.id} className={styles.item}>
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>{stat.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};


