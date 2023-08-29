import { createContext, useState } from "react";
//import { tableData } from "../dummyData";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loginToken, setLoginToken] = useState(null);
  return (
    <UserContext.Provider
      value={{
        loginToken,
        setLoginToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
