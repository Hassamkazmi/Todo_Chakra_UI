import React from 'react'
import {HStack,VStack,Text,IconButton,StackDivider,Spacer,Badge} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa';

const TodoList = ({todos ,DeleteTodo}) => {

  if(!todos.length){
    return(
      <Badge colorScheme='green' p='4' m='4'>
        No Todo !
      </Badge>
    )
  }
  return (
    <React.Fragment>
      <VStack
      divider={<StackDivider/>}
      p='3'
      borderColor={'grey.400'}
      borderWidth='2px'
      w='100%'
      maxW={{base:'90vw' ,sm:'80vw' , lg: '60vw', xl: '40vw'}}
      alignItems={'stretch'}
      >
      {todos.map((item) =>{
        return(
          <HStack key={item.id}>
          <Text>{item.name}</Text>
          <Spacer/>
          <IconButton
          onClick={() => {DeleteTodo(item.id)}}
          icon={<FaTrash/>}/>
          </HStack>
        )
      })}
      </VStack>
    </React.Fragment>
  )
}

export default TodoList