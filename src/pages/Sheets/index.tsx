import { SubTitle } from '../../components/SubTitle'
import { Title } from '../../components/Title'
import { StyledFlex, TitleFlexConteiner } from './styles'

export function Sheets() {
  return (
    <StyledFlex>
      <TitleFlexConteiner>
        <Title>Entradas Manuais - ABI</Title>
        <SubTitle>
          Nessa parte do processo será requisitado todas as métricas necessárias
          para o cálculo do robô.
        </SubTitle>
      </TitleFlexConteiner>
    </StyledFlex>
  )
}
