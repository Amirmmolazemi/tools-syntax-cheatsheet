import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// wrap the react-query to the app
const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}></QueryClientProvider>;

// get the datas with useQuery (react-query versiom :) )
const response = useQuery(["UniqueName"], fetchFunction);
const fetchFunction = () => axios.get("API");

// add React Query Devtools
<ReactQueryDevtools />;
