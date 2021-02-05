import { DataTypes } from "./Types";

// const protocol = "http";
// // const hostname = "localhost";
// const hostname = "10.239.34.113";
// const port = 3500;

export const RestUrls = {
    [DataTypes.PRODUCTS]: `/api/products`,
    [DataTypes.CATEGORIES]: `/api/categories`,
    [DataTypes.ORDERS]: `/api/orders`
}

export const GraphQlUrl = `/graphql`;

export const authUrl = `/login`;