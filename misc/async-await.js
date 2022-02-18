function work(){
    return "Work done";
}
async function incog(){
    console.log('LOG : INSIDE ASYNC')
    console.log('LOG : GOING TO CALL AWAIT')
    let result = await work();
    console.log(result)
};

incog()
console.log('Line after calling function')