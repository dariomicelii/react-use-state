export default function Buttons({ id, index, title, handleStatusChange }) {
  return (
    <div
      className={"btn btn-primary m-2"}
      onClick={() => handleStatusChange(index)}
    >
      {title}
    </div>
  );
}
