import React, { useState, useEffect } from "react";
import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import bgImagemenu from '../images/bgImageMenu.jpg';


type MenuItem = Required<MenuProps>["items"][number];

function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const initialItems: MenuProps["items"] = [
  getItem(
    "Dashbaord",
    "grp",
    null,
    [getItem("New Project", "newproject"), getItem("My works", "myworks")],
    "group"
  ),
  getItem("Organizations", "organizations", null, [
    getItem("Create Organizations", `createorg`),
    getItem("Manage Organizations", `manageOrg`),
  ]),

  { type: "divider" },

  getItem("Your Project", "grp1", null, [], "group"),
];

const SlideMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const navigate = useNavigate();
  const [Project, setProject] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    axios
      .get("http://localhost:3000/dashboard/getProjects")
      .then((response) => {
        setProject(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  useEffect(() => {
    setMenuItems(initialItems); 
    creteMenuItemsBasedOnProject(Project);
  }, [Project]);

  function creteMenuItemsBasedOnProject(projects: any) {

    const newItems = projects.map((project: any) => {

      if(project.manager === user?.emailAddresses[0].emailAddress || project.members.includes(user?.emailAddresses[0].emailAddress) ){
        
      return getItem(project.name, project._id, <SettingOutlined />, [
        getItem("Task", `Task${project._id}`),
        getItem("Deadlines", `Dead${project._id}`),
        getItem("Track Progress", `Track${project._id}`),
      ]);
      }


    });

    setMenuItems((prevItems) => [...prevItems, ...newItems]);
  }

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key.includes("Task")) {
      navigate(`/getTaskbyid/${e.key}`);

    } else if (e.key.includes("Dead")) {
      navigate(`/getdeadlinebyid/${e.key}`);

    } else if (e.key.includes("Track")) {
      navigate(`/getTrackById/${e.key}`);

    } else if (e.key === "myworks") {
      navigate(`/myworks`);

    } else if (e.key === "newproject") {
      navigate(`/newproject`);

    } else if (e.key === "createorg") {
      navigate(`/createorg`);

    } else if (e.key === "manageOrg") {
      
      navigate(`/manageorg`);
  
    }
  };

  return (
    <>
     


      <Menu
       
        onClick={onClick}
        style={{ width: 256 , backgroundImage: `url(${bgImagemenu})`, 
                backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", 
      }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={menuItems}
      />
    </>
  );
};

export default SlideMenu;
