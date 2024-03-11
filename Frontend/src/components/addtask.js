import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';


const Addtask = ({onAdd}) => {
    const [text, settext]= useState();
    const [day, setday]= useState();
    const [remainder, setremainder]= useState(false);
    
    const onsubmit= (e)=>{
      e.preventDefault();
      if(!text){
        alert('Please add a task');
        return;
      }
      onAdd({text, day, remainder});
      settext('');
      setday('');
      setremainder(false);
    }
    return (
      <Addform onSubmit={onsubmit}>
          <Formcontrol>
              <Labe>Task</Labe>
              <Inp type='text'placeholder='Add task' value={text} onChange={(e)=> settext(e.target.value)}/>
          </Formcontrol>
          <Formcontrol>
              <Labe>Day and time</Labe>
              <Inp type='datetime-local'placeholder='Add task' value={day} onChange={(e)=> setday(e.target.value)}/>
          </Formcontrol>
          <Formcontrol2>
              <Labe2>set reminder</Labe2>
              <Inp2 type='checkbox' checked={remainder} value={remainder} onChange={(e)=> setremainder(e.currentTarget.checked)}/>
          </Formcontrol2>
          <Inp3 type= 'submit' value='save task' className='btn btn-block'/>
      </Addform>
    )
  }

const Addform= styled.form`
margin-bottom: 40px;
`

const Formcontrol= styled.div`
margin: 20px 0;
`
const Formcontrol2= styled.div`
margin: 20px 0;
display: flex;
align-items: center;
justify-content: space-between;
`

const Labe= styled.label`
display: block;
`
const Labe2= styled.label`
display: block;
flex: 1;
`

const Inp2= styled.input`
width: 100%;
height: 40px;
margin: 5px;
padding: 3px 7px;
font-size: 17px;
flex: 2;
height: 20px;
`

const Inp= styled.input`
width: 100%;
height: 40px;
margin: 5px;
padding: 3px 7px;
font-size: 17px;
`
const Inp3= styled.input`
display: block;
width: 100%;
background: #000;
color: #fff;
border: none;
padding: 10px 20px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 15px;
font-family: inherit;
`

export default Addtask;
