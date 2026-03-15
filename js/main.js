// Start Making Landing Page BackgroundImage Change Every Five Seconds

let landingPage = document.querySelector(".landing");

let imgsArr = [
  "landing-img_0.jpg",
  "landing-img_1.jpg",
  "landing-img_2.jpg",
  "landing-img_3.jpg",
  "landing-img_4.jpg",
  "landing-img_5.jpg",
  "landing-img_6.jpg",
];

let landingNum = 0;

setInterval(() => {
  landingNum >= imgsArr.length - 1 ? (landingNum = 0) : landingNum++;
  landingPage.style.backgroundImage = `url(../images/landing-img_${landingNum}.jpg)`;
}, 5000);

// End Making Landing Page BackgroundImage Change Every Five Seconds
