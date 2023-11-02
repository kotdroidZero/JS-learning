/// for

let a = Number(2);

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 0; i <= 20; i++) {
    const element = i;

    for (let j = 1; j <= 10; j++) {

        console.log(`${i} * ${j}  = ${i * j}`)

    }
    console.log('')

}



/// break(break the flow), continue (skip the flow to next )