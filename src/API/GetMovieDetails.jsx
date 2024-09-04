export const GetMovieDetail=async({params})=>{
    console.log(params)
    const id=params.movieID
    try{
        // const response=await fetch  ('http://www.omdbapi.com/?i=tt3896198&apikey=82972e02')
        const response=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=82972e02`)
        const Data=response.json()
        console.log(Data)
        return Data

    }catch(error){
        console.log(error)
    }

} 