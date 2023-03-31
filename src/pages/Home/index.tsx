import { PlayCircle } from '@phosphor-icons/react'
import { ButtonLink } from '../../components/ButtonLink'
import {
  ItemFormConteiner,
  LineFormConteiner,
  StyledFlex,
  TitleFormConteiner,
} from './styles'
import { Title } from '../../components/Title'
import { SubTitle } from '../../components/SubTitle'
import Jira from '../../assets/img/Jira.svg'
import Bitbucket from '../../assets/img/BitBucket.svg'
import GCP from '../../assets/img/GCP.svg'
import ViaVarejo from '../../assets/img/ViaVarejo.svg'
import TaQi from '../../assets/img/TaQi.svg'
import Gazin from '../../assets/img/Gazin.svg'
import NovoMundo from '../../assets/img/NovoMundo.svg'
import { Text } from '../../components/Text'

export function Home() {
  return (
    <StyledFlex>
      <TitleFormConteiner>
        <Title>Abastecimento Inteligente - ABI</Title>
        <SubTitle>
          O projeto tem como objetivo criar um modelo de dados para a análise do
          nível de abastecimento dos nossos clientes, através da integração de
          dados de Estoque e Sell Out dos mesmos. Acesse nossos links:
          <a href=""> https://google.com</a> .
        </SubTitle>
      </TitleFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <ButtonLink css={{}}>
            <img src={Jira} alt="" />
            <span>Acessar Jira</span>
          </ButtonLink>
        </ItemFormConteiner>
        <ItemFormConteiner>
          <ButtonLink>
            <img src={Bitbucket} alt="" />
            <span>Acessar Bitbucket</span>
          </ButtonLink>
        </ItemFormConteiner>
        <ItemFormConteiner>
          <ButtonLink>
            <img src={GCP} alt="" />
            <span>Acessar GCP</span>
          </ButtonLink>
        </ItemFormConteiner>
      </LineFormConteiner>
      <TitleFormConteiner>
        <SubTitle css={{ fontSize: '30px' }}>Automatizando Clientes</SubTitle>
        <Text>
          O processo manual atualmente realizado parao Magalu será automatizado
          fornecendo sugestões de pedidos, posicionamento de carteira e um
          Dashboard com indicadores da operação do ABI, até o momento será
          escalonado para 4 clientes que são eles:
        </Text>
      </TitleFormConteiner>
      <LineFormConteiner>
        <img src={ViaVarejo} alt="" />
        <img src={TaQi} alt="" />
        <img src={Gazin} alt="" />
        <img src={NovoMundo} alt="" />
      </LineFormConteiner>
    </StyledFlex>
  )
}
