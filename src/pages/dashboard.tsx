import Link from "next/link";
import { Container } from "../styles/pages/Dashboard";

export default function Home() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}
