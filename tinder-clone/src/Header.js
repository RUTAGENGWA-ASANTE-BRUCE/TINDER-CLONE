import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person'
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className='Header'>
      <IconButton>
      <PersonIcon  className='Header_Icon'/>
      </IconButton>

     <img 
     className='tinder_logo'
     src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem-700x394.png'
     alt=''
     />
     <IconButton>
     <ForumIcon  className='Header__Icon'/>
     </IconButton>

     </div>
    

    )
}

export default Header
