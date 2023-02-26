import type { NextPage } from 'next'
import Head from 'next/head'
import { converterBase10 } from '../scripts/converterBase10'
import { useRef, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Input, Dropdown, Icon, Container, Header, Divider } from 'semantic-ui-react'

const ConversorDeBase: NextPage = () => {
  const basesOptions = [
    { text: 'Base 2 (binária)', value: 2 },
    { text: 'Base 3', value: 3 },
    { text: 'Base 4', value: 4 },
    { text: 'Base 5', value: 5 },
    { text: 'Base 6', value: 6 },
    { text: 'Base 7', value: 7 },
    { text: 'Base 8', value: 8 },
    { text: 'Base 9', value: 9 },
    { text: 'Base 11', value: 11 },
    { text: 'Base 12', value: 12 },
    { text: 'Base 13', value: 13 },
    { text: 'Base 14', value: 14 },
    { text: 'Base 15', value: 15 },
    { text: 'Base 16 (hexadecimal)', value: 16 },
  ]

  const [selecionado, setarSelecionado] = useState(basesOptions[0])
  const [resultado, setarResultado] = useState(String)

  const selecionarF = (v: any, b: any) => setarSelecionado(basesOptions[basesOptions.findIndex(a=>a.value==b.value)])

  const handleClick = () => !decimalValue.current!['inputRef']['current']['value']?alert('Digite o número decimal para converter'):setarResultado(converterBase10(decimalValue.current!['inputRef']['current']['value'], selecionado.value))

  const decimalValue = useRef(null)

  return (
    <div>
      <Head>
        <title>Conversor de Base</title>
      </Head>

      <div className='corpo font-sans'> 
      <Button href='/' fluid color='black'><Icon name='arrow left' /> Voltar</Button>

      <Container text textAlign='center' className='my-64'>
        <Header as='h1' className='text-4xl font-bold my-9'>Conversor de Base Decimal</Header>
        <Divider />
              <Input min={0} type="number" placeholder='Decimal' className='InputDecimal w-full text-center' ref={decimalValue}/>
              <Dropdown 
                placeholder='Selecione a base para converter'
                fluid
                selection
                options={basesOptions}
                onChange={selecionarF}
                defaultSelectedLabel={'Base 2'}
                className='my-3 text-center'
              />
              <Button onClick={handleClick} content='Converter' color="blue" />
            <h1 id="h1.resultado" className='text-4xl my-5 font-bold'>{resultado}</h1>
        </Container>

        <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,266.7C480,267,600,245,720,197.3C840,149,960,75,1080,42.7C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      
    </div>
  )
}

export default ConversorDeBase
