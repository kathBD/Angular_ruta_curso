import fetch from 'node-fetch'; // uso de fetch
const API = 'https://api.escuelajs.co/api/v1';//APi a utilizar

function postData(urlApi, data ){ //funcion para usar fecth y consiguracion 
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}


const data ={
    
        // "title": "New Product",
        // "price": 10,
        // "description": "A description",
        // "categoryId": 1,
        // "images": ["https://placeimg.com/640/480/any"]
        
            "title": "Lapto",
            "price": 1000,
            "description": "ACER gamers",
            "categoryId": 1,
            "images": ["https://gamerscolombia.com/img/products/Porttil-ACER-Nitro-5-AN515-Core-i5-10300H-RAM-8GB-SSD-512GB-RTX-1650-4GB-156-FHD-144Hz-WIN-10-HOME/ACER-Nitro-5-AN515-55-51PA16560189241.png"]
          
      
}
//uso de función

postData(`${API}/products`, data)
 .then(response => response.json())//transformacion data en objeto json
 .then(data => console.log(data));//visualizacion por consola