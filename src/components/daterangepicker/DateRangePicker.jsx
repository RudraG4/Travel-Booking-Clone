import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { addDays, format } from "date-fns";
import { DateRangePicker as DateRange } from "react-date-range";
import "./daterangepicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateRangePicker(props) {
  const {
    dateRange = {},
    fromLabel = "From",
    toLabel = "To",
    dateDisplayFormat = "MMM dd, yyyy EE",
    onChange = () => {}
  } = props;
  const [isShowPicker, setIsShowPicker] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(dateRange.startDate),
      endDate: new Date(dateRange.endDate),
      key: "selection"
    }
  ]);

  const fromDateText = date[0].startDate
    ? format(date[0].startDate, dateDisplayFormat)
    : fromLabel;

  const toDateText = date[0].endDate
    ? format(date[0].endDate, dateDisplayFormat)
    : toLabel;

  function onDateRangeChange(item) {
    setDate([item.selection]);
    onChange({ ...item.selection });
  }

  function handleClick() {
    setIsShowPicker(!isShowPicker);
  }

  return (
    <>
      <div className="daterange-container container-fluid">
        <div className="daterange-date" title={fromLabel}>
          <FontAwesomeIcon icon={faCalendarDays} className="fa-icon" />
          <div className="daterange-date-input" onClick={handleClick}>
            {fromDateText}
          </div>
        </div>
        <div className="daterange-date" title={toLabel}>
          <FontAwesomeIcon icon={faCalendarDays} className="fa-icon" />
          <div className="daterange-date-input" onClick={handleClick}>
            {toDateText}
          </div>
        </div>
      </div>
      {isShowPicker && (
        <DateRange
          className="daterange-picker"
          direction="horizontal"
          dateDisplayFormat={dateDisplayFormat}
          startDatePlaceholder={fromLabel}
          endDatePlaceholder={toLabel}
          minDate={new Date()}
          ranges={date}
          months={2}
          showSelectionPreview={false}
          moveRangeOnFirstSelection={false}
          editableDateInputs={false}
          preventSnapRefocus={true}
          onChange={onDateRangeChange}
          staticRanges={[]}
          inputRanges={[]}
        />
      )}
    </>
  );
}
