import { gql } from '@apollo/client'
// reference schema from server / db
const getBooksQuery = gql`
{
    books {
        name
        id
    }
}
`
// reference schema from server / db
const getAuthorsQuery = gql`
{
    authors {
        name
        id
    }
}`

const addBookMutation = gql `
mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
 addBook(name: $name, genre: $genre, authorId: $authorId){
     name
     id
 }
}`

const getBookQuery = gql`
 query($id: ID){
     book(id: $id){
         name
         id
         genre
         author{
             name
             id
             age
             books{
                 name
                 id
             }
         }
     }
 }
`

export {getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery};