import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => (props.principal ? 'green' : 'blue')};
  font-size: ${props => props.fontSize || '16px'};
`

function Teste() {
  return (
    <>
      <Botao fontSize='18px' principal>Enviar</Botao>
      <Botao fontSize='14px' principal={false}>Clique Aqui</Botao>
    </>
  )
}

export default Teste
