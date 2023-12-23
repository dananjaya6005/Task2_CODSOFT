import React, { useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Select, Table } from "antd";
import type { DatePickerProps } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

export default function UpdateTask(props) {

  const [project, setProject] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);
  const { TextArea } = Input;
  const [TaskName, setTaskName] = useState("");
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [LastUpdate, setLastUpdate] = useState(new Date().toLocaleString());
  const [needtoRrender, setNeedtoRrender] = useState(false);





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




  return (
    <div>
         <Modal
        title="Update Task"
        open={isModalOpen}
        onOk={()=>{setIsModalOpen(false)}}
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


    </div>
  )
}
