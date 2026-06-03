import React from 'react'
import { LuChartBarStacked } from 'react-icons/lu';

const Statics = () => {
    const data = [
        { label: "Total Sales", value: "120,000" , icon: <LuChartBarStacked /> },
        { label: "New Customers", value: "350" , icon: <LuChartBarStacked /> },
        { label: "Returning Customers", value: "150" , icon: <LuChartBarStacked /> },
        { label: "Average Order Value", value: "75" , icon: <LuChartBarStacked /> },
    ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 p-4 ">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between gap-4 p-4 bg-(--background) rounded-lg shadow-md ">
            <div className="text-[50px] text-[#009CFF] ">{item.icon}</div>
          <div>
            <p className="text-(--foreground) text-[1rem]">{item.label}</p>
            <h3 className="text-lg font-semibold text-(--foreground) text-end">${item.value}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Statics