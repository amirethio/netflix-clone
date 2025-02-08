import styles from "./footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className={styles.footer_container}>
      {/* FIRST COLUMN */}
      <div className={`${styles.footer_col_1} ,${styles.col}`}>
        <div className={styles.fotter_social_media}>
          <a href="#">
            <FacebookOutlinedIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <YouTubeIcon />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li className={styles.service}>
            <a href="#">Service Code</a>
          </li>
          <li className={styles.copy_right}>
            <a href="#"> &copy; 1997-2025 Netflix, Inc.</a>
          </li>
        </ul>
      </div>
      {/* SECOND COLUMN */}
      <div className={`${styles.footer_col_2} ,${styles.col}`}>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
      </div>
      {/* THIRD COLUMN */}
      <div className={`${styles.footer_col_3} ,${styles.col}`}>
        <ul>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <a href="">Ways to Watch</a>
          </li>
          <li>
            <a href="">Corporate Information</a>
          </li>
          <li>
            <a href="">Only on Netflix</a>
          </li>
        </ul>
      </div>
      {/* FORTH COLUMN */}
      <div className={`${styles.footer_col_4} ,${styles.col}`}>
        <ul>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
