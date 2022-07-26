import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarLogo}>
          <Link href="/">
            <picture>
              <img src="icons/logo.svg" alt="Logo Moveit" />
            </picture>
          </Link>
        </div>

        <div className={styles.sidebarIcons}>
          <Link href="/dashboard">
            <a>
              {pathname !== "/dashboard" ? (
                <picture
                  className={`${styles.sidebarIconsItem} ${styles.sidebarIconsItemNoActiveHouse}`}
                >
                  <img src="icons/house.svg" alt="Dashboard" />
                </picture>
              ) : (
                <picture className={styles.sidebarIconsItemActive}>
                  <img src="icons/house_active.svg" alt="Dashboard" />
                </picture>
              )}
            </a>
          </Link>

          <Link href="/settings">
            <a>
              {pathname !== "/settings" ? (
                <picture
                  className={`${styles.sidebarIconsItem} ${styles.sidebarIconsItemNoActiveSettings} `}
                >
                  <img src="icons/settings.svg" alt="Dashboard" />
                </picture>
              ) : (
                <picture className={styles.sidebarIconsItemActive}>
                  <img src="icons/settings_active.svg" alt="Dashboard" />
                </picture>
              )}
            </a>
          </Link>
        </div>
        <div className={styles.sidebarEmptyDiv}></div>
        {/* <div className={styles.sidebarSwitchMode}>
          <picture>
            <img src="icons/dark-theme.svg" alt="" />
          </picture>
          <label className={styles.sidebarSwitch}>
            <input type="checkbox" style={{ display: "none" }} />
            <span
              className={`${styles.sidebarSwitchSlider} ${styles.sidebarSwitchRound}`}
            ></span>
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
