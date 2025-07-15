import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const className =
    'ml-3 text-sm text-blue-800hover: text - blue - 900 hover:underline hover: font - bold';

  const navigate = useNavigate();
  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
