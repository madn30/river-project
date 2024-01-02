import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dateRangePicker.css'
function DateRangePicker({ title }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleChangeStart = (date) => {
    setStartDate(date);
    setEndDate(null); // Reset the end date when the start date changes
  };

  const handleChangeEnd = (date) => {
    setEndDate(date);
  };

  return (
    <div className='wrapper-date-range'>
      <span className='title'>{title} </span>
      <div className="date-picker-container">
        <DatePicker
          selected={startDate}
          onChange={handleChangeStart}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()} // Disables past dates
          dateFormat="dd/MM/yyyy"
          placeholderText='dd/MM/yyyy'
        />
        <div className='divider-picker' />
        <DatePicker
          selected={endDate}
          onChange={handleChangeEnd}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate} // Prevents selecting an end date before the start date
          dateFormat="dd/MM/yyyy"
          placeholderText='dd/MM/yyyy'

        />
      </div>
    </div>
  );
}

export default DateRangePicker;
