import { Container } from "./styles";
import { Link } from "react-router-dom";

export function SalesReport() {
  return (
    <Container>
      <h1>Relatório de Vendas</h1>
      <Link to="/">voltar para o início</Link>
    </Container>

  )
}
