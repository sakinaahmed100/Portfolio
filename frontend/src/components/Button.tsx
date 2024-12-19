import "../styles/Button.css";
import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  link?: string | null; // The `link` prop can be a string or null/undefined
};

export default function Button({ text, link = null }: ButtonProps) {
  return (
    link ? (
      <Link to={link}>
        <div className="button">{text}</div>
      </Link>
    ) : (
      <div className="button">{text}</div>
    )
  );
}
