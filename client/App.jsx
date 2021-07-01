import React from 'react';
import { giideList } from '../data.js'
import GiideCard from './components/GiideCard.jsx';

const App = () => {

    var exploreGiideList = giideList.filter(giideItem => giideItem.category === 'explore');
    var learnGiideList = giideList.filter(giideItem => giideItem.category === 'learn');

    return (
        <div className="exploreGiideList">
            {/* Explore Giide List */}
            <h2>Explore</h2>
            <div className="cardContainer cardContainerFeatured">
                {exploreGiideList.map((giideItem, index) => (
                    <GiideCard
                        key={index + giideItem.title}
                        giideItem={giideItem}
                    />
                ))}
            </div>
            {/* Learn Giide List */}
            <h2>Learn</h2>
            <div className="cardContainer cardContainerFeatured">
                {learnGiideList.map((giideItem, index) => (
                    <GiideCard
                        key={index + giideItem.title}
                        giideItem={giideItem}
                    />
                ))}
            </div>
        </div>
    )
}

export default App;