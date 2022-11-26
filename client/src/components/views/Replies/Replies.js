import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import Complaints from './Complaint'
function Replies(){
    const user = useSelector(state => state.user)
    const [NoticeLists, setNoticeLists] = useState([])
    let userId=""
    userId=user.userData?._id;
    const userVariable = {
        userId
    }
     useEffect(()=>{
         axios.post('/api/reply/getreplies',userVariable)
            .then(response => {
                if (response.data.success) {
                    //console.log('response.data.notices', response.data.replies)
                    setNoticeLists(response.data.replies)
                    //console.log(NoticeLists)
                } else {
                    console.log("failed to get complaints info")
                }
            })        
     },[user])  
     return(
        <>
            {NoticeLists.length===0?<div style={{textAlign:"center", fontSize:"100px", marginLeft:"10px", marginRight:"10px", marginTop:"150px", color:"red"}}>No replies recieved yet!</div>:<div>
                <Complaints NoticesLists={NoticeLists}  />
            </div>}          
        </>
     )  
}

export default Replies