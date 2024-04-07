function callMe<T>(args:T[]) {
    return args[0];
}
var a:string[] = ["Harkier","Devesh"];
var tr = callMe<string>(a);
// tr.toUpperCase()
console.log(tr);