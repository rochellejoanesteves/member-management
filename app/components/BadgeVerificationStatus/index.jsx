import React from "react";
import Image from "next/image";
const verifiedImage = "/assets/images/verified.png";
const unverifiedImage = "/assets/images/unverified.png";
const pendingImage = "/assets/images/pending.png";

function BadgeVerificationStatus({ status }) {
  let imageSrc;
  let width;

  if (status === "VERIFIED") {
    imageSrc = verifiedImage;
    width = 73;
  } else if (status === "UNVERIFIED") {
    imageSrc = unverifiedImage;
    width = 87;
  } else if (status === "PENDING") {
    imageSrc = pendingImage;
    width = 75;
  }
  return (
    <div>
      <Image src={imageSrc} alt={status} width={width} height={22} />
    </div>
  );
}

export default BadgeVerificationStatus;
