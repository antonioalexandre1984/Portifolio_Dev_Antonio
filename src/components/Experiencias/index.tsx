import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência" />
      <section>
        <ExperienciaItem
          year="2021"
          title="Dev front-end"
          description="Lorem ipsum dolor sit amet. Expedita rerum sed deleniti harum aut."
        />
        <ExperienciaItem
          year="2021"
          title="Dev front-end"
          description="Lorem ipsum dolor sit amet. Expedita rerum sed deleniti harum aut."
        />
        <ExperienciaItem
          year="2021"
          title="Dev front-end"
          description="Lorem ipsum dolor sit amet. Expedita rerum sed deleniti harum aut."
        />
        <ExperienciaItem
          year="2021"
          title="Dev front-end"
          description="Lorem ipsum dolor sit amet. Expedita rerum sed deleniti harum aut."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
