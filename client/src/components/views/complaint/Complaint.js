import React, {useState } from 'react'
import { Button, Input, Typography } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
const { TextArea } = Input;
const { Title } = Typography;
function Complaint1() {
    const user = useSelector(state => state.user)
    const [Complaint, setComplaint] = useState("")
    const [Department, setDepartment]=useState("")
    const [Rollno, setRollno]=useState("")
    const [Mode, setMode]=useState("")
    const handleChangeComplaint = (e) => {
        setComplaint(e.currentTarget.value)
        //console.log(e.target.value);
    }
    const handleChangeDepartment = (e) => {
        setDepartment(e.currentTarget.value)
        //console.log(e.target.value);
    }
    const handleChangeRollno = (e) => {
        setRollno(e.currentTarget.value)
        //console.log(e.target.value);
    }
    const handleChangeMode= (e) =>{
      setMode(e.currentTarget.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        const variables = {
            content: Complaint,
            writer: user.userData._id,
            dept: Department,
            rollno:Rollno,
            mode:Mode,
            stat:"notassigned"
        }
        //console.log(variables)

        axios.post('/api/complaint/saveComplaint', variables)
            .then(response => {
                if (response.data.success) {
                    setComplaint("")
                    setDepartment("")
                    setRollno("")
                    setMode("")
                } else {
                    alert('Failed to save Complaint')
                }
            })
    }

    return (
        <div>
            <br />
            <Title level={3}style={{color:"blue", marginLeft:"575px", marginTop:"20px"}} > Post a Complaint  </Title>

            <form onSubmit={onSubmit} style={{marginLeft:"300px", marginRight:"10px", marginTop:"25px"}}>
               <label style={{display:"flex", width:"75%", marginTop:"10px", marginBottom:"10px", color:"blue"}}>Department:
                 <Input
                    style={{marginLeft:"10px", borderColor:"blue", color:"red"}}
                    onChange={handleChangeDepartment}
                    value={Department}
                    placeholder="enter department name either electric or erp or dsw"
                 />
               </label>
               <label style={{display:"flex", width:"75%", marginTop:"10px", marginBottom:"10px", color:"blue"}}>Rollno:
                <Input
                    style={{marginLeft:"45px",borderColor:"blue", color:"red"}}
                    onChange={handleChangeRollno}
                    value={Rollno}
                    placeholder="enter your rollno in the format of BTECH/xxxxx/xx"
                />
               </label>
               <label style={{display:"flex", width:"75%", marginTop:"10px", marginBottom:"10px", color:"blue"}}>Mode:
                <Input
                    style={{marginLeft:"45px",borderColor:"blue", color:"red" }}
                    onChange={handleChangeMode}
                    value={Mode}
                    placeholder="enter either public or private"
                />
               </label>
               <label style={{display:"flex", width:"75%", marginTop:"10px", marginBottom:"10px", color:"blue"}}>Complaint:
                <TextArea
                    style={{ width: '100%', borderRadius: '5px',marginLeft:"20px",borderColor:"blue",color:"red" }}
                    onChange={handleChangeComplaint}
                    value={Complaint}
                    placeholder="write your complaint"
                    rows="8"
                />
               </label>
                <br />
                <Button style={{ width: '20%', height: '52px', marginLeft:"275px", backgroundColor:"blue", color:"white" }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default Complaint1