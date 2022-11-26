import React from 'react'
import { Comment, Avatar} from 'antd';
import moment from "moment"
function SingleComplaint(props) {
    const str=`http://gravatar.com/avatar/${moment().unix()}?d=identicon`
    return (
        <div>
            <Comment
                avatar={
                    <Avatar
                        src={str}
                        alt="image"
                    />
                }
                content={
                    <div>
                     <div style={{display:"flex"}}>
                       <h1 style={{marginTop:"2px", color:"orange",marginBottom:"2px",fontSize:"15px", marginRight:"2px"}}>Department: </h1>
                       <h2 style={{marginTop:"2px", color:"blue",marginBottom:"2px",fontSize:"15px"}}>{props.notice.dept}</h2>
                     </div>
                     <h2 style={{marginTop:"2px", color:"orange",marginBottom:"2px",fontSize:"15px"}}>Notice Content:</h2>
                     <h3 style={{width:"65%", color:"blue"}}>
                        {props.notice.content}
                     </h3>
                    </div>
                }
            ></Comment>

        </div>
    )
}

export default SingleComplaint