import React from 'react'

export default function IDEntry({ name }) {
    return (
        <div className='entry'>
            <img class="one" src="imgs/peanut.jpeg" alt="Dairy" />
            <h1 class="two" >{name}</h1>
            <img class="entry-info-button" src="imgs/info.png" alt="info button" />
        </div>
    )
}