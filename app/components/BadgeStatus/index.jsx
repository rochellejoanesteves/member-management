import React from "react";
import Image from "next/image";
const activeImage = "/assets/images/active.png";
const blacklistedImage = "/assets/images/blacklisted.png";
const disabledImage = "/assets/images/disabled.png";

function BadgeStatus({ status }) {
  let imageSrc;
  let width;

  if (status === "ACTIVE") {
    imageSrc = activeImage;
    width = 65;
  } else if (status === "BLACKLISTED") {
    imageSrc = blacklistedImage;
    width = 91;
  } else if (status === "DISABLED") {
    imageSrc = disabledImage;
    width = 78;
  }
  return (
    <div>
      <Image src={imageSrc} alt={status} width={width} height={22} />
    </div>
  );
}

export default BadgeStatus;
