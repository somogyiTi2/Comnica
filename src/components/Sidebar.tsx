import React from 'react'
import style from '../style/Sidebar.module.css'
import Button from './Button'

const Sidebar = () => {

    const buttonHandler = () => {
        console.log("Button clicked!")
    }

    return (
        <div>
            <div className={style.sidebartext}>
                <div>
                    <h1>Üdvözlöm</h1>
                    <h1> a Comnica Signature-ben!</h1>
                </div>
                <p>
                    A következőkben végigvezetjük dokumentumai
                    arogzdásán és lárásán A folyamat több percet
                    igénybe vehet. ezért kérjük csak akkor kezdje el ha
                    készen áll rá.
                </p>
                <Button buttonHandler={buttonHandler} buttonText="KEZDHETJÜK"/>

            </div>
        </div >
    )
}

export default Sidebar