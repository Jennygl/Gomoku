import React from 'react'
import styled from 'styled-components'

function AboutGomoku() {
    return (
        <About>
            <h3>About Gomoku</h3>
            <p>
                Gomoku, also known as "Five in a Row," is a classic strategy
                board game that traces its origins to ancient China. The game's
                name, "Gomoku," is Japanese, while the Chinese call it "Wu Zi
                Qi." This game is a two-player contest where the objective is to
                be the first to place five of one's own stones in a row, either
                horizontally, vertically, or diagonally, on a gridded game
                board.
            </p>

            <p>
                The history of Gomoku can be traced back to over a thousand
                years ago in both China and Japan. Its simplicity and yet
                strategic depth have made it a popular pastime throughout the
                centuries. Gomoku was initially played on paper or carved into
                wooden boards, but it has since been adapted for various
                platforms, including computer games and mobile apps
            </p>
        </About>
    )
}

export default AboutGomoku

const About = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4vh 2vw 1em 2vw;
    word-break: break-word;
`
