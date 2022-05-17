import React, { useState } from 'react'
import { useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Loading from './Loading';
import InfoTour from './InfoTour';
const toursApi = "https://course-api.com/react-tours-project"
const Tours= ()=> {
    const[tour, setTours] = useState([]);
   const[loading, setLoading] = useState(true); 
   
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
<h2 className='refresh'>You have any left tours ,refresh you page to resume</h2>
<button className='btn' onClick={()=> refreshBtn()}>Refresh Tours</button>
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
    
return(
<InfoTour {...place} deleteBtn={deleteBtn} key ={place.id}/>

)
 })}
    </div>
  )
    }
export default Tours;