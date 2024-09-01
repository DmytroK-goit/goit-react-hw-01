import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
      <span className={isOnline ? s.online : s.offline}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </li>
  );
};

export default FriendListItem;
