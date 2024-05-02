import React from "react";
import { Select } from "antd";

const { Option } = Select;

function EmailAddressDropDown({ onChange, userData }) {
  const emailAddress = userData?.map((user) => user.emailAddress);
  const optionsWithValues = emailAddress?.filter((email) => email);

  return (
    <Select
      defaultValue="Email Address"
      showSearch
      onChange={onChange}
      style={{ width: "100%" }}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Email Address">Email Address</Option>
      {optionsWithValues?.map((emailAddress, index) => (
        <Option key={index} value={emailAddress}>
          {emailAddress}
        </Option>
      ))}
    </Select>
  );
}

export default EmailAddressDropDown;
