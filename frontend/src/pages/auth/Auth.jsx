import Header from "../../components/layout/Header";
import AuthBox from "./components/AuthBox";
import { Outlet } from "react-router-dom";
import ToggleDarkMode from "../../components/shared/ToggleDarkMode";
import BtnGoBack from "../../components/ui/BtnGoBack";

function Auth() {
  return (
    <div className="grid grid-cols-[3fr_1fr]">
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/login.png')" }}
      ></div>
      <div className="h-full relative flex flex-col">
        <div className="">
          <BtnGoBack />
        </div>
        <div className="">
          <ToggleDarkMode type="absolute" />
        </div>
        <div className="flex h-full items-center">
          <AuthBox>
            <Outlet />
          </AuthBox>
        </div>
      </div>
    </div>
  );
}

export default Auth;
