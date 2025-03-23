import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/userSlice";

interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    address: { street: string; city: string };
  };
}

const UserCard = ({ user }: Props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address.street}, {user.address.city}</p>
      <Link to={`/users/${user.id}`}>View</Link>
      <Link to={`/edit-user/${user.id}`}>Edit</Link>
      <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
    </div>
  );
};

export default UserCard;
