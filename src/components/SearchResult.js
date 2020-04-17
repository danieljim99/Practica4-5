import '../styles/SearchResult.css';
import React from 'react';

const searchResult = (props) => {
    return (
        <div className="SearchResult" onClick={() => props.selectVideo(props.id)}>
            <img className="ResultImage" src={props.image} alt={props.title}/>
            <div className="ResultInfo">
                <div className="ResultTitle">
                    {props.title}
                </div>
                <div className="ResultDescription">
                    {props.description}
                </div>
            </div>
        </div>
    );
};

export default searchResult;