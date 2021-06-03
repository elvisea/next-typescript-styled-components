import Link from "next/link";
import { Container } from "../styles/pages/Signup";

export default function Home() {
  return (
    <Container>
      <h1>Signup</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}
