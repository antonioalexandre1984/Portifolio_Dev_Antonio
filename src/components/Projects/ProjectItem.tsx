/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, type, slug, img }: ProjectProps) {
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h1>-{type}</h1>
        </div>
      </section>
      <button type="button">
        <Link href={`/Projects/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  )
}
