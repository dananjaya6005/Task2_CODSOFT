import React from "react";
import { Avatar, Button, Tooltip, Progress, Modal, Dropdown } from "antd";
import {
  AntDesignOutlined,
  UserOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useParams } from "react-router";

let color = "white";


export default function ProjectCard(props: any) {

const navigate = useNavigate();

const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};




const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a onClick={()=>{navigate(`/getpostbyid/${props._id}`)}} >
        Info
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a onClick={showDeleteConfirm}>
        Delete
      </a>
    ),
    danger: true,
  },
];

const { confirm } = Modal;





  return (
    <div
      style={{ backgroundColor: color }}
      className=" p-5 rounded-md shadow-md "
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-medium text-gray-700 w-10/12 ">
          {props.project_name}
        </h1>

        <Dropdown menu={{ items }} placement="bottomLeft">
        <Button icon={<MoreOutlined/>}></Button>
      </Dropdown>

  
       
      </div>

      <p className="text-sm text-gray-500 my-2 ">
        {props.description.length > 150
          ? props.description.substring(0, 150) + "..."
          : props.description}
      </p>

      <Avatar.Group>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        <a href="https://ant.design">
          <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
        </a>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{ backgroundColor: "#1677ff" }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>

      <Progress percent={50} status="active" />
    </div>
  );
}
