
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import type { DatePickerProps } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import commonBg from '../../../images/commonBg.png';



export default function GetTaskbyID() {
  const [project, setProject] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const passid = id?.replace("Task", "");
  const { TextArea } = Input;

  const [TaskName, setTaskName] = useState("");
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [LastUpdate, setLastUpdate] = useState(new Date().toLocaleString());
  const [needtoRrender, setNeedtoRrender] = useState(false);
  const [isOpenUpdateTaskModle, setIsOpenUpdateTaskModle] = useState(false);
  const [updateTaskID, setUpdateTaskID] = useState("");



 // useState for store update task data 

  const [updateTaskName, setUpdateTaskName] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [updateStartDate, setUpdateStartDate] = useState("");
  const [updateEndDate, setUpdateEndDate] = useState("");
  const [updateLastUpdate, setUpdateLastUpdate] = useState(new Date().toLocaleString());
  



  const getTaskbyID = async () => {
    const res = await axios.get(
      `http://localhost:3000/dashboard/getProjectbyid/${passid}`
    );
    console.log(res.data);
    setProject(res.data.data);
  };

  useEffect(() => {
    getTaskbyID();
  }, [passid, needtoRrender]);

  async function addTask() {
    await axios
      .post(`http://localhost:3000/dashboard/addTask`, {
        id: passid,
        task: {
          name: TaskName,
          description: Description,
          startDate: StartDate,
          endDate: EndDate,
          status: Status,
          lastUpdate: LastUpdate,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTimeout(()=>{
          setNeedtoRrender(!needtoRrender);
        },500)

        setTimeout(() => {
          setIsModalOpen(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function deletTask(taskid : string ){

    axios.get(`http://localhost:3000/dashboard/deleteTask/${passid}/${taskid}`)
    .then((res)=>{
      console.log(res.data)

      setTimeout(()=>{
        setNeedtoRrender(!needtoRrender);
      },500)
      
    })
    .catch((err)=>{
      console.log(err)
    });

  }

  async function updateTask(){

    await axios.post(`http://localhost:3000/dashboard/updateTask/${passid}/${updateTaskID}`,{
      task:{
        name: updateTaskName,
        description: updateDescription,
        startDate: updateStartDate,
        endDate: updateEndDate,
        status: updateStatus,
        lastUpdate: updateLastUpdate,
      }
    })
    .then((res)=>{
      console.log(res.data)
      setTimeout(()=>{
        setNeedtoRrender(!needtoRrender);
        setIsOpenUpdateTaskModle(false);

      },500)
      
    })
    .catch((err)=>{
      console.log(err)
    });

  }





  const CalDateDiffence = (enddate) => {
    const currdate = new Date();
    const endDate = new Date(enddate);
    const diff = endDate - currdate;

  

    const resultDate = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return resultDate ;
  };

  const decideColorForDaysleftbtn = (date) => {
    let colorForDaysleftbtn = "#6d28d9";

    if (date > 0) {
      colorForDaysleftbtn = "#34d399";
    } else if (date < 0) {
      colorForDaysleftbtn = "#fb7185";
    }
    return colorForDaysleftbtn;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setStartDate(dateString);
  };

  const onChangeEndDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setEndDate(dateString);
  };



  const onUpdateStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setUpdateStartDate(dateString);
  };

  const onUpdateEndDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setUpdateEndDate(dateString);
  };



  function  grabandsetUpdateTaskData(task : any){

    setUpdateTaskID(task._id)
    setIsOpenUpdateTaskModle(!isOpenUpdateTaskModle)
    setUpdateTaskName(task.name)
    setUpdateDescription(task.description)
    setUpdateStatus(task.status)
    setUpdateStartDate(task.startDate)
    setUpdateEndDate(task.endDate)
    
  }


  return (
    <>
      <div style={{
        backgroundImage: `url(${commonBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
     
      }} className="min-h-screen w-screen ">
        <div className="bg-white rounded-lg shadow-md m-10">
          <div className="flex flex-col justify-between p-5">
            <div className="flex flex-col">
              <div className="text-2xl font-semibold">{project.name}</div>
              <div className="text-sm font-semibold my-3">
                Project ID : {project._id}
              </div>
            </div>

            <hr className="flex-grow my-5" />

            <div>
              <Button
                type="primary"
                onClick={showModal}
                shape="round"
                icon={<PlusCircleOutlined />}
              >
                New Task
              </Button>
            </div>
            

            <div className="my-10">
              {project.task?.map((task, index) => {
                const colorBtn = decideColorForDaysleftbtn(
                  CalDateDiffence(task.endDate)
                );

                return (
                  <div
                    key={index}
                    className="border-solid border-2 rounded-lg border-sky-200 w-9/12 m-3 my-5 "
                  >
                    <div className="my-2 p-4 ">
                      <div className="flex justify-between">
                        <div className="text-lg font-semibold">{task.name}</div>
                        <div className="text-sm font-semibold mr-10 my-2">
                          {task.status}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 " >Task ID : {task._id}</div>
                      <div className="text-sm font-semibold text-gray-600 my-2">
                        {task.description}
                      </div>
                      <div className="text-sm font-semibold">
                        Start Date: {task.startDate}
                      </div>
                      <div className="text-sm font-semibold">
                        End Date: {task.endDate}
                      </div>
                      <div className="text-sm font-semibold">
                        Last Update: {task.lastUpdate}
                      </div>

                      <div className="flex flex-row-reverse justify-between mt-2  ">
                        <div>
                          <Button
                            type="primary"
                            onClick={()=>{grabandsetUpdateTaskData(task)}}
                            className="my-3"
                            icon={<EditFilled />}
                          ></Button>
                          <Button
                            type="primary"
                            danger
                            className="mx-4"
                            icon={<DeleteFilled />}
                            onClick={()=>{deletTask(task._id)}}
                          ></Button>
                        </div>

                        <div
                          style={{ backgroundColor: colorBtn }}
                          className="w-fit px-4 py-1 rounded-3xl my-2 text-sm  h-fit"
                        >
                          <p className="font-semibold text-gray-800 ">
                            {CalDateDiffence(task.endDate)} days left{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Add new Task"
        open={isModalOpen}
        onOk={addTask}
        onCancel={handleCancel}
      >
        <div className="my-7">
          <Form className="my-5 w-full max-[500px]:w-10/12" layout="vertical">
            <Form.Item label="Task Name">
              <Input
                onChange={(e) => {
                  setTaskName(e.target.value);
                }}
                className="w-1/2  max-[500px]:w-full"
                placeholder="Enter Project Name ..."
              />
            </Form.Item>

            <Form.Item label="Description">
              <TextArea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                maxLength={500}
                className="w-1/2  max-[500px]:w-full"
                placeholder="Max length 500 characters"
              />
            </Form.Item>
          </Form>
        </div>

        <div>
          <Select
            defaultValue="🟢 active"
            style={{ width: 200 }}
            onChange={(value) => {
              setStatus(value);
            }}
            options={[
              { value: "⚪ not started", label: "⚪ not started" },
              { value: "🟢 active", label: "🟢 active" },
              { value: "🟡 on hold", label: "🟡 on hold" },
              { value: "🔵 completed", label: "🔵 completed" },
              { value: "🔴 dropped", label: "🔴 dropped" },
            ]}
          />
        </div>

        <div className=" flex justify-between ">
          <div>
            <p className="text-sm my-2 ">Start date</p>
            <DatePicker onChange={onChangeStartDate} />
          </div>

          <div>
            <p className="text-sm my-2"> Due Date </p>
            <DatePicker onChange={onChangeEndDate} />
          </div>
        </div>
      </Modal>

      {/* //update task modal */}


      <div>
         <Modal
        title="Update Task"
        open={isOpenUpdateTaskModle}
        onOk={updateTask}
        onCancel={()=>{setIsOpenUpdateTaskModle(false)}}
      >
        <div className="my-7">
          <Form className="my-5 w-full max-[500px]:w-10/12" layout="vertical">
            <Form.Item label="Task Name">
              <Input
               value={updateTaskName}
                onChange={(e) => {
                  setUpdateTaskName(e.target.value);
                }}
                className="w-1/2  max-[500px]:w-full"
                placeholder="Enter Project Name ..."
              />
            </Form.Item>

            <Form.Item label="Description">
              <TextArea
              value={updateDescription}
                onChange={(e) => {
                  setUpdateDescription(e.target.value);
                }}
                maxLength={500}
                className="w-1/2  max-[500px]:w-full"
                placeholder="Max length 500 characters"
              />
            </Form.Item>
          </Form>
        </div>

        <div>
          <Select
            defaultValue="🟢 active"
            value={updateStatus}
            style={{ width: 200 }}
            onChange={(value) => {setUpdateStatus(value)}}
            options={[
              { value: "⚪ not started", label: "⚪ not started" },
              { value: "🟢 active", label: "🟢 active" },
              { value: "🟡 on hold", label: "🟡 on hold" },
              { value: "🔵 completed", label: "🔵 completed" },
              { value: "🔴 dropped", label: "🔴 dropped" },
            ]}
          />
        </div>

        <div className=" flex justify-between ">
          <div>
            <p className="text-sm my-2 ">Start date</p>
            <DatePicker value={dayjs(updateStartDate, 'YYYY-MM-DD')} onChange={onUpdateStartDate} />
          </div>

          <div>
            <p className="text-sm my-2"> Due Date </p>
            <DatePicker  value={dayjs(updateEndDate, 'YYYY-MM-DD')} onChange={onUpdateEndDate} />
          </div>
        </div>
      </Modal>


    </div>

  

      

      
    
    
      
    </>
  );
}
