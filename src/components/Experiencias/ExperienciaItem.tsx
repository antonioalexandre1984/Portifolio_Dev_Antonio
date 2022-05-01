/* eslint-disable prettier/prettier */
import { ItemContainer } from "./styles";

interface ExperienciaItemProps {
  year: string;
  title: string;
  description: string;
}
export default function ExperienciaItem({ year, title, description }: ExperienciaItemProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  )
}
