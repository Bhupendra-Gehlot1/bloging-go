import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Header, Footer } from "./components";
import { login, logout } from "./store/authSlice";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentAccount()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout);
        }
      })
      .finally(() => setLoader(false));
  }, []);
  return !loader ? (
    <div className="flex flex-wrap w-screen bg-gray-100 h-screen justify-center items-center flex-col">
      <Header />
      <Footer />
    </div>
  ) : (
    <div className="flex flex-wrap w-screen bg-gray-100 h-screen justify-center items-center flex-col">
      <RotatingLines
        visible={true}
        height="120"
        width="120"
        color="#121212"
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.50"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default App;
