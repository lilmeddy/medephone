let myImages = [];
const mySnaps = () => {};
const myCalls = () => {
  document.getElementById("thirdScreen").style.display = "none";
  document.getElementById("phoneScreen").style.display = "block";
};
const makeCall = () => {
  
};
//  let index = 1
//   let random = mathRandom()
let random_number = Math.floor(Math.random() * 10000);
document.getElementById("secondScreen").style.display = "none";
document.getElementById("thirdScreen").style.display = "none";
document.getElementById("phoneScreen").style.display = "none";
const myHome = () => {
  document.getElementById("firstScreen").style.display = "none";
  document.getElementById("secondScreen").style.display = "block";
};
setInterval(() => {
  let date = new Date();
  date.getHours() <= 11
    ? (document.getElementById("time").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " AM")
    : (document.getElementById("time").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " PM");
}, 1000);
setInterval(() => {
  let date = new Date();
  date.getHours() <= 11
    ? (document.getElementById("tim").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " AM")
    : (document.getElementById("tim").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " PM");
}, 1000);
setInterval(() => {
  let date = new Date();
  date.getHours() <= 11
    ? (document.getElementById("timee").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " AM")
    : (document.getElementById("timee").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " PM");
}, 1000);
setInterval(() => {
  let date = new Date();
  date.getHours() <= 11
    ? (document.getElementById("timeee").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " AM")
    : (document.getElementById("timeee").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " PM");
}, 1000);
setInterval(() => {
  let date = new Date();
  date.getHours() <= 11
    ? (document.getElementById("tie").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " AM")
    : (document.getElementById("tie").innerHTML =
        date.getHours() + ":" + date.getMinutes() + " PM");
}, 1000);
setTimeout(() => {
  if ((document.getElementById("firstSigning").style.top = "-80px")) {
    document.getElementById("firstSigning").style.top = "45%";
  }
  let mypin = document.getElementById("mypin");

  document.getElementById("firstSigning").innerHTML =
    "<p style= 'padding:2px;'>" +
    "Priscilla's welcome your pin is " +
    random_number +
    //   "<button onclick='myShowDrop()' style='background-color: red; border:none; outline:none;padding:5px; margin-left:10px;'>"+
    //     "x" +
    //     "</button>"
    "</p>";
  //   const myShowDrop() {
  //     if (document.getElementById("firstSigning").style.top= '53%'){
  //       document.getElementById("firstSigning").style.top=   '-83px'
  // }
  //   }
  document.getElementById("firstSigning").style.padding = "10px";
}, 3000);
document.getElementById("myDownn").style.display = "none";
document.getElementById("cons").style.visibility = "hidden";
const myUp = () => {
  document.getElementById("cons").style.visibility = "visible";
  document.getElementById("myUpp").style.display = "none";
  document.getElementById("myDownn").style.display = "block";
  if ((document.getElementById("firstSigning").style.top = "45%")) {
    document.getElementById("firstSigning").style.top = "54%";
  }
};
const myDown = () => {
  document.getElementById("cons").style.visibility = "hidden";
  document.getElementById("myUpp").style.display = "block";
  document.getElementById("myDownn").style.display = "none";
  if ((document.getElementById("firstSigning").style.top = "54%")) {
    document.getElementById("firstSigning").style.top = "45%";
  }
};
const takeBack = () => {
  camScreen.style.display = "none";
  document.getElementById("firstScreen").style.display = "block";
  document.getElementById("secondScreen").style.display = "none";
};
let camScreen = document.getElementById("camScreen");
let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
camScreen.style.display = "none";
const startCam = async () => {
  document.getElementById("firstScreen").style.display = "none";
  document.getElementById("secondScreen").style.display = "none";
  document.getElementById("thirdScreen").style.display = "none";
  camScreen.style.display = "block";
  let thepix = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  video.srcObject = thepix;
};
const takePic = () => {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  let imgLink = canvas.toDataURL("image/jpg");
  myImages.push(imgLink);
  console.log(myImages);
};
document.getElementById("myHide").style.display = "none";
const showInp = () => {
  let myInp = document.getElementById("myInp");
  myInp.type = "password" ? (myInp.type = "text") : (myInp.type = "password");
  document.getElementById("myHide").style.display = "block";
  document.getElementById("myShow").style.display = "none";
  document.getElementById("myInp").style.color = "red";
};
const hideInp = () => {
  let myInp = document.getElementById("myInp");
  myInp.type = "text" ? (myInp.type = "password") : (myInp.type = "text");
  document.getElementById("myHide").style.display = "none";
  document.getElementById("myShow").style.display = "block";
  // document.getElementById("myInp").style.color = "bisque"
};
const display = (num) => {
  document.getElementById("myInp").value += num;
};
const displayNum = (num) => {
  document.getElementById("myInput").value += num;
};
const clr = () => {
  document.getElementById("myInp").value = "";
  document.getElementById("myInp").type = "password";
};
const clrNum = () => {
  document.getElementById("myInput").value = "";
  document.getElementById("myInput").type = "number";
};
const next = () => {
  let myInp = document.getElementById("myInp");
  if (myInp.value === "") {
    myInp.type = "text";
    myInp.style.color = "red";
    myInp.value = "Please enter pin";
  } else if (myInp.value != random_number) {
    myInp.type = "text";
    myInp.style.color = "red";
    myInp.value = "Incorrect pin";
  } else {
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "block";
  }
};