let url =
  "https://us-central1-todo-list-napoleonit.cloudfunctions.net/webApi/api/v1/getToDos";
let menu = document.getElementById("mainButton");
let toDoList = [];
let hidden = true;

var hideElements = () => {
  var allElements = document.getElementsByTagName("li");
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.display = "none";
  }
};

var showElements = () => {
  var allElements = document.getElementsByTagName("li");
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.display = "block";
  }
};

let toDo = i => {
  fetch(url, { method: "GET" })
    .then(response => response.json())
    .then(responseText => {
      if (JSON.stringify(responseText[i].completed) == "false") {
        menu.innerText = "Не забудь " + responseText[i].label;
      } else {
        menu.innerText = "Дело сделано!";
      }
      hideElements();
      hidden = true;
    });
};

let initializationOfList = () => {
  if (hidden == true) {
    showElements();
    hidden = false;
  } else {
    hideElements();
    menu.innerText = "Выберите опцию";
    hidden = true;
  }

  fetch(url, { method: "GET" })
    .then(response => response.json())
    .then(responseText => {
      document.getElementById("trashElement").innerText = JSON.stringify(
        responseText[0].label
      )
        .replace('"', "")
        .replace('"', "");
      document.getElementById("sign_1").src =
        responseText[0].completed == true
          ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
          : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";

      document.getElementById("storeElement").innerText = JSON.stringify(
        responseText[1].label
      )
        .replace('"', "")
        .replace('"', "");
      document.getElementById("sign_2").src =
        responseText[1].completed == true
          ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
          : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";

      document.getElementById("likeElement").innerText = JSON.stringify(
        responseText[2].label
      )
        .replace('"', "")
        .replace('"', "");
      document.getElementById("sign_3").src =
        responseText[2].completed == true
          ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
          : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";

      document.getElementById("petElement").innerText = JSON.stringify(
        responseText[3].label
      )
        .replace('"', "")
        .replace('"', "");
      document.getElementById("sign_4").src =
        responseText[3].completed == true
          ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
          : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";

      document.getElementById("movieElement").innerText = JSON.stringify(
        responseText[4].label
      )
        .replace('"', "")
        .replace('"', "");
      document.getElementById("sign_5").src =
        responseText[4].completed == true
          ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
          : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";
    });

  //if selected == false {
  //	hide allElements();
  //	menu.innerText = "Выбериет опцию";
  //	}
};
