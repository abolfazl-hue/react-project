import React from 'react';
import {Link} from 'react-router-dom'
import './error.css'

function Error(){
    return(
        <div>
            <Link id = 'err-button' to = '/' style = {{'position' : 'absolute'}} >Back to Homepage</Link>
            <img style ={{'display' : 'flex','width' : '100%' , 'height' : '580px'}} src = 'https://www.boostability.com/wp-content/uploads/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg' />
        </div>
    )
}



export default Error;