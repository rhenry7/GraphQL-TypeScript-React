import React from 'react'
import { ApolloClient, InMemoryCache, } from '@apollo/client'

// components 
import BookList from '../components/BookList'
import AddBook from '../components/AddBook';
import { Center, Heading, SimpleGrid } from '@chakra-ui/react';
// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
  
});

export default function Home() {
  return (
    <div>
     

    <Center>

    <SimpleGrid columns={2} spacing={2}>
    <BookList />
     <AddBook/>
    </SimpleGrid>
    </Center>

  
 
    
   </div>
  )
}
