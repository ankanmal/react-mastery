//Named Export

import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-center">
      <h4>
        Made With ♥ by {user.name}----{user.email}
      </h4>
    </div>
  );
};
