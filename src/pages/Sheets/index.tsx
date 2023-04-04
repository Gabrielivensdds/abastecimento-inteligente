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
      {/* user &amp;rm=minimal top hide sheets options */}
      <iframe
        title="Planilha do Google"
        src="https://docs.google.com/spreadsheets/d/1xHwDFGfQQ06JLHmBgK7nV-a6oHblCJWRqmzekf_-gME/edit?usp=sharing"
        height="800"
        width="100%"
      ></iframe>
    </StyledFlex>
  )
}
