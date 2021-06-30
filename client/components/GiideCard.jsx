import React from 'react';

const GiideCard = ({ giideItem }) => {
    console.log(giideItem)
    return (
        <>
            <img src={giideItem.thumbnailUrl.default} alt=""/>
            <div>{giideItem.title}</div>
            <div>By {giideItem.author}</div>
            <div>{giideItem.duration}</div>
        </>
    )

}

export default GiideCard;