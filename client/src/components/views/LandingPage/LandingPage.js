import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import Complaints from "../complaints/Complaints"
function LandingPage() {
       const [ComplaintLists, setComplaintLists] = useState([])
     useEffect(()=>{
         axios.post('/api/complaint/getComplaints')
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
     },[])
     if(ComplaintLists.length!==0)
     {
        //console.log("you are here")
        //console.log(ComplaintLists)

     }
     function Comp(){

     }
    return (
        <>
            {ComplaintLists.length===0?<div style={{textAlign:"center", fontSize:"100px", marginLeft:"10px", marginRight:"10px", marginTop:"150px", color:"red"}}>No complaints posted yet!</div>:<div>
                <Complaints ComplaintLists={ComplaintLists}  />
            </div>}
        </>
    )
}

export default LandingPage
