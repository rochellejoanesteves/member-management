import React, { useState } from "react";
import { Table } from "antd";
import { getVerificationStatus } from "../../helpers/getVerificationStatus";
import { getStatus } from "../../helpers/getStatus";
import BadgeVerificationStatus from "../BadgeVerificationStatus";
import BadgeStatus from "../BadgeStatus";
import NameDropwDown from "../NameDropDown";
import VerificationStatusDropDown from "../VerificationStatusDropDown";
import EmailAddressDropDown from "../EmailAddressDropDown";
import MobileNumberDropDown from "../MobileNumberDropDown";
import DomainDropDown from "../DomainDropDown";
import StatusDropDown from "../StatusDropDown";

function MemberTable({ userDetails }) {
  const [selectedName, setSelectedName] = useState(null);
  const [selectedVerificationStatus, setSelectedVerificationStatus] =
    useState(null);
  const [selectedEmailAddress, setSelectedEmailAddress] = useState(null);
  const [selectedMobileNumber, setSelectedMobileNumber] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

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

  const handleMobileNumber = (mobileNumber) => {
    setSelectedMobileNumber(
      mobileNumber === "Mobile Number" ? null : mobileNumber
    );
  };

  const handleDomain = (domain) => {
    setSelectedDomain(domain === "Domain" ? null : domain);
  };

  const handleStatus = (status) => {
    setSelectedStatus(status === "Status" ? null : status);
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
      const matchesMobileNumber =
        !selectedMobileNumber || user.mobileNumber === selectedMobileNumber;
      const matchesDomain = !selectedDomain || user.domain === selectedDomain;
      const matchesStatus = !selectedStatus || user.status === selectedStatus;
      return (
        matchesName &&
        matchesVerificationStatus &&
        matchesEmail &&
        matchesMobileNumber &&
        matchesDomain &&
        matchesStatus
      );
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
      title: (
        <MobileNumberDropDown
          userData={userData}
          onChange={handleMobileNumber}
        />
      ),
      children: [
        {
          title: "Mobile Number",
          dataIndex: "mobileNumber",
          key: "mobileNumber",
        },
      ],
    },
    {
      title: <DomainDropDown userData={userData} onChange={handleDomain} />,
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
      title: <StatusDropDown onChange={handleStatus} />,
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
    <div  style={{
      borderRadius: "5px",
      paddingBottom: "10px",
      backgroundColor: "#0f181f"
    }}>
      <Table
        className="custom-table "
        columns={columns}
        dataSource={filteredData}
        pagination={false}
      />
    </div>
  );
}

export default MemberTable;
