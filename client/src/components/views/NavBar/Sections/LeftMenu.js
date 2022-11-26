import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="complaint">
      <a href="/complaint">Create Complaint</a>
    </Menu.Item>
    <Menu.Item key="Mycomplaints">
      <a href="/MyComplaints">MyComplaints</a>
    </Menu.Item>
    <Menu.Item key="Notices">
      <a href="/Notices">Notice_Box</a>
    </Menu.Item>
    <Menu.Item key="Replies">
      <a href="/Replies">Replies</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu