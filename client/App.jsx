import React from 'react';
import { giideList } from '../data.js'
import GiideCard from './components/GiideCard.jsx';

const App = () => {

    var exploreGiideList = giideList.filter(giideItem => giideItem.category === 'explore');
    var learnGiideList = giideList.filter(giideItem => giideItem.category === 'learn');

    return (
        <>
            <h2>Explore</h2>
            {exploreGiideList.map((giideItem, index) => (
                <GiideCard 
                  key={index + giideItem.title}
                  giideItem={giideItem}
                />
            ))}
            <h2>Learn</h2>
            {learnGiideList.map((giideItem, index) => (
                <GiideCard 
                  key={index + giideItem.title}
                  giideItem={giideItem}
                />
            ))}
        </>
    )
}

export default App;