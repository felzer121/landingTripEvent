import { Button } from "@/node_modules/@mui/material/index";
import Image from "next/image";
import styles from "./page.module.css";
import { CalendarHeader } from "./vector/CalendarHeader";
import { CloudHeader } from "./vector/CloudHeader";

export default function Home() {
  return (
    <main className={styles.main}>
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
            <div className={styles.headerContainer__menu}>12</div>
          </div>
        </div>
      </header>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
