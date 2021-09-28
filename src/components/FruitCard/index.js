import { Container } from "./styles";
import banana from "../../assets/Banana.PNG";

export const FruitCard = () => {
  return (
    <Container>
      <h3>Maçã</h3>
      <img src={banana} alt="Banana" />
    </Container>
  );
};
