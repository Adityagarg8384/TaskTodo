import Header from './components/header'
import Tasks from './components/tasks'
import React,{ useState, useEffect } from "react"
import Addtask from './components/addtask'
import styled from 'styled-components'
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom'

var cross= false;
export default function Main({ res }) {
  const [showaddtask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState("");
  const [socket, setSocket] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);
  const location= useLocation();
  const [userId, setUserId]= useState(0);

  useEffect(() => {
    if(location.state!==null){
    setUserId(location.state.id);
    }

    const socketInstance = io('http://localhost:5000');
    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      console.log("Connected to server throught io");
    })

    socketInstance.on('message', (data) => {
      console.log("Hello world");
      if(cross===false){
        console.log(cross);
      setIsPlaying(true);

      
      const timeoutId = setTimeout(() => {
        setIsPlaying(false);
      }, 20000);
    }
      cross=false;
      console.log("Received some data from server" + data);
    })
  }, [])

  const getdata = () => {
    try {
      fetch(`http://localhost:3001/api/v1/gettask/${userId}`,{
      })
        .then(async (response) => {
          const data = await response.json();
          setTasks(data.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getdata();
    }, 1000);
  });
  

  const addtask = async (tas) => {
    console.log(userId);
    let id = Math.floor(Math.random() * 10000) + 1;
    let newtask = { id, ...tas };
    const task = newtask.text;
    const setreminder = newtask.remainder;
    const date = newtask.day;
    try {
      fetch("http://localhost:3001/api/v1/addtask", {
        method: 'POST',
        body: JSON.stringify({
          userid:userId,
          id,
          task,
          setreminder,
          date
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    catch (err) {
      console.log(err);
    }

  }


  const deletetask = async (id) => {
    console.log(id);
    cross=true;
    console.log(cross);
    try {
      fetch(`http://localhost:3001/api/v1/deletetask/${id}`, {
        method: 'DELETE',
        body: id,
      }).then(response => {
        getdata();
        console.log(response);
      })
        .catch((err) => {
          console.log(err);
        })
    }
    catch (err) {
      console.log(err);
    }
  }

  const toggle = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, remainder: !task.remainder } : task));
  }
  const tb = () => {
    console.log(showaddtask);
    setShowAddTask(!showaddtask)
  }

  return (
    <Container onLoad={getdata}>
       {isPlaying && <audio src="music.mp3" autoPlay />}
      <Header onAdd={tb} />
      {showaddtask && <Addtask onAdd={addtask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} ondelete={deletetask} ontoggle={toggle} />) : 'No task to show current'}
    </Container>
  );
}




const Container = styled.div`
max-width: 500px;
margin: 30px auto;
overflow: auto;
min-height: 300px;
border: 1px solid steelblue;
padding: 30px;
border-radius: 5px;
`
