import React from 'react';

export default function PersonalInfo({ info }) {
    const name = info.name
    const birthday = info.DOB
    const height = info.height
    const weight = info.weight

    return (
        <div >
            <h2>{name}</h2>
            <div className='personal-info'>
                <p>Date of Birth: {birthday}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
            </div>
        </div>
    )

}