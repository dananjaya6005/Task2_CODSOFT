import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Getpostbyid() {

    const {id} = useParams();
    const [post,setPost] = useState({});


    useEffect(()=>{

        axios.get(`http://localhost:3000/dashboard/getProjectbyid/${id}`)
        .then((response)=>{
            setPost(response.data.data);
            console.log(response.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])





  return (
    <>
    <div>
      get post by id :   {id}
      {post.name}
    </div>
    </>
  )
}
