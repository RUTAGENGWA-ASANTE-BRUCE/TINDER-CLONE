import React from 'react'
import "./SwipeButton.css"
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton"


function SwipeButton ()
{
    return (
        <div className='SwipeButton'>
            <button className='replayButton'>
                <IconButton>
                    <ReplayIcon className='ReplayIcon' />
                </IconButton>
            </button>


            <IconButton>
                <CloseIcon className='CloseIcon' />
            </IconButton>

            <IconButton>
                <StarRateIcon className='StarRateIcon' />
            </IconButton>

            <IconButton>
                <FavoriteIcon className='FavoriteIcon' />
            </IconButton>

            <IconButton>
                <FlashOnIcon className='FlashOnIcon' />
            </IconButton>


        </div>
    )
}

export default SwipeButton
