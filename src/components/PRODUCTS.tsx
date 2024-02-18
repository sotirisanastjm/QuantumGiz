import React from 'react'
import hplaptop from '../assets/images/Product-Images/hplaptop.jpg'
import applewatch from '../assets/images/Product-Images/applewatch.jpg'
import xiaomiphone from '../assets/images/Product-Images/xiaomiphone.jpg'
import switchcontroller from '../assets/images/Product-Images/switchcontroller.jpg'

export const PRODUCTS = [
    {
        id:1,
        name:"Apple Watch 2023",
        description:"Very good Watch",
        brand:"Apple",
        category:"Watch",
        price:399.99,
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
        price:699.99,
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
        price:159.99,
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
        price:399.99,
        image:{
            img: switchcontroller,
            alt: "Apple Watch",
        },

    },
];
