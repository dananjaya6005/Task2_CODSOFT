import { useState ,useEffect } from "react";
import book from "../../images/book.png";
import engineer from "../../images/engineer.png";
import aglie from "../../images/agile.png";
import stockMarket from "../../images/stock-market.png";
import { Radio, Form, Input } from "antd";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { useOrganization } from "@clerk/clerk-react";
import { Select } from "antd";
import type { SelectProps } from "antd";

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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectType, setProjectType] = useState("blank_project");
  const [members, setMembers] = useState([] as string[]);
  const [options, setOptions] = useState<SelectProps["options"]>([]) ;

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
  }
  , [memberships.data]);


  const pushMemberstoOptions = () => {
    if(memberships){
      memberships.data.map((member) => {
        setOptions((prev) => [...prev, {  label: member.publicUserData.identifier, value: member.publicUserData.identifier },
        ]);
      })
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
    setMembers(value)
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50 flex justify-center items-center">
      <ul>
        {/* {members?.map((membership) => (
          <li key={membership.id}>
            
            {membership.publicUserData.identifier}
          </li>
        ))} */}
      </ul>
      
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
                onChange={(e) => {}}
                className="w-1/2  max-[500px]:w-full"
                placeholder="Enter Project Name ..."
              />
            </Form.Item>

            <Form.Item label="Description">
              <TextArea
                onChange={(e) => {}}
                maxLength={150}
                className="w-1/2  max-[500px]:w-full"
                placeholder="Max length 150 characters"
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
      </div>
    </div>
  );
}
