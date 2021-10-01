import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from "../queries/queries"
import { Button, Input, Select } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
  } from "@chakra-ui/react"
import { Field, Form, Formik } from 'formik';



class AddBook extends Component  <any, any> {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }
    displayAuthors(){
        let data = this.props.getAuthorsQuery
        if(data.loading){
            return(
                <option disabled>Loading Authors...</option>
            )
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}> 
                        {author.name}
                    </option>
                )
            })
        }
    }
    submitForm(e){
        e.preventDefault();
        console.log(this.state)
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }
    render(){
        return (
            <div>
                 <form id="add-book" onSubmit={ this.submitForm.bind(this) } >
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button>+</button>
            </form> 

            {/* <Formik
            initialValues={
                {
                    this: this.state
             }
            }
            // onSubmit={ this.submitForm.bind(this)}
            onSubmit={(values, actions) => {

                console.log({ values, actions });
     
                alert(JSON.stringify(values, null, 2));
     
                this.submitForm.bind(this)
     
              }}
            >
                {(props) => (
                    <Form>
   <Field name='name' >
                   {() => (
                       <FormControl>
                           <FormLabel htmlFor="name">Book Name:</FormLabel>
                           <Input placeholder="Book Name" onChange={ (e) => this.setState({ name: e.target.value }) } />
                           <FormLabel htmlFor="name">Book Genre:</FormLabel>
                           <Input placeholder="Genre" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                          
                
                           <FormLabel>Author:</FormLabel>
                           <Select placeholder="Select Author">
                           { this.displayAuthors() }
                           </Select>
                       </FormControl>
                   )}
                    </Field>
                    <Button
                     mt={4}
                     colorScheme="teal"
                     isLoading={props.isSubmitting}
                     type="submit"
                     >
Add Book
                    </Button>
                    </Form>
                 
                )}
            </Formik> */}

            </div>
        );
    }
}

// compose was removed from 'react-apollo', flowRight as compose being used from lodash
export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),    
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);