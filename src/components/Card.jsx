import "../data/languages";

export default function Card({
  id,
  index,
  title,
  description,
  isOpen,
  handleStatusChange,
}) {
  const openButton = isOpen ? "open" : "";
  return (
    <div
      className={"card p-3 my-5 d-none" + openButton}
      onClick={() => handleStatusChange(index)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
