//@ts-nocheck
import React, { useEffect, useState, memo } from "react";
import { Avatar, Button, Tooltip, Progress, Modal, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useParams } from "react-router";
import axios from "axios";
import randomColor from "randomcolor";
let color = "white";

const ProjectCard = memo((props) => {
  const navigate = useNavigate();
  const [AvaterList, setAvaterList] = useState([]);

  async function deleteProject(id: string) {
    await axios
      .delete(`http://localhost:3000/dashboard/deleteProject/${id}`)
      .then((res) => {
        console.log(res);

        setTimeout(() => {
          window.location.reload();
        }, 700);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    setAvaterList(props.members);
  }, []);

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteProject(props._id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          onClick={() => {
            navigate(`/getpostbyid/${props._id}`);
          }}
        >
          Info
        </a>
      ),
    },
    {
      key: "2",
      label: <a onClick={showDeleteConfirm}>Delete</a>,
      danger: true,
    },
  ];

  const { confirm } = Modal;

  //  useEffect(()=>{

  //    props.members.map((item)=>{
  //       setAvaterList((prev)=>{
  //         return [...prev , item]
  //       })
  //     })

  //     return ()=>{
  //       setAvaterList([])
  //     }

  //  },[])

  //  console.warn(AvaterList)

  console.log("reder");

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
          <Button icon={<MoreOutlined />}></Button>
        </Dropdown>
      </div>

      <p className="text-sm text-gray-500 my-2 ">
        {props.description.length > 150
          ? props.description.substring(0, 150) + "..."
          : props.description}
      </p>

      <Avatar.Group>
        {AvaterList.map((item, index) => {
          const colorOptions = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];


          return (
            <div key={index}>
              <Tooltip title={item} placement="top">
                <Avatar style={{ backgroundColor: randomColor( {
                        luminosity: 'dark',
                        format: 'rgb' 
                      } ) }}>
                  {item.slice(0, 1).toUpperCase()}
                </Avatar>
              </Tooltip>
            </div>
          );
        })}
      </Avatar.Group>

      <Progress
        percent={props.completedTask}
        status={
          props.completedTask === 100.0
            ? "success"
            : "" || props.completedTask === 0.0
            ? "exception"
            : ""
        }
      />
      
    </div>
  );
});

{
  /* <Tooltip title="Ant User" placement="top">
<Avatar
  style={{ backgroundColor: "#87d068" }}
  icon={<UserOutlined />}
/>
</Tooltip> */
}

export default ProjectCard;
