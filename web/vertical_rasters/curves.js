var curv1 = [], curv2 = [], curv3 = [];
var rad1 = 100, rad2 = 80, rad3 = 150;
var len1 = 500, len2 = 200, len3 = 600;
var offset1 = 0, offset2 = 100, offset3 = 400;
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

var step1 = 1, step2 = 3, step3 = 1, b_step1 = 3, b_step2 = 4, b_step3 = 3;