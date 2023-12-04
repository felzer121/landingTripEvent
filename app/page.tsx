import { Button } from "@/node_modules/@mui/material/index";
import Image from "next/image";
import styles from "./page.module.css";
import { CalendarHeader } from "./vector/CalendarHeader";
import { CloudHeader } from "./vector/CloudHeader";
import MenuIcon from "@mui/icons-material/Menu";
import About from "./component/about/ui";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.sidebar}></div>
        <div className={styles.header__cloud}>
          <CloudHeader />
        </div>
        <div className={styles.headerBox}>
          <div className={styles.headerContainer}>
            <div className={styles.headerContainer__inform}>
              <h1>TripEvent</h1>
              <div className={styles.headerContainer__informAbout}>
                <h2 className={styles.headerContainer__informAboutTitle}>
                  Удобный
                  <br />
                  Трекер
                  <br />
                  Мероприятий
                </h2>
                <p className={styles.headerContainer__informDescription}>
                  Скрасит ваш отдых, поможет отслеживать мероприятия во время
                  отдыха и завести новые знакоства
                </p>
                <Button variant="contained">Присоединится</Button>
              </div>
            </div>
            <CalendarHeader />
            <div className={styles.headerContainer__menu}>
              <div className={styles.headerContainer__menuButtons}>
                <Button
                  variant="text"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    fontFamily: "inherit",
                  }}
                >
                  Авторизация
                </Button>
                <Button sx={{ minWidth: "auto" }} variant="contained">
                  <MenuIcon />
                </Button>
              </div>
              <menu className={styles.headerContainer__menuContained}>
                <li>
                  <span>TripEvent</span>
                </li>
                <li>
                  <span>Интерфейс</span>
                </li>
                <li>
                  <span>Создание мероприятия</span>
                </li>
                <li>
                  <span>Оставить заявку</span>
                </li>
              </menu>
            </div>
          </div>
        </div>
      </header>
      <About />
    </main>
  );
}
