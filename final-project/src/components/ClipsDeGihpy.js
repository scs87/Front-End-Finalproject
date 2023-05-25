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
            <img src={giphys?.[0]?.images.downsized.url} alt=''/>
          </div>
          <div className='videosderecha'>
          <img src={giphys?.[1]?.images.downsized.url} alt='' />
          <img src={giphys?.[2]?.images.downsized.url} alt=''/>
          </div>
        </>
        ) : null}
    </div>
  );
};

export default ClipsDeGihpy