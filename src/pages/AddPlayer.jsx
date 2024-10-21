import React, { useState } from 'react'
import SafescreenLayout from '../components/SafescreenLayout'
import { addPlayer } from '../Hooks/ApiHook'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function AddPlayer() {
    const navigate = useNavigate()
    const [preview, setPreview] = useState(null)
    const [username, setUsername] = useState("")
    const [profilePict, setProfilePict] = useState("")


    const handleChange= async (e)=>{
        const file = e.target.files[0]
        if(file){
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl)
            setProfilePict(file)
        }
    }

    
    const handleSubmit=async(e)=>{
        const data = new FormData();
        data.append("file", profilePict);
        data.append("upload_preset", "tutorial");
        data.append("cloud_name", "dttd52ltg");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dttd52ltg/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const result = await response.json()
        const imageUrl = result.secure_url

        try{
            const postPlayer = await addPlayer(username,imageUrl)
            if(postPlayer){
                navigate('/home')
            }
        }catch(err){
            alert(err.message)
        }
    }

  return (
    <SafescreenLayout title={"Add Player"}>
         <motion.div
         initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
         animate={{ y: 0, opacity: 1 }} // Final position (normal)
         exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
         transition={{ duration: 0.3 }} 
        >
            <h1 className='mb-1'>Champion Name</h1>
            <input type="text" className='p-3 border border-orange-300 w-full bg-white shadow-inner rounded-xl' 
            placeholder='Masukan Nama'
            onChange={(e)=>setUsername(e.target.value)}
            />
             <h1 className='mb-1 mt-2'>Photo</h1>
             <div className='border border-orange-300 p-3 rounded-xl bg-white shadow-inner'>
            <input type="file" id='fileInput' className='p-3 border border-gray-300 w-full rounded-xl hidden' 
            placeholder='Masukan Nama'
            onChange={handleChange}
            />
            <div className='flex flex-col justify-center'>
                <img src={preview ? preview : "../images/default pp.jpg" } className='mx-auto' alt="" srcset="" />
                <button 
                onClick={()=>document.getElementById('fileInput').click()}
                className='rounded-xl p-2 border border-gray-300 mt-3 w-52 mx-auto'>Choose Photo</button>
            </div>
            </div>

            <button onClick={handleSubmit}
            className='p-3 bg-orange-500 shadow text-white rounded-full mx-auto w-full mt-3 disabled:bg-gray-300'
            disabled={!preview || !username}
            >
                Add Player
            </button>
        </motion.div>

    </SafescreenLayout>
  )
}

export default AddPlayer