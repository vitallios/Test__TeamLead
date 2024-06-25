const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const track = document.querySelector(".track");

// You can also calculate this dynamically by calling querySelectorAll(".slide")
// and then using the length property.
const NUM_SLIDES = 3;

// The current slide that's being displayed
let currSlide = 0;

// Slide the track onto the current slide
function slideTrack() {
  track.style.transform = `translateX(${-currSlide * 100}%)`;
}

// Go to the next slide. Loop back to the first slide if you overflow.
nextBtn.addEventListener("click", () => {
  currSlide = (currSlide + 1) % NUM_SLIDES;
  slideTrack();
});

// Go to the previous slide. Loop to the last slide if you overflow.
prevBtn.addEventListener("click", () => {
  currSlide = (currSlide - 1 + NUM_SLIDES) % NUM_SLIDES;
  slideTrack();
});


function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  // const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  // const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    // days,
    // hours,
    minutes,
    seconds
  };
}

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 30);
  // const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  // const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    // days,
    // hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  // const daysSpan = clock.querySelector('.days');
  // const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    // daysSpan.innerHTML = t.days;
    // hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
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