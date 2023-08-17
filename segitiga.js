function luas(){
    var s1 = document.getElementById('s1').value;
    var s2 = document.getElementById('s2').value;
    var s3 = document.getElementById('s3').value;

    var a = document.getElementById('a').value;
    var t = document.getElementById('t').value;

    luas = a*t/2

    document.getElementById('luas').innerHTML = luas;
}
function kel(){
    var s1 = +document.getElementById('s1').value;
    var s2 = +document.getElementById('s2').value;
    var s3 = +document.getElementById('s3').value;

    var a = document.getElementById('a').value;
    var t = document.getElementById('t').value;

    kel = s1+s2+s3

    document.getElementById('kel').innerHTML = kel;
}