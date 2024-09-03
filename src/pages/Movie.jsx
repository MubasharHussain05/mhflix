import { useLoaderData } from "react-router-dom"
import { Card } from "../components/Layout/UI/Card"


export const Movie=()=>{
    const moviData=useLoaderData()
    console.log(moviData)
    return <>
    <ul className="movie-container grid grid-four--col" style={{backgroundColor:"#00040F"}}>
        {moviData.Search.map((curMovie)=>{
            return <Card key={curMovie.imdbID} curMovie={curMovie}/>
        })}
        </ul>
    </>
}