

let contador = 10;

for (let i=0;i< contador;i++){

    if (i == 4) {
        break;
    }
    console.log(i);
}

console.log("------------------------------\n")

for (let i=0;i< contador;i++){

    if (i == 4) {
        continue;
    }
    console.log(i);
}
console.log("------------------------------\n");

let j =0;

while (j<4){
    console.log(`que sonooooo D:`)
    j++;

}

console.log("------------------------------\n");
//coontagem regressiva
console.log("contagen refressiva ..");

let count=10;
while (count > 0){

    console.log(`contagen regressiva:${count}`)
    count --;

}