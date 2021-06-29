import React from 'react';
import { giideList } from '../data.js'
import GiideCard from './components/GiideCard.jsx';

const App = () => {
    return (
        <>
            <h2>Explore</h2>
            {giideList.map((giideItem) => (
                <GiideCard />
            ))}
            <h2>Learn</h2>
        </>
    )
}

export default App;