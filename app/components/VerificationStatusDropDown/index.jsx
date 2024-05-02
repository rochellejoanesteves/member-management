import React from "react";
import { Select } from "antd";

const { Option } = Select;

function VerificationStatusDropDown({ onChange }) {
  return (
    <Select
      defaultValue="Verification Status"
      onChange={onChange}
      style={{ width: "100%" }}
    >
      <Option value="Verification Status">Verification Status</Option>
      <Option value="PENDING">Pending Users</Option>
      <Option value="VERIFIED">Verified Users</Option>
      <Option value="UNVERIFIED">Unverified Users</Option>
    </Select>
  );
}

export default VerificationStatusDropDown;
