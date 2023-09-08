function isTouched(obj){
    for (let key in obj){
        console.log("key", key, String(key).includes("Touched"), /.*Touched$/.test(String(key)))
        if(/.*Touched$/.test(String(key))) return true
    }
    return false
}

let obj = {name: "d", age: 34, ageTouched: true}
console.log(isTouched(obj))