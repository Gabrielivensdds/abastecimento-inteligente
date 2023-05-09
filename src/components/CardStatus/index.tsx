import { useEffect, useState } from 'react'
import {
  CardAlignContainer,
  CardWrapper,
  CardItemConteiner,
  CardLineConteiner,
  PipeId,
  Status,
  StyledButton,
  colorStyles,
} from './styles'
import { CheckCircle, Warning, XCircle } from '@phosphor-icons/react'
import Select from 'react-select/creatable'
import { ProgressIndicator } from '../ProgressIndicator'
import { Text } from '../Text'
import { Dialog } from '../Dialog'

interface PipelineStatus {
  id: string
  is_done: boolean
  has_failed: boolean
  step_name: string
  step_number: number[]
}

interface dataQualityProps {
  tested_datasets: string
  number_of_failures: string
  tests: { [key: string]: string[] }
}
interface nextStepProps {
  id: string
  step: string
}

interface CardStatusProps extends PipelineStatus {
  nextStep: nextStepProps
  dataQuality: dataQualityProps
}

export function CardStatus({
  id,
  is_done: isDone,
  has_failed: hasFailed,
  step_name: stepName,
  step_number: stepNumber,
  nextStep,
  dataQuality,
}: CardStatusProps) {
  const [stepping, setStepping] = useState(stepNumber[0])

  useEffect(() => {
    setStepping(parseFloat(nextStep.step))
  }, [setStepping, nextStep])

  const iconStatus = {
    success: <CheckCircle size={20} weight="fill" color="green" />,
    error: <XCircle size={20} weight="fill" color="red" />,
    warning: <Warning size={20} weight="fill" color="#D3AB3C" />,
    running: (
      <CardItemConteiner>
        <Text>{nextStep.id}</Text>

        <ProgressIndicator step={stepping} />
      </CardItemConteiner>
    ),
  }

  type IconStatus = keyof typeof iconStatus
  const [isExpanded, setIsExpanded] = useState(false)

  function getIsPipeRunning(status: IconStatus): boolean {
    return status === 'running'
  }
  const isPipeRunning = getIsPipeRunning(getStatus())

  function handleExpand() {
    setIsExpanded(!isExpanded)
  }

  function getStatus(): IconStatus {
    if (isDone) {
      return 'success'
    }
    if (hasFailed) {
      return 'error'
    }
    if (stepName !== '') {
      return 'running'
    }
    return 'warning'
  }

  const selectOptions = [
    { label: 'Localidades faltando', value: 'Localidades faltando' },
    { label: 'Materiais faltando', value: 'Materiais faltando' },
    { label: 'DOHs faltando', value: 'DOHs faltando' },
  ]

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <CardWrapper>
      <PipeId>PipeLine ID: {id}</PipeId>

      <StyledButton css={{ alignSelf: 'end' }} onClick={handleOpenModal}>
        Qualidade de dados
      </StyledButton>

      <CardAlignContainer>
        <Status>
          Status:
          {iconStatus[getStatus()]}
        </Status>
      </CardAlignContainer>
      {!isPipeRunning && (
        <StyledButton css={{ alignSelf: 'end' }} onClick={handleExpand}>
          Resultados
        </StyledButton>
      )}
      {isExpanded && (
        <Select
          options={selectOptions}
          isClearable
          placeholder="Arquivos Disponiveis"
          styles={colorStyles}
        ></Select>
      )}
      <Dialog isOpen={isModalOpen} onClose={handleCloseModal}>
        <Text css={{ fontSize: '20px', fontWeight: 'bold' }}>
          Qualidade de dados
        </Text>
        <CardLineConteiner>
          <Text>Database Testado(%): {dataQuality.tested_datasets}</Text>
          <Text>Numero de falhas: {dataQuality.number_of_failures}</Text>
          <Text>Testes: </Text>
          {Object.keys(dataQuality.tests).map((testName) => (
            <CardLineConteiner key={testName}>
              <Text>{testName}</Text>
              {dataQuality.tests[testName].map((message, index) => (
                <Text key={index}>{message}</Text>
              ))}
            </CardLineConteiner>
          ))}
        </CardLineConteiner>
        <StyledButton css={{ alignSelf: 'end' }} onClick={handleCloseModal}>
          Fechar
        </StyledButton>
      </Dialog>
    </CardWrapper>
  )
}
