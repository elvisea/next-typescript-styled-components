import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  width: 448px;
  height: 584px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 33.6px;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 320px;

    label {
      margin-bottom: 5px;
      font-size: 14px;
    }

    input {
      height: 48px;
      margin-bottom: 15px;
      border-radius: 5px;
      padding: 5px;
      border: 1px solid #b8b8b8;
    }

    button {
      margin-top: 20px;
      height: 45px;
      border-radius: 5px;
      border: none;
      background: #77216f;
      color: #fff;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  a {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
