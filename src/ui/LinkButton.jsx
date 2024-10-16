import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const tailwindStyle = "text-sm text-blue-500 hover:text-blue-600";

  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={tailwindStyle}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={tailwindStyle}>
      {children}
    </Link>
  );
}

export default LinkButton;
