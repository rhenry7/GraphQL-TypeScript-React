import { Badge, Box, Heading, List } from '@chakra-ui/layout'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
 import {getBookQuery} from "../queries/queries"
import BookList from './BookList'

class BookDetails extends Component <any, any>{
        displayBookDetails(){
            const { book } = this.props.data
            if(book) {
                return( 
                    <Box  maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
                        <Heading>Book Details</Heading>
                        <Box    mt="1"
         
          as="h4"
          lineHeight="tight"
          isTruncated>
                            Name: {book.name}
                        </Box>
                        <Box>
                            Genre:   <Badge borderRadius="full" px="2" colorScheme="teal">
                         {book.genre}
                        </Badge>
                        </Box>
                     
                        <Box             
                                   

>
                           Author: {book.author.name}
                        </Box>
                        <Box  color="gray.800"
            fontWeight="semibold"
            letterSpacing="wide"
            >All books by {book.author.name} :</Box>
                        <List ml='2'>
                            
                            { book.author.books.map(
                                item => {
                                   return <li key={item.id}>{item.name}</li>
                                }
                            ) }
                        </List>
                    </Box>
                )
            } else {
                return (
                    <Box>Click to view book details..</Box>
                )
            }
        }
    render(){
        return(
            <Box>
                {this.displayBookDetails()}
            </Box>
        )
        
      
    }
    
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)