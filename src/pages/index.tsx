import Link from "next/link";
import { Container, FormContainer, LinksContainer } from "../styles/pages/Home";

export default function Home() {
  return (
    <Container>
      <FormContainer>
        <h1>Faça seu login</h1>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button>Login</button>
        </form>

        <LinksContainer>
          <Link href="/recovery-password">
            <a>
              <span>Esqueci minha senha</span>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <span>Ainda não sou cliente</span>
            </a>
          </Link>
        </LinksContainer>
      </FormContainer>
    </Container>
  );
}
