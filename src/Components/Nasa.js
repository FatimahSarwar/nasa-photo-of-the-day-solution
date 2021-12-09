import React from 'react';
import styled from 'styled-components '
const Title = styled.h1 `
font-size: 100px;
color: 'pink';
padding: 8px;
`
const Nasa = (props) => {
  return (
    <div>
      
      <Title><h1>NASA FUN</h1></Title>
      <img src={props.nasaData.url} alt="Nasa APOD" />
      <p>{props.nasaData.date}</p>
      <p>{props.nasaData.explanation}</p>
    </div>
  )
}

export default Nasa;