let url =
  "https://us-central1-todo-list-napoleonit.cloudfunctions.net/webApi/api/v1/getToDos";
let menu = document.getElementById("mainButton");
let toDoList = [];
let hidden = true;
let toDojson = [];

let hideElements = () => {
  let allElements = document.getElementsByTagName("li");
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.display = "none";
  }
};

let showElements = () => {
  let allElements = document.getElementsByTagName("li");
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.display = "block";
  }
};

let toDo = i => {
  if (toDojson[i].completed == "false") {
    menu.innerText = "Не забудь " + toDojson[i].label;
  } else {
    menu.innerText = "Дело сделано!";
  }
  hideElements();
  hidden = true;
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

  document.getElementById("trashElement").innerText = toDojson[0].label
    .replace('"', "")
    .replace('"', "");

  document.getElementById("sign_1").src =
    toDojson[0].completed == true
      ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
      : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";

  document.getElementById("storeElement").innerText = toDojson[1].label
    .replace('"', "")
    .replace('"', "");
  document.getElementById("sign_2").src =
    toDojson[1].completed == true
      ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
      : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";
  document.getElementById("likeElement").innerText = toDojson[2].label
    .replace('"', "")
    .replace('"', "");
  document.getElementById("sign_3").src =
    toDojson[2].completed == true
      ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
      : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";

  document.getElementById("petElement").innerText = toDojson[3].label

    .replace('"', "")
    .replace('"', "");
  document.getElementById("sign_4").src =
    toDojson[3].completed == true
      ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
      : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";

  document.getElementById("movieElement").innerText = toDojson[4].label
    .replace('"', "")
    .replace('"', "");
  document.getElementById("sign_5").src =
    toDojson[4].completed == true
      ? "https://i.ibb.co/JH900hp/Tick-Mark-icon-icons-com-69146.png"
      : "https://i.ibb.co/QF1HqBB/Close-Icon-Dark-icon-icons-com-69143.png";
};

fetch(url, { method: "GET" })
  .then(response => response.json())
  .then(responseText => {
    toDojson = responseText;
  });
