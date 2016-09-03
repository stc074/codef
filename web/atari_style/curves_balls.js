var curv1 = [], curv2 = [], curv3 = [], curv4 = [];
var rad1 = 150, rad2 = 100, rad3 = 120, rad4 = 80;
var len1 = 500, len2 = 200, len3 = 600, len4 = 350;
var offset1 = 0, offset2 = 100, offset3 = 400, offset4 = 160;
var step = (2 * Math.PI) / len1;
var ang = 0.0;
for (i = 0; i < len1; i++) {
    curv1[i] = Math.cos(ang) * rad1;
    ang += step;
}
step = (2 * Math.PI) / len2;
ang = 0.0;
for (i = 0; i < len2; i++) {
    curv2[i] = Math.sin(ang) * rad2;
    ang += step;
}
step = (2 * Math.PI) / len3;
ang = 0.0;
for (i = 0; i < len3; i++) {
    curv3[i] = Math.cos(ang) * rad3;
    ang += step;
}
step = (2 * Math.PI) / len4;
ang = 0.0;
for (i = 0; i < len4; i++) {
    curv4[i] = Math.sin(ang) * rad4;
    ang += step;
}

var step1 = 1, step2 = 3, step3 = 1, step4 = 4, b_step1 = 3, b_step2 = 4, b_step3 = 3, b_step4 = 4;

function draw_balls() {
    var nb_balls = 300;
    offset1 += b_step1;
    if (offset1 >= len1) {
        offset1 -= len1;
    }
    offset2 += b_step2;
    if (offset2 >= len2) {
        offset2 -= len2;
    }
    offset3 += b_step3;
    if (offset3 >= len3) {
        offset3 -= len3;
    }
    offset4 += b_step4;
    if (offset4 >= len4) {
        offset4 -= len4;
    }
    offset11 = offset1, offset22 = offset2, offset33 = offset3, offset44 = offset4;
    var x, y;
    for (i = 0; i < nb_balls; i++) {
        offset11 += step1;
        if (offset11 >= len1) {
            offset11 -= len1;
        }
        offset22 += step2;
        if (offset22 >= len2) {
            offset22 -= len2;
        }
        offset33 += step3;
        if (offset33 >= len3) {
            offset33 -= len3;
        }
        offset44 += step4;
        if (offset44 >= len4) {
            offset44 -= len4;
        }
        x = curv1[offset11] + curv2[offset22] + (640 / 2), y = curv3[offset33] + curv4[offset44] + (480 / 2);
        ball.draw(mycanvas, x, y);
    }
}