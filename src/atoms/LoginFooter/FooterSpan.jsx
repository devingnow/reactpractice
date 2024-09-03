import React from 'react'
import { Link } from 'react-router-dom'

const FooterSpan = () => {
    return (
        <div class='footerBox'>
            <span><Link to='/' style={{ textDecoration:'none' , color:'green'}}>React Project</Link></span>
            <span>Copyright</span>
            <span>© RP Corp.</span>
            <span>All Rights Reserved.</span>
        </div>
    )
}

export default FooterSpan
