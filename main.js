function preload() {
}

function setup() {
    canvas = createCanvas(350,320);
    canvas.center();
}

function draw() {
    Image(video,0,0,300,300);
}

function take_snapshot() {
    save('myFilterImage.png');
}