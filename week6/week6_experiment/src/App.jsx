const { useState,React } = require("react")

function App(){

  return(
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title="devesh2"></Header>
      <Header title="devesh2"></Header>
      <Header title="devesh2"></Header>           
    </>/* here we sending same parameters so memo does not rerendering*/
  )
}


function HeaderWithButton(){          //HeaderWithButton is only rerendering not app component
  const {title,updateTitle} = useState("Devesh");
  
  function setTitle(){
    updateTitle("My name is "+Math.random());
  }
  return(
    <>
    <button onClick={setTitle}></button>
    <Header title={title}> </Header>
    </>
  )
}



const Header = React.memo(function Header({title}){    //we can also write (props) and then props.title
  return(
    <>
      {title}
    </>
  )
})  //when we pass same parameters and learn about it 

export default App;