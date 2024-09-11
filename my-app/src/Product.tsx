import React, { useEffect, useState } from 'react'
import { IProduct } from './interface/IProduct';
import axios, { AxiosResponse } from 'axios';

export const Product = () => {

    const [data, setData] = useState<IProduct[]>([]);


    async function fetchProducts(): Promise<IProduct[]> {
        const response : AxiosResponse = await axios.get('https://fakestoreapi.com/products');
        const data :IProduct[]  = await response.data;
        return data;
    }

    console.log("I am react");

    useEffect(() => {
        async function fetchData() {

            const data = await fetchProducts();
            setData(data);

        }
        fetchData();
    }, []);


    return (
        <div>{
            data.map((v) => {

                return (<div>{v.title}</div>)

            })

        }</div>
    )
}