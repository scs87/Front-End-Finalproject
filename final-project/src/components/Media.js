import React, { useEffect, useState } from 'react'
import "./Media.css"
import { fetchSearchedGiphys, fetchTrendingGiphys } from '../api/giphyApi';
import TrendingGiphy from './TrendingGiphy';
import giphyArtists from '../artists';
import ArtistGiphy from './ArtistGiphy/ArtistGiphy';
import ClipsDeGihpy from './Clips/ClipsDeGihpy';
import { getGifsApi } from '../api/gif.api';


const Media = () => {
    const [trending, setTrending] = useState([]);
    const [artists, setArtists] = useState([]);
    const [clips, setClips] = useState([]);
    const [stories, setStories] = useState([]);
    const [dbgif, setDbgif] = useState([]);

    const randomizeData = (content) => {

        return content.data.sort(() => Math.random() - 0.5);
    };

    const getTrendingGiphys = async () => {
        //get los giphys
        const trending = await fetchTrendingGiphys();
        // seteamos los giphys
        setTrending(randomizeData(trending.data));
    };

    const getArtists = async () => {
        const artists = await Promise.all(
        giphyArtists.map(async (giphyArtist) => {
            return fetchSearchedGiphys(giphyArtist).then((res) => res.data.data);
        })
        );
        setArtists(artists.flat()); 
     };

     const getSearchedGiphys = async (query, setState) => {
        const searched = await fetchSearchedGiphys(query);
        setState (randomizeData(searched.data));

     }

    useEffect(() => {
        getTrendingGiphys();
        getArtists();
        getSearchedGiphys("cats", setClips);
        getSearchedGiphys("pose", setStories);
    }, []);

    useEffect(() => {
        getGifsApi().then((result) =>{
          setDbgif (result.gif)
        })
      
        
      }, [])
        

    

    return (
        <div className='media'>
            <div className='row'>
                <div className='row-header'>
                    <img src='/images/trending.svg' alt='Trending' />
                    <h1>Trending</h1>
                </div>
                <div className='trending-container'>
                    {trending?.map((tendringGiphy, index) => {
                        return <TrendingGiphy giphy={tendringGiphy} key={index} />
                    })}
                </div>
            </div>
            <div className='row'>
                <div className='row-header'>
                    <img src='/images/artists.svg' alt='Artists' />
                    <h1>Artists</h1>
                </div>
                <div className='artist-container'>
                    {artists.map((artistGiphys, index) =>{
                        return <ArtistGiphy  giphy={artistGiphys} key={index} />
                    })}
                </div>
            </div>
            <div className='row'>
                <div className='row-header'>
                    <img src='/images/clips.svg' alt='Clips' />
                    <h1>Clips</h1>
                </div>
                <div className='clips-container'>
                    <ClipsDeGihpy giphysArray={clips} />
                </div>
            </div>
            <div className='trending-container'>
                    {dbgif.map((dbgif, index) => {
                        return (
                            <div>
                                <p>{dbgif.name}</p>
                                <img src={dbgif.imageurl}  />
                            </div>
                        )
                    })}
                </div>
            
            
        </div>
    )
}

export default Media