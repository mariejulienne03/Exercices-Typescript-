/*
** ETNA PROJECT, $2023
** $07_moonsday_countdown
** File description:
** 		index.ts
*/

let distance = parseInt(process.argv[2], 10); 

let hoursLeft = Math.ceil( distance / 3600 ); 

let i = ( hoursLeft - 1 ) ; 

do {
    console.log(i); 
    i = i - 1; 
}
while( i >= 0 ); 