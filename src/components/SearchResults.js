import SearchResult from './SearchResult';
import '../styles/SearchResults.css';
import React from 'react';

const searchResults = (props) => {
    let result = null;

    if(props.results) {
        result = (
            <div className="SearchResults">
                {props.results.map((result) => {
                    return <SearchResult key={result.id.videoId} id={result.id.videoId} title={result.snippet.title} description={result.snippet.description} image={result.snippet.thumbnails.default.url} selectVideo={props.selectVideo}/>;
                })}
            </div> 
         );
    }

    return result;
};

export default searchResults;