import { Form } from './components/Form'
import { MultiSelect } from './components/MultiSelect'
import { SubTitle } from './components/SubTitle'
import { Text } from './components/Text'
import { Title } from './components/Title'
import { globalStyles } from './styles/global'

globalStyles()

export function App() {
  return (
    <div className="App">
      <Title text="Parametrização e Simulação - ABI" />
      <SubTitle text="Nessa parte do processo será requisitado todas as métricas necessárias para o cálculo do robô." />
      <Text text="MODO DE ABASTECIMENTO" />
      <Form />
      <MultiSelect />
    </div>
  )
}
