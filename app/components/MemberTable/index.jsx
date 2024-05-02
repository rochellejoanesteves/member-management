import React from "react";
import { Table } from "antd";
import { getVerificationStatus } from "../../helpers/getVerificationStatus";
import BadgeVerificationStatus from "../BadgeVerificationStatus";

function MemberTable({ userDetails }) {
  const userData = userDetails?.edges?.map((item, index) => ({
    ...item.node,
    key: index,
  }));
  const columns = [
    {
      title: "Name",
      children: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (text) => <span style={{ color: "#f2bf4e" }}>{text}</span>,
        },
      ],
    },
    {
      title: "Verification Status",
      children: [
        {
          title: "Verification Status",
          dataIndex: "verificationStatus",
          key: "verificationStatus",
          render: (text) => (
            <BadgeVerificationStatus status={getVerificationStatus(text)} />
          ),
        },
      ],
    },
    {
      title: "Email Address",
      children: [
        {
          title: "Email Address",
          dataIndex: "emailAddress",
          key: "emailAddress",
        },
      ],
    },
    {
      title: "Mobile Number",
      children: [
        {
          title: "Mobile Number",
          dataIndex: "mobileNumber",
          key: "mobileNumber",
        },
      ],
    },
    {
      title: "Domain",
      children: [
        {
          title: "Domain",
          dataIndex: "domain",
          key: "domain",
        },
      ],
    },
    {
      title: "Date Registered",
      children: [
        {
          title: "Date Registered",
          dataIndex: "dateTimeCreated",
          key: "dateTimeCreated",
        },
      ],
    },
    {
      title: "Status",
      children: [
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
        },
      ],
    },
    {
      title: "Date and Time Last Active",
      children: [
        {
          title: "Date and Time Last Active",
          dataIndex: "dateTimeLastActive",
          key: "dateTimeLastActive",
        },
      ],
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={userData} pagination={false} />
    </div>
  );
}

export default MemberTable;
