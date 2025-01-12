function AORAT(){
    var base,ht;
    base=parseInt(document.getElementById("base").value);
    ht=parseInt(document.getElementById("height").value);
    area=(1*base*ht)/2;
    document.getElementById("val").value= area;
}