import "../styles/badge.css";
export default function Badge({
  text = "Badge",
  color = "gray",
  shape = "square",
}) {
  return (
    <span className={`badge ${color.toLowerCase()} ${shape.toLowerCase()}`}>
      {text}
    </span>
  );
}
