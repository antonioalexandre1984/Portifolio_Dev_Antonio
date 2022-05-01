/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Container } from './styles';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';


function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <Container>
      <div className="Container">
        <button type="button" onClick={handleScrollTop}>Voltar ao topo</button>
        <section>
          <AiOutlineTwitter
            onClick={() =>
              handleRedirect('https://twitter.com/Antonio59689521')
            }
          />
          <AiOutlineGithub
            onClick={() =>
              handleRedirect('https://github.com/antonioalexandre1984')
            }
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect("https://www.linkedin.com/in/antonio-alexandre-cordeiro-santos-436a2020/")
            }
          />
        </section>
      </div>
    </Container>
  );
}
export default Footer;
