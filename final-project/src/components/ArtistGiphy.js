import React from 'react';
import "./ArtistGiphy.css";

const ArtistGiphy = ({giphy}) => {
  return (
    <div className='artist-ghipy'>
        <img src={giphy.images.downsized.url} alt={giphy.title}/>
    </div>
  );
};

export default ArtistGiphy