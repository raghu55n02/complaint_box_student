import React from 'react'
import SingleComplaint from './SingleComplaint';
function Complaints(props) {
    //console.log(props.NoticesLists)
    return (
        <div>
             {props.NoticesLists && <div style={{color:"blue", marginLeft:"500px", marginRight:"20px", fontSize:"40px", marginBottom:"3px", fontWeight:"bold"}}>Replies</div>}
            {props.NoticesLists && props.NoticesLists.map((notice, index) => (
                    <React.Fragment key={index}>
                      <SingleComplaint  notice={notice} />      
                    </React.Fragment>
            ))}

            {props.NoticesLists && props.NoticesLists.length === 0 &&
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px',color:'blue'}} >
                    You dont recieve any replies till now!
                </div>
            }


        </div>
    )
}

export default Complaints