import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="transtion-all w-50 tx-sm rounded-full px-4 py-3 duration-300 placeholder:text-pretty focus:outline-none focus:ring focus:ring-opacity-50 sm:w-64"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
