import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/actions";

const UserItem = ({
  id,
  username,
  first_name,
  last_name,
  email,
  pay_status,
  profile_link,
}) => {
  const dispatch = useDispatch();
  const status = () => {
    if (pay_status === true) return "paid";
    if (pay_status === false) return "not paid";
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td style={{ width: "100px", paddingLeft: "30px" }}>{status()}</td>
      <td style={{ marginLeft: "100px" }}>
        <a
          className="nav-link active"
          aria-current="page"
          href={profile_link}
          style={{ marginLeft: "50px", color: "#8f018f" }}
        >
          {profile_link}
        </a>
      </td>
      <td>
        <button
          type="button"
          className="btn-close "
          aria-label="Close"
          style={{ marginLeft: "12px" }}
          onClick={() => {
            dispatch(deleteUser(id));
          }}
        ></button>
      </td>
    </tr>
  );
};
export default UserItem;
