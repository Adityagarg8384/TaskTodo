import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Register = () => {
    const [data, setData]= useState({
        FirstName:"",
        LastName:"",
        EmailId:"",
        Password:"",
    })

    function Callbackend(){
        const t= JSON.stringify(data);
        fetch("http://localhost:3001/api/v1/register", {
            method:'POST',
            body:t,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        })
        .then((res)=>{
            return res.json();
        })
        .catch((err)=>{
            console.log(err);
        })
        .then((res)=>{
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
  return (
    <>
    <Head>
    <Head1>
    <Text1>Register</Text1>
    <Head2>
    <Input type="text" 
    placeholder="FirstName" 
    value={data.FirstName}
    onChange={(e)=>setData(prevData=>({ ...prevData,FirstName:e.target.value}))}></Input>
    <Input type="text"
    placeholder="LastName"
    value={data.LastName} 
    onChange={(e)=>setData(prevData=>({ ...prevData,LastName:e.target.value}))}></Input>

    <Input type="text" 
    placeholder="EmailId" 
    value={data.EmailId} 
    onChange={(e)=>setData(prevData=>({ ...prevData,EmailId:e.target.value}))}>
    </Input>

    <Input type="text" 
    placeholder="Password" 
    value={data.Password} 
    onChange={(e)=>setData(prevData=>({ ...prevData,Password:e.target.value}))}></Input>
    <Button2 style={{minHeight:"40px", minWidth:"40px"}} onClick={Callbackend}>Submit</Button2>
    </Head2>
    <Head3>
        <Button> Sign in with google</Button>
        <Text2>Already a user</Text2>
        <Link to="/Login">Login</Link>
    </Head3>
    </Head1>
    </Head>
    </>
  )
}

// const Head= styled.div`
// min-height: 100vh;
// min-width: 80vw;
// display: flex;
// justify-content: center;
// align-items:center;
// background: black;
// `

// const Head1= styled.div`
// height: 70vh;
// width: 30%;
// background-color: white;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// border-radius: 5%;
// `

// const Head2= styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// `
// const Input= styled.input`
// margin-top: 2vh;
// // height: 40%;
// border: 1px solid black;
// height: 6vh;
// width: 20vw;
// border-radius: 1vw;
// padding: 0.5vw;
// `

// const Head3= styled.div`
// margin-bottom: 10vh;
// `

// const Button= styled.button`
// color: white;
// background-color: red;
// width: 15vw; 
// height: 6vh;
// padding: 1vh;
// text-align: center;
// font-size:2.5vh;
// word-wrap:break-word;
// `

// const Text1= styled.h1`
// color: black;
// margin-top: 10%;
// font-size: 5vh;
// flex:-0.5:
// wrap:true;
// `

// const Text2= styled.h1`
// color: black;
// font-size: 2vh;
// wrap:true;
// `

// const Button2=styled.button`
// color: white;
// background-color:black;
// width: 15vw;
// height: 6vh;
// margin-top: 10px;
// margin-bottom: 20px;
// `

const Head = styled.div`
  min-height: 100vh;
  min-width: 80vw;
  display: flex;
  justify-content: center;
  align-items:center;
  background: black;

  @media (max-width: 768px) {
    min-height: 80vh;
    min-width: 90vw;
  }
`;

const Head1 = styled.div`
  height: 70vh;
  width: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Head2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 2vh;
  border: 1px solid black;
  height: 6vh;
  width: 20vw;
  border-radius: 1vw;
  padding: 0.5vw;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Head3 = styled.div`
  margin-bottom: 10vh;
`;

const Button = styled.button`
  color: white;
  background-color: red;
  width: 15vw; 
  height: 6vh;
  padding: 1vh;
  text-align: center;
  font-size: 2.5vh;
  word-wrap: break-word;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Text1 = styled.h1`
  color: black;
  margin-top: 10%;
  font-size: 5vh;
  flex: -0.5;
  wrap: true;
`;

const Text2 = styled.h1`
  color: black;
  font-size: 2vh;
  wrap: true;
`;

const Button2 = styled.button`
  color: white;
  background-color: black;
  width: 15vw;
  height: 6vh;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }`

export default Register;