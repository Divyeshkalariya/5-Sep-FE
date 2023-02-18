function crt(){
    var d=document.getElementById("price").value;
    var e=document.getElementById("qty").value;
    var f=d*e
    document.getElementById("tot").innerHTML=f;
}