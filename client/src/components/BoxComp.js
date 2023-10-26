import React from 'react'

const boxComp = ({ value, onClick }) => {
    const style = value === "X" ? "box X" : "box o";
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}

export default boxComp
