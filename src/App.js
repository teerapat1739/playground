import React from 'react'
import styled from 'styled-components'


const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`
const LI = styled.li`
  background: tomato;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  line-height: 150px;

`
export const App = () => {
  return (
    <React.Fragment>
      <UL class="flex-container">
        <LI class="flex-item">1</LI>
        <LI class="flex-item">2</LI>
        <LI class="flex-item">3</LI>
        <LI class="flex-item">4</LI>
        <LI class="flex-item">5</LI>
        <LI class="flex-item">6</LI>
      </UL>
    </React.Fragment>
  )
}
