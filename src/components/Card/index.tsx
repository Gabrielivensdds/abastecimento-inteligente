import { CardWrapper, Job, Name, Picture } from './styles'

interface CardProps {
  pictureSrc: string
  name: string
  job: string
}

export const Card = ({ pictureSrc, name, job }: CardProps) => {
  return (
    <CardWrapper>
      <Picture src={pictureSrc} alt={`${name}'s picture`} />
      <Name>{name}</Name>
      <Job>{job}</Job>
    </CardWrapper>
  )
}
