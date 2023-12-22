import React, { useState ,useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';
import axios from 'axios';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



const initialItems: MenuProps['items'] = [
  getItem('Dashbaord', 'grp', null, 
  [
  getItem('New Project', 'newproject'),
  getItem('My works', 'myworks')], 'group'
  
  ),
  getItem('Organizations', 'organizations', null,[
    getItem('Create Organizations', `createorg`),
    getItem('Manage Organizations', `manageOrg`),
   
  ]
  
  
  ),
 
  

  { type: 'divider' },

 

  
];




const SlideMenu: React.FC = () => {
  
  const [menuItems, setMenuItems] = useState(initialItems);
  const navigate = useNavigate();
  const [Project, setProject] = useState([]);


  useEffect(() => {
    
      axios.get("http://localhost:3000/dashboard/getProjects")
      .then((response) => {
        
        creteMenuItemsBasedOnProject(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
   
    
  },[]);



  console.log("project",Project);

  


  // useEffect(() => {

  //   creteMenuItemsBasedOnProject(Project);
    
  // }, [])


  function creteMenuItemsBasedOnProject(projects : any) {
    
   
    projects.forEach(project => {

   const ArrywegoingtoPush  = [  getItem(project.name, project._id, <SettingOutlined />, [
        getItem('Task', `Task${project._id}`),
        getItem('Deadlines', `Dead${project._id}`),
        getItem('Track Progress', `Track${project._id}`),
      
      ])]
       
      setMenuItems(prevItems => [...prevItems, ...ArrywegoingtoPush])

    });
  
  }
  


  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);

    if(e.key.includes("Task")){
      navigate(`/getTaskbyid/:${e.key}`);
    } 
    else if (e.key.includes("Dead")){
       navigate(`/getdeadlinebyid/:${e.key}`);
    }
    else if (e.key.includes("Track")){
       navigate(`/getTrackById/:${e.key}`);
    }
    else if(e.key === "myworks"){
      navigate(`/myworks`);
    }
    else if(e.key === "newproject"){
      navigate(`/newproject`);
    }
    else if(e.key === "createorg"){
      navigate(`/createorg`);
      
    }else if(e.key === "manageOrg"){
      navigate(`/manageorg`);
    }
   

    
  };


  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={menuItems}
      />
      
    </>
  );
};

export default SlideMenu;
