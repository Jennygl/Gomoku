import React from 'react'
import BoxComp from './BoxComp'

const boardComp = ({ board, onClick }) => {


    return (
        <div className='board'>

            {board.map((value, idx) => {
                return <BoxComp value={value} onClick={() => onClick(idx)} />

            })}

        </div>
    )
}

export default boardComp
