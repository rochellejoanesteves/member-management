import React from "react";
import { Select } from "antd";

const { Option } = Select;

function DomainDropDown({ onChange, userData }) {
  const domain = userData?.map((user) => user.domain);
  const optionsWithValues = domain?.filter((email) => email);

  return (
    <Select
      defaultValue="Domain"
      onChange={onChange}
      style={{ width: "100%" }}
      showSearch
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Domain">Domain</Option>
      {optionsWithValues?.map((domain, index) => (
        <Option key={index} value={domain}>
          {domain}
        </Option>
      ))}
    </Select>
  );
}

export default DomainDropDown;
