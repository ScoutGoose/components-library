import { IoCloudUploadSharp } from "react-icons/io5";
import "../styles/card.css";
export default function Card({
  icon = <IoCloudUploadSharp />,
  iconColor = "#fff",
  iconBackgroundColor = "#3F75FE",
  title = "Easy Deployment",
  text = "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
}) {
  return (
    <div className="card">
      <span
        className="card-icon"
        style={{ backgroundColor: iconBackgroundColor, color: iconColor }}
      >
        {icon}
      </span>
      <section className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </section>
    </div>
  );
}
