function myFunction(){
    let a = prompt("A-nin uzunlugu ?")
    let b = prompt("B-nin eni ?")
    let cavab = (a*b)
    let netice = "Uzunluğu " + a + " olan ve eni  " + b + " olan Düzbucağın  sahəsi " + cavab + " dir."
    document.getElementById("buton").innerHTML = netice;
}
function myFunction2(){
    let a = prompt("A-nin Uzunlugu ?")
    let b = prompt("B-nin Eni ?")
    let cavab = (a*b/2)
    let netice = "Uzunluğu " + a + " olan ve eni " + b + " olan Üçbucağın sahəsi " + cavab + " dır."
    document.getElementById("buton2").innerHTML = netice
}
function myFunction3(){
    let a = prompt ("Terefinin Qiymeti ?")
    cavab = (a**2)
    let netice = "Tərəflərinin qiyməti " + a + " olan kvadratın sahəsinin qiyməti " + cavab + " dır."
    document.getElementById("buton3").innerHTML = netice 
}