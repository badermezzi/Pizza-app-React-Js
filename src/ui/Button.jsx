import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    " text-sm bg-yellow-400 uppercase tracking-wide rounded-full font-semibold text-stone-800  inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " py-4 px-6 ",
    small: base + " py-2 px-4 text-xs ",
    round: base + " py-2 px-3.5 text-sm ",
    secondary:
      " text-sm py-3.5 px-6 border-2 border-stone-300 uppercase tracking-wide rounded-full font-semibold text-stone-400  inline-block hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed ",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
