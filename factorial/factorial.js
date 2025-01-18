function factorial(){
    var n,factorial=1;
    n=parseInt(document.getElementById("num").value);
    for(i=1;i<=n;i++){
        factorial =factorial*i;
    }
    document.getElementById("ans").value=factorial;
}