import { useState } from 'react'
import {
  CardAlignContainer,
  CardWrapper,
  PipeId,
  Status,
  StyledButton,
  colorStyles,
} from './styles'
import { CheckCircle, Warning, XCircle } from '@phosphor-icons/react'
import Select from 'react-select/creatable'

interface PipelineStatus {
  id: number
  pipelineId: string
  status: string
}

interface CardStatusProps {
  pipelineStatusList: PipelineStatus[]
}

const iconStatus = {
  success: <CheckCircle size={20} weight="fill" color="green" />,
  error: <XCircle size={20} weight="fill" color="red" />,
  warning: <Warning size={20} weight="fill" color="#D3AB3C" />,
}

export default function CardStatusList({
  pipelineStatusList,
}: CardStatusProps) {
  return (
    <>
      {pipelineStatusList.map((status, index) => (
        <CardStatus key={index} {...status} />
      ))}
    </>
  )
}

interface PipelineStatusCardProps extends PipelineStatus {}

export function CardStatus({
  id,
  pipelineId,
  status,
}: PipelineStatusCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  function handleExpand() {
    event?.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const selectOptions = [
    { label: 'Arquivos Disponiveis', value: 'Arquivos Disponiveis' },
    { label: 'Localidades faltando', value: 'Localidades faltando' },
    { label: 'Materiais faltando', value: 'Materiais faltando' },
    { label: 'DOHs faltando', value: 'DOHs faltando' },
  ]
  return (
    <CardWrapper expanded={isExpanded}>
      <PipeId>PipeLine ID: {pipelineId}</PipeId>
      <CardAlignContainer>
        <Status>
          Status:
          {iconStatus[status]}
          {/* <CheckCircle size={20} weight="fill" color="#D3AB3C" /> */}
        </Status>
        <StyledButton css={{ alignSelf: 'end' }} onClick={handleExpand}>
          Resultados
        </StyledButton>
      </CardAlignContainer>
      {isExpanded && (
        <Select
          options={selectOptions}
          isClearable
          styles={colorStyles}
        ></Select>
      )}
    </CardWrapper>
  )
}
