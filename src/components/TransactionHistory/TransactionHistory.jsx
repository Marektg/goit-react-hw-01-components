// import { Transaction } from '../Transaction/Transaction';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    const { transactionHistory, tableRow, operationType, value, curr, rowHeader } = styles;

    return (
        <table className={transactionHistory}>
            <thead>
                <tr className={rowHeader}>
                    <th >Type</th>
                    <th >Amount</th>
                    <th >Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                        // <Transaction type={type} amount={amount} currency={currency} key={id} />
                        <tr className={tableRow} key={id}>
                            <th className={operationType}>{type}</th>
                            <th className={value}>{amount}</th>
                            <th className={curr}>{currency}</th>
                        </tr>
    ))}
            
                </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.array,
}