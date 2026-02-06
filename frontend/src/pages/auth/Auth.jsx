import Header from "../../components/layout/Header";
import AuthBox from "../../components/shared/AuthBox";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div>
      <Header />
      <div className="pt-32 container">
        <AuthBox>
          <Outlet />
        </AuthBox>
      </div>
    </div>
  );
}

export default Auth;
