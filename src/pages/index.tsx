import { LinksCard, Project } from '@/components/LinksCard'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { lightTheme } from '@/styles'
import { HomeContainer } from '@/styles/pages/home'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { createClient } from '../lib/prismicio'
import sm from '../../sm.json'

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects }: HomeProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  function toggleTheme() {
    setIsDarkTheme((state) => !state)
  }
  return (
    <>
      <Head>
        <title>Bora Codar | André Chamis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer className={isDarkTheme ? '' : lightTheme}>
        <ThemeSwitch toggleFunction={toggleTheme} />

        <LinksCard projects={projects} />
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient(sm.apiEndpoint)
  const projects = await client.getAllByType('project')
  const formattedProjects = projects.map((project) => {
    return {
      id: parseInt(project.uid!),
      name: project.data.name,
      url: project.data.url,
    }
  })
  return {
    props: { projects: formattedProjects },
    revalidate: 60 * 60, // 1 hour
  }
}
