export const getVerificationStatus = (status) => {
  if (status === "VERIFIED") {
    return "VERIFIED";
  } else if (status === "UNVERIFIED") {
    return "UNVERIFIED";
  } else {
    return "PENDING";
  }
};
