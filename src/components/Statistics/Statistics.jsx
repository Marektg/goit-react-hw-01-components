import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomHexColor from './getRandomColor';

export const Statistics = ({ title, stats }) => {
    const { statistics, statsTitle, statsList, statsItem, statsLabel, statsPercentage } = styles;

    return (
        
            <div className={statistics}>
            {title && (
                <h2 className={statsTitle}>{title}</h2>
            )}

            <ul className={statsList}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={statsItem} style={{ backgroundColor: getRandomHexColor() }} >
                        <span className={statsLabel}>{label}</span>
                        <span className={statsPercentage}>{percentage}%</span>
                    </li>
                ))}
                </ul>
            </div>
        
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}