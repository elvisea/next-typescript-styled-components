import Link from "next/link";
import { Container } from "../styles/pages/RecoveryPassword";

export default function Home() {
  return (
    <Container>
      <h1>Recovery Password</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}
