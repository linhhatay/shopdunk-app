import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img
        src="https://minhtuanmobile.com/uploads/blog/bi-mat-dang-sau-cac-thiet-ke-logo-cua-apple-230221120004.jpg"
        alt="Logo"
      />
    </StyledLogo>
  );
}

export default Logo;
