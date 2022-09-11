function cryptos( precio, nombre){
    this.precio = precio;
    this.nombre = nombre;
  } 
  const BTC = new cryptos (19.839, "Bitcoin");
  const ETH = new cryptos ( 1.556, "Etherium");
  const BNB = new cryptos ( 295, "Etherium");
  const SOL = new cryptos ( 35.81, "Etherium");
    
let mensaje = "Bienvenido a Swap";
    alert(mensaje); 


let entrada = prompt("Seleccione su Crypto ETH/BTC o Lista de Crypto (Introduce x ). ").toUpperCase();

while(entrada != "ESC" ){
   switch (entrada) {
         case "ETH":
           let cantidad = Number(prompt("ingresa la cantidad de dolares"));
           let resultado = ETH.precio / cantidad;
           alert(resultado);
           break;

         case "BTC":
           let cantidad2 =  Number(prompt("ingresa la cantidad de dolares"));
           let resultado2 = BTC.precio / cantidad2;
           alert(resultado2);
           break;

           case "BNB":
           let cantidad5 = Number(prompt("ingresa la cantidad de dolares"));
           let resultado5 = BNB.precio / cantidad5;
           alert(resultado5);
           break;

         case "SOL":
           let cantidad6 =  Number(prompt("ingresa la cantidad de dolares"));
           let resultado6 = SOL.precio / cantidad6;
           alert(resultado6);
           break;

         default:
         const nombres = ["BTC", "ETH", "BNB", "SOL"];

         for(let index = 0; index < nombres.length; index++){
          alert(nombres[index]);
         }
           alert("Lo sentimos... aun no tenemos todas las cryptos. :[")
           break;
   }
entrada = prompt(" ¿Quieres hacer otra convercion ETH/BTC? ESC/Salir").toUpperCase();
}

alert("Gracias!!!.. Vuelva pronto."); 


function Cliente (){

}
