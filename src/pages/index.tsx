/* eslint-disable prettier/prettier */
import { HomeContainer } from "../styles/HomeStyles"
import Header from '../components/Header';
import HomeHero from "../components/HomeHero";
import Experiencias from "../components/Experiencias";
import Projects from "../components/Projects";
import Knowledges from "../components/Knowledges";
import FormContact from "../components/FormContact";
import Footer from "../components/Footer";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Head from 'next/head';

interface Iproject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: Iproject
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ durantion: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projects projects={projects} />
        <Knowledges />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_data desc]' }
  );
  console.log(projectsResponse.results);
  const projects = projectsResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link,
    thumbnail: project.data.thumbnail.url,
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400 // 24horas
  };
}
