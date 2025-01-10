function AreaOfCircle(){
    var radius;
    radius = parseInt(document.getElementById("rad").value);
    const pi=3.14;
    sol=pi*radius*radius;
    document.getElementById("res").value=sol;
}