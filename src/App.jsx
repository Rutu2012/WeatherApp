// import React from 'react'

// const App = () => {
//   const[count,setCount] = React.useState(0);

//   const decrement = () => {
//     setCount (count - 1);
//     // setCount (count + 1);
//   };

//   const increment = () => {
//     setCount (count + 1);
//   };

//   return (
//     <div>
//       {count}
//       <div onClick={increment}>increment</div>
//       <div onClick={decrement}>decrement</div>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   const[count,setCount] = React.useState(0);

//   const common = (e) =>
//   {
//     console.log(e.target.getAttribute("data-role"))
//     console.log(e.tag)
//   }
//   return (
//     <div>
//       <div data-role="rohan" onClick={(e)=>common(e)}></div>
//       <div></div>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const Message = () => {
//   const messages = [
//     {
//       user: 'Alex',
//       time: 'Today at 5:00',
//       text: 'Great blog post!'
//     },
//     {
//       user: 'Sam',
//       time: 'Today at 7:51',
//       text: 'Informative. Thanks.'
//     },
//     {
//       user: 'Jane',
//       time: 'Today at 9:01',
//       text: 'Looks great.'
//     }
//   ];

//   const handleApprove=()=>{
//     alert("helloo your message is accepted");
//   };

//   const handleReject=()=>{
//     alert("sorry your message is rejected");
//   }

//   return (
//     <div style={{ maxWidth: 400, marginLeft: '30rem', border: '1px solid #ccc', borderRadius: 8, backgroundColor: '#F3D1CB', padding: 16 }}>
//       <h3 style={{ margin: '0 0 1rem 0', fontWeight: 'normal', color: '#444' }}>
//         https://www.draw.io</h3> <hr style={{height:'0.1px', backgroundColor:'#CADFF4', border:'solid #CADFF4'}}></hr>
//       {messages.map((msg, idx) => (
//         <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
//             <img src={"data:image/png;base64,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"} alt={msg.user}
//                 style={{ borderRadius: '50%', marginRight: 10, height:"50px"}}/>

//         <div style={{ flex: 1 }}>
//             <div style={{ fontWeight: 'bold', color: '#333' }}>{msg.user}</div>
//             <div style={{ color: '#666', fontSize: 12 }}>{msg.time}</div>
//             <div style={{ marginTop: 4, color: '#555' }}>{msg.text}</div>
//           </div>
//         <div style={{display:'flex',justifyContent:'center', gap:'1rem', marginTop: 16}}>
//           <button style={{border:'2px solid green', backgroundColor:'green'
//           }} onClick={()=> handleApprove(msg.user)}>Accept</button>
//           <button style={{border:'2px solid red', backgroundColor:'red'}} onClick={()=> handleReject(msg.user)}>Decline</button>
//         </div>
//         </div>
        
//       ))}
//     </div>

    
// )  
// };

// export default Message

// import React, { useState } from 'react'

// const App = () => {


//   const [data,SetData] = useState({
//     firstname:"",
//     lastname:"",
//     email:"",
//     password:""
  
//   })
  // function firstNameHandler(event){
  //   setFirstName(event.target.value)
  // }

  // function lastNameHandler(event){
  //   setLastName(event.target.value)
  // }

  // function emailHandler(event){
  //   setEmail(event.target.value)
  // }

  // function passwordHandler(event){
  //   setPassword(event.target.value)
  // }

  // function handleSubmit(event){
  //   event.preventDefault()
  //   console.log('Form Submitted',{firstname,lastname,email,password})
  // }
// function COllectData(e){
//   const {name , value} = e.target
//   SetData((prevData)=>({
//     ...prevData,
//     [name]:value
//   }))
// }

// function handleSubmit(event){
//      event.preventDefault()
//      console.log(data.firstname)
// }

//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='First Name' name='firstname' value={data.firstname} onChange={COllectData} />
//         <input type="text" placeholder='Last Name' name='lastname' value={data.lastname} onChange={COllectData}/>
//         <input type="text" placeholder='Email' name='email' value={data.email} onChange={COllectData}/>
//         <input type="text" placeholder='Password' name='password' value={data.password} onChange={COllectData}/>
//         <button type='submit'> Submit </button>
//       </form>
      
//     </main>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [loading, setLoading] = useState(false)
//   const [data, setData] = useState([])
//   const [error, setError] = useState('')

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true)
//       try {
//         const apidata = await axios.get('https://jsonplaceholder.typicode.com/users')
//         if (apidata.data.length > 0) {
//           setData(apidata.data)
//         } else {
//           setError('No data found')
//         }
//       } catch (err) {
//         setError('Error fetching data')
//       }
//       setLoading(false)
//     }
//     fetchData()
//   }, [])

//   return (
//     <main>
//       {loading ? (
//         "loading..."
//       ) : error ? (
//         error
//       ) : (
//         data.map((item, index) => (
//           <div key={index}>
//             <div>ID: {item.id}</div>
//             <div>Name: {item.name}</div>
//             <div>Email: {item.email}</div>
//             <div>City: {item.address.city}</div>
//             <hr />
//           </div>
//         ))
//       )}
//     </main>
//   )
// }

// export default App


// import React,{useRef} from 'react'

// const App = () => {
//   function fun(){
//     console.log(reff.current)
//   }
//   let reff=useRef(null)
//   return (
//     <div>
//       <main ref={reff}>
//         hii
//       </main>
//       <button onClick={fun}>Click</button>

//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {


//   const [data,SetData] = useState({
//     firstname:"",
//     lastname:"",
//     email:"",
//     password:""
  
//   })
//   // function firstNameHandler(event){
//   //   setFirstName(event.target.value)
//   // }

//   // function lastNameHandler(event){
//   //   setLastName(event.target.value)
//   // }

//   // function emailHandler(event){
//   //   setEmail(event.target.value)
//   // }

//   // function passwordHandler(event){
//   //   setPassword(event.target.value)
//   // }

//   // function handleSubmit(event){
//   //   event.preventDefault()
//   //   console.log('Form Submitted',{firstname,lastname,email,password})
//   // }
// function COllectData(e){
//   const {name , value} = e.target
//   SetData((prevData)=>({
//     ...prevData,
//     [name]:value
//   }))
// }

// function handleSubmit(event){
//      event.preventDefault()
//      console.log(data.firstname)
// }

//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='First Name' name='firstname' value={data.firstname} onChange={COllectData} />
//         <input type="text" placeholder='Last Name' name='lastname' value={data.lastname} onChange={COllectData}/>
//         <input type="text" placeholder='Email' name='email' value={data.email} onChange={COllectData}/>
//         <input type="text" placeholder='Password' name='password' value={data.password} onChange={COllectData}/>
//         <button type='submit'> Submit </button>
//       </form>
      
//     </main>
//   )
// }

// export default App

// import React, { useState } from 'react'
 
// const App = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [file, setFile] = useState(null)
 
//   const handleSubmit = (e) => {
//     let formData = new FormData()
//     e.preventDefault()
//     formData.append('name', name)
//     formData.append('email', email)
//     formData.append('password', password)
//     formData.append('file', file)
 
//   }
 
//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '2rem auto' }}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//         style={{ display: 'block', marginBottom: 10, width: '100%' }}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         style={{ display: 'block', marginBottom: 10, width: '100%' }}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         style={{ display: 'block', marginBottom: 10, width: '100%' }}
//         required
//       />
//       <input
//         type="file"
//         onChange={(e)=>
//           {
//             console.log(e.target.files)
//             setFile(e.target.files[0])}
//           } 
//         style={{ display: 'block', marginBottom: 10, width: '100%' }}
//         required
//       />
//       <button type="submit" style={{ width: '100%' }}>Submit</button>
//     </form>
//   )
// }
 
// export default App

// import React, { useCallback } from 'react'
// import A from './components/A.jsx'

// const App = () => {
//   const [data,setData]=React.useState(1);
//       const clicked=()=>{
//           setData(data+1)
//       }
//       const fun2=useCallback(()=>
//       {
//         console.log("hii")
//       },[])
//     return (
//       <div>
//         <h1>{data}</h1>
//         <br/>
//         <button onClick={clicked}>Click</button>
       
//         <A fun={fun2}></A>
//       </div>
//     )
// }

// export default App

// import React, { useEffect } from 'react'
// import Cookies from 'js-cookie'
// const App = () => {
//   useEffect(()=>{

//     // localStorage.setItem("age",'21')
//     // console.log(localStorage.getItem("age"))
//     // Console.log(localStorage.removeItem("name"))
    
//     // Cookies.set("name","xyz")

//     sessionStorage.setItem('user',JSON.stringify({name:'rutu',age:'21'}))
//     var data = sessionStorage.getItem('user')
//     console.log(JSON.parse(data))

//   })
//   return (
//     <div>
    
//     </div>
//   )
// }

// export default App


