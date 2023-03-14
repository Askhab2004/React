//function Text() {
  //  return(
    //  <p>Lorem</p>
    //)
  //}

//export default Text

function Text(props) {
   
    return(
        <>
        <p>
        {props.name}
      </p>
      <p>
        {props.age}
      </p>
       <p>
        {props.city}
       </p>
  
        </>
    )
  }
  
  export default Text
  
  