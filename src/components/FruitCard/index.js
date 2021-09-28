import { Container } from "./styles";
import { useSelector } from "react-redux";
import banana from "../../assets/Banana.PNG";
import morango from "../../assets/Morango.PNG";
import maçã from "../../assets/Maçã.PNG";

export const FruitCard = () => {
  const fruits = useSelector((state) => state.fruits);
  return (
    <>
      {fruits.map((fruit) => (
        <Container>
          <h3 key={fruit}>{fruit}</h3>
          <img
            src={
              fruit === "Banana" ? banana : fruit === "Morango" ? morango : maçã
            }
            alt={`${fruit}`}
          />
        </Container>
      ))}
    </>
  );
};
