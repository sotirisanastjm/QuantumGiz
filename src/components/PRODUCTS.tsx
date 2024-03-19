import React from 'react'
import hplaptop from '../assets/images/Product-Images/hpLaptop.jpeg'
import applewatch from '../assets/images/Product-Images/appleWatch.jpeg'
import xiaomiphone from '../assets/images/Product-Images/xiaomiphone.jpeg'
import s22 from '../assets/images/Product-Images/samsungs22.jpeg'
import plastation from '../assets/images/Product-Images/playstation5.jpeg'
import xps13 from '../assets/images/Product-Images/xps13.jpeg'
import canonr5 from '../assets/images/Product-Images/canonr5.jpeg'
import charge5 from '../assets/images/Product-Images/charge5.jpeg'
import lgoled from '../assets/images/Product-Images/lgoled.jpeg'
import bose from '../assets/images/Product-Images/bose.jpeg'
import garmin from '../assets/images/Product-Images/garmin.jpeg'
import asus from '../assets/images/Product-Images/asus.jpeg'
import airpods from '../assets/images/Product-Images/airpods.jpeg'
import jbl from '../assets/images/Product-Images/jbl.jpeg'
import nikon from '../assets/images/Product-Images/nikon.jpeg'
import oneplus from '../assets/images/Product-Images/oneplus.jpeg'
import sony from '../assets/images/Product-Images/sony.jpeg'
import razer from '../assets/images/Product-Images/razer.jpeg'
import samsung from '../assets/images/Product-Images/samsung.jpeg'
import surface from '../assets/images/Product-Images/surface.jpeg'





 const PRODUCTS = [
    {
        "id": 1,
        "name": "Apple Watch 2023",
        "description": "Experience the next level of wearable technology with the Apple Watch 2023. This watch isn't just a timepiece; it's a companion that enhances your lifestyle and productivity. With its advanced features and sleek design, the Apple Watch 2023 seamlessly integrates into your daily routine, keeping you connected and organized like never before.",
        "brand": "Apple",
        "category": "Watch",
        "price": 399,
        "image": {
            "img": applewatch,
            "alt": "Apple Watch"
        }
    },
    {
        "id": 2,
        "name": "HP Laptop 2021",
        "description": "Elevate your computing experience with the HP Laptop 2021. Engineered for speed and efficiency, this laptop is designed to handle your tasks with ease, whether you're working, studying, or streaming your favorite content. With its powerful performance and sleek design, the HP Laptop 2021 is your perfect companion for staying productive on the go.",
        "brand": "HP",
        "category": "Laptop",
        "price": 699,
        "image": {
            "img": hplaptop,
            "alt": "HP Laptop"
        }
    },
    {
        "id": 3,
        "name": "Xiaomi 2024",
        "description": "Introducing the Xiaomi 2024 – the ultimate budget-friendly phone packed with features that exceed expectations. From its stunning display to its powerful performance, this phone delivers exceptional value without compromising on quality. Stay connected, capture memories, and explore endless possibilities with the Xiaomi 2024.",
        "brand": "Xiaomi",
        "category": "Mobile",
        "price": 159,
        "image": {
            "img": xiaomiphone,
            "alt": "xiaomi phone"
        }
    },
    {
        "id": 4,
        "name": "Samsung Galaxy S22",
        "description": "Experience innovation in your palm with the Samsung Galaxy S22. This flagship smartphone boasts cutting-edge features, stunning design, and unparalleled performance. From its advanced camera system to its immersive display, the Galaxy S22 redefines what a smartphone can do.",
        "brand": "Samsung",
        "category": "Mobile",
        "price": 999,
        "image": {
            "img": s22,
            "alt": "Samsung Galaxy S22"
        }
    },
    {
        "id": 5,
        "name": "Sony PlayStation 5",
        "description": "Immerse yourself in the next generation of gaming with the Sony PlayStation 5. Featuring lightning-fast loading times, stunning 4K visuals, and immersive haptic feedback, the PS5 delivers a gaming experience like no other. Get ready to embark on epic adventures and compete with friends in breathtaking detail.",
        "brand": "Sony",
        "category": "Gaming",
        "price": 499,
        "image": {
            "img": plastation,
            "alt": "Sony PlayStation 5"
        }
    },
    {
        "id": 6,
        "name": "Dell XPS 13",
        "description": "Unleash your creativity with the Dell XPS 13. This ultra-portable laptop combines power and elegance, making it perfect for professionals and creatives alike. With its stunning InfinityEdge display and powerful performance, the XPS 13 lets you work and play without compromise.",
        "brand": "Dell",
        "category": "Laptop",
        "price": 1299,
        "image": {
            "img": xps13,
            "alt": "Dell XPS 13"
        }
    },
    {
        "id": 7,
        "name": "Canon EOS R5",
        "description": "Capture moments in stunning detail with the Canon EOS R5. This full-frame mirrorless camera delivers professional-level performance in a compact and lightweight body. With its advanced autofocus system and impressive image stabilization, the EOS R5 empowers photographers to push the boundaries of their creativity.",
        "brand": "Canon",
        "category": "Camera",
        "price": 3899,
        "image": {
            "img": canonr5,
            "alt": "Canon EOS R5"
        }
    },
    {
        "id": 8,
        "name": "Fitbit Charge 5",
        "description": "Achieve your health and fitness goals with the Fitbit Charge 5. This advanced fitness tracker offers insights into your health and helps you stay motivated to move more, sleep better, and stress less. With its sleek design and long battery life, the Charge 5 is your perfect companion for an active lifestyle.",
        "brand": "Fitbit",
        "category": "Watch",
        "price": 179,
        "image": {
            "img": charge5,
            "alt": "Fitbit Charge 5"
        }
    },
    {
        "id": 9,
        "name": "LG OLED C1",
        "description": "Experience cinematic entertainment at home with the LG OLED C1. This stunning 4K OLED TV delivers vibrant colors, deep blacks, and immersive sound for an unparalleled viewing experience. With its sleek design and smart features, the OLED C1 elevates your living room into a home theater.",
        "brand": "LG",
        "category": "TV",
        "price": 2499,
        "image": {
            "img": lgoled,
            "alt": "LG OLED C1"
        }
    },
    {
        "id": 10,
        "name": "Bose QuietComfort 45",
        "description": "Immerse yourself in music and silence the world around you with the Bose QuietComfort 45. These wireless headphones combine world-class noise cancellation with superior sound quality for a premium listening experience. With long-lasting comfort and intuitive controls, the QuietComfort 45 is your perfect companion for travel, work, and relaxation.",
        "brand": "Bose",
        "category": "Audio",
        "price": 329,
        "image": {
            "img": bose,
            "alt": "Bose QuietComfort 45"
        }
    },
    {
        "id": 11,
        "name": "Garmin Fenix 7",
        "description": "Conquer your adventures with the Garmin Fenix 7. This multisport GPS watch is built for durability and performance, with advanced features for tracking your activities and monitoring your health. Whether you're hiking, cycling, or swimming, the Fenix 7 is your ultimate companion for outdoor exploration.",
        "brand": "Garmin",
        "category": "Watch",
        "price": 799,
        "image": {
            "img": garmin,
            "alt": "Garmin Fenix 7"
        }
    },
    {
        "id": 12,
        "name": "Microsoft Surface Laptop Studio",
        "description": "Unleash your creativity with the Microsoft Surface Laptop Studio. This versatile laptop combines the power of a desktop with the portability of a tablet, allowing you to work and create wherever inspiration strikes. With its innovative design and powerful performance, the Surface Laptop Studio is perfect for professionals and artists alike.",
        "brand": "Microsoft",
        "category": "Laptop",
        "price": 1599,
        "image": {
            "img": surface,
            "alt": "Microsoft Surface Laptop Studio"
        }
    },
    {
        "id": 13,
        "name": "OnePlus 10 Pro",
        "description": "Experience flagship performance with the OnePlus 10 Pro. This premium smartphone is packed with cutting-edge features, including a stunning display, powerful cameras, and lightning-fast charging. With its sleek design and smooth performance, the OnePlus 10 Pro is the perfect choice for tech enthusiasts.",
        "brand": "OnePlus",
        "category": "Mobile",
        "price": 899,
        "image": {
            "img": oneplus,
            "alt": "OnePlus 10 Pro"
        }
    },
    {
        "id": 14,
        "name": "Razer Blade 15",
        "description": "Dominate the competition with the Razer Blade 15. This gaming laptop delivers desktop-level performance in a portable form factor, allowing you to play your favorite games with stunning graphics and smooth gameplay. With its customizable RGB keyboard and advanced cooling system, the Blade 15 is built for victory.",
        "brand": "Razer",
        "category": "Laptop",
        "price": 2199,
        "image": {
            "img": razer,
            "alt": "Razer Blade 15"
        }
    },
    {
        "id": 15,
        "name": "Nikon Z9",
        "description": "Capture every moment with the Nikon Z9. This flagship mirrorless camera redefines professional photography with its groundbreaking features and uncompromising performance. From its lightning-fast autofocus to its unparalleled image quality, the Z9 empowers photographers to push the boundaries of their craft.",
        "brand": "Nikon",
        "category": "Camera",
        "price": 5499,
        "image": {
            "img": nikon,
            "alt": "Nikon Z9"
        }
    },
    {
        "id": 16,
        "name": "Samsung Neo QLED QN90A",
        "description": "Transform your viewing experience with the Samsung Neo QLED QN90A. This 4K QLED TV delivers breathtaking visuals with vibrant colors, deep blacks, and stunning contrast. With its immersive sound and smart features, the Neo QLED QN90A brings your favorite content to life like never before.",
        "brand": "Samsung",
        "category": "TV",
        "price": 2999,
        "image": {
            "img": samsung,
            "alt": "Samsung Neo QLED QN90A"
        }
    },
    {
        "id": 17,
        "name": "JBL Flip 6",
        "description": "Take your music wherever you go with the JBL Flip 6. This portable Bluetooth speaker delivers powerful sound in a compact and rugged design, making it perfect for outdoor adventures and pool parties. With its long battery life and waterproof construction, the Flip 6 is your ultimate companion for on-the-go entertainment.",
        "brand": "JBL",
        "category": "Audio",
        "price": 129,
        "image": {
            "img": jbl,
            "alt": "JBL Flip 6"
        }
    },
    {
        "id": 18,
        "name": "ASUS ROG Zephyrus G14",
        "description": "Unleash your gaming potential with the ASUS ROG Zephyrus G14. This ultra-slim gaming laptop combines power and portability, allowing you to play your favorite games anywhere with ease. With its high-refresh-rate display and long-lasting battery life, the Zephyrus G14 is your ticket to gaming freedom.",
        "brand": "ASUS",
        "category": "Laptop",
        "price": 1499,
        "image": {
            "img": asus,
            "alt": "ASUS ROG Zephyrus G14"
        }
    },
    {
        "id": 19,
        "name": "Apple AirPods Pro",
        "description": "Immerse yourself in rich, high-fidelity sound with the Apple AirPods Pro. These wireless earbuds feature active noise cancellation for an immersive listening experience, whether you're commuting, working out, or relaxing at home. With their customizable fit and sweat and water resistance, the AirPods Pro are designed to keep up with your active lifestyle.",
        "brand": "Apple",
        "category": "Audio",
        "price": 249,
        "image": {
            "img": airpods,
            "alt": "Apple AirPods Pro"
        }
    },
    {
        "id": 20,
        "name": "Sony A7 IV",
        "description": "Elevate your photography with the Sony A7 IV. This full-frame mirrorless camera combines high-resolution imaging with advanced autofocus and video capabilities, making it perfect for professionals and enthusiasts alike. Whether you're shooting portraits, landscapes, or videos, the A7 IV delivers stunning results every time.",
        "brand": "Sony",
        "category": "Camera",
        "price": 2499,
        "image": {
            "img": sony,
            "alt": "Sony A7 IV"
        }
    }
    
];

function getProductData(id: number) {
    let productData = PRODUCTS.find(product => product.id === id);
    
    return productData == undefined ? () => {
        
        return undefined
    } 
    : productData;
   
}

export { PRODUCTS , getProductData};
