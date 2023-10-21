import styled from "styled-components";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";

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
  const isAdmin = userData?.data?.user.role === "admin";
  const { isLoading, user } = useUser();

  useEffect(
    function () {
      if (!isAdmin) navigate("/login");
    },
    [isAdmin, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (user) return children;
}

export default ProtectedRoute;
