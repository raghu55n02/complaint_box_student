import React from 'react'
import { Comment, Avatar} from 'antd';
function SingleComplaint(props) {
    return (
        <div>
            <Comment
                avatar={
                    <Avatar
                        src={props.complaint.writer.image}
                        alt="image"
                    />
                }
                content={
                    <div>
                     <div style={{fontSize:"20px", fontWeight: 'bold'}}>{props.complaint.writer.name}</div>
                      <div style={{display:"flex", fontSize:"15px", marginTop:"2px", marginBottom:"2px", color:"red"}}>
                         RollNo :
                         <div style={{marginLeft:"2px"}}>{props.complaint.rollno}</div>
                      </div>
                      <div style={{display:"flex", fontSize:"15px", marginTop:"2px", marginBottom:"2px", color:"blue"}}>
                         Department :
                         <div style={{marginLeft:"2px"}}>{props.complaint.dept}</div>
                      </div>
                     <div style={{marginTop:"2px", color:"orange",marginBottom:"2px",fontSize:"15px"}}>Complaint Content:</div>
                     <p style={{width:"65%", color:"blue"}}>
                        {props.complaint.content}
                     </p>
                    </div>
                }
            ></Comment>

        </div>
    )
}

export default SingleComplaint