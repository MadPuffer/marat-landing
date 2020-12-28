let modal = document.getElementById("myModal");
let btn = document.querySelectorAll(".buy");
let span = document.getElementsByClassName("close")[0];

btn.forEach(function(item){
    item.onclick = function() {
    modal.style.display = "block";
}
})

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function sendBtn() {
    let name = document.querySelector(".modal_name");
    let email = document.querySelector(".modal_email");
    let msg = document.querySelector(".modal_msg");
    let dataToSend = {"name": name, "email": email, "msg": msg};
    $.ajax({
        url : "/sendBtn",
        type : "POST",
        data : JSON.stringify(dataToSend),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',

    })
}