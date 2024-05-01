import React, {useState} from 'react'

export default function IDEntry({ name, translateTo='english' }) {
    const translationFetch = "http://localHost:8080/" + translateTo
    const [translation, setTranslation] = useState(null)
    fetch(translationFetch)
		.then(res => res.json())
		.then(json => setTranslation(json[name]))
    
    return (
        <div className='entry'>
            <h1 class="two" >{translation}</h1>
            <img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
        </div>
    )
}

export function AllergyIDEntry({name, translateTo='english'}) {
    const translationFetch = "http://localHost:8080/" + translateTo
    const imgSrc = "imgs/" + name + ".jpg"
    const [translation, setTranslation] = useState(null)
    fetch(translationFetch)
		.then(res => res.json())
		.then(json => setTranslation(json[name]))
    
    return (
        <div className='entry'>
            <img class="one" src={imgSrc} alt={translation} />
            <h1 class="two" >{translation}</h1>
            <img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
        </div>
    )
}

export function Info({ name, translateTo='english' }) {
    const translationFetch = "http://localHost:8080/" + translateTo
    const [translation, setTranslation] = useState(null)
    fetch(translationFetch)
		.then(res => res.json())
		.then(json => setTranslation(json[name]))
    
    return (
        <p>{translation}</p>
    )
}