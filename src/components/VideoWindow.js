import '../styles/VideoWindow.css';
import React from 'react';

const videoWindow = (props) => {
    let result = null;

    if(props.player){
        result = (
            <div className="VideoWindow">
                <img className="GoBack" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR_7CgqTSxI3rxNQIPvSNzFpVhDmiIWONYKG1yFr4cFMgH5aam&usqp=CAU" alt="Go back" onClick={() => props.goBack()}/>
                <div dangerouslySetInnerHTML={ {__html:  props.player ? props.player : ""}}/>
            </div>
        );
    }

    return result;
};

export default videoWindow;