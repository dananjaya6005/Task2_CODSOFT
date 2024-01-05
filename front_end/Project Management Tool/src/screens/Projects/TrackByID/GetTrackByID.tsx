import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { BarChart, Card, Title } from "@tremor/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import commonBg from '../../../images/commonBg.png';


const chartdata = [
  {
    name: "Task Status",
    "Not started": 890,
    Active: 338,
    "On Hold": 538,
    Completed: 396,
    Droped: 138,
  },
];

const valueFormatter = (number) =>
  ` ${new Intl.NumberFormat("us").format(number).toString()}`;

export default function GetTrackByID() {
  const { id } = useParams<{ id: string }>();
  const absoulteID = id?.replace("Track", "");
  const [project, setProject] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [chartdata, setChartdata] = useState();
  const [percentage, setPercentage] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [taskTotal, setTaskTotal] = useState(0);

  useEffect(() => {
    getProductByID();
  }, [absoulteID]);

  async function getProductByID() {
    await axios
      .get(`http://localhost:3000/dashboard/getProjectbyid/${absoulteID}`)
      .then((response) => {
        console.log(response.data);
        setProject(response.data.data);
        setTasks(response.data.data.task);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    setChartdata(calculateTaskStatus());
    calCompletedTask();
  }, [tasks]);

  const calculateTaskStatus = () => {
    const taskStatus = [
      {
        name: "Task Status",
        "Not started": 0,
        Active: 0,
        "On Hold": 0,
        Completed: 0,
        Droped: 0,
      },
    ];

    console.log("tasks", tasks);

    if (tasks.length > 0) {
      tasks.map((task) => {
        if (task.status === "⚪ not started") {
          taskStatus[0]["Not started"] += 1;
        } else if (task.status === "🟢 active") {
          taskStatus[0]["Active"] += 1;
        } else if (task.status === "🟡 on hold") {
          taskStatus[0]["On Hold"] += 1;
        } else if (task.status === "🔵 completed") {
          taskStatus[0]["Completed"] += 1;
        } else if (task.status === "🔴 dropped") {
          taskStatus[0]["Droped"] += 1;
        }
      });
    } else {
      console.log("no tasks");
    }

    return taskStatus;
  };


  const calCompletedTask = () => { 
    let completedTask = 0;
    let totalTask =  tasks.length;
    tasks.map((task) => {

      if (task.status === "🔵 completed") {
        completedTask += 1;
      }
    });
    setTaskCompleted(completedTask);
    setTaskTotal(totalTask);
    setPercentage((completedTask / totalTask) * 100);

  };


  return (
    <>
      <div style={{
        backgroundImage: `url(${commonBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      
      }} className="h-screen w-screen">
        <Card className="m-5 w-10/12">
          <Title> Inspect the tasks of your project </Title>

          <BarChart
            className="mt-6  "
            data={chartdata}
            index="name"
            valueFormatter={valueFormatter}
            yAxisWidth={60}
            style={{ height: "400px" }}
            categories={[
              "Not started",
              "Active",
              "On Hold",
              "Completed",
              "Droped",
            ]}
            colors={["gray", "teal", "amber", "blue", "rose"]}
          />
        </Card>


        <div className="flex bg-white m-5 w-fit rounded-xl shadow-md " >

        <div className="flex justify-around w-4/5 mb-5	" >

          <div className="flex justify-center flex-col items-center ">
          <p className="text-xl text-gray-700 font-semibold py-5" >Task Achieved </p>
          <CircularProgressbar  strokeWidth={10} value={percentage} text={`${percentage}%`}
          className="w-3/5"
          styles={ buildStyles({
            pathColor: `#00b359`,
            textColor: '#00b359',
            trailColor: '#ccffe6',
            backgroundColor: '#ccffe6',
          })} />

        </div>

        <div className="flex justify-center flex-col items-center  ">
          <p className="text-xl text-gray-700 font-semibold py-5" > Task Unfinished </p>
          <CircularProgressbar  strokeWidth={10} value={100- percentage} text={`${100 - percentage}%`}
          className="w-3/5"
          styles={ buildStyles({
            pathColor: `#e6005c`,
            textColor: '#e6005c',
            trailColor: '#ffcce0',
            backgroundColor: '#e6005c',
          })} />

        </div>

        </div>
        </div>

      </div>
    </>
  );
}
