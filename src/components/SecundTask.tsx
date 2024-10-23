import React, { useState } from 'react';
import Button from './Button';
import style from "../style/Button.module.css"

const SecundTask = () => {
  const [button, setButton] = useState(true);
  return (
    <>
      <h1>
        Adott egy  gomb. Elvileg minden rendben kód szinten, mégsem csinál semmit se hover, se egyéb eseményre (nem disabled). Mi lehet a probléma, mi okozhat ilyen jelenséget?
      </h1>
      <ul>
        <li>
          Lehet például, hogy felette van valami a z-index hibája miatt.
          <div>
            <div style={{ position: 'absolute' }}>
              <p style={{ margin: 0 }}>Ez takarja a gombot</p>
              <p style={{ margin: 0 }}>Ez takarja a gombot</p>
              <p style={{ margin: 0 }}>Ez takarja a gombot</p>
            </div>
            <Button buttonHandler={() => console.log("ok")} buttonText='példa' />
          </div>
        </li>
        <li style={{ marginTop: 10 }}>
          Kód felülírása
          <div>
            <button className={`${style.button} ${style.error}`}>BUG</button>
          </div>
        </li>
        <li style={{ marginTop: 10 }}>
          Ellentétes feladatokat kap a gomb, értsd ezt úgy, hogy két feladat például pont kiüti egymást, amit elvégeztetünk vele. /* Akár a stílust is ráállíthatjuk a boolean értékre, így nem érvényesül */
          <div>
            <Button buttonHandler={() => { setButton(false); setButton(true); }} buttonText={button.toString()} />
          </div>
        </li>
        <li style={{ marginTop: 10 }}>
          Lehet, hogy egyszerűen nem lehet rányomni, mert valahol egy pointer-events: none van beillesztve.
          <div>
            <button className={`${style.button}`} style={{ pointerEvents: 'none' }}>Nem tudsz ide kattintani</button>
          </div>
        </li>
      </ul>
      <h3>Sok egyéb hiba is lehet, érdemes a böngészőből elindulni és a console.log-okból következtetni.</h3>
    </>
  )
}

export default SecundTask