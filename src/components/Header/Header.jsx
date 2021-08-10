import React from 'react'

import { ContenedorHeader, TextoHeader} from './styles'


const Header = ({titulo}) => {
   return (
      <ContenedorHeader>
         <TextoHeader>{titulo}</TextoHeader>
      </ContenedorHeader>
   )
}

export default Header
