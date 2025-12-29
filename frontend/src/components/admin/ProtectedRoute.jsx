import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Agar user login nahi hai ya uska role 'recruiter' nahi hai
    if (!user || user.role !== "recruiter") {
      navigate("/"); // Redirect to home
    }
  }, [user, navigate]);

  return <>{user && user.role === "recruiter" ? children : null}</>;
};

export default ProtectedRoute;
