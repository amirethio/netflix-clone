import styles from "./header.module.css";
import netflix_logo from "./../../assets/images/netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <ul>
            <li>
              <img className={styles.logo_img} src={netflix_logo} alt="" />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TvShows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">MyList</a>
            </li>
            <li>
              <a href="#">Browse by Language</a>
            </li>
          </ul>
        </div>
       
        <div className={styles.header_right}>
          <ul>
            <li>
              <a href="">{<SearchIcon />}</a>
            </li>
            <li>
              <a href="">{<NotificationsNoneIcon />}</a>
            </li>
            <li>
              <a href="">{<AccountBoxIcon />}</a>
            </li>
            <li>
              <a href="">{<ArrowDropDownIcon />}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
