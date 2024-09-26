import React, { useEffect, useState } from "react";
import { IProduct } from "./interface/IProducts";
import axios from "axios";
import { Container, Grid2 } from "@mui/material";
import ProductItems from "./ProductItems";

export default function ProductPage() {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid2 container spacing={3} justifyContent="center">
        {data.map((value: IProduct, index: number) => {
          return (
            <ProductItems data={value} i={index}>
              New Product
            </ProductItems>
          );
        })}
      </Grid2>
    </Container>
  );
}
