import React from "react";
import {
  Button,
  ButtonContainer,
  Container,
  Content,
  FormContainer,
  Input,
  InputContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "./styles";

function NewLetter() {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>Assine nossa</Title>
          <SubTitle>newsletter</SubTitle>
        </TitleContainer>

        <FormContainer>
          <InputContainer>
            <Input
              fullWidth={true}
              value={""}
              label="Nome"
              variant="outlined"
            />
          </InputContainer>
          <InputContainer>
            <Input fullWidth={true} label="E-mail" variant="outlined" />
          </InputContainer>

          <ButtonContainer>
            <Button>
              <svg
                width="33"
                height="16"
                viewBox="0 0 33 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                  fill="black"
                />
              </svg>
            </Button>
          </ButtonContainer>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default NewLetter;
