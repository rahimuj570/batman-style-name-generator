const getElem = (idClass) => {
  const elem = document.getElementById(idClass);
  const elemText = elem.innerText;
  const elemValue = elem.value;
  return [elem, elemText, elemValue];
};

// ========== Generate Handler =========
getElem("bat-generate")[0].addEventListener("click", () => {
  if (getElem("bat-field")[2].length <= 5) {
    getElem("bat-name")[0].style.backgroundSize = "contain";
  } else {
    getElem("bat-name")[0].style.backgroundSize = "cover";
  }
  const field = getElem("bat-field");
  if (field[2] != "") {
    getElem("bat-name")[0].innerText = field[2].toUpperCase();
    field[0].value = "";
  } else {
    swal(
      "Please Input Your Name!",
      "The Whole Multiverse is Waiting to Know Your Heroic Name"
    );
  }
});

// ========== BG change Handler =======
const changeBg = (color) => {
  const bg = getElem("name-generate");
  bg[0].style.backgroundColor = color;
};
//
getElem("bg-red")[0].addEventListener("click", () => {
  changeBg("red");
});

//
getElem("bg-black")[0].addEventListener("click", () => {
  changeBg("black");
});

//
getElem("bg-light")[0].addEventListener("click", () => {
  changeBg("#fff");
});
