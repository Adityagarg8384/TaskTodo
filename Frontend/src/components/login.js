import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [temp, setTemp] = useState(false);
    const [id, setId] = useState("");
    const navigate= useNavigate();
    
    const [data, setData] = useState({
        EmailId: "",
        Password: "",
    })

    function Callbackend() {
        console.log("Hello world");
        console.log(data);
        fetch("https://task-todo-xi.vercel.app/login", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                return res.json();
            })
            .catch((err) => {
                console.log(err);
            })
            .then((res) => {
                setTemp(true);
                setId(res.user._id);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <Head>
                <Head1>
                    <Text1>Login</Text1>
                    <Head2>

                        <Input type="text"
                            placeholder="EmailId"
                            value={data.EmailId}
                            onChange={(e) => setData(prevData => ({ ...prevData, EmailId: e.target.value }))}>
                        </Input>

                        <Input type="text"
                            placeholder="Password"
                            value={data.Password}
                            onChange={(e) => setData(prevData => ({ ...prevData, Password: e.target.value }))}></Input>
                        <Button2 style={{ minHeight: "40px", minWidth: "40px" }} onClick={Callbackend}>Submit</Button2>
                    </Head2>
                    <Head3>
                        <Button> Sign in with google</Button>
                        <Text2>Not a user</Text2>
                        <Link to="/register">Register</Link>
                    </Head3>
                    {temp === true ?
                        <>
                            <h1>Hello</h1>
                            <button onClick={()=>{navigate("/", {state:{id}})}}> Move</button>
                        </>
                        : <></>}
                </Head1>
            </Head>

        </>
    );
}

const Head = styled.div`
min-height: 100vh;
min-width: 80vw;
display: flex;
justify-content: center;
align-items:center;
background: black;
`

const Head1 = styled.div`
height: 70vh;
width: 30%;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 5%;
`

const Head2 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const Input = styled.input`
margin-top: 2vh;
// height: 40%;
border: 1px solid black;
height: 6vh;
width: 20vw;
border-radius: 1vw;
padding: 0.5vw;
`

const Head3 = styled.div`
margin-bottom: 10vh;
`

const Button = styled.div`
color: white;
background-color: red;
width: 15vw; 
height: 6vh;
padding: 1vh;
text-align: center;
font-size:2.5vh;
`

const Text1 = styled.h1`
color: black;
margin-top: 10%;
font-size: 5vh;
flex:-0.5:
`

const Text2 = styled.h1`
color: black;
font-size: 2vh;
wrap: true;

`

const Button2 = styled.button`
color: white;
background-color:black;
width: 15vw;
height: 6vh;
margin-top: 10px;
margin-bottom: 20px;
`

export default Login;
