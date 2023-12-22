import { useState, useEffect } from "react";
import book from "../../images/book.png";
import engineer from "../../images/engineer.png";
import aglie from "../../images/agile.png";
import stockMarket from "../../images/stock-market.png";
import { Radio, Form, Input, ConfigProvider ,Button } from "antd";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { useOrganization } from "@clerk/clerk-react";
import { Select } from "antd";
import type { SelectProps } from "antd";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { message } from 'antd';






const TypeOfProject = [
  {
    name: "Blank Project",
    image: book,
  },
  {
    name: "Software Development",
    image: engineer,
  },
  {
    name: "Busniess",
    image: stockMarket,
  },

  {
    name: "Agile",
    image: aglie,
  },
];

// const options: SelectProps["options"] = [];

export default function () {

  const {user} = useUser();
  const [messageApi, contextHolder] = message.useMessage();

  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [manager , setManager] = useState(user?.emailAddresses[0].emailAddress);
  const [projectType, setProjectType] = useState("blank_project");
  const [members, setMembers] = useState([] as string[]);
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  const [color, setColor] = useState("red");
  const [Task , setTask] = useState([] as string[]);


  const { TextArea } = Input;
  
  const { memberships } = useOrganization({
    memberships: {
      keepPreviousData: true,
    },
  });

  if (!memberships) {
    return null;
  }

  useEffect(() => {
    if (memberships.data) {
      console.log(memberships.data);
      pushMemberstoOptions();
    } else {
      setMembers([]);
    }
  }, [memberships.data]);

  const pushMemberstoOptions = () => {
    if (memberships) {
      memberships.data.map((member) => {
        setOptions((prev) => [
          ...prev,
          {
            label: member.publicUserData.identifier,
            value: member.publicUserData.identifier,
          },
        ]);
      });
    }
  };

  //handle date picker
  const onChangeStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setStartDate(dateString);
  };

  const onChangeEndDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setEndDate(dateString);
  };

  //add members to project
  const handleChangeAddMembers = (value: string[]) => {
    setMembers(value);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Sucessfully Created Project',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Somthing went wrong',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };




  async function createProject(){

    await axios.post("http://localhost:3000/dashboard/createProject",{
      name:projectName,
      startDate:startDate,
      endDate:endDate,
      description:projectDescription,
      manager:manager,
      type:projectType,
      members:members,
      color:color,
      task:Task
  
    }).then((res)=>{
      console.log(res.data)
      if(res.data.sucess == true){
        success()
      }else if(res.data.sucess == false){
        error()
      }
      
    })
    .catch((err)=>{
      console.log(err)
      error();
    })
  };


  return (
    <div className="min-h-screen w-screen bg-gray-50 flex justify-center items-center">
     
      {contextHolder}

      <div className="bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800 my-5">
          Create a new project
        </h1>

        <div className="flex flex-row">
          {TypeOfProject.map((project, index) => {
            return (
              <div key={index} className="my-5   m-4 text-center ">
                <div className="flex justify-center items-center">
                  <img src={project.image} alt="" className="w-14 h-14" />
                </div>

                <h1 className="text-sm text-gray-500 font-medium my-2">
                  {project.name}
                </h1>
              </div>
            );
          })}
        </div>
        
        
        <div>
          <Radio.Group
            name="radiogroup"
            onChange={(e) => {
              setProjectType(e.target.value);
            }}
            defaultValue={"blank_project"}
          >
            <Radio value={"blank_project"}>Blank Project</Radio>
            <Radio value={"software_development"}>Software Development</Radio>
            <Radio value={"busniess"}> Busniess </Radio>
            <Radio value={"aglie"}>Agile</Radio>
          </Radio.Group>
        </div>

        <div className="my-7">
          <Form className="my-5 w-full max-[500px]:w-10/12" layout="vertical">
            <Form.Item label="Project Name">
              <Input
                onChange={(e) => {setProjectName(e.target.value)}}
                className="w-1/2  max-[500px]:w-full"
                placeholder="Enter Project Name ..."
                
              />
            </Form.Item>

            <Form.Item label="Description">
              <TextArea
                onChange={(e) => {setProjectDescription(e.target.value)}}
                maxLength={500}
                className="w-1/2  max-[500px]:w-full"
                placeholder="Max length 500 characters"
              />
            </Form.Item>
          </Form>
        </div>

        <div className=" flex justify-between ">
          <div>
            <p className="text-sm my-2 ">Start date</p>
            <DatePicker onChange={onChangeStartDate} />
          </div>

          <div>
            <p className="text-sm my-2">End date</p>
            <DatePicker onChange={onChangeEndDate} />
          </div>
        </div>

        <div className="my-5">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select Your Team members"
            onChange={handleChangeAddMembers}
            options={options}
          />
        </div>

        <div><p>Make your Project colourful </p></div>

        <div className="my-4">
          <Radio.Group onChange={(e)=>{setColor(e.target.value)}} name="radiogroup" defaultValue={"red"}>
            <ConfigProvider
              theme={{
                token: {
                  // Seed Token
                  colorPrimary: "red",

                  // Alias Token
                },
              }}
            >
              <Radio value={"red"}></Radio>
            </ConfigProvider>

            <ConfigProvider
              theme={{
                token: {
                  // Seed Token
                  colorPrimary: "blue",

                  // Alias Token
                },
              }}
            >
              <Radio value={"blue"}></Radio>
            </ConfigProvider>

            <ConfigProvider
              theme={{
                token: {
                  // Seed Token
                  colorPrimary: "green",

                  // Alias Token
                },
              }}
            >
              <Radio value={"green"}></Radio>
            </ConfigProvider>

            <ConfigProvider
              theme={{
                token: {
                  // Seed Token
                  colorPrimary: "orange",

                  // Alias Token
                },
              }}
            >
              <Radio value={"orange"}></Radio>
            </ConfigProvider>
          </Radio.Group>
        </div>
        <Button type="primary" className="w-full" onClick={createProject}>Create Project</Button>
      </div>

    
      
    </div>
  );
}
