import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

function Greeting(){
  return(
    <>
    <Book />,
    <Book />,
    <Book />,
    <Book />,
    <Book />,
    <Book />,
    </>
  )
  
}

const Book= ()=>{
  return (
    <article className='girl'>
      <Image></Image>
      <Title />
      <i><Author /> </i>
    </article>
  )
}

const Image = ()=>{ 
  return(
    <img src="https://picsum.photos/200/300"></img>
  )
}
const Title = ()=>{
  return(
    <h2>Mern Basics</h2>
  )  
}
function Author() {
  return(
    <h4>Kumar Utkarsh</h4>
  )  
}


ReactDom.render(<Greeting />,document.getElementById('root'));