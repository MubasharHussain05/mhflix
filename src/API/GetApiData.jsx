export const ApiData=async()=>{
    try{
        // const response=await fetch  ('http://www.omdbapi.com/?i=tt3896198&apikey=82972e02')
        const response=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=82972e02&s=titanic&page=1`)
        const Data=response.json()
        console.log(Data)
        return Data

    }catch(error){
        console.log(error)
    }

} 