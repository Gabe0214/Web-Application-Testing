import React,{useState} from 'react'
import Display from './Display'


const Dashboard = () => {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)


 const ballsClick = () => {
     if(balls === 4 ){
         return setBalls(balls * 0) + setStrikes(strikes * 0)
     } else {
         return setBalls(balls + 1) 
     }
 }

  const hitClick = () => {
       setBalls(balls * 0)
       setStrikes(strikes * 0) 
  }
  
  const strikesClick = () => {
    if(strikes === 3 ){
        return setStrikes(strikes * 0) + setBalls(balls * 0) 
    } else {
        return setStrikes(strikes +1)
    }
}


const foulClick = () => {
    if(strikes <= 1) {
        return setStrikes(strikes + 1)
    }  
   
        if(strikes === 2){
           return setStrikes(strikes)
       }
   
   
   
    // if(strikes === 0) {
    //   return setStrikes(strikes +1)
    // }
    //  else if( strikes === 1) {
    //      return setStrikes(strikes + 1)
    //  }  
    //  if(strikes === 2){
    //      return setStrikes(strikes)
    //  }  
}

  return(
      <div>
      <Display balls ={balls} strikes ={strikes}/> 
      <button onClick ={ballsClick}>Balls</button>
      <button onClick ={strikesClick}>Strikes</button>
      <button onClick= {hitClick }>Hit</button>
      <button onClick={foulClick}>Foul</button>
      </div>
  )

}

export default Dashboard