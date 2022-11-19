import React, { useState } from "react";
import axios from "axios";
import "./App.css"

const App = () => {
   const [input, setInput] = useState("");
   const[user,setUser] = useState({});

   const handleSearch = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${input}`)
      setUser(res.data);
    }catch (error) {
        console.log(error.message);
    }
   };


    return (
        <div className="container">
          <div className="box">
          <div className="inputData"> 
            <input onChange={(e) => setInput(e.target.value)} placeholder="Type Username" name="username" id="" className="inputField" />
            <br/>
            <button onClick={handleSearch} className="btn search-btn">Search</button>

           {Object.keys(user).length > 0 ? (

        <div className="info">
          <img src={user.avatar_url} className="rounded mx-auto d-block img-fluid image" style={{width:"300px"}} alt="img" />
          <h2 className="name">Name: <u>{user.name}</u></h2>
          <h3 className="bio">Status: {user.bio}</h3>
          <h3 className="location">Location: {user.location}</h3>
          <h4 className="follows">Followers: {user.followers} | Following: {user.following}</h4>
        </div>
             ) : ( 
                ""
          )}
         </div>
         </div>
        </div>

    );
};

export default App;




// import React,{useState, useEffect} from 'react';
// import './App.css';

// // const App = () => {

// //   const [users, setUsers] = useState([]);

// //   const getUsers = async () => {
// //     const response = await fetch('https://api.github.com/users');
    
// //     // const data = await response.json();
// //     setUsers(await response.json());
// //     // console.log(data);
// //   }

// //   useEffect( () => {
// //       getUsers();
// //   }, []);

// //   return (
// //       <>
// //       <h2>List of Github Users</h2>
// //       <div className="container">
// //         {
// //           users.map((curElem) => {
// //             const { avatar_url, login, id, title, followers_url, following_url } = curElem;  //for array-destructuring Then use 'url', 'avatar_url' not curElem
// //             return (
// //               <div key={id}>
// //               <div className="image"><img src={avatar_url} className="rounded" alt="img" width="200"/></div>
// //               <h4>{login}</h4>
// //               <h4><span className="followers">{followers_url}</span></h4>
// //               <h4><span className="rating">{following_url}</span></h4>
// //               </div>
// //               )
// //           } )
// //         }
// //       </div>
// //       </>
// //   );
// // }

// const App = () => {

//   const [login, setLogin] = useState([]);
//   const [search, setSearch] = useState("hm-talha");

//   useEffect( () => {
//     const fetchAPI = async () => {
//       const url = `https://api.github.com/users/{search}`;
//       const response = await fetch(url);
//       const respJson = await response.json();
//       // console.log(response);
//       setLogin(respJson);
//       // https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=a7525a482368d1c943dde09668506778
//     };

//     fetchAPI();
//   }, [search] )

//   return(
//     <div className="container">
//     <div className="box">
//     <div className="inputData"> 
//       <input type="search" className="inputField" placeholder="Enter User Name"
//        onChange={ (event) => { setSearch(event.target.value) } } />
//     </div>

//     {
//       !login ? (
//         <p className="errorMsg"> No Data Found </p>       
//         ) : (
//     <div>   
//     <div className="info">
//       <h2 className="location">{search}</h2>        
//       <h1 className="temp">{login}</h1>
//       <h3 className="temp-range">Min :  | Max : </h3>
//     </div>

//     <div className="wave1"></div>
//     <div className="wave2"></div>
//     <div className="wave3"></div>
//     </div>
//         )
//     }

//     </div>
//     </div>
//     )
// };


// export default App;

// {followers_url}
// {following_url}