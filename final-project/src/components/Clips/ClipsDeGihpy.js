import React, { useEffect, useState } from 'react'
import "./ClipsDeGihpy.css";

const ClipsDeGihpy = ({ giphysArray }) => {
  const [giphys, setGiphys] = useState([]);

  const randomizeData = (giphysArray) => {
    return giphysArray.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    let randomData = randomizeData(giphysArray);
    setGiphys(randomData.slice(0.3));

  }, [giphysArray]);

  return (
    <div className='videos'>
      {giphys && giphys.length ? (
        <>
          <div className='videogrande'>
            <img src={giphys?.[0]?.images.downsized.url} alt='' />
            <div className='text'>
              <img src='/images/giphyIconDark.png' alt='darklogo' />
              <p>{giphys?.[0]?.title}</p>
            </div>
          </div>
          <div className='videosderecha'>
            <img src={giphys?.[1]?.images.downsized.url} alt='' />
            <div className='text'>
              <img src='/images/giphyIconDark.png' alt='darklogo' />
              <p>{giphys?.[1]?.title}</p>
            </div>
            <img src={giphys?.[2]?.images.downsized.url} alt='' />
            <div className='text'>
              <img src='/images/giphyIconDark.png' alt='darklogo' />
              <p>{giphys?.[2]?.title}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ClipsDeGihpy