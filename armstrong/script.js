function armstrong(){
    var n,rem,opt,exponent,result;
    exponent=3;
    n=parseInt(document.getElementById("num").value);
    rem= n/10;
    opt=Math.pow(n, exponent);
    n=opt;
    document.getElementById("result").value=opt;
}