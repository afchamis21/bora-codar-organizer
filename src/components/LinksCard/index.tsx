import { ArrowSquareOut } from 'phosphor-react'
import {
  CardContainer,
  CardFooter,
  CardHeader,
  LinkContainer,
  LinksListContainer,
} from './styles'

export interface Project {
  id: number
  name: string
  url: string
}

interface LinksCardProps {
  projects: Project[]
}

export function LinksCard({ projects }: LinksCardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <p>Projetos criados como parte do desafio</p>{' '}
        <a href="https://boracodar.dev/" target={'_blank'} rel="noreferrer">
          boraCodar.dev
        </a>{' '}
        <p>da rocketseat</p>
      </CardHeader>
      <LinksListContainer>
        {projects.map((project) => (
          <LinkContainer key={project.id}>
            <p>{project.name}</p>
            <a href={project.url} target="_blank" rel="noreferrer">
              Acesse aqui
              <ArrowSquareOut size={14} weight="fill" />
            </a>
          </LinkContainer>
        ))}
      </LinksListContainer>
      <CardFooter>By - André Chamis</CardFooter>
    </CardContainer>
  )
}
