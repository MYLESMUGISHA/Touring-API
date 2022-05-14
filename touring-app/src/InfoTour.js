import React from 'react'
import { useState } from 'react'


const InfoTour = ({name,image,id,info,price,deleteBtn}) => {
    const[readMore, setReadMore] = useState(false)

    console.log(info)
    return (

    <div className ='single-tour' key={id}>
    <img src={image} alt={name}/>
    <div className='tours-id'>
<div className='tour-info'>
    <h4>{name}</h4>
    
<h4 className='tour-price'>{price}</h4>
</div>
<p>{readMore ? info: `${info.substring(0,200)}`} </p>

<button className='readMore' onClick={()=>setReadMore(!readMore )}>{readMore ? <p className='showLess'>show less</p>: <p className='showMore'>show More</p>}</button>

<button className='delete-btn' onClick={()=>deleteBtn(id)}>Remove Tours</button>
    </div>
</div>

    
  )
}

export default InfoTour
