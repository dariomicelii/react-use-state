import "../data/languages";
import Buttons from "./Buttons";
import "./Card";
import Card from "./Card";
import "../data/languages.js";

export default function Main() {
  return (
    <main>
      <section>
        <div className="container">
          {languages.map((language) => (
            <Buttons />
          ))}
        </div>
      </section>
      <section>
        <div className="container">
          <Card />
        </div>
      </section>
    </main>
  );
}
