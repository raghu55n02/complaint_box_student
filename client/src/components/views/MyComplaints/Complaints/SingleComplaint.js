import React from 'react'
import { Comment, Avatar} from 'antd';
function SingleComplaint(props) {
    return (
        <div>
            <Comment style={{fontSize:"20px"}}
                avatar={
                    <Avatar
                        src={props.complaint.writer.image}
                        alt="image"
                    />
                }
                content={
                    <div>
                      <div style={{display:"flex", fontSize:"15px", marginTop:"2px", marginBottom:"2px", color:"blue"}}>
                         Department :
                         <div style={{marginLeft:"2px"}}>{props.complaint.dept}</div>
                      </div>
                     <div style={{marginTop:"2px", color:"red",marginBottom:"2px"}}>Complaint Content:</div>
                     <p style={{width:"65%", color:"blue"}}>
                        {props.complaint.content}
                     </p>
                     <div style={{display:"flex"}}>
                       <h1 style={{color:"red",marginBottom:"2px",fontSize:"15px", marginRight:"2px"}}>status: </h1>
                       <h2 style={{ color:"green",marginBottom:"2px",fontSize:"15px"}}>{props.complaint.stat}</h2>
                     </div>
                    </div>
                }
            ></Comment>

        </div>
    )
}

export default SingleComplaint