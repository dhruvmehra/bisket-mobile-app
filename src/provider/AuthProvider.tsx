import React, { createContext, useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

type ContextProps = {
  user: null | boolean;
  currentUser: null | User; // Added: Current user state
  getToken: () => Promise<string>; // Added: Get JWT token function
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
  const auth = getAuth();
  // user null = loading
  const [user, setUser] = useState<null | boolean>(null);
  const [currentUser, setCurrentUser] = useState<null | User>(null); // Added: Current user state

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() {
    onAuthStateChanged(auth, function (u) {
      if (u) {
        setUser(true);
        // getUserData();
        setCurrentUser(u); // Added: Set current user state
      } else {
        setUser(false);
        setCurrentUser(null); // Added: Set current user state

        // setUserData(null);
      }
    });
  }
  const getToken = async (): Promise<string> => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const token = await currentUser.getIdToken();
      return token;
    }
    return "";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        currentUser, // Added: Current user state
        getToken, // Added: Get JWT token function,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext) as ContextProps;

export { AuthContext, AuthProvider, useAuth };
