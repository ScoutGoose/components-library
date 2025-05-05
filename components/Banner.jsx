import "../styles/banner.css";
import { useState } from "react";
import { IoIosCheckmarkCircle, IoIosWarning } from "react-icons/io";
import { PiWarningCircleFill } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
export default function Banner({
  title = "Congratulations!",
  status = "success",
  children,
}) {
  const icons = {
    success: <IoIosCheckmarkCircle />,
    warning: <IoIosWarning />,
    error: <RxCrossCircled />,
    neutral: <PiWarningCircleFill />,
  };
  const [showFull, setShowFull] = useState(false);
  function toggleDetails() {
    setShowFull((prevState) => !prevState);
  }
  return (
    <div
      className={`banner ${status.toLowerCase()}`}
      onClick={children && toggleDetails}
    >
      <h4>
        <span>{icons[status]}</span>
        {title}
        {children &&
          (showFull ? (
            <span className="chevron">
              <FaChevronUp />
            </span>
          ) : (
            <span className="chevron">
              <FaChevronDown />
            </span>
          ))}
      </h4>
      {children && showFull ? <p className="banner-text">{children}</p> : null}
    </div>
  );
}
