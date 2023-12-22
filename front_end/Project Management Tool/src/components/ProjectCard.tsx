import React from "react";
import { Avatar, Button, Tooltip, Progress ,DatePicker  } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

let color = "white";

export default function ProjectCard(props : any) {
  return (
    
      <div style={{backgroundColor:color}} className=" p-5 rounded-md shadow-md ">
        <h1 className="text-xl font-medium text-gray-700">{props.project_name}</h1>
        <p className="text-sm text-gray-500 my-2 ">
          {props.description.length > 150 ? props.description.substring(0, 150) + "..." : props.description}
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

        <Progress  percent={50} status="active" />
      </div>
    
  );
}
