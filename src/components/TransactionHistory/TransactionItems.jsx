import style from "./TransactionHistory.module.css";

const TransactionItems = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
  );
};

export default TransactionItems;
