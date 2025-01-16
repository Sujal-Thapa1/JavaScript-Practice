function password(){
    let em,pas;
    const correctemail="00000"
    const correctpassword="12345"
    em=parseInt(document.getElementById("em"));
    pas=parseInt(document.getElementById("pas"));
    if(pas===correctpassword && em===correctemail){
        alert("correct password")
    }else{
        alert("Incorrect details")
    }
}
