document.body.onscroll = onScroll;
onScroll();

function onScroll() {
  var scroll = document.documentElement.scrollTop;

  let banner = document.getElementById("banner");
  let arrow = document.getElementById("arrow");

  //banner.style.transform = `translateY(${scroll * 0.5}px)`;
  banner.style.opacity = `${(150 - scroll) / 150}`;

  var arrowOpacity = (200 - scroll) / 200;
  
  if (arrowOpacity < 0.1)
  {
    arrowOpacity = 0.1;
  }

  arrow.style.opacity = `${arrowOpacity}`;

  for (let i = 1; i <= 3; i++) {
    hiddenElements = document.querySelectorAll(`.hidden${i}`);
    gradient = document.querySelector(`#gradient${i}`);
    scrollTrigger = gradient.getBoundingClientRect().top + gradient.offsetHeight / 2.0 + scroll;

    switch (i) 
    {
      case 1:
        scrollTrigger -= window.innerHeight / 1.5;
        break;
      case 2:
        scrollTrigger -= gradient.offsetHeight / 2.0 - window.innerHeight / 2.0;
      case 3:
        scrollTrigger -= window.innerHeight;
    }

    if (scroll > scrollTrigger) {
      hiddenElements.forEach((el) => el.classList.add("show"));
    }
    else {
      hiddenElements.forEach((el) => el.classList.remove("show"));
    }
  }
  

  /*
  hiddenElements1 = document.querySelectorAll(".hidden1");
  hiddenElements2 = document.querySelectorAll(".hidden2");
  hiddenElements3 = document.querySelectorAll(".hidden3");
  //hiddenElements = document.getElementsByClassName("hidden");

  gradient1 = document.querySelector("#gradient1");
  scrollTrigger1 = gradient1.getBoundingClientRect().top + gradient1.offsetHeight / 2.0 + scroll - window.innerHeight / 1.5;
  //gradient1.innerHTML = `${scroll} / ${scrollTrigger1}`;

  gradient2 = document.querySelector("#gradient2");
  scrollTrigger2 = gradient2.getBoundingClientRect().top + gradient2.offsetHeight / 2.0 + scroll - window.innerHeight / 1.5;
  //gradient2.innerHTML = `${scroll} / ${scrollTrigger2}`;

  gradient3 = document.querySelector("#gradient3");
  scrollTrigger3 = gradient3.getBoundingClientRect().top  + gradient3.offsetHeight / 2.0 + scroll - window.innerHeight;
  //gradient3.innerHTML = `${scroll} / ${scrollTrigger3}`;

  

  if (scroll > scrollTrigger1) {
    hiddenElements1.forEach((el) => el.classList.add("show"));
  }
  else {
    hiddenElements1.forEach((el) => el.classList.remove("show"));
  }


  if (scroll > scrollTrigger2) {
    hiddenElements2.forEach((el) => el.classList.add("show"));
  }
  else {
    hiddenElements2.forEach((el) => el.classList.remove("show"));
  }


  if (scroll > scrollTrigger3) {
    hiddenElements3.forEach((el) => el.classList.add("show"));
  }
  else {
    hiddenElements3.forEach((el) => el.classList.remove("show"));
  }
  */
}

function moveDown() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

/*
let observer = null;
observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
*/


























// Some functions
function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

function lerpColor(a, b, amount) { 
  const ar = (a & 0xFF0000) >> 16,
  ag = (a & 0x00FF00) >> 8,
  ab = (a & 0x0000FF),

  br = (b & 0xFF0000) >> 16,
  bg = (b & 0x00FF00) >> 8,
  bb = (b & 0x0000FF),

  rr = ar + amount * (br - ar),
  rg = ag + amount * (bg - ag),
  rb = ab + amount * (bb - ab);
  
  return `#${((rr << 16) + (rg << 8) + (rb | 0)).toString(16).padStart(6, '0').slice(-6)}`
}

function lerpColorOld(a, b, amount) { 
  var ah = parseInt(a.replace(/#/g, ''), 16),
      ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
      bh = parseInt(b.replace(/#/g, ''), 16),
      br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
      rr = ar + amount * (br - ar),
      rg = ag + amount * (bg - ag),
      rb = ab + amount * (bb - ab);

  return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

function clamp(val, a, b) {
  if (val < a)
    return a;
  else if (val > b)
    return b;
  else
    return val;
}