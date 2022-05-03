/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha Foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Sou o Alexandre</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Informações Pessoais</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Antonio Alexandre</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Santos</span>
            </div>
            <div>
              Idade: <span className="blue">37 anos</span>
            </div>
            <div>
              Resido em : <span className="blue">Campina Grande,Paraiba</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Informações comportamentais</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Perfil: <span className="blue">Proativo e Resiliente </span>
            </div>
            <div>
              Pontos Fortes <span className="blue">Determinado,colaborativo</span>
            </div>
            <div>
              Pontos Fracos <span className="blue">Excesso de autocobrança</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Formação Academica</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nivel Superior: <span className="blue">ADS - UNINASSAU </span>
            </div>
            <div>
              Ignite React <span className="blue">Rockeatseat</span>
            </div>
            <div>
              Full-Stack <span className="blue">Digital House</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container >
  );
}

export default HomeHero;
