import React,{useEffect,useState} from 'react'
import { API_KEY } from '../../constants/constants';
import instance from '../../axios';
import './RowPost.css';
function RowPost(props) {
    const [results, setresults] = useState()
    useEffect(() => {
        instance.get(`/discover/${props.title.toLowerCase()}?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            setresults(response.data.results)
            console.log(response.data.results)
            })
        .catch((error)=>
        {console.log(error)
        })
    }, [props.title])
    return (
        <div className='row'>
            {
                console.log(results)
            }
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    results&&results.map((result,index)=>(
                        <img className='poster-image' src={'https://image.tmdb.org/t/p/w500/'+result.poster_path} alt="" />
                    ))
                } 
            </div>
        </div>
    )
}

export default RowPost
