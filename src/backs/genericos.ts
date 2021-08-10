import { printObject, genericFunction, genericFunctionArrow,  } from '../generics/generics';
import { Villain, Hero } from '../interfaces';

// import { Hero } from './interfaces/hero';
// import { Villain } from './interfaces/villain';


// printObject( 123 );
// printObject( new Date() );
// printObject( { a:1, b:2, c:3 } );
// printObject( [1,2,3,4,5,6,7,8,9,10] );
// printObject( 'Hola Mundo' );
// const name: string = 'Fernando';

// console.log(  genericFunctionArrow( 3.141618 ).toFixed(2)   )
// console.log(  genericFunctionArrow( name ).toUpperCase()   )
// console.log(  genericFunctionArrow( new Date() ).getDate()   )

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}


console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel  )
