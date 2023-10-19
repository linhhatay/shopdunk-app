import styled from "styled-components";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user")) || [];
  const { token } = userData;

  useEffect(
    function () {
      if (!token) navigate("/login");
    },
    [token, navigate]
  );

  if (token) return children;
}

export default ProtectedRoute;
