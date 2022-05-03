import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência" />
      <section>
        <ExperienciaItem
          year="2017"
          title="Inicio de Formação superior em Analise e Desenvolvimento de sistemas"
          description="Conciliação de estudos com rotina de trabalho na area de telefonia."
        />
        <ExperienciaItem
          year="2020"
          title="Conclusão do curso superior"
          description="Inicio de transição da area de telecomunicações para Desenvolvimento de software."
        />
        <ExperienciaItem
          year="2021"
          title="Dev Full-Stack"
          description="Cursos de especialização em Aplicações Web com uso de tecnologias atuais"
        />
        <ExperienciaItem
          year="2022"
          title="Em busca de oprtunidades"
          description="Sempre buscando evoluir no conhecimento e obter uma posição no mercado"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
