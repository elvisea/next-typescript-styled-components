import Link from "next/link";
import { Container } from "../styles/pages/404";

export default function Home() {
  return (
    <Container>
      <h1>404</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}
