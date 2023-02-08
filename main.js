
document.body.onscroll = onScroll;
onScroll();

// Actual code

var scrollAmnt = 0;
function onScroll() {
  var scroll = document.documentElement.scrollTop;

  let main = document.getElementById("main");
  let banner = document.getElementById("banner");

  banner.style.transform = `translateY(${scroll * 0.3}px)`;
  banner.style.opacity = `${(100 - scroll) / 100}`;


  var colScroll = clamp(scroll * 0.0009, 0, 1);
  var minColor = lerpColor(0x073b23, 0xfd1d1d, colScroll);
  var maxColor = lerpColor(0x0f6e42, 0xfcb045, colScroll);

  main.style.backgroundImage =
    `radial-gradient(circle at ${scroll * 0.1 - 30}%, ${minColor} 30%, ${maxColor} 70%)`;
}

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