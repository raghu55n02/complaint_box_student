import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import Complaints from "./Complaints/Complaints"
function MyComplaints() {
       const [ComplaintLists, setComplaintLists] = useState([])
       const user = useSelector(state => state.user)
       var userId="";
       //console.log(user)
    const userVariable = {
        userId: user.userData?._id
        //userId:"public"
    }
    //console.log(userVariable)
        
    useEffect(()=>{
         if(userVariable.userId!=="")
         {
            //console.log("smthg",userVariable)
            axios.post('/api/complaint/getComplaints/user', userVariable)
            .then(response => {
                //console.log(response)
                if (response.data.success) {
                    //console.log('response.data.complaints', response.data.complaints)
                    setComplaintLists(response.data.complaints)
                    //console.log(ComplaintLists)
                } else {
                    //alert('Failed to get complaints Info')
                    console.log("failed to get complaints info")
                }
            })
         } 
    },[user])
    return (
        <>
            <div>
                <Complaints ComplaintLists={ComplaintLists}  />
             {ComplaintLists.length === 0 &&
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px',color:'blue', fontSize:"50px"}} >
                    You have not posted any Complaints yet!
                </div>
            }               
            </div>
        </>
    )
}

export default MyComplaints
