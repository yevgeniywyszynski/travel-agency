import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OrderOptionDate = ({setOptionValue, currentValue}) => {
    return (
        <div>
            <DatePicker selected={currentValue} onChange={(valueDate) => setOptionValue(valueDate)} />
        </div>
    )
}

export default OrderOptionDate;