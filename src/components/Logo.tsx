import React from 'react'
import style from '../style/Logo.module.css';

const Logo = () => {
    return (
        <div className={style.logo}>
            <img src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png" alt="Logo" />
            <h1>Somogyi Tibor</h1>
        </div>
    )
}

export default Logo