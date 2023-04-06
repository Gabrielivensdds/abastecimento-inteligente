import { ArrowCounterClockwise } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { SubTitle } from '../../components/SubTitle'
import {
  LineFormConteiner,
  Container,
  TitleFormConteiner,
  GripConteiner,
} from './styles'
import { Title } from '../../components/Title'
import CardStatusList, { PipelineStatus } from '../../components/CardStatus'

export function Results() {
  const pipelineStatusData: PipelineStatus[] = [
    { id: 1, pipelineId: 'P001', status: 'success' },
    { id: 2, pipelineId: 'P002', status: 'error' },
    { id: 3, pipelineId: 'P003', status: 'warning' },
    { id: 1, pipelineId: 'P001', status: 'success' },
    { id: 2, pipelineId: 'P002', status: 'error' },
    { id: 3, pipelineId: 'P003', status: 'warning' },
    { id: 1, pipelineId: 'P001', status: 'success' },
    { id: 2, pipelineId: 'P002', status: 'error' },
    { id: 3, pipelineId: 'P003', status: 'warning' },
    { id: 1, pipelineId: 'P001', status: 'success' },
    { id: 2, pipelineId: 'P002', status: 'error' },
    { id: 3, pipelineId: 'P003', status: 'warning' },
  ]

  return (
    <Container>
      <TitleFormConteiner>
        <LineFormConteiner>
          <Title>Resultados</Title>
          <Button css={{ alignSelf: 'end' }}>
            <span>Atualizar</span>
            <ArrowCounterClockwise size={22} />
          </Button>
        </LineFormConteiner>
        <SubTitle>
          Aqui você pode acompanhar os resultados que o robô trouxe dos
          cálculos.
        </SubTitle>
        <GripConteiner>
          <CardStatusList pipelineStatusList={pipelineStatusData} />
        </GripConteiner>
      </TitleFormConteiner>
    </Container>
  )
}
