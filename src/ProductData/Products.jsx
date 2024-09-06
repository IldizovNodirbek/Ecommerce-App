const products = [  
    {  
        id: 1,  
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",  
        title: "Fjallraven - Kanken",  
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",  
        price: "$109.95",  
        category: "Mens Clothing",  
    },  

    {  
        id: 2,  
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",  
        title: "Mens Casual ...",  
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight...",  
        price: "$22.3",  
        category: "Mens Clothing",  
    },

    {  
        id: 3,  
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",  
        title: "Mens Cotton ...",  
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as wor...",  
        price: "$55.99",  
        category: "Mens Clothing",  
    },

    {  
        id: 4,  
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",  
        title: "Men's Casual",  
        description: "The color could be slightly different between on the screen and in practice. / Please note...",  
        price: "$15.99",  
        category: "Mens Clothing",  
    },
    
    // Men's Clothings ended
    
    {  
        id: 5,  
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",  
        title: "BIYLACLESEN ...",  
        description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100%...",  
        price: "$ 56.99",  
        category: "Womens Clothing",  
    },  

    {  
        id: 6,  
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",  
        title: "Lock and Lov...",  
        description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux l...",  
        price: "$ 29.95",  
        category: "Womens Clothing",  
    }, 

    {  
        id: 7,  
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",  
        title: "Rain Jacket ...",  
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstrin...",  
        price: "$39.99",  
        category: "Womens Clothing",  
    }, 

    {  
        id: 8,  
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",  
        title: "MBJ Women's ...",  
        description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with grea...",  
        price: "$9.85",  
        category: "Womens Clothing",  
    }, 

    {  
        id: 9,  
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",  
        title: "Opna Women's...",  
        description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...",  
        price: "$7.95",  
        category: "Womens Clothing",  
    }, 

    {  
        id: 10,  
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",  
        title: "DANVOUY Wome...",  
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The...",  
        price: "$12.99",  
        category: "Womens Clothing",  
    }, 



    // Women's Clothings ended
    {  
        id: 11,  
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",  
        title: "John Hardy W...",  
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that prote...",  
        price: "$ 695",  
        category: "Jewelry",  
    },  

    {  
        id: 12,  
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",  
        title: "Solid Gold P...",  
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by ...",  
        price: "$ 168",  
        category: "Jewelry",  
    },

    {  
        id: 13,  
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",  
        title: "White Gold P...",  
        description: "BClassic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil ...",  
        price: "$ 9.99",  
        category: "Jewelry",  
    },

    {  
        id: 14,  
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",  
        title: "Pierced Owl ...",  
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel...",
        price: "$ 10.99",  
        category: "Jewelry",  
    },

    // jewelerys ended

    {  
        id: 15,  
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",  
        title: "Electronics Product",  
        description: "Latest gadgets and devices.",  
        price: "$199.99",  
        category: "Electronics",  
    },  

    {  
        id: 16,  
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",  
        title: "Electronics Product",  
        description: "Latest gadgets and devices.",  
        price: "$199.99",  
        category: "Electronics",  
    }, 

    {  
        id: 17,  
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",  
        title: "Electronics Product",  
        description: "Latest gadgets and devices.",  
        price: "$199.99",  
        category: "Electronics",  
    }, 

    {  
        id: 18,  
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",  
        title: "Electronics Product",  
        description: "Latest gadgets and devices.",  
        price: "$199.99",  
        category: "Electronics",  
    }, 

    {  
        id: 19,  
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",  
        title: "Electronics Product",  
        description: "Latest gadgets and devices.",  
        price: "$199.99",  
        category: "Electronics",  
    }, 

    {  
        id: 20,  
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",  
        title: "Electronics Product",  
        description: "Latest gadgets and devices.",  
        price: "$199.99",  
        category: "Electronics",  
    }, 
   
    // Electronics ended
];  

export default products