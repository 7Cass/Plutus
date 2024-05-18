"use client";

import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const data = [
  {
    name: "Jan",
    expense: 4000,
    income: 2400,
    amt: 2400,
  },
  {
    name: "Fev",
    expense: 3000,
    income: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    expense: 2000,
    income: 9800,
    amt: 2290,
  },
  {
    name: "Abr",
    expense: 2780,
    income: 3908,
    amt: 2000,
  },
  {
    name: "Mai",
    expense: 1890,
    income: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    expense: 2390,
    income: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Ago",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Set",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Out",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Dez",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
];

export function Chart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="expense" stroke="#8884d8" />
        <Line type="monotone" dataKey="income" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
