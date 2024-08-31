import s from './TransactionHistory.module.css';


const TransactionItems = ({ type, amount, currency }) => {
  return (
    <tr className={s.table}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItems;