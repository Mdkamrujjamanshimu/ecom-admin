import { BarChart, Bar } from "recharts";
import { FiChevronsUp } from "react-icons/fi";
import { FiChevronsDown } from "react-icons/fi";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Box = (props) => {
  return (
    <div className="box w-full h-auto px-3 py-4 border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col gap-3 rounded-md bg-green-100 dark:bg-[#151515]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-between gap-3">
          <div className="leftCol flex items-center gap-3">
            {props.icon}
            <div className="info flex flex-col gap-0">
              <h4>{props.title}</h4>
              <h5 className="text-[22px] font-bold">{props.count}</h5>
            </div>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="chart w-17.5 h-10">
          <BarChart
            // style={{
            //   width: "100%",
            //   maxWidth: "300px",
            //   maxHeight: "100px",
            //   aspectRatio: 1.618,
            // }}
            width={70}
            height={40}
            responsive
            data={data}
            barGap={1}
            barCategoryGap="10%"
          >
            <Bar
              dataKey="uv"
              fill={props.color}
              barSize={6}
              radius={[10, 10, 10, 10]}
            />
            {/* <RechartsDevtools /> */}
          </BarChart>
        </div>
      </div>

      <hr className="text-[rgba(0,0,0,0.1)] dark:text-[rgba(255,255,255,0.1)]" />

      <div className="flex items-center gap-3">
        <span
          className={`${props.progress === true ? "text-green-700" : "text-red-700"} text-[14px] font-medium flex items-center`}
        >
          {props.progress === true ? (
            <FiChevronsUp
              className={`${props.progress === true ? "text-green-700" : "text-red-700"}`}
              size={18}
            />
          ) : (
            <FiChevronsDown
              className={`${props.progress === true ? "text-green-700" : "text-red-700"}`}
              size={18}
            />
          )}
          +32.40%
        </span>
        <span className="text-gray-700 dark:text-gray-400 text-[14px]">
          {props.progress === true ? "Increased" : "Decreased"} last month
        </span>
      </div>
    </div>
  );
};

export default Box;
