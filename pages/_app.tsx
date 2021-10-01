import '../styles/globals.css'
import { ApolloClient, InMemoryCache } from '@apollo/client'
// react-apollo worked for importing provider;  @apollo/client, '@apollo/react-hooks' did not work..
import { ApolloProvider } from 'react-apollo';
import { ChakraProvider } from "@chakra-ui/react"


const client = new ApolloClient ({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
  
});

function MyApp({ Component, pageProps })  {
  return (
    <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
    </ApolloProvider>

  ) 
}

export default MyApp
