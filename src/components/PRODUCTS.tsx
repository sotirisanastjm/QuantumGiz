import React from 'react'
import hplaptop from '../assets/images/Product-Images/hplaptop.jpg'
import applewatch from '../assets/images/Product-Images/applewatch.jpg'
import xiaomiphone from '../assets/images/Product-Images/xiaomiphone.jpg'
import switchcontroller from '../assets/images/Product-Images/switchcontroller.jpg'

 const PRODUCTS = [
    {
        id:1,
        name:"Apple Watch 2023",
        description:"Very good Watch",
        brand:"Apple",
        category:"Watch",
        price:399,
        image:{
            img: applewatch,
            alt: "Apple Watch",
        },

    },
    {
        id:2,
        name:"HP Laptop 2021",
        description:"Very Fast Laptop",
        brand:"HP",
        category:"Laptop",
        price:699,
        image:{
            img: hplaptop,
            alt: "HP Laptop",
        },

    },
    {
        id:3,
        name:"Xiaomi 2024",
        description:"Best Budget Phone",
        brand:"Xiaomi",
        category:"Mobile",
        price:159,
        image:{
            img: xiaomiphone,
            alt: "xiaomi phone",
        },

    },
    {
        id:4,
        name:"Apple Watch 2023",
        description:"Very good Watch",
        brand:"Apple",
        category:"Watch",
        price:399,
        image:{
            img: switchcontroller,
            alt: "Apple Watch",
        },

    },
    {
        id:5,
        name:"Apple Watch 2023",
        description:"Very good Watch",
        brand:"Apple",
        category:"Watch",
        price:399,
        image:{
            img: switchcontroller,
            alt: "Apple Watch",
        },

    },
    {
        id:6,
        name:"Apple Watch 2023",
        description:"Very good Watch",
        brand:"Apple",
        category:"Watch",
        price:399,
        image:{
            img: switchcontroller,
            alt: "Apple Watch",
        },

    },
    {
        id:7,
        name:"Apple Watch 2023",
        description:"Very good Watch",
        brand:"Apple",
        category:"Watch",
        price:399,
        image:{
            img: switchcontroller,
            alt: "Apple Watch",
        },

    },
    {
        id:8,
        name:"Apple Watch 2023",
        description:"Very good Watch",
        brand:"Apple",
        category:"Watch",
        price:399,
        image:{
            img: switchcontroller,
            alt: "Apple Watch",
        },

    },
];

function getProductData(id) {
    let productData = PRODUCTS.find(product => product.id === id);
    
    return productData == undefined ? () => {
        console.log("Error, Product does not exist");
        return undefined
    } 
    : productData;
   
}

export { PRODUCTS , getProductData};
