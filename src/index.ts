import { getPokemon } from './generics/get-pokemon';




getPokemon(4)
    .then( pokemon => console.log( pokemon ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Fin de getPokemon')  )



