
function visaDialog(){
    alert('Sida skapad av Edwar Fanoun 2021 Mars');
}

function changeTextAndBack(){
    document.getElementById("head1").innerHTML = "Sida skapad av Edwar Fanoun 2021 Mars";
    document.getElementById("par1").style.backgroundColor = "lightblue";
}

function changeImg(){
    if (document.getElementById("imgClickChange").src == "https://pixy.org/src/132/1320328.jpg")
    {
        document.getElementById("imgClickChange").src = "https://pixy.org/src/92/928025.jpg";
    }
    else
    {
        document.getElementById("imgClickChange").src = "https://pixy.org/src/132/1320328.jpg";
    }
}