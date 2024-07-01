import React from 'react'

import './Topbar.css'

export default function Topbar() {
  return (
    <div >
        <nav className='header'>
            <div className='titleheader'>
            <h2 className='title'>Sabzlearn</h2>
            <img className='imgsabzlearn' src="/images/heart.png" alt="" />
            </div>
            <div className='headericons'>
            <img  className='topbarIcon' src="/images/bell.png" alt="" />
            <img className='topbarIcon' src="/images/earth.png" alt="" />
            <img  className='topbarIcon'src="/images/gear.png" alt="" />
            <img className='topbarIcon' src="/images/human.png" alt="" />

            </div>
          
         
         
        </nav>
    </div>
  )
}
