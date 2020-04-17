import '../styles/SearchBar.css';
import React from 'react';

const searchBar = (props) => {
    return (
       <div className="SearchBar">
           <input className="SearchInput" id="SearchInput" type="text"/>
           <div className="SearchButton" onClick={() => props.search("SearchInput")}>
               Search
            </div>
       </div> 
    );
};

export default searchBar;