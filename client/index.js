console.log("📦 Webpack Working!!!");

//default parameters
let show = (m="😋") => {  //arrow funtion 
    console.log(m);
}   
show();
//Asincronia...
// Promises ES06
function resolveAfter2Seconds(){  //mostrara un string
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('funtion resolve')  
        },2000) //2segundos
    });
}

async function asyncCall(){   //invoca una funcion asincrona, 
    console.log("Calling asyn funtion!!!");
    const result = await resolveAfter2Seconds(); //await invoca promise como si fuera sincrono
    console.log(result);//Imprime "funtion resolve" en la consola
}
asyncCall();