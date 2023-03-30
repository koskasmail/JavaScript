let canvas = document.getElementById('c');
let H = canvas.height = window.innerHeight;
let W = canvas.width = window.innerWidth;
let ctx = canvas.getContext("2d");
let S = 50
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let distance = (p1, p2) => {
    let dx = p2.x - p1.x;
    let dy = p2.y - p1.y;
    return Math.sqrt(Math.pow(dx, 2) - Math.pow(dy, 2));
}


class Circle {
    constructor(x, y, r, color) {
        this.step = getRandomArbitrary(0.09, 0.5)
        this.angle = 0;
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = 'hsl(' + (random(0, 360)) + ',100%,50%)';
    }

    draw() {
        ctx.beginPath();
        // ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }

    edge() {
        return (
            this.x + this.r > W ||
            this.x - this.r < 0 ||
            this.y + this.r > H ||
            this.y - this.r < 0
        )
    }

    render() {
        this.draw();

        this.r = Math.abs(this.r - Math.sin(this.angle));
        this.angle = (this.angle + this.step) % 360;
        this.color = 'hsl(' + (this.angle) + ',100%,50%)';
    }
}

const addCircle = () => {
    let len = particles.length;
    let c = new Circle(
        random(10, W - 10),
        random(10, H - 10),
        50,
        "#fff");
    let valid = true;
    for (let i = 0; i < len; i++) {
        let p = particles[i];
        let dist = distance(p, c);
        if (dist < (p.r + c.r)) {
            valid = false;
        }
    };

    if (valid) {
        particles.push(c)
    }

}

let particles = [];
let N = 100;
particles.push(
    new Circle(
        random(0, W),
        random(0, H),
        2,
        "#fff")
);

const C = Math.floor(W / S);
const R = Math.floor(H / S);

for (let i = 0; i < C; i++) {
    particles[i] = [];
    for (let j = 0; j < R; j++) {
        let x = i * S;
        let y = j * S;
        let c = new Circle(x + S / 2, y + S / 2, 2);
        particles[i][j] = c;
    }
}

// console.log(particles);

const clear = () => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);
}
let lines = [];
let counter = 0;
let speed = 0.02;
for (let i = 0; i < 1; i++) {
    let line = [];
    line.push({ ...particles[random(0, C - 1)][random(0, R - 1)] });
    line.push({ ...particles[random(0, C - 1)][random(0, R - 1)] });
    lines.push(line);
}

setInterval(() => {
    let line = [];
    line.push({ ...particles[random(0, C - 1)][random(0, R - 1)] });
    line.push({ ...particles[random(0, C - 1)][random(0, R - 1)] });
    lines.push(line);
}, 300);




ctx.lineWidth = 2;
//console.log(lines)
const render = () => {
    // addCircle();

    // let line = [];
    // line.push({...particles[random(0,C-1)][random(0,R-1)]});
    // line.push({...particles[random(0,C-1)][random(0,R-1)]});
    // lines.push(line);

    ctx.beginPath();
    clear();



    for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles[j].length; j++) {
            let p = particles[i][j];
            p.render();
        }
    }


    // ctx.strokeWidth = 100;



    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let p1 = line[counter];
        let p2 = line[counter + 1];
        let dx = (p2.x - p1.x);
        let dy = (p2.y - p1.y);
        ctx.strokeStyle = 'hsl(' + ((dx + dy) % 360) + ',100%,50%)';;
        if (counter == 0) {
            ctx.moveTo(p1.x, p1.y);
        }

        let x = p1.x + dx * speed,
            y = p1.y + dy * speed;

        let d = distance(p1, p2) >> 0;
        if (d <= 1) {
            lines[i].pop();
            lines[i].push({ ...particles[random(0, C - 1)][random(0, R - 1)] });
        } else {
            ctx.lineTo(x, y);
            p1.x = x;
            p1.y = y;
        }
    }
    ctx.stroke();


    ctx.closePath();
    requestAnimationFrame(render);
}

render();
//setInterval(render,120)
