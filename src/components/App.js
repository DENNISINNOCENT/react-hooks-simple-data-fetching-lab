// create your App component here
import React,{useEffect,useState} from "react"



function App() {

    const[dog,setdog] = useState('')
useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())

    .then((data)=>{setdog(data.message)

    })
},[])
if(!dog)return <p>Loading...</p>
 return(
    <img src={dog} alt="A Random Dog">
      </img>
  )
}

export default App