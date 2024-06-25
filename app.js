const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const track = document.querySelector(".track");

const btnMenu = document.querySelector(".burger");
const btnClous = document.querySelector(".clous");
const menuActiv = document.querySelector(".menuActiv");
const menuLink = document.querySelectorAll('.mHeader__menu-list>li>a')


btnMenu.addEventListener("click", ()  =>  {
  btnMenu.classList.toggle("active");
  btnClous.classList.toggle("active");
  document.querySelector('.mHeader__menu-list').classList.toggle("menuActiv");
})
btnClous.addEventListener("click", ()  =>  {
  btnMenu.classList.toggle("active");
  btnClous.classList.toggle("active");
  document.querySelector('.mHeader__menu-list').classList.toggle("menuActiv");
})
menuLink.forEach(link => {
  link.addEventListener("click", ()  =>  {
    btnMenu.classList.add("active");
    btnClous.classList.remove("active");
    document.querySelector('.mHeader__menu-list').classList.remove("menuActiv");
  })
})
const NUM_SLIDES = 3;
let currSlide = 0;
function slideTrack() {
  track.style.transform = `translateX(${-currSlide * 100}%)`;
}
nextBtn.addEventListener("click", () => {
  currSlide = (currSlide + 1) % NUM_SLIDES;
  slideTrack();
});
prevBtn.addEventListener("click", () => {
  currSlide = (currSlide - 1 + NUM_SLIDES) % NUM_SLIDES;
  slideTrack();
});
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60); 
  return {
    total,
    minutes,
    seconds
  };
}
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 30); 
  return {
    total,
    minutes,
    seconds
  };
}
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  function updateClock() {
    const t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
