import React, { useState } from 'react'
import { useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import App from './App';
const toursApi = "https://course-api.com/react-tours-project"
const Tours= ()=> {
    const[user, setUsers] = useState([]);
   const[loading, setLoading] = useState(true);
//    const[error, setError] = useState(false)
    useEffect(()=>{
fetchTours()
},[]);
const fetchTours =()=>{
    Axios.get(toursApi).then((resp)=>{
        setLoading(false)
        setUsers(resp.data)
}
 )
}
console.log(user)
const deleteBtn=(id)=>{
let newTours = user.filter((tour)=>{
    return tour.id !== id
})
setUsers(newTours)
}
const refreshBtn =()=>{
    fetchTours()
}
if (loading === true){
    return(
        <div>
    <h1> Loading</h1>
        </div>
    )
}
if (user.length === 0){
    return(
        <div>
<h2>You have any left tours ,refresh you page to resume</h2>
<button className='refresh-btn' onClick={refreshBtn}>Refresh Tours</button>
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
           {user.map((person)=>{
               const{name,image,id,info,price} =person
return(
<div className ='single-tour' key={id}>
    <img src={image} alt={name}/>
    <div className='tours-id'>
<div className='tour-info'>
    <h4>{name}</h4>
<h4 className='tour-price'>{price}</h4>
</div>
<p>{info}</p>
<button className='delete-btn' onClick={()=>deleteBtn(id)}>Remove Tours</button>
    </div>
</div>
)
 })}
    </div>
  )
    }
export default Tours;