"use strict";
let data = {
    'intalx': 0,
    'mousec': 0,
    'nper': 0,
    'pper': 10
};
let track = document.getElementById("im");
let imgs = document.querySelectorAll("img");
document.body.addEventListener("mousedown", (e) => {
    let intial_postion = e.clientX;
    data.intalx = intial_postion;
    data.mousec = 1;
});
document.body.addEventListener("mouseup", (e) => {
    data.mousec = 0;
    data.intalx = e.clientX;
    data.pper = data.nper;
});
document.body.addEventListener('mousemove', (e) => {
    if (data.mousec === 0) {
        return;
    }
    let smt = data.intalx - e.clientX;
    let delta = window.innerWidth;
    let value = (smt / delta) * -100;
    let nval = data.pper + value;
    nval = Math.max(-150, Math.min(10, nval));
    data.nper = nval;
    track === null || track === void 0 ? void 0 : track.animate({ transform: `translate(${nval}%,50%)` }, { duration: 300, fill: 'forwards' });
    imgs.forEach((elem) => {
        elem.animate({ objectPosition: `${nval + 100}% 50%` }, { duration: 600, fill: 'forwards' });
    });
});
//# sourceMappingURL=main.js.map