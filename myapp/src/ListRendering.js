import React from 'react';

const ListRendering = () => {
    const bikes = ["RE", "FZ", "Pulsar", "Apache"];


    return (
        <ul>
            {bikes.map((val, index) => (
                <li key={index}>{val}</li>
            ))}
        </ul>
    );
}

export default ListRendering;
