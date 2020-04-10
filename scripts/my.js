function setActive(selected) {
  document.querySelector(".active").classList.remove("active");
  selected.classList.add("active");
}

function loadContent(selection) {
  var container1 = document.getElementById("active_content_1");
  var skillsContainer = document.querySelector("#skills ul");
  var container2 = document.getElementById("active_content_2");
  var contentBlock1 = document.querySelector("#content_" + selection + " .content-block-1");
  var skillsBlock = document.querySelector("#content_" + selection + " .skills");
  var contentBlock2 = document.querySelector("#content_" + selection + " .content-block-2");
  container1.innerHTML = contentBlock1.innerHTML;
  skillsContainer.innerHTML = skillsBlock.innerHTML;
  container2.innerHTML = contentBlock2.innerHTML;
}

var droppers = document.querySelectorAll(".droppers dt");
var xIcons = document.querySelectorAll(".droppers .x-icon");
var dropContents = document.querySelectorAll(".droppers dd");
for(var i = 0; i < droppers.length; i++) {
  droppers[i].setAttribute("onclick","dropDown(" + i + ",this);");
  xIcons[i].setAttribute("onclick","dropDown(" + i + ",this.parentElement.previousSibling.previousSibling);");
}

function dropDown(value,dataTitle) {
dropContents[value].classList.toggle("open");
dataTitle.classList.toggle("selected");
}

//Image Modal msapplication

var images = document.querySelectorAll("#project_content img");
var modalImg = document.getElementById("modal_body_image");
for(var i = 0; i < images.length; i++) {
  images[i].setAttribute("data-toggle","modal");
  images[i].setAttribute("data-target","#mainModal");
  images[i].setAttribute("onclick","loadImg(this.getAttribute('src'));");
}

function loadImg(src) {
  modalImg.setAttribute("src",src);
}
