import React from 'react';
import { giideList } from '../data.js'
import GiideCard from './components/GiideCard.jsx';

const App = () => {

    var exploreGiideList = giideList.filter(giideItem => giideItem.category === 'explore');
    var learnGiideList = giideList.filter(giideItem => giideItem.category === 'learn');

    return (
        <div className="giide_list">
            <h2>Explore</h2>
            <div className="cardContainer cardContainerFeatured">
                {exploreGiideList.map((giideItem, index) => (
                    <GiideCard
                        key={index + giideItem.title}
                        giideItem={giideItem}
                    />
                ))}
            </div>
            <h2>Learn</h2>
            <div className="explore_cardContainer">
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