import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Transactions from './Transaction'
import HorizontalGraphs from './HorizontalGraphs'
import Sidebar from '../Sidebar/Sidebar'

const Barchart = () => {
  return (
    <Box>
  <Flex>
    {/* <Box>
      <Sidebar />
    </Box> */}
    <Box>
     
        <Box style={{ width: '1000px' }}>
          <Transactions />
        </Box>
        <Box style={{ flex: 1 }}>
          <HorizontalGraphs style={{ width: '100%', height: '100%' }} />
        </Box>
     
    </Box>
  </Flex>
</Box>


  )
}

export default Barchart
