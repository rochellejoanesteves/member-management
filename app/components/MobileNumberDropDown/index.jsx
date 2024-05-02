import React from "react";
import { Select } from "antd";

const { Option } = Select;

function MobileNumberDropDown({ onChange, userData }) {
  const mobileNumber = userData?.map((user) => user.mobileNumber);

  return (
    <Select
      defaultValue="Mobile Number"
      onChange={onChange}
      style={{ width: "100%" }}
      showSearch
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Mobile Number">Mobile Number</Option>
      {mobileNumber?.map((mobileNumber, index) => (
        <Option key={index} value={mobileNumber}>
          {mobileNumber}
        </Option>
      ))}
    </Select>
  );
}

export default MobileNumberDropDown;
