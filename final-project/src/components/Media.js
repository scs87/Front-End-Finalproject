import React, { useEffect, useState } from 'react'
import "./Media.css"


const Media = () => {
    const [trending, setTrending] = useState ([]);

    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    };

    const getTrendingGiphys = async () => {
        //get los giphys
        const trending = await fetchTrendingGiphys();
        // seteamos los giphys
        setTrending(randomizeData(trending.data));
    };

    useEffect (() => {
        getTrendingGiphys();

    }, []);

    console.log(trending)

   
    return (
        <div className='media'>
            <div className='row'>
                <div className='row-header'>
                    <img src='/images/trending.svg' alt='Trending' />
                    <h1>Trending</h1>
                </div>
                <div className='trending-container'>
                    <p>Content</p>
                </div>
            </div>
            <div className='row'>
                <div className='row-header'>
                    <img src='/images/artists.svg' alt='Artists' />
                    <h1>Artists</h1>
                </div>
                <div className='artists-container'>
                    <p>Content</p>
                </div>
            </div>
            <div className='row'>
                <div className='row-header'>
                    <img src='/images/clips.svg' alt='Clips' />
                    <h1>Clips</h1>
                </div>
                <div className='clips-container'>
                    <p>Content</p>
                </div>
            </div>
            <div className='row'>
                <div className='row-header'>
                    <img src='/images/stories.svg' alt='Stories' />
                    <h1>Stories</h1>
                </div>
                <div className='stories-container'>
                    <p>Content</p>
                </div>
            </div>
        </div>
    )
}

export default Media