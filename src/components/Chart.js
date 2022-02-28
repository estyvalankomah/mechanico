import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function Chart() {

    const data = [
        {
          name: 'Jan',
          todoRequests: 2700,
          completedJobs: 1600,
          missedRequests: 700
        },
        {
          name: "Feb",
          todoRequests: 2800,
          completedJobs: 1300,
          missedRequests: 1800
        },
        {
          name: "Mar",
          todoRequests: 2700,
          completedJobs: 1300,
          missedRequests: 1500
        },
        {
          name: "Apr",
          todoRequests: 2400,
          completedJobs: 1600,
          missedRequests: 1000
        },
        {
          name: "May",
          todoRequests: 2600,
          completedJobs: 1300,
          missedRequests: 2400
        },{
          name: 'June',
          todoRequests: 1600,
          completedJobs: 2300,
          missedRequests: 1800
        },
        {
          name: "July",
          todoRequests: 2100,
          completedJobs: 1700,
          missedRequests: 2500
        },
        {
          name: "Aug",
          todoRequests: 1600,
          completedJobs: 2000,
          missedRequests: 2000
        },
        {
          name: "Sep",
          todoRequests: 1300,
          completedJobs: 2300,
          missedRequests: 2200
        },
        {
          name: "Oct",
          todoRequests: 1200,
          completedJobs: 2300,
          missedRequests: 2400
        },{
          name: 'Nov',
          todoRequests: 800,
          completedJobs: 2500,
          missedRequests: 3100
        },
        {
          name: "Dec",
          todoRequests: 1800,
          completedJobs: 1600,
          missedRequests: 1900
        }
      ];

  return (
    <ResponsiveContainer width="100%" className="chart-container" aspect={3}>
      <LineChart
          width={850}
          height={300}
          data={data}
          margin={{
          top: 0,
          right: 0,
          left: -60,
          bottom: 0,
          }}
      >
          <CartesianGrid  horizontal="true" vertical="" stroke="rgb(209, 208, 208)"/>
          <XAxis dataKey="name" padding={{left: 80, right: 60}} tick={{fill: "rgb(190, 189, 189)"}} stroke="rgb(209, 208, 208)" />
          <YAxis axisLine={false}  domain={[0, 3000]} tickCount={4.5} tickSize={0}/>
          <Legend layout="horizontal" verticalAlign="top"/>
          <Line type="monotone" dataKey="todoRequests" stroke="rgb(24, 122, 202)" dot={false} strokeWidth="2" activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
          <Line type="monotone" dataKey="completedJobs" stroke="2" dot={false} strokeWidth="2" activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
          <Line type="monotone" dataKey="missedRequests" stroke="rgb(190, 73, 73)" dot={false} strokeWidth="2" activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
