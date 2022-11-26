import React from 'react'
import { useSelector } from 'react-redux';
import SingleComplaint from './SingleComplaint';
function Complaints(props) {
    const user = useSelector(state => state.user)

    return (
        <div>
            {props.ComplaintLists.length!==0 && <div style={{color:"blue", marginLeft:"475px", marginRight:"20px", fontSize:"40px", marginBottom:"3px"}}>My Complaints!</div>}
            {props.ComplaintLists && props.ComplaintLists.map((complaint, index) => (
                (<React.Fragment key={index}>
                      <SingleComplaint  complaint={complaint} />          
                    </React.Fragment>
                )
            ))}

            {props.ComplaintsLists?.length === 0 &&
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px',color:'blue'}} >
                    You have not posted any Complaints yet!
                </div>
            }


        </div>
    )
}

export default Complaints