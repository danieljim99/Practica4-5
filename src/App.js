import SearchResults from './components/SearchResults';
import VideoWindow from './components/VideoWindow';
import SearchBar from './components/SearchBar';
import React, {useState} from 'react';
import axios from 'axios';
import './styles/App.css';

function App() {
  const [results, setResults] = useState(undefined);
  const [selectedVideo, setSelectedVideo] = useState(undefined);
  const [relatedTo, setRelatedTo] = useState(undefined);

  const apiKey = "AIzaSyBvqwuUUWqw60a6K-5ywW4SXybUQ5zk5Fs";
  const youtubeEndpoint = "https://www.googleapis.com/youtube/v3/";

  const searchHandler = (inputId) => {
    axios.get(`${youtubeEndpoint}search?key=${apiKey}&q=${document.getElementById(inputId).value}&part=snippet&type=video&maxResults=50`).then(response => {
      setResults(response.data.items);
    })
  };

  const selectVideoHandler = (videoId) => {
    axios.get(`${youtubeEndpoint}videos?key=${apiKey}&id=${videoId}&part=player&maxResults=1`).then(response => {
      setSelectedVideo(response.data.items[0].player.embedHtml);
    })
    
    axios.get(`${youtubeEndpoint}search?key=${apiKey}&relatedToVideoId=${videoId}&part=snippet&maxResults=50&type=video`).then(response => {
      setRelatedTo(response.data.items);
    })
  }

  const goBackHandler = () => {
    setSelectedVideo(undefined);
  }

  const videoPlayer = (
    <div className="App">
      <VideoWindow player={selectedVideo} goBack={goBackHandler}/>
      <SearchResults results={relatedTo} selectVideo={selectVideoHandler}/>
    </div>
  );

  const videoSearch = (
    <div className="App">
      <SearchBar search={searchHandler}/>
      <SearchResults results={results} selectVideo={selectVideoHandler}/>
    </div>
  );

  return selectedVideo ? videoPlayer : videoSearch;
}

export default App;
