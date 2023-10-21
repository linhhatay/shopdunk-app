import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const userData = JSON.parse(localStorage.getItem("user")) || [];
  const { user } = useUser();
  if (!userData) return null;
  const { fullName, photo } = user.data.data;

  return (
    <StyledUserAvatar>
      <Avatar
        src={`http://localhost:8000/img/users/${photo}` || "default-user.jpg"}
        alt="avatar"
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
