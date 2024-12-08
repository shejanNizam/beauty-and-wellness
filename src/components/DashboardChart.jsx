import { DatePicker } from "antd";
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { Bar, BarChart, Legend } from "recharts";
import LoaderWraperComp from "./LoaderWraperComp";

const data = [
  { month: "Jan", totalAmount: 14 },
  { month: "Feb", totalAmount: 20 },
  { month: "Mar", totalAmount: 18 },
  { month: "Apr", totalAmount: 16 },
  { month: "May", totalAmount: 14 },
  { month: "Jun", totalAmount: 12 },
  { month: "Jul", totalAmount: 10 },
  { month: "Aug", totalAmount: 8 },
  { month: "Sep", totalAmount: 6 },
  { month: "Oct", totalAmount: 24 },
  { month: "Nov", totalAmount: 2 },
  { month: "Dec", totalAmount: 17 },
];

const DashboardChart = () => {
  return (
    <div className="bg-white rounded-lg px-[24px] py-[15px] text-white drop-shadow-lg h-[560px]">
      <div className="flex justify-between items-center">
        <h4 className="text-[20px] text-primary font-medium">Earnings</h4>
        <DatePicker picker="year" />
      </div>
      <LoaderWraperComp>
        <BarChart
          width={1450}
          height={500}
          data={data}
          syncId="anyId"
          margin={{
            top: 40,
            left: -25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            tick={{ stroke: "#142F62", strokeWidth: 0.5, fill: "#142F62" }}
            style={{ fontWeight: "350", color: "#FFFFFF" }}
            dataKey="month"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalAmount"
            fill="#142F62"
            barSize={30}
            radius={[0, 0, 0, 0]}
          />
        </BarChart>
      </LoaderWraperComp>
    </div>
  );
};

export default DashboardChart;
