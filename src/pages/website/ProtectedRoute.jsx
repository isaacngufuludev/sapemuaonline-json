import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import FullScreenLoading from "../../components/shared/FullScreenLoading";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isInitializing } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isInitializing) return;
      if (!isAuthenticated) navigate("/auth");
    },
    [isAuthenticated, isInitializing, navigate],
  );

  if (isInitializing) return <FullScreenLoading isVisible={true} />;

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
