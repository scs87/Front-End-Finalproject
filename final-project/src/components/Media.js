import React from 'react'
import "./Media.css"

const Media = () => {
    return (
        <div className='media'>
            <div className='row'>
                <div className='row-header'>
                    <img src='/images/trending.svg' alt='Trending' />
                    <h1>Trending</h1>
                </div>
            </div>
            <div className='row'>
                <div className='row-header'>
                <img src='/images/artists.svg' alt='Artists' />
                    <h1>Artists</h1>
                </div>
            </div>
            <div className='row'>
                <div className='row-header'>
                <img src='/images/clips.svg' alt='Clips' />
                    <h1>Clips</h1>
                </div>
            </div>
            <div className='row'>
                <div className='row-header'>
                <img src='/images/stories.svg' alt='Stories' />
                    <h1>Stories</h1>
                </div>
            </div>
        </div>
    )
}

export default Media