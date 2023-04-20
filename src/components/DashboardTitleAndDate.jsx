import React, { useState } from "react";
import "antd/dist/reset.css";
import moment from "moment";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const DashboardTitleAndDate = ({ title }) => {
  const today = new Date().toLocaleDateString("en-GB");
  const [selectedDates, setSelectedDates] = useState([]);
  const startDate =
    selectedDates !== null
      ? moment(selectedDates[0]?.$d).format("DD/MM/YYYY")
      : today;
  const endDate =
    selectedDates !== null
      ? moment(selectedDates[1]?.$d).format("DD/MM/YYYY")
      : today;
  console.log(selectedDates, startDate, endDate);

  return (
    <>
      <div className="intro-y flex items-center h-10">
        <h2 className="text-lg font-bold truncate mr-5">{title}</h2>

        <div className="sm:ml-auto">
          <RangePicker
            className="pt-2 pb-2 box"
            onChange={(val) => setSelectedDates(val)}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardTitleAndDate;
