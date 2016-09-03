function Grad_Color(color, offset) {
    this.color = color;
    this.offset = offset;
}
var gradColor;
var nb_bands = 5;
var grads_colorl = [];
var dec_rastersl = 2;
var deg_logo = [];
var grads_logo = [[0, 0, 255], [255, 0, 255], [0, 255, 255], [255, 0, 0], [0, 255, 0], [255, 255, 0]];
var base_rl = 0, base_gl = 0, base_bl = 0;
var height_rasterl = 32;
var height_virtuall = 128;
var nb_rastersl = grads_logo.length;
var ind = 0;
for (i = 0; i < nb_rastersl; i++) {
    var r = grads_logo[i][0], g = grads_logo[i][1], b = grads_logo[i][2];
    var base_r = base_rl, base_g = base_gl, base_b = base_bl;
    var step_r = (r - base_r) / (height_virtuall / 2);
    var step_g = (g - base_g) / (height_virtuall / 2);
    var step_b = (b - base_b) / (height_virtuall / 2);
    var red = base_r, green = base_g, blue = base_b;
    for (j = 0; j < (height_virtuall / 2); j++) {
        deg_logo[ind] = [];
        deg_logo[ind][0] = parseInt(red);
        deg_logo[ind][1] = parseInt(green);
        deg_logo[ind][2] = parseInt(blue);
        ind++;
        red += step_r;
        green += step_g;
        blue += step_b;
    }
    base_r = r, base_g = g, base_b = b;
    r = base_rl, g = base_gl, b = base_bl;
    step_r = (r - base_r) / (height_virtuall / 2);
    step_g = (g - base_g) / (height_virtuall / 2);
    step_b = (b - base_b) / (height_virtuall / 2);
    red = base_r, green = base_g, blue = base_b;
    for (j = 0; j < (height_virtuall / 2); j++) {
        deg_logo[ind] = [];
        deg_logo[ind][0] = parseInt(red);
        deg_logo[ind][1] = parseInt(green);
        deg_logo[ind][2] = parseInt(blue);
        ind++;
        red += step_r;
        green += step_g;
        blue += step_b;
    }
}
var offset_gradsl = [];
var offset = 0;
for (i = 0; i < nb_bands + 1; i++) {
    offset_gradsl[i] = offset;
    offset += 4;
}
function init_grad_colors() {
    grads_colorl = [];
    var index, index_2, offs = 0, offset_2 = 1 / (nb_bands + 1);
    var step_offset = 1 / (nb_bands + 1);
    for (i = 0; i <= nb_bands; i++) {
        index = offset_gradsl[i];
        index_2 = index + parseInt(193 / (nb_bands + 1));
        if (index >= deg_logo.length) {
            index -= deg_logo.length;
        }
        if (index_2 >= deg_logo.length) {
            index_2 -= deg_logo.length;
        }
        gradColor = new Grad_Color('rgb(' + deg_logo[index][0] + ',' + deg_logo[index][1] + ',' + deg_logo[index][2] + ')', offs);
        grads_colorl.push(gradColor);
        gradColor = new Grad_Color('rgb(' + deg_logo[index_2][0] + ',' + deg_logo[index_2][1] + ',' + deg_logo[index_2][2] + ')', offset_2);
        grads_colorl.push(gradColor);
        offs += step_offset;
        offset_2 += step_offset;
        index++;
        offset_gradsl[i] = index;
    }
    mygrad = new grad(canvas_grad, grads_colorl);
}