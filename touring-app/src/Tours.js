import React, { useState } from 'react'
import { useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Loading from './Loading';
const toursApi = "https://course-api.com/react-tours-project"
const Tours= ()=> {
    const[tour, setTours] = useState([]);
   const[loading, setLoading] = useState(true); 
   const[readMore, setReadMore] = useState(false)
    useEffect(()=>{
fetchTours()
},[]);
const fetchTours =()=>{
    Axios.get(toursApi).then((resp)=>{
        setLoading(false)
        setTours(resp.data)
}
 )
}

const deleteBtn=(id)=>{
let newTours = tour.filter((tour)=>{
    return tour.id !== id
})
setTours(newTours)
}
const refreshBtn =()=>{
    fetchTours()
}
if (loading === true){
    return(
        <div>
    <Loading></Loading>
        </div>
    )
}
if (tour.length === 0){
    return(
        <div>
<h2>You have any left tours ,refresh you page to resume</h2>
<button className='refresh-btn' onClick={()=> refreshBtn()}>Refresh Tours</button>
        </div>
    )
}
    return (
        <div className=''>
    <div className='title'>
    <h2 className='tour'><em>Our Tours</em></h2>
<div className='underline'>
</div>
    </div>
           {tour.map((place)=>{
               const{name,image,id,info,price} =place
return(
<div className ='single-tour' key={id}>
    <img src={image} alt={name}/>
    <div className='tours-id'>
<div className='tour-info'>
    <h4>{name}</h4>
    
<h4 className='tour-price'>{price}</h4>
</div>
<p>{readMore ? info : `${info.substring(0,200)}`} </p>

<button className='readMore' onClick={()=>setReadMore(!readMore )}>{readMore ? <p className='showLess'>show less</p>: <p className='showMore'>show More</p>}</button>

<button className='delete-btn' onClick={()=>deleteBtn(id)}>Remove Tours</button>
    </div>
</div>
)
 })}
    </div>
  )
    }
export default Tours;