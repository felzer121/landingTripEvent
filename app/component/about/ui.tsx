import Image from "next/image";
import style from "./style.module.css";

const keys = [
  { name: "Удобство", id: 1, color: "#8558B8", bg: "#140D1B" },
  { name: "Простота", id: 2, color: "#A66F30", bg: "#1B1208" },
  { name: "Комфорт", id: 3, color: "#62975C", bg: "#0F170E" },
];

export default function About() {
  return (
    <section className={style.about}>
      <div className={style.background}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 727"
          fill="none"
        >
          <path
            d="M1440 727H20C8.95435 727 0 718.046 0 707V135.24C0 92.3185 33.8711 57.0454 76.7571 55.3056L1440 0V727Z"
            fill="black"
          />
        </svg>
      </div>
      <div className={style.aboutContainer}>
        <div className={style.aboutContent}>
          <div className={style.aboutContent__picture}>
            <Image
              src={"/image/aboutBaground_1.png"}
              className={style.aboutContent__picture_1}
              width={470}
              height={316}
              alt="picture_1"
            />
            <Image
              src={"/image/aboutBaground_2.png"}
              className={style.aboutContent__picture_2}
              width={250}
              height={180}
              alt="picture_2"
            />
            <Image
              src={"/image/aboutBaground_3.png"}
              className={style.aboutContent__picture_3}
              width={370}
              height={225}
              alt="picture_3"
            />
            <div
              style={{ width: "100%", height: "350px", position: "relative" }}
              className={style.aboutContent__picture_preview}
            >
              <Image
                src={"/image/aboutBaground_preview.png"}
                layout="fill"
                sizes="100vw"
                alt="picture_preview"
              />
            </div>
          </div>
          <div className={style.aboutContent__block}>
            <div className={style.lineVerticale}></div>
            <div className={style.aboutContent__blockWrapper}>
              <h4 className={style.aboutContent__title}>
                Вместе с TripEvent ваш отдых станет незабываемым
              </h4>
              <div className={style.line}></div>
              <div className={style.aboutContent__keys}>
                {keys.map((key) => (
                  <div
                    style={{ color: key.color, background: key.bg }}
                    className={style.aboutContent__keysItem}
                  >
                    {key.name}
                  </div>
                ))}
              </div>
              <div>
                <p className={style.aboutContent__description}>
                  Ключевой проблемой людей, которые отдыхаю в различных закрытых
                  местах, является незнание местности и расписания различных
                  мероприятий.
                </p>
                <br></br>
                <p className={style.aboutContent__description}>
                  Проект решает эту проблему созданием групп под отели и базы
                  отдыха. В этих группах размещается информация о расписании
                  мероприятий, планах питания, зонах отдыха, и предоставляемых
                  услугах.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
