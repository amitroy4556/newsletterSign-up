import React from 'react'
import ReactDOM from 'react-dom'
function GetDate(){
  const date=new Date();
  const hour=date.getHours();
  let timeOfDay
  if(12>hour){
    timeOfDay="Morning"
  }else if (hour>12 && 17>hour) {
    timeOfDay="Evening"
  }else{
    timeOfDay="Night"
  }
  return (
    <h1>Good {timeOfDay}</h1>
  )
}
ReactDOM.render(<GetDate />,document.getElementById("root"))
