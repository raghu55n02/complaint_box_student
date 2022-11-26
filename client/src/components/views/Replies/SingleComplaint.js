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
                       <h2 style={{marginTop:"2px", color:"red",marginBottom:"2px",fontSize:"15px", marginRight:"2px"}}>Department: </h2>
                       <h3 style={{marginTop:"2px", color:"blue",marginBottom:"2px",fontSize:"15px"}}>{props.notice.dept}</h3>
                     </div>
                     <h3 style={{marginTop:"2px", color:"red",marginBottom:"2px",fontSize:"15px"}}>Reply Content:</h3>
                     <h4 style={{width:"65%", color:"blue"}}>
                        {props.notice.content}
                     </h4>
                    </div>
                }
            ></Comment>

        </div>
    )
}

export default SingleComplaint