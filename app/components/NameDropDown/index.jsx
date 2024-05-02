import React from "react";
import { Select } from "antd";

const { Option } = Select;

function NameDropwDown({ handleNameChange, userData }) {
  return (
    <Select
      defaultValue="Names"
      style={{ width: "100%" }}
      onChange={handleNameChange}
      showSearch
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Names">Names</Option>
      {userData?.map((user) => (
        <Option key={user.id} value={user.name}>
          {user.name}
        </Option>
      ))}
    </Select>
  );
}

export default NameDropwDown;
