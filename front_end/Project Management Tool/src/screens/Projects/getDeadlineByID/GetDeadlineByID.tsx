import React, { useEffect, useState } from "react";
import type { Dayjs } from "dayjs";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge } from "antd";
import { useParams } from "react-router";
import axios from "axios";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, dayjsLocalizer   } from 'react-big-calendar'
import dayjs from 'dayjs';


const GetDeadlineByID = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const localizer = dayjsLocalizer(dayjs);
  const { id } = useParams<{ id: string }>();
  const absoulteID = id?.replace("Dead", "");
  const [myEventsList, setMyEventsList] = useState([]);

  useEffect(() => {
    getProjectbyId();
  },[id]);



  async function getProjectbyId (){

    await axios.
    get(`http://localhost:3000/dashboard/getProjectbyid/${absoulteID}`)
    .then((response) => {
      setProjects(response.data.data);
      console.log(response.data.data.task);
      setTasks(response.data.tasks);
      setTasktoMyEventsList(response.data.data.task);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  const setTasktoMyEventsList = (taskItem) => {
    setMyEventsList([]); 
    taskItem.map((task) => {
      const event = {
        title: task.name,
        start: dayjs(task.startDate),
        end: dayjs(task.endDate),
   
      };
      setMyEventsList((myEventsList  ) => [...myEventsList, event]);
    });
  };


  console.warn(myEventsList);
 


  


  return (
    <>
      <div className="w-8/12 m-5 bg-white shadow-lg p-5 rounded-lg ">
      <div>

    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500}}
      views={['month', 'agenda']}
    
    />
  </div>

      </div>
    </>
  );
};

export default GetDeadlineByID;
