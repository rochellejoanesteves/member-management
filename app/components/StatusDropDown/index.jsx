import React from "react";
import { Select } from "antd";

const { Option } = Select;

function StatusDropDown({ onChange }) {
  return (
    <Select defaultValue="Status" onChange={onChange} style={{ width: "100%" }}>
      <Option value="Status">Status</Option>
      <Option value="ACTIVE">Active</Option>
      <Option value="BLACKLISTED">Blacklisted</Option>
      <Option value="DISABLED">Disabled</Option>
    </Select>
  );
}

export default StatusDropDown;
