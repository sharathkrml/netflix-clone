import instance from '../../axios';
import { API_KEY } from '../../constants/constants';
import React,{useEffect, useState} from 'react'
import './Banner.css';
function Banner() {
    const [bannermovie, setBannermovie] = useState()
    useEffect(() => {
        instance.get(`/trending/all/day?api_key=${API_KEY}`)
        .then((response)=>{
            setBannermovie(response.data.results[Math.floor((Math.random() * 20) + 1)])
            })
    }, [])
    return (
        <div style={{backgroundImage:`url(${bannermovie?'https://image.tmdb.org/t/p/w500'+bannermovie.backdrop_path:''})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{bannermovie?bannermovie.title:''}</h1>
                <div className='banner-buttons'>
                    <button className='play'>Play</button>
                    <button className='mylist'>My List</button>
                </div>
                <h1 className='description'>{bannermovie?bannermovie.overview:''}</h1>
            </div>
           {/* use div.fade-bottom */}
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
