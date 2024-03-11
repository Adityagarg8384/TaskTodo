import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'


const task = ({ task, ondelete, ontoggle }) => {
  return (
    <div>
      {task.setreminder ?
        <Tas onDoubleClick={() => { ontoggle(task.id) }}>
          <H3 >{task.task} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => ondelete(task._id)} /> </H3>
          <p>{task.date}</p>
        </Tas>
        :
        <Task onDoubleClick={() => { ontoggle(task.id) }}>
          <H3 >{task.task} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => ondelete(task._id)} /> </H3>
          <p>{task.date}</p>
        </Task>
      }

    </div>
  )
}

const Task = styled.div`
background: #f4f4f4;
margin: 5px;
padding: 10px 20px;
cursor: pointer;
`

const H3 = styled.h3`
display: flex;
  align-items: center;
  justify-content: space-between;
`

const Tas = styled.div`
background: #f4f4f4;
margin: 5px;
padding: 10px 20px;
cursor: pointer;
border-left: 5px solid green;
`

export default task;
