import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Avatar,Skeleton } from 'antd';

const FetchData = () => {
    const [photos,setPhotos] = useState([]);
    const [loading,setloading] = useState(false);
    useEffect(()=>{
        setloading(true);
        fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>{
            return res.json()
        }).then((data)=>{
            setPhotos(data);
            setloading(false)
        }).catch((error)=>{
          console.error("Error fetching data:", error);
          setloading(false);
        })
    },[])
   
  return <>
  {loading ?  <Skeleton
    avatar
    paragraph={{
      rows: 4,
    }}
  /> : photos.length === 0 ? (
    <p>No photos available.</p>
)  : (<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"}}>
  {photos.map((photo) => (
         <div key={photo.id}>
        <Avatar src={photo.url} alt={photo.title} style={{
        width:"200px",
        height:"200px"
      }}/>
         <p>{photo.title}</p>
       </div>
      ))}
  </div>)}
  
  </>
}

export default FetchData
