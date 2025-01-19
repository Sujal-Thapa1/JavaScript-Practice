function age(){
    var n;
    n=parseInt(document.getElementById("num").value);
    if(n>=18)
        document.getElementById("val").value="You are an Adult";
    else
        document.getElementById("val").value="You are minor";
    
}