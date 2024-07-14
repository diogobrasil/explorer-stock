import { useEffect } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function SalesReport() {
  useEffect(() => {
    api
     .get("/sales", {withCredentials: true})
     .then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <h1>Relatório de Vendas</h1>
      <Link to="/">voltar para o início</Link>
    </Container>

  )
}
