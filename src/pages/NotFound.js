import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        impedit laboriosam atque doloremque minima ullam delectus dicta quia
        alias ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum, earum?
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
