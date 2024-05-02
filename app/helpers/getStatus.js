export const getStatus = (status) => {
  if (status === "ACTIVE") {
    return "ACTIVE";
  } else if (status === "BLACKLISTED") {
    return "BLACKLISTED";
  } else {
    return "DISABLED";
  }
};
