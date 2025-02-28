import logo from "./../../assets/images/netflix-logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./header.module.css";
import { useState, useEffect } from "react";

function Header() {
  // click mobile toggle bar and header bg part
  const [click, setclick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  function scrolldown() {
    setclick(click ? false : true);
  }
 useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY > 80) {
       setScrolled(true);
     } else {
       setScrolled(false);
     }
   };

   window.addEventListener("scroll", handleScroll);
   // Cleanup listener on component unmount
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);

  return (
    <>
      <div
        className={`${styles.header_wrapper} ${scrolled && styles.header_black}`}
      >
        {/* left  section */}
        <div
          className={`${styles.header_lists} ${click && styles.header_mobile_lists}`}
        >
          <ul>
            <span className={styles.minimize} onClick={scrolldown}>
              <IoMdCloseCircle />
            </span>
            <div className={styles.header_logo}>
              <img src={logo} alt="" />
            </div>
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
        {/* right icons sections  */}
        <div className={styles.header_icons}>
          <IoSearchSharp />
          <MdNotificationsNone />
          <span className={styles.header_mobile}>
            <MdAccountBox />
            <span className={styles.header_menu} onClick={scrolldown}>
              <GiHamburgerMenu />
            </span>
          </span>
          <FaCaretDown />
        </div>
      </div>
    </>
  );
}

export default Header;
