import React, { useState } from "react";
import { Table } from "antd";
import { getVerificationStatus } from "../../helpers/getVerificationStatus";
import { getStatus } from "../../helpers/getStatus";
import BadgeVerificationStatus from "../BadgeVerificationStatus";
import BadgeStatus from "../BadgeStatus";
import NameDropwDown from "../NameDropDown";
import VerificationStatusDropDown from "../VerificationStatusDropDown";
import EmailAddressDropDown from "../EmailAddressDropDown";

function MemberTable({ userDetails }) {
  const [selectedName, setSelectedName] = useState(null);
  const [selectedVerificationStatus, setSelectedVerificationStatus] =
    useState(null);
  const [selectedEmailAddress, setSelectedEmailAddress] = useState(null);

  const userData = userDetails?.edges?.map((item, index) => ({
    ...item.node,
    key: index,
  }));

  //
  const handleNameChange = (name) => {
    setSelectedName(name === "Names" ? null : name);
  };

  const handleVerificationStatus = (verificationStatus) => {
    setSelectedVerificationStatus(
      verificationStatus === "Verification Status" ? null : verificationStatus
    );
  };

  const handleEmailAddressChange = (email) => {
    setSelectedEmailAddress(email === "Email Address" ? null : email);
  };

  // Filtered Members
  const filteredData =
    userData?.filter((user) => {
      const matchesName = !selectedName || user.name === selectedName;
      const matchesVerificationStatus =
        !selectedVerificationStatus ||
        user.verificationStatus === selectedVerificationStatus;
      const matchesEmail =
        !selectedEmailAddress || user.emailAddress === selectedEmailAddress;

      return matchesName && matchesVerificationStatus && matchesEmail;
    }) ?? userData;

  // Table Columns
  const columns = [
    {
      title: (
        <NameDropwDown
          userData={userData}
          handleNameChange={handleNameChange}
        />
      ),
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
      title: <VerificationStatusDropDown onChange={handleVerificationStatus} />,
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
      title: (
        <EmailAddressDropDown
          userData={userData}
          onChange={handleEmailAddressChange}
        />
      ),
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
          render: (text) => <BadgeStatus status={getStatus(text)} />,
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
      <Table columns={columns} dataSource={filteredData} pagination={false} />
    </div>
  );
}

export default MemberTable;
