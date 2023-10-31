import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Players() {
    const [data, setData] = useState([])
    const getData = () => {
        fetch('../game.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (myJson) {
                setData(myJson)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <ThisGame>
            {data &&
                data.length > 0 &&
                data.map((item, i) => (
                    <div key={i}>
                        <p>
                            Player 1:{' '}
                            <strong>
                                {item.player1.name}, {item.player1.id}
                            </strong>
                        </p>
                        <p>
                            Player 2:{' '}
                            <strong>
                                {item.player2.name}, {item.player2.id}
                            </strong>
                        </p>
                    </div>
                ))}
        </ThisGame>
    )
}

export default Players

const ThisGame = styled.div`
    margin: 1em;
`
