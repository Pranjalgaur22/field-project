"use client"
import { useState, useEffect } from 'react'

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submittedData, setSubmittedData] = useState([{
    name: "Aman Varshney",
    email: "av.amanvarshney11@gmail.com",
    message: "Wonderful site made by a wonderful person"
  },
  {
    name: "Aman Varshney",
    email: "av.amanvarshney11@gmail.com",
    message: "Wonderful site made by a wonderful person"
  },
  {
    name: "Aman Varshney",
    email: "av.amanvarshney11@gmail.com",
    message: "Wonderful site made by a wonderful person"
  },
  {
    name: "Aman Varshney",
    email: "av.amanvarshney11@gmail.com",
    message: "Wonderful site made by a wonderful person"
  },
  {
    name: "Aman Varshney",
    email: "av.amanvarshney11@gmail.com",
    message: "Wonderful site made by a wonderful person"
  }]);

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedData([...submittedData, { name, email, message }])
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <main className="bg-black">
      <div className="min-h-screen w-full flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-6 w-full justify-center text-center items-center">
          <h2 className="font-semibold text-6xl lg:text-7xl z-10 text-white" >A Spiritual Odyssey</h2>
          <h6 className="font-semibold text-2xl lg:text-4xl z-10 text-white" >Mathura-Vrindavan Adventure</h6>
        </div>
        <button className=" text-white border z-10 border-white px-4 py-2  rounded-full text-xl">Explore</button>
      </div>
      <div className="h-screen w-full absolute top-0 overflow-hidden opacity-50">
        <video src="./im/video1.webm" autoPlay muted loop className="bg-cover" ></video>
      </div>
      <div className="formsc w-full">
        <div className='w-full'></div>
        <div className="com">
          <form id="myForm" onSubmit={handleSubmit}>
            <h1 className='text-2xl'>Give Your Feedback</h1>
            <div className="ip">
              <input id="name" type="text" placeholder="Full Name" value={name} onChange={handleNameChange} />
            </div>
            <div className="ip">
              <input id="email" type="email" placeholder="email address" value={email} onChange={handleEmailChange} />
            </div>
            <textarea id="message" cols={15} rows={5} placeholder="Enter your feedback" value={message} onChange={handleMessageChange}></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className='w-full h-max bg-white'>
      <div className="w-full text-center text-4xl font-semibold py-5">Your Feedback</div>
        {submittedData.length > 0 ? (
          <ul className='px-10 my-10 w-full flex flex-row gap-4'>
            {submittedData.map((data, index) => (
              <li className='flex flex-col max-w-[30vw] text-center bg-green-300 p-4 gap-4 rounded-lg' key={index}>
                <span className='text-2xl'>{data.name}</span>
                <span>{data.email}</span>
                <span className='text-lg'>{data.message}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data submitted yet.</p>
        )}
      </div>
    </main>
  )
}
