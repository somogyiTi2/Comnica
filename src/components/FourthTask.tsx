import React from 'react'
import style from "../style/Input.module.css"

const FourthTask = () => {
    return (
        <div>
            <h1> A designer a következőképpen álmodja meg a beviteli mező működését:</h1>
            <img src={"https://comnica.hu/wp-content/uploads/2024/10/Gomb1.png"} />
            {/*Nem következetes pl a kötőjel használata. Gomb-1 vagy Gomb1... illetve ez nem is gomb.*/}
            <img src={"https://comnica.hu/wp-content/uploads/2024/10/Gomb-2.png"} />
            <p>Mi lehet ezzel a működéssel az általános probléma?</p>
            Több probléma is lehet vele:
            <ol>
                <li>Nem jelzi vissza a felhasználónak, hogy jó-e a válasza.</li>
                <li>Nincs jelölve hogy ez animálva lenne, vagy hogy is működik.</li>
                <li>Nincs placeholder, amivel a felhasználónak bemutató szöveget írunk, ha bonyolultabb kérdést adunk neki.</li>
                <li>Rácsúszhat a felette levő szövegre ha túl közel van. </li>

            </ol>
            <a target="_blank" href="https://codepen.io/chris__sev/pen/LYOyjY">Ezt nem én írtam hanem innen másoltam egy részté:</a>
            <p style={{ marginTop: 50 }} />
            <div className={style.group}>
                <input type="text" required />
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label>Name</label>
            </div>
        </div>
    )
}
export default FourthTask