
import userData from '../assets/userData.json';
import s from "./Profile/Profile.module.css";
console.log(userData);

function App() {
    return (
        <div className={s.card}>
      <div className={s.img}>
        <img
          src={userData.avatar}
          alt="User avatar"
        />
        <p>{userData.username}</p>
        <p>@{userData.tag}</p>
        <p>{userData.location}</p>
      </div>

  <ul className={s.list}>
    <li>
      <span>Followers: </span>
      <span>{userData.stats.followers}</span>
    </li>
    <li>
      <span>Views: </span>
      <span>{userData.stats.views}</span>
    </li>
    <li>
      <span>Likes: </span>
      <span>{userData.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
export default App