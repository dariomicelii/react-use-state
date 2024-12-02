import "../data/languages";

export default function Card({ title, description }) {
  return (
    <div className="card p-3 my-5">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
