/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayLlaves = Object.keys(objeto);
   var resultado = [];

   arrayLlaves.forEach(element => {
      var array = [element, objeto[element]];
      resultado.push(array);
    });
    return resultado;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   //STring a arreglo y lo ordenas
   //iterar ese arreglo
   // e tiene la propiedad lo que iteras
   //si si la tiene propiedad +1 
   //si no propiedad = 1
   //Terminas de iterar y regresas el objeto
   var arrayString = string.split('');
   arrayString.sort();
   var resultado = {};

   arrayString.forEach(element => {
      if(!resultado.hasOwnProperty(element)){
         resultado[element] = 1;
      }else{
         resultado[element] = resultado[element] + 1;
      }
   });
   return resultado;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var palabraSeparada = string.split('');
   var mayus = [];
   var minus = [];
   
   for(let i = 0; i < palabraSeparada.length; i++) {
      if(palabraSeparada[i] === palabraSeparada[i].toUpperCase()){
         mayus.push(palabraSeparada[i]);
      } else {
         minus.push(palabraSeparada[i]);
      }
   }
   return mayus.join('') + minus.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var invertida = function(palabra) {
      var palabraSeparada = palabra.split('');
      var nuevaPalabra = Array(palabraSeparada.length);
      var ultipos = palabraSeparada.length - 1;

      for(let i = 0; i < palabraSeparada.length; i++) {
         nuevaPalabra[ultipos - i] = palabraSeparada[i];  
      }
      return nuevaPalabra.join('');
   }

   var fraseSeparada = frase.split(' ');
   var fraseInvertida = fraseSeparada.map(invertida);
   var nuevaFrase = fraseInvertida.join(' ');
   return nuevaFrase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var invertida = function(palabra) {
      var palabraSeparada = palabra.split('');
      var nuevaPalabra = Array(palabraSeparada.length);
      var ultipos = palabraSeparada.length - 1;

      for(let i = 0; i < palabraSeparada.length; i++) {
         nuevaPalabra[ultipos - i] = palabraSeparada[i];  
      }
      return nuevaPalabra.join('');
   }

   var numeroTexto = numero.toString();
   var numeroInvertido = invertida(numeroTexto);
   if(numeroInvertido === numeroTexto){
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var palabraSeparada = string.split('');
   var nuevoArray = [];
   
   for(let i = 0; i < palabraSeparada.length; i++) {
      if(palabraSeparada[i] !== 'a' && palabraSeparada[i] !== 'b' && palabraSeparada[i] !== 'c'){
         nuevoArray.push(palabraSeparada[i]);
      }
   }
   var arrayArreglado = nuevoArray.join('');
   return arrayArreglado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var compare = function(a, b) {
      if(a.length < b.length){
         return -1;
      }if(a.length === b.length) {
         return 0;
      }if(a.length > b.length) {
         return 1;
      }
   }
   return arrayOfStrings.sort(compare);
      
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo = [];
   array1.forEach(function(element) {
      if(array2.includes(element)){
         nuevoArreglo.push(element);
      }
   });

   return nuevoArreglo;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
