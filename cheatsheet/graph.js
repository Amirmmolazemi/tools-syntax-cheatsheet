import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// add these codes to the source to connect the react app with graphQL
const client = new ApolloClient({
  uri: "connect to this URL",
  cache: new InMemoryCache(),
});

<ApolloProvider client={client}>
  <App />
</ApolloProvider>;

// queries and mutations
const QUERY_NAME_WITH_CAPTAL = gql`
  query {

  }
`;

const MUTATION_NAME_WITH_CAPTAL = gql`
  mutation {
    
  }
`;

// get the data with useQuery hook
const { loading, data, error } = useQuery(QUERY_NAME_WITH_CAPTAL);

// pass the variables to the useQuery hook
const EXAMPLE_QUERY_NAME_WITH_CAPTAL = gql`
  query queryName($id: ID!) {

  }
`;
const response = useQuery(EXAMPLE_QUERY_NAME_WITH_CAPTAL, {
  variables: { id: idNumber },
});

// add data with useMutation hook
const { muutationName, res } = useMutation(MUTATION_NAME_WITH_CAPTAL);
