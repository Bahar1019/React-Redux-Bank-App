import { useSelector } from 'react-redux';

function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <div className="font-xl hidden text-xl font-semibold md:block">
      {username}
    </div>
  );
}

export default UserName;
