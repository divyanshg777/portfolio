
var modal = document.getElementById("skillModal");


var btn = document.getElementById("addSkillBtn");


var span = document.getElementsByClassName("close")[0];


var cancelBtn = document.querySelector(".cancelBtn");


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


cancelBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
