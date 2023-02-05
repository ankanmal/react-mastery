import { createContext } from "react";

const UserContext = createContext({
  users: {
    name: "Dummy Name",
    email: "Dummy@gmail.com",
  },
});
export default UserContext;
