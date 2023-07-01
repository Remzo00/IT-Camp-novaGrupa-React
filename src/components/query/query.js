import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Container } from "./index.styled";

const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = response.data
    return data
}

const ReactQuery = () => {
    const { data, isLoading, isError, error } = useQuery('products', fetchData)

    if(isLoading){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error: {error.message}</div>
    }
    return(
        <Container>
      <h1>Products List</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </Container>
    )
}
export default ReactQuery