import { Box } from '@chakra-ui/react'
import React from 'react'
import Transactions from './Transaction'
import HorizontalGraphs from './HorizontalGraphs'

const Barchart = () => {
  return (
    <Box>
        <Transactions/>
        <HorizontalGraphs />
    </Box>
  )
}

export default Barchart
