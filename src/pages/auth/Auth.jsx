import Header from "../../components/layout/Header";
import AuthBox from "./components/AuthBox";
import { Outlet } from "react-router-dom";
import ToggleDarkMode from "../../components/shared/ToggleDarkMode";
import BtnGoBack from "../../components/ui/BtnGoBack";

function Auth() {
  return (
    <div className="">
      <div className=" lg:grid lg:grid-cols-[2.5fr_1.1fr] xl:grid-cols-[3fr_1.3fr] px-3 sm:px-0 max-w-[350px] lg:max-w-full lg:mx-0 mx-auto">
        <div
          className="hidden lg:block lg:min-h-screen lg:bg-cover lg:bg-center"
          style={{ backgroundImage: "url('/imgs/login.png')" }}
        ></div>
        <div className="h-full lg:relative flex flex-col">
          <div className="">
            <BtnGoBack />
          </div>
          <div className="">
            <ToggleDarkMode type="absolute" />
          </div>
          <div className="flex h-full items-center translate-y-1/2 lg:translate-y-0">
            <AuthBox>
              <Outlet />
            </AuthBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
