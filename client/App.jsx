import React from 'react';
import { giideList } from '../data.js'
import GiideCard from './components/GiideCard.jsx';

const App = () => {

    var exploreGiideList = giideList.filter(giideItem => giideItem.category === 'explore');
    var learnGiideList = giideList.filter(giideItem => giideItem.category === 'learn');

    return (
        <div className="explore_exploreGiideList__1R6Iy">
            <h2>Explore</h2>
            <div className="explore_cardContainer__1FiHX explore_cardContainerFeatured__2IzXs">
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