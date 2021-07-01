import React from 'react';

const GiideCard = ({ giideItem }) => {
    return (
        <>
            <a href="https://www.youtube.com/watch?v=tSDXguiVLso" 
                target="_blank"
                rel="noopener noreferrer"
                tabIndex="0"
                className="components_exploreGiideCard components_exploreGiideCardFeatured"
                >
                <div className="components_giideCardThumbnailContainer">
                    <img src={giideItem.thumbnailUrl.default} alt="giide card thumbnail" />
                </div>
                <div className="components_giideCardContent">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB/CAYAAADVal3nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATfSURBVHgB7d1BbttGFMbxebLVTbzoEdSeQCniossUaCFnl+6jJs4N4gvU8gFapxewAjt771rYBaJlYBuIblDdIF60KaBSfCEFTWInFk2RHM6bx++3EGxYXv0xHGlGQ5FZuHd6eJ/YPDamdT/59dKYePz/LBqMH2xPDASJ0od7py9/Iebdm5/CQ0QOE22evOwmAd/c/lREDk2LDf+W76n0pL3W/nvz5PCg+8dBx4B4tHl6+NYwfWlWhpEsXXJZPmJTCiJLVUFcC5GlqTCuhchSOIhrIbJvDuNaiOxLDXEtRK5bjXEtRK6Lh7gWIrvmMa6FyK4IiJviCVFrOI2mLxC5OkLiWohcJWFxLUSugtC4FiKXITyutYj8z/T5+KftSwO5tEwQqMPMu+0762++/evosYFcAhm5n0pGcot2z3549MLAUoHGtRA5S+BxLUS+iZK4FiJfpSyuhcgppXGtZkdWHtdqZuSGxLWaFblhca1mRG5oXEt35IbHtXRGRtxrdEVG3BvpiIy4mXjCZLYvfuyPTIAC2fLzhTrE9CoZAK/SOw+YwGDkrmbExINQRjLiFhNEZMQtR3RkxK0AGTqezqbPpH2IDy+oKsCGH0q8XwhGrhMyjsggrlN+IyNuLfxERtxa1RsZcb2oJzLieuU2MuKK4CYy4opSbWTEFamayIgrWrnIiBuEYpERNyirRUbcIOWLjLjBuv1+IYgbvOWREVeNz28Kg816NT7eFMZ+YABx1aFOe619MP8Jl2Wt6C5GrlIzM+sirmKIq1SLaIK4GjFP0g/KI642Sdi1OPo+/RFxVeHhnXfR3deLlap1A8FL3suOzIwHFw+un1lC3JAll2COzfanUS3EDRAbfps8/H7R6+9mPQ9zbljYxLy/8W/09W1hUxi5YeB0Xl2Po6evt55M8v4T4sqWXIHNmGPeWTavZkFcmZKRypcU09751qN9UxDiCmNfLG28i/ZHJb+JBXHlWMyrs5Xm1SyI6x8vFiH2isyrWRDXn/m82mJ6dt5zcxtCvM/1IJ1XmXkvfb961nN3f0mM3HqlH2kaJvPqXlXzahbErYezeTUL4rrF6eI+GbNz3usfm5phznXEzqvJ/uo3Zx7CpjByq5cu7j/f+C8ajDx/HSziVmc+r84vwVv9sREAccvjxab50zpfLOWBuMVdWdzvF17cdwkvqIphuwhRZtfGNYzc1RTaNPcFcfPxsghRFuJm+zCvXgi+/C6DuEtUuWnuC+J+Lh2tx8ni/k4I82oWxP0oyHk1C+J+WNynwXlP17dwNjquhnk1S1PjzjfNk0WIHY1RrabFVTevZmlKXLGL+y6pj5v3RJxGmjcOVjoRp5HGkRvU4r5LmuKWOhGnkYa4lZyI0yjouNoXIcoKNW7lJ+I0Ci1uoxYhygolrvMTcRqJf59b14k4jSSP3FpPxGkkMS7m1YpIiuv1RJxGIuZcCSfiNPI9csWciNPIV1xxJ+I0qjtuIzfNfakrrvgTcRrV8YIqiBNxGrkcudg098xFXCxCCFFl3KBPxGlUSVxsmstUNq6aE3EaFY2LeTUASVyaJK06OZ+v9kScRi3mOFek64v7CBuC9eiLaL89bf9syHy15DmNOBGnEaUP3/057ES09isRPbz6R8yrYaOrv2yeHHVjQ935H2bxBFHD9h67dBAkBuBAbgAAAABJRU5ErkJggg==" alt="green play icon" className="play_button"></img>
                    <div className="components_giideCardContent_container">
                        <div className="components_giideCardContent_titleDuration">
                            <p style={{fontWeight: "500"}}>{giideItem.title}</p>
                            <p>{giideItem.duration}</p>
                        </div>
                        <p className="components_giideCardAuthor">By {giideItem.author}</p>
                    </div>
                </div>
            </a>
        </>
    )
}
export default GiideCard;