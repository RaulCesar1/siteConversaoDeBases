import type { NextPage } from 'next'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon } from 'semantic-ui-react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Conversão de Bases</title>
      </Head>

      <div className='corpo font-sans overflow-hidden'>

        <div className='h-64 my-52 flex flex-col justify-center items-center'>
          <h1 className='text-4xl flex flex-col items-center'>Conversão de Bases</h1>

          <Card.Group>
            <Card 
              href={'/calculadora'}
              header={<h1>Calculadora de Bases <Icon name='arrow right' /></h1>}
              fluid
              color='blue'
              className='items-center'
            />
            <Card 
              href={'/conversor'}
              header={<h1>Conversor de Bases <Icon name='arrow right' /></h1>}
              fluid
              color='blue'
              className='items-center'
            />
          </Card.Group>
        </div>

        <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,0L48,5.3C96,11,192,21,288,37.3C384,53,480,75,576,90.7C672,107,768,117,864,106.7C960,96,1056,64,1152,80C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Home
