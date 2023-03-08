import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} sx={{display:{xs:"none", sm:"block"}}} >
      <Box position="fixed">
        RIghtBar
      </Box>
    </Box>
  )
}

export default Rightbar
