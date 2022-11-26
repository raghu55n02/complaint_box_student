import React from 'react'
import { useSelector } from 'react-redux';
import SingleComplaint from './SingleComplaint';
function Complaints(props) {
    const user = useSelector(state => state.user)

    return (
        <div>
           {props.ComplaintLists && <div style={{color:"blue", marginLeft:"325px", marginRight:"20px", fontSize:"40px", marginBottom:"3px"}}>Complaints posted by students!</div>}
            {props.ComplaintLists && props.ComplaintLists.map((complaint, index) => (
                (complaint.mode==="public" &&
                    <React.Fragment key={index}>
                      <SingleComplaint  complaint={complaint} />          
                    </React.Fragment>
                )
            ))}

            {props.ComplaintsLists && props.ComplaintsLists.length === 0 &&
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px',color:'blue'}} >
                    There are no complaints posted yet!
                </div>
            }
        </div>
    )
}

export default Complaints