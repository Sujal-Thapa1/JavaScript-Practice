function oddandeven(){
    var num;
    num=parseInt(document.getElementById("num").value);
    if(num%2==0){
        document.getElementById("op").value =num + " is an even number";
        console.log("even");}
    else{
        document.getElementById("op").value =num + " is an odd number";
        console.log("odd");}
}