import React,{useState,useEffect} from "react";
import axios from "axios"
import Complaints from './Compliant'
import { useSelector } from 'react-redux';
function Notices(){
       const [NoticeLists, setNoticeLists] = useState([])
       const user = useSelector(state => state.user)
    let userId=""
    userId=user.userData?._id;
     useEffect(()=>{
         axios.post('/api/notice/getnotices')
            .then(response => {
                //console.log(response)
                if (response.data.success) {
                    //console.log('response.data.notices', response.data.notices)
                    setNoticeLists(response.data.notices)
                    //console.log(NoticeLists)
                } else {
                    //alert('Failed to get complaints Info')
                    console.log("failed to get complaints info")
                }
            })        
     },[user])
    return(
        <>
            {NoticeLists.length===0?<div style={{textAlign:"center", fontSize:"100px", marginLeft:"10px", marginRight:"10px", marginTop:"150px", color:"red"}}>No notices posting yet!</div>:<div>
                <Complaints NoticesLists={NoticeLists}  />
            </div>}
        </>
    )
}
export default Notices