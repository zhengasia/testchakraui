import {  Button, Input } from '@chakra-ui/react'
import React, { memo } from 'react'

export default memo(function App() {
  return (
    
    <div>
        <Button variant={'solid'} color='red.100'>我是一个Button</Button>
        <Button variant={'outline'} color='brand.800'>我是一个Button</Button>
        <Input variant='outline' placeholder='Outline' />
    </div>
  )
})
