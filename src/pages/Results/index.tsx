import { ArrowCounterClockwise } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { SubTitle } from '../../components/SubTitle'
import { LineFormConteiner, StyledForm, TitleFormConteiner } from './styles'
import { Title } from '../../components/Title'

export function Results() {
  return (
    <StyledForm>
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
      </TitleFormConteiner>
    </StyledForm>
  )
}
