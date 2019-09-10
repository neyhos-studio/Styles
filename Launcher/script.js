// Selection server display
function displayServerSeletion() {
    var x = document.getElementById("Server-List");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

// Icon Selection
var iconList = document.getElementById("Icon-List");
function displayIconSeletion() {
    if (iconList.style.display === "block") {
        iconList.style.display = "none";
    } else {
        iconList.style.display = "block";
    }
};
iconList.childNodes.forEach(icon => {
    icon.addEventListener('click', () => {
        document.getElementById('profil-img').src = icon.src;
        Console.log("ok");
    })
});

// valide nickname
let btnNickname = document.getElementById('my-nickname')
btnNickname.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        btnNickname.textContent = btnNickname.value;
        btnNickname.blur();
    }
});