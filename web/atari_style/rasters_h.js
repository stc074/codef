var curvh1 = [], curvh2 = [], curvh3 = [], curvh4 = [];
var radh1 = 75, radh2 = 50, radh3 = 60, radh4 = 30;
var lenh1 = 500, lenh2 = 200, lenh3 = 600, lenh4 = 350;
var offseth1 = 0, offseth2 = 20, offseth3 = 10, offseth4 = 5;
var step = (2 * Math.PI) / lenh1;
var ang = 0.0;
for (i = 0; i < lenh1; i++) {
    curvh1[i] = Math.cos(ang) * radh1;
    ang += step;
}
step = (2 * Math.PI) / lenh2;
ang = 0.0;
for (i = 0; i < lenh2; i++) {
    curvh2[i] = Math.sin(ang) * radh2;
    ang += step;
}
step = (2 * Math.PI) / lenh3;
ang = 0.0;
for (i = 0; i < lenh3; i++) {
    curvh3[i] = Math.cos(ang) * radh3;
    ang += step;
}
step = (2 * Math.PI) / lenh4;
ang = 0.0;
for (i = 0; i < lenh4; i++) {
    curvh4[i] = Math.sin(ang) * radh4;
    ang += step;
}

var steph1 = 1, steph2 = 3, steph3 = 1, steph4 = 4, b_steph1 = 3, b_steph2 = 4, b_steph3 = 3, b_steph4 = 4;

var height_rastersh = 2;
var canvas_rastersh = [];
var nb_rastersh = 16;
var rh = 236, gh = 169, bh = 8;
var to_rh = 255, to_gh = 255, to_bh = 255;
var red = rh, green = gh, blue = bh;
var step_r = (to_rh - rh) / nb_rastersh;
var step_g = (to_gh - gh) / nb_rastersh;
var step_b = (to_bh - bh) / nb_rastersh;
for (i = 0; i < nb_rastersh; i++) {
    canvas_rastersh[i] = new canvas(640, height_rastersh);
    canvas_rastersh[i].fill('rgb(' + parseInt(red) + ', ' + parseInt(green) + ', ' + parseInt(blue) + ')');
    red += step_r;
    green += step_g;
    blue += step_b;
}
function draw_rastersh() {
    offseth1 += b_steph1;
    if (offseth1 >= lenh1) {
        offseth1 -= lenh1;
    }
    offseth2 += b_steph2;
    if (offseth2 >= lenh2) {
        offseth2 -= lenh2;
    }
    offseth3 += b_steph3;
    if (offseth3 >= lenh3) {
        offseth3 -= lenh3;
    }
    offseth4 += b_steph4;
    if (offseth4 >= lenh4) {
        offseth4 -= lenh4;
    }
    var offseth11 = offseth1, offseth22 = offseth2, offseth33 = offseth3, offseth44 = offseth4;
    var x, y;
    for (i = 0; i < nb_rastersh; i++) {
        offseth11 += steph1;
        if (offseth11 >= lenh1) {
            offseth11 -= lenh1;
        }
        offseth22 += steph2;
        if (offseth22 >= lenh2) {
            offseth22 -= lenh2;
        }
        offseth33 += steph3;
        if (offseth33 >= lenh3) {
            offseth33 -= lenh3;
        }
        offseth44 += steph4;
        if (offseth44 >= lenh4) {
            offseth44 -= lenh4;
        }
        y = curvh1[offseth11] + curvh2[offseth22] + curvh3[offseth33] + curvh4[offseth44] + (480 / 2);
        canvas_rastersh[i].draw(mycanvas, 0, y);
    }
}