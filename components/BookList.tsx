import { Box, Heading, List } from '@chakra-ui/layout'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import {getBooksQuery} from "../queries/queries"
import BookDetails from './BookDetails'

class BookList extends Component  <any, any>{
    constructor(props){
        super(props)
        this.state = {
            selected: null
        }
    }
    displayBooks(){
        let data = this.props.data;
        if(data.loading){
            return (
                <div>
                    Loading Books... 
                </div>
            )
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={(e) => {this.setState({selected: book.id})}}>
                        {book.name}
                    </li>
                );
            })
        }
    }
    render(){
        return (
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
      <Heading >Reading List</Heading>
                <List spacing={3}             fontWeight="semibold">
                    {this.displayBooks()}
                </List>
                <BookDetails bookId={this.state.selected}/>
            </Box>
        )
    }
}

export default graphql(getBooksQuery)(BookList)
