import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Suppliers() {
  return (
    <Container>
      <h1>Fornecedores</h1>
      <Link to="/">voltar para o início</Link>
    </Container>

  )
}
