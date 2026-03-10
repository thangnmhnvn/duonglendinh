/**
 * DUCK RACE GAME - BATMAN DUCK EDITION
 * Sử dụng thư viện CreateJS để vẽ nhân vật
 */

// ============================================================
// 0. CẤU HÌNH CHO HÌNH VẼ BATMAN (Adobe Animate Export)
// ============================================================
var cjs = createjs;
var lib = {};

const colors = [
    // --- Nhóm 1: Pastel Dịu Nhẹ (1-20) ---
    "#FFD1DC", "#FFDAC1", "#FFF5BA", "#BFFCC6", "#A0E7E5",
    "#AEC6CF", "#E6E6FA", "#D8BFD8", "#F4C2C2", "#FAFFC7",
    "#E0E0E0", "#FFFFF0", "#C1E1C1", "#FFB7B2", "#B0E0E6",
    "#F5F5DC", "#FDD5B1", "#C8A2C8", "#93C572", "#ECC5C0",

    // --- Nhóm 2: Rực Rỡ & Năng Động (21-40) ---
    "#FF0000", "#FF7F00", "#FFD700", "#32CD32", "#4169E1",
    "#4B0082", "#FF69B4", "#00FFFF", "#FF4500", "#00FF00",
    "#008080", "#FC6C85", "#6F2DA8", "#0047AB", "#FFC300",
    "#FF7518", "#228B22", "#DC143C", "#50C878", "#FFE135",

    // --- Nhóm 3: Thiên Nhiên & Động Vật (41-60) ---
    "#8B4513", "#DEB887", "#8A9A5B", "#FFDB58", "#E2725B",
    "#808000", "#708090", "#C2B280", "#01796F", "#7B3F00",
    "#E4D96F", "#CB4154", "#71BC78", "#D2B48C", "#006994",
    "#CD7F32", "#00A86B", "#CC7722", "#FFE4C4", "#6F4E37",

    // --- Nhóm 4: Kẹo Ngọt (61-80) ---
    "#FFC1CC", "#734F96", "#0ABAB5", "#FFFD74", "#F88379",
    "#3EB489", "#E0B0FF", "#FC5A8D", "#87CEEB", "#FFDAB9",
    "#FF00FF", "#00FFFF", "#FF10F0", "#DDA0DD", "#CCFF00",
    "#8DB600", "#FA8072", "#CCCCFF", "#DA70D6", "#E0115F",

    // --- Nhóm 5: Vũ Trụ & Khoa Học (81-100) ---
    "#191970", "#C0C0C0", "#FFF700", "#2E0854", "#7DF9FF",
    "#36454F", "#39FF14", "#FFFFFF", "#AAA9AD", "#E25822",
    "#5B92E5", "#483D8B", "#BC4A3C", "#F4F6F0", "#1C2833",
    "#DE3163", "#00CCFF", "#FFFF99", "#5F4B8B", "#9E1B32"
];

// Helper function để hỗ trợ mã xuất từ Adobe Animate
function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    // prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
}
// Polyfill cho hàm _renderFirstFrame nếu thiếu
cjs.MovieClip.prototype._renderFirstFrame = function() {};


//style1
(lib.style1 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiIgVIAxgNIAwgNIAvgMIAxgNIAwgNIAzgOIAOA4IAPA0IgzANIgwANIgxANIgOg0IgPg3AB3geIgOg3ABHgRIgOg3AB3geIAzgNABHgRIAwgNAgKA9IgwANIgPg1IAwgNIAwgMIAwgNAgKA9IgPg1IgOg3AhrBXIgwANIgOg1IAwgNIgPg3AhrBXIgOg1IAwgNIgOg3Ag6BKIgxANAAlAwIgvANAipAvIgPg3IAwgNACGAWIgPg0ABWAjIgPg0");
    this.shape.setTransform(33.2551,20.2331,1.2591,1.2591);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AhyAoIAwgNIAPA1IgxANgAgSAOIAwgMIAOA1IgvAMgAiwgBIAvgNIAPA2IgwANgABOgKIAxgNIgPg4IAzgNIAOA3IgyAOIAOA0IgwANgAhQgbIAwgNIAOA2IgwANgAgSAOgAAeACIgPg3IAxgNIAOA4IgwAMg");
    this.shape_1.setTransform(32.3422,19.4147,1.2591,1.2591);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AiwAoIAvgNIgOg3IAxgMIAOA2IAwgNIgPg3IAwgMIAOA3IgvAMIAPA1IgxANIgOg1IgxANIAPA1IgwANgAAPgLIAxgMIAOA0IgwAMgABwglIAzgNIAOA0IgyANgAAxhPIAwgNIAPA3IgwAOgABwglg");
    this.shape_2.setTransform(34.1679,21.083,1.2591,1.2591);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("ADWgvIgDAAIgOgCQhNgGhxAJQhxAKhRAUQhRAVgEATQgCATBNAGQBNAIBxgLQBxgKBSgUQBSgTACgTQAAgBABAAQAAgBAAAAIAAgBQgBAAAAgBIAAgBQAAAAAAgBIgwgSQgCAAgCAAQgBgBgBAAQgCAAgCAAQgIgBgJgBAEQgWIAAgDQAAAAAAgBAEQgcQgGgMgqgG");
    this.shape_3.setTransform(46.8023,22.689,1.2591,1.2591);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#0033CC").s().p("AgXgIQAqAFAFAMg");
    this.shape_4.setTransform(78.0021,17.9529,1.2591,1.2591);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AAAAAIAAgBIAAABIAAAAIAAABIAAABg");
    this.shape_5.setTransform(81.1184,19.5583,1.2591,1.2591);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#000000").s().p("AjFAxQhNgGADgTQADgTBSgVQBRgUBwgKQBxgJBOAGIANACIADAAIAEAAIACABIAEAAIAwASIABABIAAABIAAABIAAADQgDAThRATQhTAUhwAKQhCAGg2AAQgnAAgggDg");
    this.shape_6.setTransform(46.7708,22.689,1.2591,1.2591);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AkHA1QD6iCEVgTIgzBlIlYBcg");
    this.shape_7.setTransform(26.4558,5.6273,1.2591,1.2591);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#000000").s().p("AkHA1QD6iCEVgTIgzBlIlYBcg");
    this.shape_8.setTransform(26.4558,5.6273,1.2591,1.2591);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style1, new cjs.Rectangle(10,30,0,0), null);

// style2
(lib.style2 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);



    // buttons
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAZAAQAAAKgHAHQgIAHgKAAQgJAAgIgHQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJg");
    this.shape.setTransform(110.3245,41.4732,1.3941,1.3941);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgRARQgHgHAAgKQAAgJAHgHQAHgHAKAAQALAAAGAHQAIAHAAAJQAAAKgIAHQgGAHgLAAQgKAAgHgHg");
    this.shape_1.setTransform(110.3245,41.4732,1.3941,1.3941);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAZAAQAAAKgHAHQgIAHgKAAQgJAAgIgHQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJg");
    this.shape_2.setTransform(108.2615,25.1221,1.3941,1.3941);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgRARQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJQAAAKgHAHQgIAHgKAAQgJAAgIgHg");
    this.shape_3.setTransform(108.2615,25.1221,1.3941,1.3941);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AAZAAQAAAKgHAHQgIAHgKAAQgJAAgIgHQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJg");
    this.shape_4.setTransform(99.5248,13.5644,1.3941,1.3941);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AgRARQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJQAAAKgHAHQgIAHgKAAQgJAAgIgHg");
    this.shape_5.setTransform(99.5248,13.5644,1.3941,1.3941);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // hat
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AkIkHQB+iCBvAMQgagOB+AhQB9AgBECvIBKDcQgpgIgvAFQiMAOiDBoQh5BagwB0QgbgigRgyIhXjwQgSgxgBgjQgKiDBUhug");
    this.shape_6.setTransform(55.6917,-63.8858);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#000000").s().p("AjoEuIhXjwQgSgxgBgjQgKiDBUhuQB+iCBvAMQgagOB+AhQB9AgBECvIBKDcQgpgIgvAFQiMAOiDBoQh5BagwB0QgbgigRgyg");
    this.shape_7.setTransform(55.6917,-63.8858);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

    // body
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AgoklQAjgHgVggQDkA+Dyg5QgEAWAJARQANAbAqASQA5AXAwAwQBfBfAACFQAABPghBBQg+CdjcAiQlcAklDg7QjfgpiEkLQglhZgUhvQgQhVAOhAQANhAAYgZQAbgaAlAAQAmAAAaAaQACACAlAzQAcAmAlAIQAKACALAAQCsgUCXAEQAbADAQgDQACACACADQBLBgAKCUQADCFiMAPQiLATifgTQiGgTADhzQAKiZBQhgAgkkgQESBUDThU");
    this.shape_8.setTransform(50.2858,28.8071);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#3333FF").s().p("AjwABIgEgEQAigHgUggQDkA9Dyg4QgEAWAJAQQhqAqh5AAQh5AAiJgqg");
    this.shape_9.setTransform(70.7,-0.175);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FF0000").s().p("AkaFwQjfgpiEkLQglhZgUhvQgQhVAOhAQANhAAYgZQAbgaAlAAQAmAAAaAaIAnA1QAcAmAlAIQhQBggKCZQgDBzCGATQCfATCLgTQCMgPgDiFQgKiUhLhgQESBUDThUQANAbAqASQA5AXAwAwQBfBfAACFQAABPghBBQg+CdjcAiQiEAOiBAAQjRAAjJglg");
    this.shape_10.setTransform(50.2858,28.8071);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style2, new cjs.Rectangle(-21.1,-103.4,142.8,173.7), null);


(lib.facemask = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.duckEye();
    this.instance.setTransform(44.4,21.25,1,1,0,0,0,6.6,9);

    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAcAbIhvlcIgrAbIBpFIIkSAsQgVAYAVAXIEeg1IAwgKIAkgHAAcAbIALAjIAxCZQAsBCA0gTQA5gLAYhIAA8AVIggAGIgxAHIAMAmAEzDGQgTBUhcAhQhsAggthrIg0io");
    this.shape.setTransform(22.025,23.6433);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AA7iBQhuACg6AyQg7AxAbBCQAGARAJARQALARANARQD3BPAFi4Qgdhhg+ghg");
    this.shape_1.setTransform(42.2119,21.9115);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AArDwIg0ioIAwgKIgwAKIgMgmIAxgHIALAjIgLgjIAggGQAGARAJARIgkAHIAxCZQAsBCA0gTQA5gLAYhIIAqATQgTBUhcAhQgZAHgVAAQhIAAgjhSgAknBOIESgsIhplIIArgbIBvFcIgxAHIAMAmIkeA1QgVgXAVgYgAAcAbg");
    this.shape_2.setTransform(22.025,23.6433);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#70C1CB").s().p("AhmBqQgNgRgLgRQgJgRgGgRQgbhCA7gxQA6gyBugCQA+AhAdBhQgDCBh7AAQgzAAhLgYg");
    this.shape_3.setTransform(42.2119,21.9115);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.facemask, new cjs.Rectangle(-9.6,-9.5,67.89999999999999,66.4), null);


(lib.duckPattern = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // timeline functions:
    this.frame_0 = function() {
        this.stop();
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

    // Layer_7
    this.pattern0 = new lib.nnn7();
    this.pattern0.name = "pattern0";
    this.pattern0.setTransform(51.05,47.2,1,1,0,0,0,49.9,47.2);
    this.pattern0._off = true;

    this.timeline.addTween(cjs.Tween.get(this.pattern0).wait(1).to({_off:false},0).to({_off:true},1).wait(5));

    // Layer_6
    this.pattern1 = new lib.nnn6();
    this.pattern1.name = "pattern1";
    this.pattern1.setTransform(50.15,47.2,1,1,0,0,0,44.6,47.2);
    this.pattern1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.pattern1).wait(2).to({_off:false},0).to({_off:true},1).wait(4));

    // Layer_5
    this.pattern2 = new lib.nnn5();
    this.pattern2.name = "pattern2";
    this.pattern2.setTransform(50.6,47.2,1,1,0,0,0,50.3,47.2);
    this.pattern2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.pattern2).wait(3).to({_off:false},0).to({_off:true},1).wait(3));

    // Layer_4
    this.pattern3 = new lib.nnn4();
    this.pattern3.name = "pattern3";
    this.pattern3.setTransform(50.45,47.2,1,1,0,0,0,50.4,47.2);
    this.pattern3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.pattern3).wait(4).to({_off:false},0).to({_off:true},1).wait(2));

    // Layer_3
    this.pattern4 = new lib.nnn3();
    this.pattern4.name = "pattern4";
    this.pattern4.setTransform(50.55,47.6,1,1,0,0,0,50.5,47);
    this.pattern4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.pattern4).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

    // Layer_1
    this.pattern5 = new lib.nnn2();
    this.pattern5.name = "pattern5";
    this.pattern5.setTransform(49.6,49.75,1,1,0,0,0,49.1,44.8);
    this.pattern5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.pattern5).wait(6).to({_off:false},0).wait(1));

    this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-18.4,140.5,131.4);


(lib.duckColoura = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_3
    this.color4 = new lib.nnn10();
    this.color4.name = "color4";
    this.color4.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.color4).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.duckColoura, new cjs.Rectangle(0,0,101,94.6), null);


(lib.duckColour = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.color0 = new lib.nnn8();
    this.color0.name = "color0";
    this.color0.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.color0).wait(1));

    // Layer_6
    this.color1 = new lib.nnn16();
    this.color1.name = "color1";
    this.color1.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.color1).wait(1));

    // Layer_5
    this.color2 = new lib.nnn14();
    this.color2.name = "color2";
    this.color2.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.color2).wait(1));

    // Layer_4
    this.color3 = new lib.nnn12();
    this.color3.name = "color3";
    this.color3.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.color3).wait(1));

    // Layer_3
    this.color4 = new lib.nnn10();
    this.color4.name = "color4";
    this.color4.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.color4).wait(1));

    // Layer_7
    this.color5 = new lib.nnn18();
    this.color5.name = "color5";
    this.color5.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.color5).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.duckColour, new cjs.Rectangle(0,0,101,94.6), null);

(lib.nnn19 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#663399").s().p("AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg");
    this.shape.setTransform(71.0108,66.5071);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn19, new cjs.Rectangle(0,0,142,133), null);


(lib.nnn18 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#663399").s().p("AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag");
    this.shape.setTransform(50.4799,47.2817);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn18, new cjs.Rectangle(0,0,101,94.6), null);


(lib.nnn17 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF99CC").s().p("AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg");
    this.shape.setTransform(71.0108,66.5071);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn17, new cjs.Rectangle(0,0,142,133), null);


(lib.nnn16 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF99CC").s().p("AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag");
    this.shape.setTransform(50.4799,47.2817);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn16, new cjs.Rectangle(0,0,101,94.6), null);


(lib.nnn15 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#D720E0").s().p("AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg");
    this.shape.setTransform(71.0108,66.5071);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn15, new cjs.Rectangle(0,0,142,133), null);


(lib.nnn14 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#D720E0").s().p("AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag");
    this.shape.setTransform(50.4799,47.2817);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn14, new cjs.Rectangle(0,0,101,94.6), null);


(lib.nnn13 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#1CE018").s().p("AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg");
    this.shape.setTransform(71.0108,66.5071);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn13, new cjs.Rectangle(0,0,142,133), null);


(lib.nnn12 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#1CE018").s().p("AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag");
    this.shape.setTransform(50.4799,47.2817);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn12, new cjs.Rectangle(0,0,101,94.6), null);


(lib.nnn11 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E01414").s().p("AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg");
    this.shape.setTransform(71.0108,66.5071);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn11, new cjs.Rectangle(0,0,142,133), null);


(lib.nnn10 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f(colors[Math.floor(Math.random() * 100)]).s().p("AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag");
    this.shape.setTransform(50.4799,47.2817);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn10, new cjs.Rectangle(0,0,101,94.6), null);


(lib.nnn9 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E0BD14").s().p("AkaJwQjggqiDkMQgmhagUhvQgQhVAOg/QANhAAYgYQAbgbAlAAQAmAAAbAbIAmA0QAdAmAkAJQAKACAMgBQCrgUCYAFQAbACAQgCQAsgJgwg2QhZhfAAiDQAAiKBhhhQBghhCKAAQCJAABhBhQA1A1AYBBQABAlgXAtQgUAoggAGQgUACgMAJQgZARADAoQAFBOBNArIAFADQhABdBlApQAzAVArApIAKAJIAJAJQBWBcAACBQAABPghBBQg9CdjdAjQiEANiAAAQjRAAjKgkg");
    this.shape.setTransform(71.0199,66.5089,1.0079,1.0078);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn9, new cjs.Rectangle(0,0,142,133), null);

(lib.nnn8 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f(colors[Math.floor(Math.random() * 100)]).s().p("AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQAkAPAfAdIAIAHIAFAGQA/BCAABdQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag");
    this.shape.setTransform(50.4799,47.2817);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn8, new cjs.Rectangle(0,0,101,94.6), null);


(lib.nnn7 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("ABmJ1IAygBIARguIAPAuIAyABIgeAXIhFABgAgdKJIgagUIAxgBIAQguIAQAuIAyABIgeAYIhLgEgAEFJ1IAxgBIARguIAQAuIAyABIgPALQgvAFgtADgAjVJ2IgBgBIAzgBIAQguIAQAuIAyABIgTAPQg5gGg4gIgAGiJ1IAQAAIgMADgAHlJGIAKAbIgXAJgAk7JjIAKgdIALAiIgVgFgAHlIVIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAxABIgmAeIANAvgAFHIVIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAyABIgoAeIAOAvgACpIVIgpAcIAOgvIgogeIAygBIARgvIAPAvIAyABIgnAeIANAvgAAKIVIgnAcIANgvIgngeIAxgBIAQgvIAQAvIAyABIgoAeIAPAvgAiTIVIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAyABIgoAeIAOAvgAkxIVIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAxABIgnAeIAOAvgAnQIVIgCACIgZgUQgFgEgEgFQgMgKgKgMIAqgBIAQgvIAQAvIAyABIgnAeIAOAvgAJoICIgngeIAygBIAQgvIAKAbQgQAkgYAcgAJoFxIgngeIAygBIAQgvIAQAvIAeAAIgCASQgDAWgGAUIgDAMIgggWIgoAcgAHlGEIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAxABIgmAeIANAvgAFHGEIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAyABIgoAeIAOAvgACpGEIgpAcIAOgvIgogeIAygBIARgvIAPAvIAyABIgnAeIANAvgAAKGEIgnAcIANgvIgngeIAxgBIAQgvIAQAvIAyABIgoAeIAPAvgAiTGEIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAyABIgoAeIAOAvgAkxGEIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAxABIgnAeIAOAvgAnQGEIgoAcIANgvIgngeIAygBIAQgvIAQAvIAyABIgnAeIAOAvgAp4FCIALgfIAPAvIAyABIgnAeIALAkQgagmgWgtgAKDDzIgoAcIANgvIgngeIAygBIAQgvIAQAvIALAAIAIAYIgJAHIAPAvgAHlDzIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAxABIgmAeIANAvgAFHDzIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAyABIgoAeIAOAvgACpDzIgpAcIAOgvIgogeIAygBIARgvIAPAvIAyABIgnAeIANAvgAAKDzIgnAcIANgvIgngeIAxgBIAQgvIAQAvIAyABIgoAeIAPAvgAiTDzIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAyABIgoAeIAOAvgAkxDzIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAxABIgnAeIAOAvgAnQDzIgoAcIANgvIgngeIAygBIAQgvIAQAvIAyABIgnAeIAOAvgAptDzIgjAXIgCgJQgJgagIgbIgCgKIAngBIARgvIAPAvIAyABIgnAeIANAvgAJkBgIAMAQIgVAOgAHlBiIgpAcIAOgvIgogeIAzgCIAPgpIAEACIANAnIAxACIgmAeIANAvgAFHBiIgpAcIAOgvIgngeIAxgCIARguIAQAuIAyACIgoAeIAOAvgACpBiIgpAcIAOgvIgogeIAygCIARguIAPAuIAyACIgnAeIANAvgAAKBiIgnAcIANgvIgngeIAxgCIAQguIAQAuIAyACIgoAeIAPAvgAiTBiIgpAcIAOgvIgogeIAzgCIAQguIAQAuIAyACIgoAeIAOAvgAkxBiIgpAcIAOgvIgngeIAxgCIARguIAQAuIAxACIgnAeIAOAvgAnQBiIgoAcIANgvIgngeIAygCIAQguIAQAuIAyACIgnAeIAOAvgAptBiIgqAcIAPgvIgogeIAygCIARguIAPAuIAyACIgnAeIANAvgAG9gVIACABIgDABgAFHguIgpAbIAOgvIgngdIAxgCIARguIAQAuIAyACIgoAdIAOAvgACpguIgpAbIAOgvIgogdIAygCIARguIAPAuIAyACIgnAdIANAvgAAKguIgnAbIANgvIgTgNQgEgIgIgIIApgCIAQguIAQAuIAyACIgoAdIAPAvgAiIgnIAXABIAGATgAi1gmIAXgBIgeAUgAkfgiIARAAIAFAPgAlWgeIAOgBIgSAMgAmvgYIAAAAIAHABIABAEgAnrhAQALAMAMAJIgkAYgAptguIgqAbIAPgvIghgYIACgFIApgCIARguIAPAuIAyACIgnAdIANAvgAoShfIARAAQAGAKAMAPIACACgAGihfIAXgBIgGANgAFHi/IgpAbIAOgvIgngdIAxgCIARguIAQAuIAcABIACAQIgUAOIAOAvgACpi/IgpAbIAOgvIgogdIAygCIARguIAPAuIAyACIgnAdIANAvgAAKi/IgnAbIANgvIgngdIAxgCIAQguIAQAuIAyACIgoAdIAPAvgAiBjyIAwACIgmAdQgGgPgEgQgAFHlQIgpAbIAOgvIgngeIAxgBIARguIAQAuIAyABIgoAeIAOAvgACplQIgpAbIAOgvIgogeIAygBIARguIAPAuIAyABIgnAeIANAvgAAKlQIgnAbIANgvIgngeIAxgBIAQguIAQAuIAyABIgoAeIAPAvgAiLlKQABggAFgcIACADIAyABIgoAeIAOAvgAHKlkIgogeIAzgBIAQguIAJAZQgFAYgNAZQgMAXgPAMgAHKn1IgogeIAZAAQAWAZAOAdIgjAXgAFHniIgpAcIAOgvIgngeIAxgBIARguIAQAuIAyABIgoAeIAOAvgACpniIgpAcIAOgvIgogeIAygBIARguIAPAuIAyABIgnAeIANAvgAAKniIgnAcIANgvIgngeIAxgBIAQguIAQAuIAyABIgoAeIAPAvgAhwnJIADgFIACAIgAFepjIAQALIABABgAEpp7QANAFAOAGIgmAZgACppzIgpAcIAOgvIgEgDQAZgDAaAAIAOAAIgIAGIANAvgAAeplQAHgEAHgDIAHAVg");
    this.shape.setTransform(49.9,47.325);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn7, new cjs.Rectangle(-19,-18,137.8,130.7), null);


(lib.nnn6 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("ABwKQIAA0TQAsgNAzAAQAXAAAVADIAAUbQg6ADg6AAIgXgBgAj6JwIAAqUQBHgEBEABIAAKqQhGgIhFgLgAHcgLQAOALAWAKQA3AXAvAuIAAHWQg1AyhVAbgAplFPIAAngQAOgFAQAAQAmAAAaAbIAmA0IAHAIIAAJGQhOhGg9hyg");
    this.shape.setTransform(44.05,47.3042);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("rgba(240,240,240,0.2)").s().p("ACvqNIANACIAAUYIgNABgAi7KCIAAqqIAMAAIAAKsIgMgCgAIbBOIACADIAKAKIAAG9IgMANgAolIGIAApFIALANIAAJDIgLgLg");
    this.shape_1.setTransform(51.6,47.35);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn6, new cjs.Rectangle(-17.3,-18.3,124,131.3), null);


(lib.nnn5 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Ag9KJIJipkQAdASAZAaIAZAbIojIjQhIgBhGgFgAKqDMQAQAxAAA4IgBAeIkuEuIgLABQhNAIhLADgAkaJrQgVgEgTgFILxrxQAMAJAPAIIAFADQgtBBAlAoIqLKLQgrgGgrgIgAn8HxIPbvcQAPAYAJAaQACAlgXAsQgUApggAFQgTACgNAJQgYARADAoIAAAGIsjMjQgrgbgngngAp3FAIFjliQBPgFBLAAInGHFQgdgrgagzgAq1BxIgEgbIC5i4IAUAbQAaAjAgAKIjsDrQgOgugJgygAqRh7QATgTAZgFIhHBHQAMgfAPgQgAhujIIGtmvQAyAUAqAmInQHRQglgqgUgygAgmouQBfhgCIAAIlHFIQABiIBfhgg");
    this.shape.setTransform(50.375,47.275);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn5, new cjs.Rectangle(-19.4,-18.2,139.6,131), null);


(lib.nnn4 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("ACKJ9QAQgPAUAAQAVAAAOAPQAJAIAEALIhgABQAEgLAIgJgAhkKGQAEgGAGgHQAbgbAnAAQAmAAAbAbQAKALAHAMQhPgDhPgHgAkLJwIgBgGQAAgUAPgPQAPgOAUAAQAUAAAPAOQAPAPgBAUQABAKgFAJQgvgGgvgHgAiUJsQgGgGAAgKQAAgKAGgHQAHgGAKAAQAKAAAGAGQAGAHABAKQgBAKgGAGQgGAHgKAAQgKAAgHgHgAFfJfQgTgUAAgbQAAgcATgUQAUgTAbAAQAdAAATATQATAUAAAcQAAAbgTAUQgTATgdAAQgbAAgUgTgADpJjQgKgKAAgOQAAgPAKgKQAKgKAPAAQAOAAAKAKQAKAKAAAPQAAAOgKAKQgKALgOAAQgPAAgKgLgAHtJeQAAgVAOgQQAPgOAVAAQAXAAAOAOIABABQgmAcgxATIgBgLgAAmJTQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAARASQARARABAYQgBAZgRARQgRARgZAAQgYAAgSgRgAnOIZIADgEQAWgVAeAAQAeAAAUAVQAWAVAAAeQAAAMgDAKQhDgXg5gugAk7IwQgMgNAAgSQAAgSAMgMQANgNASAAQASAAANANQAMAMAAASQAAASgMANQgNAMgSAAQgSAAgNgMgAhdInQgRgRAAgYQAAgZARgRQARgRAYAAQAZAAASARQAPARABAZQgBAYgPARQgSASgZAAQgYAAgRgSgAjhINQgRgRAAgYQAAgYARgSQAQgQAZAAQAYAAARAQQASASgBAYQABAYgSARQgRARgYAAQgZAAgQgRgApWF7QACgEAFgEQAcgcAoAAQAnAAAbAcQAcAcAAAnQAAAogcAbQgLAMgMAHQhCg5g0hYgAIcH7QgPgPAAgVQAAgUAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAUQAAAVgPAPQgOAOgVAAQgVAAgPgOgACKHqQgdgeAAgrQAAgrAdgfQAfgeAsAAQArAAAeAeQAeAfAAArQAAArgeAeQgeAegrAAQgsAAgfgegAHGHvQgFgFAAgHQAAgHAFgFQAFgFAIAAQAGAAAFAFQAGAFAAAHQAAAHgGAFQgFAGgGAAQgIAAgFgGgAmDHTQgQgQAAgWQAAgWAQgQQAPgPAWAAQAXAAAPAPQAQAQAAAWQAAAWgQAQQgPAQgXAAQgWAAgPgQgAAIG+QgJgJABgNQgBgOAJgJQAJgJANAAQANAAAKAJQAKAJAAAOQAAANgKAJQgKAJgNAAQgNAAgJgJgAF7G1QgQgQAAgWQAAgXAQgQQAQgQAWAAQAWAAARAQQAPAQAAAXQAAAWgPAQQgRAQgWAAQgWAAgQgQgAkGGxQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAIAHgBAJQABAJgIAGQgGAHgJAAQgJAAgHgHgAh+GoQgPgQgBgVQABgWAPgQQAPgPAWAAQAWAAAPAPQAQAQAAAWQAAAVgQAQQgPAQgWAAQgWAAgPgQgAJtGeQgQgPAAgYQAAgYAQgQQARgQAYAAQAXAAAQAPQgEAygRAsQgJADgJAAQgYAAgRgRgAjVGLQgGgGAAgIQAAgIAGgGQAGgGAJAAQAHAAAGAGQAHAGgBAIQABAIgHAGQgGAGgHAAQgJAAgGgGgAH0FnQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAALALQAMALAAAQQAAAQgMALQgLALgQAAQgQAAgLgLgAlcFWQgWgWAAgfQAAggAWgWQAWgWAfAAQAgAAAWAWQAWAWAAAgQAAAfgWAWQgWAWggAAQgfAAgWgWgAgdFKQgbgbABglQgBgmAbgaQAbgaAkAAQAlAAAbAaQAaAaAAAmQAAAlgaAbQgbAaglAAQgkAAgbgagAnSE0QgNgOABgTQgBgUANgNQAOgOAUAAQAUAAANAOQAOANgBAUQABATgOAOQgNANgUAAQgUAAgOgNgAp6E5QgVgxgOg3QAOgJARAAQAaAAARARQASASAAAZQAAAZgSASQgPAPgUADIgEgIgAooE4QgGgGAAgKQAAgJAGgHQAHgHAJAAQAKAAAGAHQAIAHgBAJQABAKgIAGQgGAHgKAAQgJAAgHgHgAFlElQgTgUAAgbQAAgcATgUQAUgUAcAAQAbAAAUAUQAUAUAAAcQAAAbgUAUQgUAUgbAAQgcAAgUgUgADFEGQgSgSAAgbQAAgcASgTQAUgTAaAAQAcAAASATQAUATAAAcQAAAbgUASQgSAUgcAAQgaAAgUgUgAImD3QgegeAAgsQAAgsAegfQAVgUAagHIAKAKQBJBJAQBgQgeAcgpAAQgsAAgfgfgAowDLQgGgHAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAIAHgBAJQABAJgIAHQgGAHgJAAQgJAAgHgHgAqoCsQgGgcgGgfIgEgdQAKgHAOAAQAVAAANAOQAOAOAAAUQAAAUgOAOQgNAOgVAAIgIgBgAGqCVQgPgOABgWQgBgWAPgPQAQgOAVAAQAVAAAQAOQAPAPgBAWQABAWgPAOQgQAPgVAAQgVAAgQgPgAn6CHQgbgcAAgmQAAgmAbgbQAbgaAmAAQAmAAAbAaQAcAbgBAmQABAmgcAcQgbAbgmAAQgmAAgbgbgABqCCQgWgWAAggQAAggAWgXQAXgVAgAAQAgAAAWAVQAXAXAAAgQAAAggXAWQgWAXggAAQggAAgXgXgAgGCEQgJgJAAgLQAAgMAJgJQAHgIAMAAQAMAAAIAIQAJAJAAAMQAAALgJAJQgIAIgMAAQgMAAgHgIgAk7BSQgagZAAglQAAgcAQgXQBIgGBDgBQAXAZAAAhQAAAlgaAZQgaAbglAAQglAAgagbgAFFBRQgHgHAAgKQAAgJAHgHQAHgHAJAAQALAAAGAHQAHAHAAAJQAAAKgHAHQgGAHgLAAQgJAAgHgHgApaA7QgIgHAAgLQAAgKAIgIQAHgHALAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgLAAgHgIgAgVAgQgNgMAAgSQAAgRANgNQAMgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgMgNgAq8AWQABgeAFgbIAHgYQAJgFAMAAQAVAAAPAPQAOAOAAAVQAAAUgOAPQgPAOgVAAQgUAAgOgNgAF2ACQgNgMAAgTQAAgTANgNQANgNATAAQATAAANANIADAEQACAQAIAPQgBAQgMAMQgNANgTAAQgTAAgNgNgADggGQgUgUAAgeQAAgdAUgVQAVgUAdAAQAeAAATAUQAWAVgBAdQABAegWAUQgTAUgeAAQgdAAgVgUgAiPgBQgNgOAAgUIAAgEIBKABIAUABIAAACQAAAUgNAOQgOANgUAAQgTAAgPgNgApOhCQgOgOABgUQgBgUAOgPQAKgIALgEQAWAGASASIAXAeQgDAPgMAMQgOAPgUAAQgUAAgPgPgABWhDQgLgLAAgOQAAgPALgKQALgLAOAAQAPAAAKALQAKAKAAAPQAAAOgKALQgKAKgPAAQgOAAgLgKgAgshlQgggigUgmIAHgIQATgTAbAAQAcAAARATQAUATAAAbQAAAbgUATQgJAMgPAFQgGgNgQgQgAFAiZQgRgQABgXQgBgXARgRQAQgQAXAAQALAAAKAEQADArAbAgQgFAJgHAHQgQAQgXAAQgXAAgQgQgAA+jAQgSgSAAgZQAAgZASgTQARgSAaAAQAZAAARASQATATAAAZQAAAZgTASQgRASgZAAQgaAAgRgSgADYi3QgHgHAAgLQAAgMAHgHQAIgIALAAQALAAAIAIQAHAHAAAMQAAALgHAHQgIAIgLAAQgLAAgIgIgAgkkLQgHgIgBgLQABgLAHgJQAIgHALAAQALAAAHAHQAIAJAAALQAAALgIAIQgHAIgLAAQgLAAgIgIgADEknQgVgUAAgeQAAgeAVgVQAUgVAeAAQAfAAAUAVQAVAVAAAeQAAAegVAUQgUAVgfAAQgeAAgUgVgAG8lBQgVgVAAgeQAAgeAVgWQAWgVAeAAIAKAAIABADQACAlgXAtQgQAfgXAKIgDgCgAiDlcQAFhhA4hLQAJAGAHAIQAbAbABAnQgBAngbAbQgaAbgnAAIgMgBgAAVloQgKgKAAgPQAAgOAKgLQAKgKAPAAQAPAAAKAKQALALgBAOQABAPgLAKQgKALgPAAQgPAAgKgLgACMnEQgIgIAAgKQAAgLAIgHQAHgIALAAQAKAAAIAIQAHAHAAALQAAAKgHAIQgIAHgKAAQgLAAgHgHgAD9nYQgQgQAAgXQAAgYAQgRQARgQAYAAQAXAAAQAQQARARAAAYQAAAXgRAQQgQARgXAAQgYAAgRgRgAAqn7QgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQARARAAAYQAAAZgRARQgRARgZAAQgYAAgRgRgACXpiQgRgRABgXQAdgGAhAAQAaAAAaAEIAAACQAAAXgRARQgRARgYAAQgXAAgRgRg");
    this.shape.setTransform(50.45,47.275);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn4, new cjs.Rectangle(-19.6,-18.4,140.1,131.4), null);


(lib.nnn3 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("ADFJuIAfAfIg+ABgAhQKFIAXgXIAbAbIgygEgADFH6Ih/CAIh/iAIh+B/IgDAAIh/h/IhLBMIgZgNIBkhmICACAICAiAIB/CAIB/iAICACAIB/iAIBwBwIgZAOIhXhXIh/CAgAHEFgIh/CAIiAiAIh/CAIh/iAIiACAIiAiAIh/CAIiAiAIgdAcIgOgYIArgrICACAIB/iAICACAICAiAIB/CAIB/iAICACAIB/iAICACAIB6h6IgEArIh2B2gAHEDFIh/CAIiAiAIh/CAIh/iAIiACAIiAiAIh/CAIiAiAIhQBRIgKgdIBahbICACAIB/iAICACAICAiAIB/CAIB/iAICACAIB/iAICACAIBlhkQAFAOAEAPIhuBugAHEArIh/CAIiAiAIh/CAIh/iAIiACAIiAiAIh/CAIiAiAIhzB0IgHghIB6h6ICACAIB/iAICACAICAiAIB/CAIB/iAICACAIB/iAICACAIApgoQAKAJAIALIg7A7gAq6gWICCiAIBVBWIAOANIAdAdIAIgIIAFACQAKACAMgBIALgBIguAsIiAh/IiFCCQAAgVADgUgADFhvIh/B/IhchbQgHgNgPgRQgOgPgMgQIANgOIB/CAIB/iAICACAIB4h3IAQAKIAFADIgMATIgCgCIh/B/gAjzgoIAmgCIAUAUIAWgVIAnAAIg9A7gADFkJIh/CAIh/iAIg2A2QgGgOgEgPIBAhAIB/CAIB/iAICACAIA5g5QADAPAGAPIhCBCgADFmkIh/CAIh/iAIhLBMQABgXADgVIBHhHIB/CAIB/iAICACAIB/iAIAzAzIgKAdIgpgpIh/CAgADFo+Ih/CAIhvhwIAFgGIAOgOIBcBdIB/iAICACAIBchdIAOAOIAGAGIhwBwgAERqNQAoAJAkATIgYAYgAAtpxQAkgTApgJIg0A0g");
    this.shape.setTransform(50.475,46.975);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn3, new cjs.Rectangle(-19.7,-18.4,140.4,130.8), null);


(lib.nnn2 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("ABDJvIgGgEQgmgZgDgiIAAgHQAAgRAMgNQAMgMATAAQARAAANAMQAMANAAARQABgSAMgMQANgMARAAQASAAANAMQANANAAARIgBAHQgFAiglAZIgHAFIhLgBgAEfItQgZgQgDgXIAAgEQAAgMAIgJQAJgJAMABQALgBAKAJQAIAIAAAMQAAgMAIgIQAJgJALABQAMgBAIAJQAJAJAAAMIAAAEQgDAXgZAQQgTANgKALQgKgLgUgNgAiDItQgYgQgDgXIAAgEQAAgMAIgJQAIgJAMABQAMgBAJAJQAIAIAAAMQAAgMAIgIQAJgJAMABQAMgBAIAJQAJAJAAAMIAAAEQgEAXgYAQQgTANgLALQgKgLgUgNgAmbIVIgBgCIAAgFQAAgMAJgIQAHgJANAAQAMAAAIAJQAIAIAAAMQABgMAIgIQAIgJAMAAQAMAAAJAJQAIAIAAAMIAAAFQgDAWgZAQIgEADQgrgPgngYgAHTIDQgmgZgDghIAAgHQAAgRAMgOQAMgNATABQARgBANANQAMAOAAAQQABgRAMgNQANgNARABQARgBAOANQAMAOABARIgBAHQgEAhgmAZQgcASgQASQgPgSgdgSgAkhHFQgmgZgDghIAAgHQAAgRAMgNQAMgNATgBQARABANANQAMANAAAQQABgRAMgMQANgNARgBQARABAOANQANANAAARIgBAHQgFAhglAZQgcATgQARQgPgRgdgTgAgdHBQgmgZgEgiIAAgHQAAgQANgOQAMgMASAAQASAAAMAMQAMAOAAAQQABgSAMgMQANgMARAAQASAAAMAMQANAOAAAQIAAAHQgFAiglAZQgcASgQASQgOgSgdgSgAnpGxQgYgRgEgWIAAgGQAAgLAJgIQAIgJAMAAQAMAAAJAJQAIAIAAALQAAgLAIgIQAJgJAMAAQAMAAAIAJQAJAIAAALIAAAGQgDAWgZARQgUAMgKAMQgKgMgUgMgADDGZQgYgRgEgWIAAgFQAAgMAJgJQAJgHALgBQAMABAJAHQAIAJABAMQAAgMAIgJQAIgHAMgBQAMABAIAHQAJAJAAAMIAAAFQgDAWgZARQgTANgKALQgLgLgUgNgAJVFyQgYgRgEgWIAAgFQAAgMAIgIQAJgJAMABQAMgBAIAJQAIAIAAAMQABgMAIgIQAIgJAMABQAMgBAJAJQAIAIAAAMIAAAFQgDAWgZARQgTAMgLAMQgKgMgTgMgAFbFgQglgagEggIAAgHQAAgSAMgNQANgNASABQARgBANANQANANgBARQABgRAMgNQANgNASABQARgBANANQANANAAASIgBAHQgEAgglAaQgdASgQASQgPgSgdgSgAl6FAQgZgQgDgXIAAgEQAAgMAIgJQAJgIAMAAQALAAAKAIQAIAIAAAMQAAgMAJgIQAHgIANAAQAMAAAHAIQAJAJAAAMIAAAEQgDAXgZAQQgTANgKALQgKgLgUgNgAhuEfQgYgRgEgWIAAgFQABgMAHgIQAJgJAMABQAMgBAJAJQAIAIAAAMQAAgMAJgIQAIgJAMABQAMgBAIAJQAIAIAAAMIAAAFQgCAWgZARQgUANgKALQgLgLgTgNgAorEUQglgagFghIAAgHQAAgRANgNQANgNARAAQASAAAMANQANANAAAQQAAgRAMgMQAOgNARAAQARAAAOANQAMANAAARIgBAHQgEAhgkAaQgdASgQARQgQgRgcgSgABfEMQgmgagDghIAAgHQAAgSAMgMQAMgNASAAQASAAANANQAMANAAAQQABgRALgMQAOgNASAAQARAAANANQANAMAAASIgBAHQgEAhglAaQgdASgQARQgPgRgdgSgAIIDzQgmgbgDggIAAgHQAAgRAMgOQAMgMATAAQARAAANAMQAMAOAAAQQABgRAMgNQANgMARAAQARAAAOAMQANAOAAARIgBAHQgFAgglAbQgcARgQASQgPgSgdgRgAkhDQQgmgZgDgiIAAgGQAAgRAMgOQAMgMATAAQARAAANAMQAMAOAAAQQABgRAMgNQANgMARAAQARAAAOAMQANAOAAARIgBAGQgFAiglAZQgcATgQARQgPgRgdgTgAEfCoQgZgRgDgWIAAgFQAAgMAIgIQAJgJAMAAQALAAAKAJQAIAIAAAMQAAgMAIgIQAJgJALAAQAMAAAIAJQAJAIAAAMIAAAFQgDAWgZARQgTANgKALQgKgLgUgNgAqWCDIgKgHIgJgtIgCgJIACgDQAHgIAMAAQANAAAIAIQAJAJAAALQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMIAAAEQgDAXgZAQQgSANgLAMQgKgMgUgNgAhLB3QgmgbgEggIAAgHQAAgSANgNQANgNARABQASgBANANQAMANAAARQABgRALgNQANgNARABQASgBAMANQANANAAASIAAAHQgFAgglAbQgbARgQASQgQgSgcgRgAnnBYQglgagEghIAAgHQAAgRAMgMQANgNASAAQARAAANANQAMAMAAAQQABgRAMgLQANgNARAAQASAAANANQANAMAAARIgBAHQgFAhgkAaQgcASgRASQgPgSgdgSgAG8BSQgYgQgDgXIAAgFQgBgMAJgIQAIgIAMAAQALAAAKAIQAIAIAAAMQAAgMAIgIQAJgIALAAQANAAAIAIQAJAIAAAMIAAAFQgEAXgYAQQgTAMgLANQgKgNgUgMgACsBSQgZgQgDgXIAAgFQAAgMAJgIQAIgIAMAAQALAAAJAIQAJAIAAAMQAAgMAIgIQAIgIAMAAQAMAAAIAIQAJAIAAAMIAAAFQgDAXgZAQQgTAMgKANQgKgNgUgMgAj2AjQgYgRgEgVIAAgFQAAgMAJgIQAIgIAMAAQAMAAAJAIQAIAIABAMQAAgMAHgIQAJgIAMAAQAMAAAIAIQAJAIAAAMIAAAFQgDAVgZARQgUAMgJAMQgLgMgUgMgAEeguQgmgagDghIAAgHQAAgRAMgNQAMgNATAAQARAAANANQAMANAAAQQABgRAMgMQANgNARAAQASAAANANQANANAAARIgBAHQgFAhglAaQgcASgQARQgPgRgdgSgAA5gjQgYgRgEgWIAAgFQAAgMAJgIQAIgJALABQANgBAIAJQAJAIAAAMQAAgMAIgIQAJgJALABQAMgBAJAJQAIAIAAAMIAAAFQgCAWgaARQgSAMgLAMQgKgMgUgMgApmg5QgXgRgEgWIAAgEQAAgNAIgIQAJgIALAAQAMAAAJAIQAIAIABAMQAAgMAIgIQAIgIAMAAQAMAAAIAIQAJAIgBANIAAAEQgCAWgZARQgTAMgKAMQgLgMgUgMgACsizQgZgRgDgXIAAgEQAAgMAJgIQAIgJAMAAQALAAAJAJQAJAIAAALQAAgLAIgIQAIgJAMAAQAMAAAIAJQAJAIAAAMIAAAEQgDAXgZARQgTAMgKAMQgKgMgUgMgAgYjPQgmgagEghIAAgHQAAgRANgOQAMgMASAAQASAAALAMQANAOAAAQQABgRALgNQAOgMARAAQARAAAOAMQAMAOAAARIgBAHQgEAhgkAaQgdASgQASQgPgSgcgSgADhlOQgmgagEghIAAgHQAAgRAMgNQANgMASAAQASAAAMAMQAMANAAARQACgSALgMQANgMASAAQASAAANAMQAMANAAARIgBAHQgEAhglAaQgcASgRASQgPgSgcgSgAh5lgIAAgJQABgjAGggIAFAEQAIAIAAAMQAAgMAIgIQAJgIAMAAQAMAAAIAIQAJAJAAAMIAAAEQgEAXgYAQQgTANgLALQgIgHgMgJgAG8loQgYgQgDgXIAAgEQgBgMAJgJQAIgIAMAAQALAAAKAIQAIAIAAAMQAAgMAIgIQAJgIALAAQAHAAAEACQgFAQgJASQgSAjgaAJIgLgIgAAvmWQgYgRgDgXIAAgEQgBgMAJgJQAIgIAMAAQAMAAAJAIQAIAJAAALQAAgLAIgJQAJgIALAAQAMAAAJAIQAJAJAAAMIAAAEQgEAXgZARQgTAMgKAMQgKgMgUgMgAFfnsQgZgQgDgWIAAgGQAAgLAIgJQAJgIAMAAQALAAAKAIQAIAJAAALQAAgLAIgJQAIgIAMAAQAMAAAIAIQAJAJAAALIAAAGQgDAWgZAQQgTANgKAMQgKgMgUgNgACZoCQgmgagEghIAAgHQAAgRAMgNQANgNASAAQARAAANANQAMANAAAQQABgRAMgMQANgNARAAQASAAANANQANANAAARIgBAHQgEAhglAaQgcASgRARQgPgRgcgSgAgQocQgVgPgFgTIATgVIARgQQAGACAFAFQAIAIAAAMQAAgMAIgIQAJgJALABQAMgBAJAJQAIAIAAAMIAAAFQgCAWgaARQgTAMgKAMQgKgMgTgMg");
    this.shape.setTransform(49.15,44.85);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nnn2, new cjs.Rectangle(-19.2,-17.5,136.79999999999998,124.8), null);


(lib.duckEye = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // eyeDot
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgTAaQgIgLAAgPQAAgMAGgKIACgEQAIgLALAAQALAAAJALQAIAMAAAOQAAAPgIALQgJAMgLAAQgLAAgIgMgAgNgVQgDADAAAFQAAAEADADQADADAFAAQAEAAACgDQADgDAAgEQAAgFgDgDQgCgDgEAAQgFAAgDADg");
    this.shape.setTransform(6.6857,8.9627,1.4611,1.4611);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // eye
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s(colors[Math.floor(Math.random() * 100)]).ss(1.5,1,1).p("AAtAAQAAACAAABQAAAYgNARQgNARgTAAQgSAAgNgRQgNgTAAgZQAAgBAAgBQAAgYANgRQANgRASAAQATAAANARQANATAAAYg");
    this.shape_1.setTransform(6.6126,8.9627,1.4611,1.4611);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgeArQgOgRAAgaIAAgCQABgXANgSQAMgRASAAQATAAANARQANATAAAYIAAADQAAAXgNARQgNASgTAAQgSAAgMgSg");
    this.shape_2.setTransform(6.6126,8.9627,1.4611,1.4611);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.duckEye, new cjs.Rectangle(-0.9,-0.9,15.1,19.799999999999997), null);


(lib.duckColourb = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f(colors[Math.floor(Math.random() * 100)]).s().p("AlhE4QgbhBgPhPQgLg9AKguQAJguASgRQATgSAbAAQAbAAATASIAbAlQAVAcAaAGQAHABAIgBQBtgMBgABIlHFIQgXghgUgpgAAHiTQAAhjBGhGQBFhFBjAAQBWAABAA2IAHAFIlQFOQg7hBAAhag");
    this.shape.setTransform(40.1799,38.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f(colors[Math.floor(Math.random() * 100)]).s().p("AkhDdIHCnCQAdAPAZAXIAHAHIAGAGQA+BCAABdQAAA3gXAvQgsBwifAZQhdAKhcAAQhVAAhTgJg");
    this.shape_1.setTransform(71.9375,71.5932);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f(colors[Math.floor(Math.random() * 100)]).s().p("Ai2GlQgagEgYgJQhegkhEhiIFIlHIAaAAQAUACALgCQAggGgjgnIgEgFIFOlPIALAKQAmAmARAvQABAagUApQgVAogQgBQgRgBgKADQgKADACAdQADA4A3AfIAEACQguBCBIAfIAOAGInCHCQhAgGg/gMg");
    this.shape_2.setTransform(48.5375,49.8125);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.duckColourb, new cjs.Rectangle(0,0,101,94.6), null);



(lib.base2 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.duckEye();
    this.instance.setTransform(77.45,15.1,1,1,0,0,0,4.5,6.1);

    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAgfgbQAfgHgigmQhAhEAAheQAAgOACgOQAIhRA8g7QA7g8BSgIQAMgCAOAAQBiAABGBGQAmAmARAuQAAAAAAgBQAZArAtgTQAugSAOAKQAOALgHAOIgXAyQgCAEAAAEIAAABQAAAAAAABQAAAHAFAFIAAABQADACAEADQApAYglARIieBGQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQj6AajngqQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hE");
    this.shape.setTransform(50.7631,47.2817);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AhtCLQhfgNAChTQAHhtA5hFQAIACAIgBQB6gOBsADQATACAMgCQA5BFAIBtQABBghkALQgxAGg1AAQg1AAg7gHg");
    this.shape_1.setTransform(33.6499,59.0299);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#B11B04").s().p("Ag+AZQgXgRgHgOIgIgRQADgFAGgEQAaA1A5gHQAngFA5glIAIgEQAAAHAFAFIAAABQhIArgrAIIgRABQgSAAgNgIg");
    this.shape_2.setTransform(88.575,28.6735);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FF691E").s().p("Ag7BxQg3gfgDg4QgCgbARgMQgFAEgEAFIAJAQQAGAPAYAQQARAMAfgEQArgJBIgrIAHAFQAoAYglAQIicBHIgEgCgAhmgNQAJgHAOgBQAXgFAPgdQAQgfgBgbIAAgBQAZAqAtgSQAtgTAOALQAOALgHAOIgXAyQgCAEAAAEIgBABIABAAIAAABIgIAEQg4AkgoAGIgNAAQgvAAgXgug");
    this.shape_3.setTransform(89.648,26.8);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

    // Layer_2
    this.duckColour = new lib.duckColourb();
    this.duckColour.name = "duckColour";
    this.duckColour.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.duckColour).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.base2, new cjs.Rectangle(-1,-1,103.5,96.6), null);


(lib.base3 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);



    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AHnCGQARApAAAwQAAAQgCAPIjPDPIgRADQhCAGhAACgAhrHOIHKnLIAKAFQAmAQAhAfImgGhQg+gDg9gHgAk7GRICIiJQA8ABA3gHQARgCAOgEIi/C+QgxgMgqgdgAm3EEIBGhHQALAyA8AOIhWBWQgegigZgtgAAiCXQgDgvgMgnID9j8IAAAKQADAxAqAdIkfEfQAFgRgBgUgAnzBSIgEgaICEiCIARAYQAVAbAaAGQgPARgMAVIiRCRQgMgogIgsgAgdgbQAfgGgignQgTgUgNgWIFElGQAaAPAXAXIATAWIg9ACIgoAzIAAA4Ij7D7IgFgHgAhgjqQAAgOACgNQAIhRA8g8QA7g8BSgIQAMgBAOAAIAQAAIj8D+IgBgRg");
    this.shape.setTransform(50.5875,47.2375);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_1
    this.instance = new lib.duckEye();
    this.instance.setTransform(77.45,15.1,1,1,0,0,0,4.5,6.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAgfgbQAfgHgigmQhAhEAAheQAAgOACgOQAIhRA8g7QA7g8BSgIQAMgCAOAAQBiAABGBGQAmAmARAuQAAAAAAgBQAZArAtgTQAugSAOAKQAOALgHAOIgXAyQgCAEAAAEIAAABQAAAAAAABQAAAHAFAFIAAABQADACAEADQApAYglARIieBGQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQj6AajngqQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hE");
    this.shape_1.setTransform(50.7631,47.2817);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AhtCLQhfgNAChTQAHhtA5hFQAIACAIgBQB6gOBsADQATACAMgCQA5BFAIBtQABBghkALQgxAGg1AAQg1AAg7gHg");
    this.shape_2.setTransform(33.6499,59.0299);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#B11B04").s().p("Ag+AZQgXgRgHgOIgIgRQADgFAGgEQAaA1A5gHQAngFA5glIAIgEQAAAHAFAFIAAABQhIArgrAIIgRABQgSAAgNgIg");
    this.shape_3.setTransform(88.575,28.6735);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FF691E").s().p("Ag7BxQg3gfgDg4QgCgbARgMQgFAEgEAFIAJAQQAGAPAYAQQARAMAfgEQArgJBIgrIAHAFQAoAYglAQIicBHIgEgCgAhmgNQAJgHAOgBQAXgFAPgdQAQgfgBgbIAAgBQAZAqAtgSQAtgTAOALQAOALgHAOIgXAyQgCAEAAAEIgBABIABAAIAAABIgIAEQg4AkgoAGIgNAAQgvAAgXgug");
    this.shape_4.setTransform(89.648,26.8);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

    // Layer_2
    this.duckColour = new lib.duckColoura();
    this.duckColour.name = "duckColour";
    this.duckColour.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.duckColour).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.base3, new cjs.Rectangle(-1,-1,103.5,96.6), null);

//bee
(lib.style4 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // body
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiEkIQATizBNhMQBghhCJAAQBXAABnA4QlDgDjEErgAAxD8QAAAIAAAIQABAAADAAQFXAADyg9QAPgDAOgEQgSgfgYgcQjuA6lOAAQgFAAgEAAQADAaACAbgALAFhQAAAFAAAFQgeAKgkAJQjyA9lXAAQlXAAjyg9Qg+gQgugSQgQgmgMgqQA2AXBSAVQAKADALACQAXBGBlANQCgAUCLgTQA1gFAggXQAbAAAdAAQFXAADyg9QAhgJAcgIQAFAcAAAegAKfHxQgMAggTAbQgBAAgBAAQjyA9lXAAQk0AAjjgxQgrgngngzQAQAEAQAEQDyA+FXAAQFXAADyg+QAXgFAVgGQgFALgGALgAoUDPQhogbg8geQgHgnAAgjQA8AiBvAcQARAEATAFQgKAegGAkQgKgDgKgDg");
    this.shape.setTransform(50.1,42.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AnhI4QgsgngngzIAgAIQDzA+FVAAQFXAADzg+IAsgLIgLAWQgMAggUAaIgBAAQjzA+lXAAQkzAAjigxgAoUF9Qg+gPgugSQgPgmgNgrQA2AYBSAUIAVAGQAYBGBkANQCgATCLgSQA1gGAhgWIA2AAQFXAADzg+QAhgHAcgJQAEAcAAAeIAAAKQgeAJgjAJQjzA+lXAAQlVAAjzg+gAAxENIAAgRQgCgbgDgaIAIAAQFOgBDvg5QAYAcARAfIgcAHQjzA+lXAAIgDAAgAoUDPQhogbg7geQgIgnAAgjQA8AiBvAcIAkAIQgJAfgHAjIgUgFgAgkoHQBghhCJAAQBYAABmA4QlCgDjFErQATiyBNhNg");
    this.shape_1.setTransform(50.1,42.5);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    // antennas
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAiAAQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANg");
    this.shape_2.setTransform(56.7116,-40.6657,1.3939,1.3939);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
    this.shape_3.setTransform(56.7116,-40.6657,1.3939,1.3939);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AAGBjQgTgSgHggQgLgvAWgxQANgfAVgU");
    this.shape_4.setTransform(52.6616,-27.5981,1.3939,1.3939);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AAeAQQgHANgOADQgMAFgNgHQgMgHgEgOQgDgMAGgNQAHgMANgEQANgDAMAGQANAHADANQAFANgHAMg");
    this.shape_5.setTransform(76.9601,-37.8406,1.3939,1.3939);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#000000").s().p("AgQAeQgMgHgEgOQgDgMAGgNQAHgMANgEQANgDAMAGQANAHADANQAFANgHAMQgHANgOADQgFACgEAAQgIAAgIgEg");
    this.shape_6.setTransform(76.9601,-37.8406,1.3939,1.3939);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("Ag1BSQgJgZAKggQANgtAqghQAbgUAdgI");
    this.shape_7.setTransform(68.6203,-27.3193,1.3939,1.3939);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

    // wings
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ABOAAQAAAUgXAOQgXAOggAAQgfAAgXgOQgXgOAAgUQAAgTAXgOQAXgOAfAAQAgAAAXAOQAXAOAAATg");
    this.shape_8.setTransform(11.172,35.6724,1.3943,1.3943,-138.6301);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#B1FFCC").s().p("Ag2AiQgXgOAAgUQAAgTAXgOQAXgNAfAAQAgAAAXANQAWAOAAATQAAAUgWAOQgXAOgggBQgfABgXgOg");
    this.shape_9.setTransform(11.172,35.6724,1.3943,1.3943,-138.6301);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("ABOAAQAAAUgXAOQgXAOggAAQgfAAgXgOQgXgOAAgUQAAgTAXgOQAXgOAfAAQAgAAAXAOQAXAOAAATg");
    this.shape_10.setTransform(27.6019,34.0315,1.3943,1.3943,-53.1702);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#B1FFCC").s().p("Ag2AiQgXgOAAgUQAAgTAXgOQAXgNAfAAQAgAAAXANQAWAOAAATQAAAUgWAOQgXAOgggBQgfABgXgOg");
    this.shape_11.setTransform(27.6019,34.0315,1.3943,1.3943,-53.1702);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style4, new cjs.Rectangle(-21.2,-46.4,142.7,151.6), null);

// bear
(lib.style5 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // earfront
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAqBMQgngrADgtQADgvAigfQAIgIAJgFQAFAIACANQAGAlgVAzQgQApAGAdQABAHADAGQAPAggaAAQgaAAgngrQgpgsADguQADgvAigfQAggeAeABQATAAAKAQ");
    this.shape.setTransform(56.7945,-11.3351,1.3818,1.3818);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#663300").s().p("AgeBOQgpgsADguQADgvAigfQAggeAeABQATAAAKAQQgJAFgIAIQgiAfgDAvIAAAGQAAAqAkAoQABAHADAGQAPAggaAAQgaAAgngrgAAqBMIAAAAgAAGgGIAAgGQADgvAigfQAIgIAJgFQAFAIACANQAGAlgVAzQgQApAGAdQgkgoAAgqgAA8hnIAAAAg");
    this.shape_1.setTransform(56.7945,-11.3351,1.3818,1.3818);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    // body
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AAsg8IAAABQASAZAAAiQAAACAAABQAAAhgRAXIgBABQgSAYgaAAQgYAAgSgYQgTgZAAgjQAAgBAAgCQABghASgXQASgYAYAAQAaAAASAXg");
    this.shape_2.setTransform(87.725,4.775);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AG+geQgVglAmg4QgDgBgCgCQhMgqgFhNQgCgoAYgRQAMgJATgCQAggGAUgoQAXgsgBgkQgYhBg0g0QhghgiIAAQiJAAhfBgQhgBgAACIQAACCBYBeQALALAGAJQDRDEEIiSQAPAYAnAQQA4AXAvAvQBeBeAACGQAABOggBBQg9CbjbAiQlZAjk/g6QjegpiCkJQglhZgUhuQgQhUANg/QAOg/AYgYQAagbAlAAQAmAAAaAbQABABAlAyQAcAmAkAJQALACALgBQCqgTCVAEQAbADAQgDQBOBeAKCYQADCEiKAPQiKATiegTQiFgTADhzQAKiXBPheAgogmQAkgHgXgj");
    this.shape_3.setTransform(50.4035,49.2336);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#663300").s().p("AkXJpQjegpiCkJQglhZgUhuQgQhUANg/QAOg/AYgYQAagbAlAAQAmAAAaAbIAmAzQAcAmAkAJQhPBegKCXQgDBzCFATQCeATCKgTQCKgPgDiEQgKiYhOheQAkgHgXgjQgGgJgLgLQhYheAAiCQAAiIBghgQBfhgCJAAQCIAABgBgQA0A0AYBBQABAkgXAsQgUAoggAGQgTACgMAJQgYARACAoQAFBNBMAqIAFADQgmA4AVAlQhwA+hnAAIAAAAIgBAAQiIAAh1htIgDgCIgBgBIABABIADACQB1BtCIAAIABAAIAAAAQBnAABwg+QAPAYAnAQQA4AXAvAvQBeBeAACGQAABOggBBQg9CbjbAiQiCANh+AAQjQAAjIgkgAFKn4QgSAYgBAhIAAADQAAAkATAZQASAYAZAAQAaAAASgYIABgBQARgYAAggIAAgEQAAgjgSgZIAAAAQgSgYgaAAQgZAAgSAYg");
    this.shape_4.setTransform(50.4035,49.2336);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

    // earback
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AAqBMQgngrADgtQADgvAigfQAIgIAJgFQAFAIACANQAGAlgVAzQgQApAGAdQABAHADAGQAPAggaAAQgaAAgngrQgpgsADguQADgvAigfQAggeAeABQATAAAKAQ");
    this.shape_5.setTransform(70.6123,-11.3351,1.3818,1.3818);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#663300").s().p("AgeBOQgpgsADguQADgvAigfQAggeAeABQATAAAKAQQgJAFgIAIQgiAfgDAvIAAAGQAAAqAkAoQABAHADAGQAPAggaAAQgaAAgngrgAAqBMIAAAAgAAGgGIAAgGQADgvAigfQAIgIAJgFQAFAIACANQAGAlgVAzQgQApAGAdQgkgoAAgqgAA8hnIAAAAg");
    this.shape_6.setTransform(70.6123,-11.3351,1.3818,1.3818);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style5, new cjs.Rectangle(-20.3,-29,141.5,144.6), null);

//batman
(lib.style6 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // logo
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AAeAwQgKgEgLAAQgKgBgHAFIgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABIAAgEQgCgGgJgEIgDgBQgHgBgHACQgIADgFAFIAAgBQADgFgCgGQgCgHgGgDQgFgDgHACQgGACgEAFIgBAEQgDgaAegaQAPgPAUgLQAIAMAOAGQAPAHALgBQgDgGAAgKQgCgMABgGIAAgGQAGAIADACQAEAEAEgBQAEgCACgDQAcAoAIAvQgIgBgJADQgOAEgIALIgDAHQgCgHgJgFg");
    this.shape.setTransform(102.2094,67.2283,1.3876,1.3876);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#E0BD14").s().p("AgdBPQgvgLgKghQgKghAigiQAfgiA0gRIAAABQAQAQAMARQAcAoAJAvQACAPABAQIgNAEQgkALggAAQgTAAgSgFg");
    this.shape_1.setTransform(101.861,66.9514,1.3876,1.3876);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    // ear
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AgOCLQh9AIB/kdQAfCTAuA9QAtA8h8AJg");
    this.shape_2.setTransform(57.5857,-27.0141);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AgMiKQAfCTAuA9QAtA8h8AJIgGAAQhzAAB7kVg");
    this.shape_3.setTransform(57.5857,-27.0141);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

    // black_costume
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AmqgYQgkgJgcgmQglgygBgCQgbgaglAAQgmAAgaAaQgYAZgOA/QgNA/AQBVQAUBuAlBaQCDEKDfApQFBA7FagkQDcgiA9icQAhhBAAhPQAAiGhfheQgvgvg5gYQhkgpBAhcQgDgCgCgBQhNgrgFhNQgCgpAYgQQAMgJAUgCQAggGAUgoQAXgtgCgkQgXhBg1g1QhghgiJAAQiJAAhfBgQhhBhAACJQAACCBYBeQAxA2gtAJAGimFQgpACgwgZQgugXgYgkQgRgWACgUQAOgLAdgBQAqAAAvAXQAvAYAYAiQAQAZAAATQgQAMgdgBgAmqgYQALACALgBQCrgTCWAEQAbADAQgDQBPBfAKCYQADCFiLAPQiLATifgTQiFgTADhzQAKiYBPhfg");
    this.shape_4.setTransform(44.4785,47.3953);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AkYJsQjfgpiDkKQglhagUhuQgQhVANg/QAOg/AYgZQAagaAmAAQAlAAAbAaIAmA0QAcAmAkAJQhPBfgKCYQgDBzCFATQCfATCLgTQCLgPgDiFQgKiYhPhfQAtgJgxg2QhYheAAiCQAAiJBhhhQBfhgCJAAQCJAABgBgQA1A1AXBBQACAkgXAtQgUAoggAGQgUACgMAJQgYAQACApQAFBNBNArIAFADQhABcBkApQA5AYAvAvQBfBeAACGQAABPghBBQg9CcjcAiQiDANh/AAQjRAAjIgkgAD0oBQgCAUARAWQAYAkAuAXQAwAZApgCQAdABAQgMQAAgTgQgZQgYgigvgYQgvgXgqAAQgdABgOALg");
    this.shape_5.setTransform(44.4785,47.3953);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style6, new cjs.Rectangle(-26.6,-41.9,142.2,156), null);

//bandana
(lib.style7 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABSjtQgCgjAPgoQA7gPAxAHQBMALA2A8QhPgOhFAGQAAgeASghAgKkLQATgMAVgMQAigOAfgHAC5kBQg2AEgxAQQg4ARgxAgQg8Ang0A9QglArggA1AFNj5QAXAaAUAjQhLADhFAPQg1AMgzATQgwARgsAYQgygsgJguQgIgnAVgoQhHArgvAyQhMBSgMBjQAAAEAAAEAhOgYQgsgbgNglQgMgmATgwAihAyQgUgQgRgUQgDgDgCgDIgBAAQgCgDgCgCQgBgCgBgBQgBACgBADQgCAFgCAGQgMApAbAgQADADACADQAbAaA2AUQBPAXglBoIBYgpQAViAhZgMQg6gBgugiQgDgBgBgBgAjaAOQgXADgPALQgyAhAPBsQASBNhmAYIBKA1QBygxgghRQgZgzAHg5QAEgiAPglgAAkhiQg7Agg3AqQgrAhgoApADoiqQgwgoABgvACAiLQgsgrgCg3");
    this.shape.setTransform(27.3,23.461);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#CC3300").s().p("AlhENQBlgYgRhNQgPhsAyghQAPgLAWgDQgPAlgEAiQgGA5AZAzQAfBRhyAxgAheCMQg2gUgagaIgFgGQgcggANgpIgBgBIABgIQALhjBMhSQgTAwAMAmQglArgfA1IgFgFIgBgCIgCAEIgEALIAEgLIACgEIABACIAFAFIABAAIAEAGQASAUATAQIAEACQAuAiA6ABQBaAMgWCAIhYApQAlhohPgXgAhyhZQA0g9A9gnQAHAuAzAsQg7Agg2AqQgtgbgNglgABnjuQg4ARgwAgQgIgnATgoIAqgYQAhgOAfgHQgOAoABAjQAxgQA2gEQAAgeATghQBMALA1A8QhPgOhFAGQAAAvAvAoQg1AMgyATQgtgrgCg3g");
    this.shape_1.setTransform(25.15,23.575);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AkmDNIAFAGIgDADIgCgJgAkXB7IgEgGIgBAAQAfg2AlgrQgMglATgwQAvgyBHgrQgUAoAIAnQg9Ang0A8QANAlAtAbQgsAigoApQgTgQgSgUgAhnhPQAxggA3gRQACA3AtArQgwARgsAXQgzgrgIgugABoiUQBFgGBPAOQAYAaATAjQhLADhFAPQgvgoAAgvgAhnhPIAAAAgAAOjLQA7gPAyAHQgTAhAAAeQg2AEgxAQQgBgjAOgog");
    this.shape_2.setTransform(35.35,12.586);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style7, new cjs.Rectangle(-11.2,-9.8,77.10000000000001,66.6), null);

//baceballhat
(lib.style8 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACyikQhRgghjAEQh+AMhVBnQhVBmAPCoQFHgtDyj1QgRgPgUgNIhLA2QgJgEgGgJQgNgRAIgZQAGgVASgRQAmAQAhAX");
    this.shape.setTransform(20.1781,22.4529);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#0033CC").s().p("AjVhNQBVhnB+gMQBjgEBRAgQgSARgGAVQgIAZANARQAGAJAJAEIBLg2QAUANARAPQjyD1lHAtQgPioBVhmg");
    this.shape_1.setTransform(20.1781,22.4529);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Ai4DKQALAPA+gvQA9gvBMhUQBNhTAuhHQAvhGgLgPQgMgSg9AxQg+AvhMBUQhNBTguBGQgtBHAKAQg");
    this.shape_2.setTransform(11.3103,34.6027,1.2191,1.2191,13.1665);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#0033CC").s().p("Ai4DKQgKgQAthHQAuhGBNhTQBMhUA+gvQA9gxAMASQALAPgvBGQguBHhNBTQhMBUg9AvQguAkgSAAQgGAAgDgEg");
    this.shape_3.setTransform(11.3103,34.6027,1.2191,1.2191,13.1665);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style8, new cjs.Rectangle(-17.3,2.1,67.1,53.1), null);

//astro
(lib.style9 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFhkSQBwB4AACjQAAC1iEBXQgOAJgOAIQgdAPgeANQhoAniFgEQi/gGiNhQQgQgJgOgKQhvhTAAigQAAizCIiAQCJiAC/AAQDAAACJCAQAMAMAMAMgAD2FCIA7BMQkdBAkPhNQgqhUhiAKQA/gNgZguAExEmQlwgrhJlgQDQATEZjA");
    this.shape.setTransform(34.3,31.9951);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FBFBFB").s().p("ABBGIQi/gGiNhRQgQgJgOgKQhvhSAAigQAAi0CIiAQCJh/C/AAQDAAACJB/IAYAZQkZDAjQgUQBJFgFwArQgdAQgeAMQhfAkh2AAIgYAAgAAvkFIgvAWIAyANIAHA0IAcgtIA0AKIgigoIAaguIgyAUIgjgng");
    this.shape_1.setTransform(28.675,28.5184);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AjPFaQgrhUhhALQA/gOgZguQANAKAQAJQCNBQC/AGQCFAEBognIA7BMQiCAdh/AAQiWAAiUgqgAAlksIgxgNIAugWIgDg0IAkAnIAxgUIgaAtIAiApIg0gKIgcAtg");
    this.shape_2.setTransform(29.95,35.8701);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style9, new cjs.Rectangle(-13.2,-11.7,95,87.4), null);


// crown
(lib.style14 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAjAAQAAAOgKAJQgKAKgPAAQgNAAgLgKQgKgJAAgOQAAgMAKgKQALgJANAAQAPAAAKAJQAKAKAAAMg");
    this.shape.setTransform(0.7384,2.6421,1.2963,1.2963,-18.6841);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#66CC99").s().p("AgYAXQgKgKAAgNQAAgNAKgJQAKgKAOAAQAPAAAKAKQAKAJAAANQAAANgKAKQgKAJgPAAQgOAAgKgJg");
    this.shape_1.setTransform(0.7384,2.6421,1.2963,1.2963,-18.6841);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AhFgTICLAAIAAAnIiLAAg");
    this.shape_2.setTransform(3.4243,7.5495,1.2963,1.2963,-18.6841);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#E0BD14").s().p("AhFAUIAAgnICLAAIAAAng");
    this.shape_3.setTransform(3.4243,7.5495,1.2963,1.2963,-18.6841);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AiXgOQB8gzC0AzIAAA2QiPgzihAzg");
    this.shape_4.setTransform(12.9777,39.8463,1.2963,1.2963,-18.6841);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#E0BD14").s().p("AiYAoIAAg2QB9gzCzAzIAAA2QiOgziiAzg");
    this.shape_5.setTransform(12.9777,39.8463,1.2963,1.2963,-18.6841);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AAQBMQANggAAgsQAAgsgNgfQgOgggRAAQgHAAgFAEQAAABACADQAHASAEBhQADA/gDAdQARgCANgeg");
    this.shape_6.setTransform(15.2697,21.3331,1.2963,1.2963,-18.6841);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#E0BD14").s().p("AgOAQQgEhhgHgSIgDgEQAGgEAHAAQARAAANAgQANAfABAsQgBAtgNAfQgMAegRABQADgcgDg/g");
    this.shape_7.setTransform(15.2697,21.3331,1.2963,1.2963,-18.6841);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AgOBMQgOggAAgsQAAgsAOgfQANggARAAQAHAAAGAEQgBABgCADQgHASgEBhQgDA/ADAdQgRgCgMgeg");
    this.shape_8.setTransform(1.2093,26.088,1.2963,1.2963,-18.6841);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#E0BD14").s().p("AgOBMQgNgfgBgtQABgsANgfQANggARAAQAHAAAGAEIgDAEQgHASgEBhQgDA/ADAcQgRgBgMgeg");
    this.shape_9.setTransform(1.2093,26.088,1.2963,1.2963,-18.6841);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AgtB4QAxAAAkgjQAkgkAAgxQAAgwgkgkQgkgjgxAAQgQAAgOADQAfAIAZAYQAjAkAAAwQAAAxgjAkQgZAYgfAHQAOAEAQAAg");
    this.shape_10.setTransform(26.2908,17.6061,1.2963,1.2963,-18.6841);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#E0BD14").s().p("AhLB0QAfgHAZgYQAjgkAAgxQAAgxgjgjQgZgYgfgIQAOgDAQAAQAxAAAkAjQAkAjAAAxQAAAxgkAkQgkAjgxAAQgQAAgOgEg");
    this.shape_11.setTransform(26.2908,17.6061,1.2963,1.2963,-18.6841);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AAuB4QgxAAgkgjQgkgkAAgxQAAgwAkgkQAkgjAxAAQAQAAAOADQgfAIgZAYQgjAkAAAwQAAAxAjAkQAZAYAfAHQgOAEgQAAg");
    this.shape_12.setTransform(-10.4258,30.0226,1.2963,1.2963,-18.6841);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#E0BD14").s().p("AgnBVQgkgkAAgxQAAgxAkgjQAkgjAxAAQAQAAAOADQgfAIgZAYQgjAjAAAxQAAAxAjAkQAZAYAfAHQgOAEgQAAQgxAAgkgjg");
    this.shape_13.setTransform(-10.4258,30.0226,1.2963,1.2963,-18.6841);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("ADeAAQAAAthBAgQhBAhhcAAQhbAAhBghQhBggAAgtQAAgtBBggQBBggBbAAQBcAABBAgQBBAgAAAtg");
    this.shape_14.setTransform(7.472,23.9701,1.2963,1.2963,-18.6841);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#FF0000").s().p("AicBOQhBggAAguQAAgtBBggQBBggBbAAQBcAABAAgQBCAgAAAtQAAAuhCAgQhAAghcAAQhbAAhBggg");
    this.shape_15.setTransform(7.472,23.9701,1.2963,1.2963,-18.6841);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style14, new cjs.Rectangle(-21.6,-2.6,59.1,54.7), null);


//doctor
(lib.style17 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // headband
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAbAAQAAAPgIAMQgIALgLAAQgKAAgIgLQgIgMAAgPQAAgPAIgLQAIgLAKAAQALAAAIALQAIALAAAPg");
    this.shape.setTransform(86.9378,-16.7328,1.4021,1.4021,-12.6983);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#999999").s().p("AgSAaQgIgKAAgQQAAgOAIgMQAIgKAKgBQALABAIAKQAIAMAAAOQAAAQgIAKQgIAMgLAAQgKAAgIgMg");
    this.shape_1.setTransform(86.9378,-16.7328,1.4021,1.4021,-12.6983);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AirAsQCGhqCygkQAcALAOAQQjFAvioB7QACgdAJgag");
    this.shape_2.setTransform(62.7777,-2.2912,1.4021,1.4021);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // device
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AAnAAQAAAPgLALQgMAMgQAAQgPAAgMgMQgLgLAAgPQAAgPALgLQAMgLAPAAQAQAAAMALQALALAAAPg");
    this.shape_3.setTransform(101.8415,67.6597,1.6825,1.6825);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#999999").s().p("AgbAaQgLgLAAgPQAAgOALgMQAMgKAPgBQAQABALAKQAMAMAAAOQAAAPgMALQgLALgQAAQgPAAgMgLg");
    this.shape_4.setTransform(101.8415,67.6597,1.6825,1.6825);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AishXQABABAaAaQAuArBNAkQBNAkB2Ah");
    this.shape_5.setTransform(73.4685,55.8246,1.4021,1.4021);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

    // eyeglasses
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AB0hJIAngLAh/BVQgWgHgEgPQgFgWArgeQApgZBAgS");
    this.shape_6.setTransform(82.1941,5.35);

    this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

    // pocket
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AA9gOIAAAxQAAAegeAAIg9AAQgeAAAAgeIAAgwIAAgsAg8g/IB5gBIAAAyAg8gNIB5gB");
    this.shape_7.setTransform(79.271,81.4814,1.4021,1.4021);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("AgeAnQgeAAAAgdIAAgvIB5gCIAAAxQAAAdgeAAg");
    this.shape_8.setTransform(79.271,84.9866,1.4021,1.4021);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

    // robe
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AhVljIHDAlQAQATAgAOQA6AYAvAvQAIAIAIAIQBQBbAAB7QAABPghBCQg+CdjeAjQldAklFg7QhWgQhIgxIgEjXQhNghAChYQAKiZBQhhQALACALgBQCsgTCYAEQAcADAQgDQBQBhAKCZQADCGiNAPQiMATiggTQgggFgZgJAiFlPQAdgGgKgZIAdALIJsCd");
    this.shape_9.setTransform(59.6975,77.4668);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#66CCCC").s().p("Ak2hOIHEAmQAQASAgAOQA6AXAvAwIAPAQg");
    this.shape_10.setTransform(82.1,49.725);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#FFFFFF").s().p("AmeFKQhWgQhIgxIgEjXQAZAJAgAFQCgATCMgTQCNgPgDiGQgKiZhQhhQAdgGgKgZIAdALIJsCdQBQBbAAB7QAABPghBCQg+CdjeAjQiEAOiAAAQjTAAjLglg");
    this.shape_11.setTransform(63.475,77.4668);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style17, new cjs.Rectangle(-2.7,-22.9,124.9,138.1), null);

//gladiator
(lib.style19 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiVDkQgOAHgMAJQgnAggLA9QhNhsAAiKQAAgZADgZQAIhJAfhAQAfg+A1g1QBshsCSgOQAFgBAGAAQARgCATAAQA/AAA5AQQgRAJgOAJQg5AlAAAkIAABAAiVDkQgmhEAAhTQAAgSACgSQALhoBNhNQBOhOBqgLQAQgCASAAQASAAASACAhJDQQgtg8AAhPQAAgOABgOQAJhQA7g7QA7g8BSgIQANgCANAAQAUAAATADQAcAEAYAJQAWgLAVgNQAdgRARgRQAOArgaA2QgFACgGADQADACACADQgIABgIABQgEABgEAAQgCABgCABQgyAVg+APQgyAcgnAuIAvBLIAiAIIgQBEIhGgQIAHghIgjg4QgTAhgRAnQgXA4gSApQgJgMgFgHIhMAU");
    this.shape.setTransform(30.2781,33.6875);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF0000").s().p("AkRBbQAAgZADgZQAIhJAfhAQAfg+A0g1QBshsCTgOIAKgBQASgCASAAQBAAAA5AQQgRAJgPAJQg5AlABAkQgSgCgTAAQgRAAgRACQhqALhNBOQhOBNgLBoQgCASAAASQAABTAnBEQgOAHgMAJQgnAggLA9QhNhsAAiKg");
    this.shape_1.setTransform(27.4125,33.6875);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#CCCCCC").s().p("AilDIQgtg9AAhPQAAgOABgNQAJhQA7g8QA8g8BRgIQANgBANAAQAVAAASADQAcAEAYAJQAXgMAUgMQAdgSARgQQAOArgaA1IgLAGIAFAFIgQACIgIABIgEABQgxAWg/AOQgxAcgnAuIAuBMIAiAHIgQBFIhFgQIAHgiIgjg3QgUAggRAoIgoBhIgPgTg");
    this.shape_2.setTransform(39.4531,34.5125);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AisBOQAAgSACgRQALhpBOhNQBOhOBpgKQARgCARAAQATAAASACIAABAQgTgDgUAAQgOAAgMABQhSAIg7A9Qg8A7gIBQQgCAOAAAOQAABPAtA8IhLAUQgnhEAAhUg");
    this.shape_3.setTransform(28.725,33.5);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style19, new cjs.Rectangle(-1,-1,62.6,69.4), null);
//grad
(lib.style20 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADNguIADAdQg3BcieACIDSh7IB2hFIkShFIlzCVIA8AkIAhAUIAHgnAjvBOIgQgNIgfBFIArAzIAlhPIghgcIAKg5ICbBgIBFgoAj/BBIAGA/IAKgyAkGABIAHBA");
    this.shape.setTransform(32.25,18.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#CC0000").s().p("Aj2BBIAfhFIAGA/IAKgyIAhAbIglBQgAD0hzIADAdQg3BbifADg");
    this.shape_1.setTransform(28.275,25.425);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AjlA3IAHgoIgHAoIgggUIg9gkIFziVIESBFIh2BGIjTB6IhEAogAj/BiIgGg/IAgAUIgKA5gAjlA3g");
    this.shape_2.setTransform(32.25,15.1);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style20, new cjs.Rectangle(-1,-1,66.5,39), null);
//redalien
(lib.style32 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // hair
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ai0E1QABAEhVhGQhHg6gKgHQAMACBTgGQBhgHAAADQg5k3ACAHQABADBLBaQBMBaABADQABAEAhi4QAhi4ABAEIBTEkQACADBEhaQBFhaAAADQACADgJBpQgHBnAAADQACAEA9gVQA+gUAAAEQACADhKBLQhKBNABADQAAACgbAMQgggHgjAAQgTAAgRACQhxALhUBUQgXAXgSAaQgNAGAAABg");
    this.shape.setTransform(59.5265,-33.8699);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#CC33CC").s().p("AkIDzQhHg6gKgHQAMACBTgGQBhgHAAADIg3kwQABADBLBaQBMBaABADQABAEAhi4QAhi4ABAEIBTEkQACADBEhaQBFhaAAADQACADgJBpIgHBqQACAEA9gVQA+gUAAAEQACADhKBLQhKBNABADQAAACgbAMQgggHgjAAQgTAAgRACQhxALhUBUQgXAXgSAaQgNAGAAABIAAAAQgDAAhRhCg");
    this.shape_1.setTransform(59.5265,-33.8699);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    // dots
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#CC33CC").s().p("AgwBDQgVgXABggQgBgfAVgWQAUgXAcAAQAcAAAVAXQAUAWAAAfQAAAggUAXQgVAVgcAAQgcAAgUgVgACOgWQgKgLAAgQQAAgRAKgKQAKgMAPAAQANAAALAMQALAKAAARQAAAQgLALQgLALgNAAQgPAAgKgLgAi/gWQgJgLAAgQQAAgRAJgKQAKgMAPAAQAOAAAKAMQALAKAAARQAAAQgLALQgKALgOAAQgPAAgKgLg");
    this.shape_2.setTransform(88,83.4);

    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

    // eye
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgBAMQgFAAgDgEQgDgFAAgEQABgFAEgDQAFgEAEABQAFABADAFQADAEAAAEQgBAFgFADQgDADgDAAIgCgBg");
    this.shape_3.setTransform(97.2605,-14.9144,1.3891,1.389);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("AAAAoQgOgFgLgPQgKgMgBgNIgBgGQABgQALgJQALgIAOAGQARAFALAPQALAPgBAPQABARgLAIQgHAFgJAAQgFAAgHgCg");
    this.shape_4.setTransform(96.7107,-13.1161,1.3891,1.389);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(1.5,1,1).p("ABBgmQABABAAABQARAYgEAhQgEAigSAOQgSANgegVQgcgVgLgKQgKgKgIgIQgJgIgQgXQgQgYAdgSQAdgRAmAIQAnAHATAZg");
    this.shape_5.setTransform(92.4049,-10.0921,1.3891,1.389);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("AAJA9QgcgVgLgKIgSgSQgJgIgQgXQgQgYAdgSQAdgRAmAIQAnAHATAZIABACQARAYgEAhQgEAigSAOQgHAFgJAAQgOAAgSgNg");
    this.shape_6.setTransform(92.4049,-10.0921,1.3891,1.389);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

    // body
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AgogmQAsgJgwg2QhYheAAiDQAAgTACgTQAMhxBShSQBThUBygLQARgCATAAQCJAABgBhQA1A1AYBAQABAlgXAsQgUApggAFQgTACgNAJQgYARACAoQAFBOBNAqQACACADABQhABdBkApQA5AYAwAvQBeBeAACGQAABPghBBQg9CcjcAiQlaAklCg7QjegpiDkKQgmhagUhuQgPhVANg/QANhAAZgYQAagaAlAAQAmAAAaAaQACABAlAzQAcAmAkAJQALACALgBQCqgTCXAEQAbACAQgCQBOBfALCYQADCFiMAPQiKATifgTQiFgTADhzQAKiZBPhe");
    this.shape_7.setTransform(50.5358,47.4203);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FF0000").s().p("AkZJsQjegpiDkKQgmhagUhuQgPhVANg/QANhAAZgYQAagaAlAAQAmAAAaAaIAnA0QAcAmAkAJQhPBegKCZQgDBzCFATQCfATCKgTQCMgPgDiFQgLiYhOhfQAsgJgwg2QhYheAAiDQAAgTACgTQAMhxBShSQBThUBygLQARgCATAAQCJAABgBhQA1A1AYBAQABAlgXAsQgUApggAFQgTACgNAJQgYARACAoQAFBOBNAqIAFADQhABdBkApQA5AYAwAvQBeBeAACGQAABPghBBQg9CcjcAiQiDAOh/AAQjRAAjJglg");
    this.shape_8.setTransform(50.5358,47.4203);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style32, new cjs.Rectangle(-20.6,-65.8,142.3,179.89999999999998), null);
//snowman
(lib.style34 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // scarf
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAhgWIAHAcQADANgHAKQgGALgMACIgPAEQgLACgLgHQgKgGgDgMIgHgcQgCgMAGgLQAHgLAMgCIAPgEQALgCAKAGQALAHACAMg");
    this.shape.setTransform(80.9722,52.5926,1.3976,1.3975);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF6666").s().p("AgTApQgKgGgDgMIgHgcQgCgMAGgLQAHgLAMgCIAPgEQALgCAKAGQALAHACAMIAHAcQADANgHAKQgGALgMACIgPAEIgGAAQgIAAgIgFg");
    this.shape_1.setTransform(80.9722,52.5926,1.3976,1.3975);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAah6IAeAEIAFDxIh5gCg");
    this.shape_2.setTransform(72.0096,69.4346,1.3976,1.3975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FF6666").s().p("Ag8B5IBWjzIAeAEIAFDxg");
    this.shape_3.setTransform(72.0096,69.4346,1.3976,1.3975);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Agrh7IgeAHIAfDwIBzgeg");
    this.shape_4.setTransform(91.8212,69.3647,1.3976,1.3975);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FF6666").s().p("AhIh0IAdgHIB0DZIhzAeg");
    this.shape_5.setTransform(91.8212,69.3647,1.3976,1.3975);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AizhAQBYBCBPAAQBbAABMg/QgEAiApAUQh3BKhRgDQhUgDg9gnQgBgBAAgBQgPgggWgbQAIgJAEgQg");
    this.shape_6.setTransform(73.0927,48.865,1.3976,1.3975);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FF6666").s().p("AgIBAQhUgDg9gnIgBgCQgPgggWgbQAJgJADgQQBYBCBPAAQBbAABMg/QgEAiApAUQhzBIhPAAIgGgBg");
    this.shape_7.setTransform(73.0927,48.865,1.3976,1.3975);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // hat
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhBgHIAAABIABAAgAhagJIAZACIgJgbAhBgGIgOARAAvg4IAAABIAAgBIgHgVAAvg4IAAAAABFgxIgWgGAAvg4IAMgPAgTg7IAIAWIANAmIAMAiIgMAHIgWgMIgQgKIAAgXIAAgUIAZgOIANgIIAZAOIANAIIAAAdIAbADIANgTAgHhSIgMAXIAAAAIgIgWAgTg7IgXgLAguA/IAJgMIgXgFAglAzIABAAIAHAYAglAzIABAAAglAzIAAAAAAXA8IAHAXAAFBPIASgTIAAAAIgJgZIAagPIAAgOIgmgFIAZggIAUgZAgkgDIAmAEIgWAdIgRAVABcANIgYgEIgBAAABNAgIgJgXAAXA8IAWAHAhAgGIAcAD");
    this.shape_8.setTransform(52.562,-32.1141,1.3976,1.3975);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("Ai2hLQBnhoC0gJQAbAFAJAkIAwDcQAFAYgYAUQhBAxiLAXQgZgCgKgWIhljKQgRghAJgFg");
    this.shape_9.setTransform(50.2772,-34.2221,1.3976,1.3975);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#6699FF").s().p("AhJClIhljKQgRghAJgEQBnhpC0gJQAbAFAJAlIAwDbQAFAYgYAUQhBAxiLAWQgZgCgKgVg");
    this.shape_10.setTransform(50.2772,-34.2221,1.3976,1.3975);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AEMhZQAGAThJAoQhKAohvAmQhuAlhTAMQhUANgGgTQgHgUBKgoQBKgoBvglQBugmBTgMQBUgNAGAUg");
    this.shape_11.setTransform(59.6055,-9.919,1.3976,1.3975);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#6699FF").s().p("AkLBbQgGgUBJgoQBKgoBvglQBugmBTgMQBUgNAGAUQAHAThKAoQhKAohvAmQhuAlhTAMQghAFgVAAQggAAgEgLg");
    this.shape_12.setTransform(59.6055,-9.919,1.3976,1.3975);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

    // nose
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("Ah+huQgHgHCSADQCTADADACQACACAaAAQAaAFAKAdQAKAcjpBgIivBEQACgCADgHQgBgBgBAAQg3gfgEg4QgCgcASgMQAJgGAOgCQAXgEAOgdQARgggBgaQAAgBAAAAQADAEADAFQABgCACABg");
    this.shape_13.setTransform(120.3448,19.1959,1.3976,1.3975);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#FF6600").s().p("AimBuIgCgBQg3gfgEg4QgCgcASgMQAJgGAOgCQAXgEAOgdQARgggBgaIAAgBIAGAJQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQgHgHCSADQCTADADACQACACAaAAQAaAFAKAdQAKAcjpBgIivBEIAFgJg");
    this.shape_14.setTransform(120.3448,19.1959,1.3976,1.3975);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

    // buttons
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#000000").s().p("AgTAUQgHgIgBgMQABgKAHgJQAJgHAKgBQAMABAHAHQAIAJAAAKQAAAMgIAIQgHAHgMAAQgKAAgJgHg");
    this.shape_15.setTransform(106.453,87.6794,1.3976,1.3975);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#000000").s().p("AgTAUQgHgJgBgLQABgLAHgHQAJgIAKAAQALAAAJAIQAHAHABALQgBALgHAJQgJAHgLABQgKgBgJgHg");
    this.shape_16.setTransform(106.1036,73.3561,1.3976,1.3975);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#000000").s().p("AgTATQgHgIgBgLQABgLAHgHQAJgJAKAAQAMAAAHAJQAIAHAAALQAAALgIAIQgHAJgMgBQgKABgJgJg");
    this.shape_17.setTransform(100.1636,59.0116,1.3976,1.3975);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

    // outlines
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AAVArQAHA1AXAvQA+CcDdAjAiclNQjICQAZDI");
    this.shape_18.setTransform(21.0611,79.925);

    this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

    // body
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f().s("#000000").ss(1.5,1,1).p("AA/AAQAAACAAABQgBAigRAYQgSAYgbAAQgZAAgSgYQgTgaAAgjQAAgBAAgCQAAghATgYQASgYAZAAQAbAAASAYQASAZAAAjg");
    this.shape_19.setTransform(87.85,1.925);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AgsgnQAsgJgwg1QhZhfAAiEQAAiKBhhhQBghhCKAAQCJAABiBhQA1A1AYBBAHQh9IDchiQA0gXg4giQgGgEgEgDIAAgBQgJgIABgLIAAgBQAAgFADgGIAghGQAKgUgUgPQgTgOhAAaQhAAZgig7QAAABAAAAAHQh9QgDgBgCgBQhMgrgFhOQgDgpAYgQQANgKATgCQAhgFAUgpQAXgtgBglAHQh9Qg/BdBkAqQA6AYAvAvQBfBfAACHQAABPghBCQg9CcjeAjQlcAklEg7QjfgqiEkLQgmhagUhwQgQhVAOg/QANhAAYgZQAbgaAmAAQAlAAAbAaQABACAlAzQAdAmAkAIQALACALAAQCsgUCYAEQAbADAQgDQBOBgALCZQADCGiMAPQiLATiggTQiHgTADh0QALiZBPhg");
    this.shape_20.setTransform(50.7569,47.2203);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#C0FFFF").s().p("AkbJwQjfgqiEkLQgmhagUhwQgQhVAOg/QANhAAYgZQAbgaAmAAQAlAAAbAaIAmA1QAdAmAkAIQhPBggLCZQgDB0CHATQCgATCLgTQCMgPgDiGQgLiZhOhgQAsgJgwg1QhZhfAAiEQAAiKBhhhQBghhCKAAQCJAABiBhQA1A1AYBBQABAlgXAtQgUApghAFQgTACgNAKQgYAQADApQAFBOBMArIAFACQg/BdBkAqQA6AYAvAvQBfBfAACHQAABPghBCQg9CcjeAjQiDAOiAAAQjTAAjKglgAFLoBQgTAYAAAhIAAAEQAAAjATAaQASAYAaAAQAaAAASgYQASgYABgiIAAgDQAAgkgTgZQgSgYgaAAQgaAAgSAYg");
    this.shape_21.setTransform(50.3608,47.2203);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style34, new cjs.Rectangle(-21.2,-61.5,174.39999999999998,175.9), null);
//spa
(lib.style35 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AC9iSQgaAUhABEQhABCgEBSQgFBShEAHQhGAHgkgtQgkgsgHhKQgIhJBOhGQBNhFCBALQCCAMgaAUg");
    this.shape.setTransform(50.9667,16.2451,1.3542,1.3561);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AiUCNQgkgsgHhKQgIhJBOhGQBNhFCBALQCCAMgaAUQgaAUhABEQhABCgEBSQgFBShEAHIgSABQg5AAgfgng");
    this.shape_1.setTransform(50.9667,16.2451,1.3542,1.3561);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AjICHQgMgIgIgsQgIgtAwhDQAvhEBYgdQBWgdBLAVQBNAVATA6QAJAZABALQgfgIgrgNQhLgUhXAdQhXAdgxA9QgZAggZAsgAjNCQQADgFACgE");
    this.shape_2.setTransform(53.228,0.2484,1.3542,1.3561);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AjcBXQgIgtAwhCQAvhEBYgdQBWgeBLAVQBNAVATA7QAJAZABALIhKgVQhLgVhXAeQhXAcgxA9QgZAhgZArQgMgHgIgtg");
    this.shape_3.setTransform(53.228,-0.3618,1.3542,1.3561);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // mask_idn
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("AAAAHQgDgBgBgGIgCgGIABAAQALADABADQAAADgCACQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
    this.shape_4.setTransform(85.35,16.55,1.3533,1.3555,0,0,0,-0.6,-0.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AAAAFQgFgBgBgEQgBgCADgCQACgCACAAQAEABADALIAAABQgCgBgFgBg");
    this.shape_5.setTransform(79.9,10.7,1.3533,1.3555,0,0,0,-0.3,-0.3);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQABgDALgDIABAAIgCAGQgBAGgEABIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
    this.shape_6.setTransform(79.95,16.55,1.3533,1.3555,0,0,0,-0.3,-0.3);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("AgGAGQADgLADgBQADAAACACQADACgBACQgBAEgGABQgEABgCABg");
    this.shape_7.setTransform(85.6,10.7,1.3533,1.3555,0,0,0,-0.4,-0.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAGgKIAAgBIADAHQAEAEgCADQgCADgDAAQgCAAgCgDg");
    this.shape_8.setTransform(83.2822,18.0187,1.3533,1.3555);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("AAAAIQgGgKACgDQACgDACAAQADAAACADQACADgEAEIgDAHg");
    this.shape_9.setTransform(83.2822,10.0889,1.3533,1.3555);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#336600").ss(1.5,1,1).p("AAtAAQAAACAAABQAAAXgNASQgNARgTAAQgRAAgOgRQgNgSAAgaQAAgBAAgBQAAgYANgRQAOgRARAAQATAAANARQANASAAAZg");
    this.shape_10.setTransform(83.0657,14.13,1.3542,1.3561);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("ABDiSQAmAmARAuQABAbgRAgQgOAcgXAEQgOABgJAHQgSAMACAdQAEA4A3AeQABABACABQgTAcACAWQhKgMg3hCQhDhPAAhwQAAhcAshGQBTAIA9A9g");
    this.shape_11.setTransform(79.7178,22.8427,1.3542,1.3561);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#9DE37E").s().p("AgfAsQgNgTAAgZIAAgBQAAgZANgRQANgRASAAQATAAANARQANATAAAYIAAACQgBAZgMARQgNARgTAAQgSAAgNgRg");
    this.shape_12.setTransform(83.0657,14.13,1.3542,1.3561);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#66CCCC").s().p("Ag2CKQhDhPAAhwQAAhcAshGQBTAIA9A9QAmAmARAuQABAbgRAgQgOAcgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgTAcACAWQhKgMg3hCgAgGhrQgNARAAAYIAAADQAAAZANASQAMASATAAQATAAANgSQAMgRABgYIAAgCQAAgagNgSQgNgRgTAAQgTAAgMARg");
    this.shape_13.setTransform(79.7178,22.8427,1.3542,1.3561);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style35, new cjs.Rectangle(22.2,-20.2,75,73.3), null);
//spiderman
(lib.style36 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // logo
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AAKBWQgFgSgEgVQgCgTgCgWIgBgJIgBgKQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABgCIAEgDIAHgHIAFgHIAAABIgCAAIgEABQgHACgFAHIgGAHQgGAHAAACIgKAJQgGAHgEADIgMALQAAABABAAQAAABABAAQAAABAAAAQABAAAAABIgBADIAAAPIAEAQQADAKAGAOIAMAYIAGAKIAFALIgCgBQgbgjgPgtQgGgQgCgNIAAgHIABgCIABAAIABACIABgBIADACIACgCIAIgFIAIgHQAIgGAHgKIANgRIADgEIAFgCIAHgCIAIgCIAAAAIgBgBQgKgGgLAGIgfAPIgBABIgCgCIgOgGIgCgBIAAgCQABgEgBgHIABgUIADgUIAFgSQACgJADgIIADgHIABgBIABgBIAAABQgDAKgCANIgCAXIgBAUIACAUIAAACIABACIABACIACAAIAHgDIAkgPIABgBIACACIAKAGIgCgCIgCgDIgDgEIgEgBIgKgDIgLABIgDABIgBACIgBABQAAABAAgBIgNgFIgBgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgGIAAgFQABgZAJgXIACgEIABgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIgBABQgIAWABAVIAAAIIADAIIABACIADgBQAIgBAIACIAQAEIADABIACACQACAFAFADIABgDIADgDIAEgBIgCAFQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIABAAIABgBIACgBIAAABQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIACgCIABAAIABgBIACACIABAAIgBgEIgEgFIAFAAIAEAGIACgCIAAAAIACgGIADgDIAEAMIgBADIABgCIADAJIgBABIAAABIABAAIACAIIACAOIgBgBIgEgEIgFgCQAAACABADIAEAEIABABIAAABQADAlgKAgIAAABIAAAAIgCAAIgBgBIAAgBIgCAAIgDAAIABABIgBACIgBAAIAAAAIgCAAIgFgMQgHgMgEgOIgHgbIAAgBIABgCIACgFIABgGQgHAFgEAHIgCAEIgDAEIAAACIAAABIABAGIAAADIACAiIAFAgQAGAkANAcIgBAEQgOgYgJgbg");
    this.shape.setTransform(111.7924,77.1226,1.399,1.399);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // body
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AgsHTQCdANCmgRQCegZAshwQAYgvAAg4QAAhhhEhEQgigigpgRQhIgdAthDQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbQgRgugmgmQhGhGhiAAQhjAAhEBGQhGBFAABjQAABeBABEQAiAmgfAHQA4BEAHBtQACBehfANgAE5krQgaAbgkAAQgkAAgagbQgZgbAAgmQAAgVAIgRICbBVQgGAKgIAIgAkygRQAHABAIAAQB7gOBtADQATACAMgCAkygRQgagGgVgcQgagkgBgBQgTgTgbAAQgbAAgTATQgSARgJAuQgKAtALA9QAPBQAbBAQBeDACgAeQBOAOBQAGAg6EBQgCAAgDAAQhjAOhzgOQhggOAChTQAIhtA5hE");
    this.shape_1.setTransform(50.5222,47.2957,1.399,1.399);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#464980").s().p("ABIELQifgehei/QgbhAgPhPQgLg9AKguQAJguASgSQATgTAbAAQAbAAATATIAbAmQAVAbAaAGQg5BFgIBuQgCBSBgANQByAOBjgNIAFgBIAODTQhQgHhOgOg");
    this.shape_2.setTransform(12.0667,72.4009,1.399,1.399);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#F52F30").s().p("Aj5HTIgNjSQBggNgCheQgIhtg5hEQAhgHgkgmQg/hEAAheQAAhjBFhFQBGhGBiAAQBiAABFBGQAmAmARAuQABAbgQAgQgPAdgXAEQgOABgJAHQgRAMACAdQADA4A3AeIAEACQguBDBIAdQApARAiAiQBEBEAABhQAAA4gXAvQgsBwifAZQhdAKhbAAQhGAAhFgGgAgolsQAAAmAaAbQAZAbAkAAQAkAAAZgbQAIgIAGgKIiahVQgIARAAAVg");
    this.shape_3.setTransform(79.1253,47.2957,1.399,1.399);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style36, new cjs.Rectangle(-21.1,-19.8,143.3,134.3), null);
//statueofliberty
(lib.style39 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhrgtQBrArBsgrIAABKQhnAihwgig");
    this.shape.setTransform(57.9113,96.6497,0.7987,0.7987,47.4018);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#6CBEA4").s().p("AhrAdIAAhKQBrArBsgrIAABKQg0ARg2AAQg0AAg5gRg");
    this.shape_1.setTransform(57.9113,96.6497,0.7987,0.7987,47.4018);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ABMiHIBGBSIkPC9IgUgYg");
    this.shape_2.setTransform(45.425,107.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#6CBEA4").s().p("AiRBwIDdj3IBGBSIkPC9g");
    this.shape_3.setTransform(45.425,107.475);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AhfAeQgCgXAOgZQAOgaAWgMQAFgCBCglQgGAigDAQQARgBA/gDQgVAjgJAMQAKAAAVAEQgyA3gDADQgQAUgfAKQggALgUgLQgVgMgIgNQgIgNgCgWg");
    this.shape_4.setTransform(67.1625,88.2564);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FF6600").s().p("Ag4BaQgVgMgIgNQgIgNgCgWQgCgXAOgZQAOgaAWgMIBHgnIgJAyIBQgEIgeAvQAKAAAVAEIg1A6QgQAUgfAKQgQAGgMAAQgOAAgKgGg");
    this.shape_5.setTransform(67.1625,88.2564);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // crown
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("ABchHIAGAnAhhAsIAEAcAglgCIAEAfAAaglIAGAk");
    this.shape_6.setTransform(23.55,1.7);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("Ai8CLQBfiyEaiLQgNBkAMAqQjiBIh8CPg");
    this.shape_7.setTransform(19.7,4.425);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#6CBEA4").s().p("Ai8CLQBfiyEaiLQgNBkAMAqQjiBIh8CPg");
    this.shape_8.setTransform(19.7,4.425);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("Ah+DxIhThVIB9AFIgUiHIBrAlIAhiaIA5BWIB2jrIgDDg");
    this.shape_9.setTransform(14.95,-9.625);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#6CBEA4").s().p("AjSCcIB9AFIgTiHIBrAlIAhiaIA5BWIB2jrIgDDgIkcC+IABAAIgzBDg");
    this.shape_10.setTransform(14.95,-9.625);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style39, new cjs.Rectangle(-7.1,-34.7,84.89999999999999,156.8), null);

//summer
(lib.style42 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkwggQALhiB6hIQB/hNCIBgQAjAYAjAlQCnAChZBRQgUASggAVQg/AqhPAgQB8DvCEhuQBthchHh3QgJgOgKgPQgCgBgBgBQgIgLgJgLIg9AWAksAiQgIgiAEggQDPA1C9jMAgiBmIkPBpIAAgwIAQgGQgBAAgBAAQheANAWgvQAXgwAoglQB0AhBzgoQBzgmB0hvABkA/IBygxIBDgbIANgGQAKANAIAMQA0BahUBEQgRAKgPAGQgkALgfgOQgvgYgihagAgiBmQgFACgGACQhuAgiGAPAAuBKQgmAPgqAN");
    this.shape.setTransform(26.8748,17.3949);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#6633CC").s().p("AjkBmQgIgjAEggQDPA2C9jNQAjAZAjAkQh0Buh0AnQg+AXhAAAQg0AAg0gPg");
    this.shape_1.setTransform(19.6583,10.6034);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#83FFE6").s().p("AgxBcIAhijIBCgcIghDBQgQAGgPAAQgSAAgRgIg");
    this.shape_2.setTransform(49.975,25.9093);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FF6600").s().p("Ak6CfQAWgvAoglQB0AgB0goQBzgnB0huQCmAChZBRQgTARggAWQg/AqhPAhQgnAPgqANIgMADQhsAgiHAQIgBAAQgUADgPAAQg3AAASgmgAkAAIQALhhB6hJQB/hNCIBgQiVCiihAAQgrAAgrgLg");
    this.shape_3.setTransform(22.0088,13.3011);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#00FFCC").s().p("ABBhdIANgGQALAOAHAMQA0BahTBDQgSAKgPAGgAhzgQIBzgxIghCiQgvgYgjhZg");
    this.shape_4.setTransform(48.4478,25.35);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#00CC00").s().p("AAPgNQBPggA/grQAggVAUgSIA9gWIARAWIADACIATAdQBHB3htBcQgpAjgpAAQhZAAhVijgAD6hlIhDAcIhyAxQAiBZAvAYQAfAOAkgLQAPgGARgKQBUhEg0hZQgIgNgKgNgAlQBHIAQgGQCGgPBuggIALgEIkPBpg");
    this.shape_5.setTransform(29.9661,26.1585);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style42, new cjs.Rectangle(-10.9,-7.4,75.60000000000001,49.6), null);

//strawberryhat
(lib.style41 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // seed
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAOgIQAIALABALQABALgGAEQgGAEgJgGQgIgGgIgMQgHgLgCgLQgCgLAHgFQAGgDAJAGQAJAGAHAMg");
    this.shape.setTransform(6.7509,33.0021);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("rgba(255,255,255,0.976)").s().p("AADAbQgIgGgIgMQgHgLgCgLQgCgLAHgFQAGgDAJAGQAJAGAHAMQAIALABALQABALgGAEQgCACgDAAQgEAAgGgEg");
    this.shape_1.setTransform(6.7509,33.0021);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAOgIQAIALABALQACAMgGADQgGAEgKgGQgIgGgIgMQgHgLgCgLQgBgLAGgEQAGgEAJAGQAJAHAHALg");
    this.shape_2.setTransform(16.7829,22.5714);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("rgba(255,255,255,0.976)").s().p("AADAbQgIgGgIgMQgHgLgCgLQgBgLAGgEQAGgEAJAGQAJAHAHALQAIALABALQACAMgGADIgFACQgFAAgGgEg");
    this.shape_3.setTransform(16.7829,22.5714);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AAVAAQAAASgGAMQgGANgJAAQgHAAgHgNQgGgMAAgSQAAgRAGgMQAHgNAHAAQAJAAAGANQAGAMAAARg");
    this.shape_4.setTransform(5.2,18.775);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("rgba(255,255,255,0.976)").s().p("AgOAeQgGgMAAgSQAAgRAGgMQAHgNAHAAQAJAAAGANQAGAMAAARQAAASgGAMQgGANgJAAQgHAAgHgNg");
    this.shape_5.setTransform(5.2,18.775);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AAOgIQAIALABALQACALgGAEQgGAEgKgGQgIgGgIgMQgHgLgCgLQgBgLAGgFQAGgDAJAGQAJAGAHAMg");
    this.shape_6.setTransform(30.5829,15.7021);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("rgba(255,255,255,0.976)").s().p("AADAbQgIgGgIgMQgHgLgCgLQgBgLAGgFQAGgDAJAGQAJAGAHAMQAIALABALQACALgGAEQgDACgDAAQgEAAgGgEg");
    this.shape_7.setTransform(30.5829,15.7021);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AAOgIQAIALABALQABALgFAEQgHAEgJgGQgJgGgHgMQgHgLgCgLQgCgLAHgEQAFgEAKAGQAJAGAHAMg");
    this.shape_8.setTransform(46.452,11.6619);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("rgba(255,255,255,0.976)").s().p("AADAbQgJgGgHgMQgHgLgCgLQgCgLAHgEQAFgEAKAGQAJAGAHAMQAIALABALQABALgFAEQgDABgDAAQgEAAgGgDg");
    this.shape_9.setTransform(46.452,11.6619);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AASgKQAJAOACAOQACAOgIAEQgHAFgMgHQgLgIgKgOQgJgOgCgOQgBgOAHgFQAIgFALAIQALAHAKAPg");
    this.shape_10.setTransform(35.8336,6.4906);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("rgba(255,255,255,0.976)").s().p("AAEAiQgLgIgKgOQgJgOgCgOQgBgOAHgFQAIgFALAIQALAHAKAPQAJAOACAOQACAOgIAEQgDACgEAAQgFAAgHgEg");
    this.shape_11.setTransform(35.8336,6.4906);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // berry
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AgphWQgLAcgGAeQgLA7AiATIBGAlQAZglACgpQADhRhqgOg");
    this.shape_12.setTransform(19.3852,5.8);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("rgba(102,204,0,0.976)").s().p("AgjAyQgigSALg9QAGgdALgcQBqAOgDBRQgCApgZAlg");
    this.shape_13.setTransform(19.3852,5.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("Ah+AjQAAgXAKgVQAUguAzAKQBIAUAbAGQAsALASgRQALgLAAAFQABAFgJANQgbAjgwAQQgtAPhDgIQghgFgZgFg");
    this.shape_14.setTransform(31.8798,-5.2679);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("rgba(102,204,0,0.976)").s().p("AhEAtIg6gKQAAgXAKgVQAUguAzAKIBjAaQAsALASgRQALgLAAAFQABAFgJANQgbAjgwAQQgeAKgmAAQgUAAgYgDg");
    this.shape_15.setTransform(31.8798,-5.2679);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AB7ghQgNgTgVgMQgrgZgkAlQgvA6gSAVQgeAigZgEQgOgCACAEQACAEAPAFQArAPAxgPQAtgOAxguQAZgWARgTg");
    this.shape_16.setTransform(0.8129,4.2273);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("rgba(102,204,0,0.976)").s().p("AhpBEQgPgFgCgEQgCgEAOACQAZAEAegiQASgVAvg6QAkglArAZQAVAMANATQgRATgZAWQgxAugtAOQgZAHgXAAQgWAAgWgHg");
    this.shape_17.setTransform(0.8129,4.2273);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AgzhCIAvgQQBEA9gPBjIgeAFQgEhihCgzg");
    this.shape_18.setTransform(11.5509,-9.975);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("rgba(102,204,0,0.976)").s().p("AgzhCIAvgQQBEA9gPBjIgeAFQgEhihCgzg");
    this.shape_19.setTransform(11.5509,-9.975);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AjpCpQhIhWAThoQARhoBdhAQBag/CBgDQCBgDBDBLQBEBMgWA1QgrgCg4AHQhgAOhcBAQheBBgbA1QgbA1gMA4QgVgegyg5g");
    this.shape_20.setTransform(25.8113,23.6193);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("rgba(255,0,0,0.976)").s().p("AjpCpQhIhWAThoQARhoBdhAQBag/CBgDQCBgDBDBLQBEBMgWA1QgrgCg4AHQhgAOhcBAQheBBgbA1QgbA1gMA4QgVgegyg5g");
    this.shape_21.setTransform(25.8113,23.6193);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style41, new cjs.Rectangle(-12.5,-19.3,68.4,69.6), null);

//strawberry
(lib.style40 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGWihQAAAWgIAPQgHAQgKAAQgJAAgIgQQgHgPAAgWQAAgVAHgQQAIgPAJAAQAKAAAHAPQAIAQAAAVgAJMCaQAAATgIANQgHANgKAAQgKAAgHgNQgHgNAAgTQAAgTAHgNQAHgNAKAAQAKAAAHANQAIANAAATgAFzB0QAAARgIAMQgHAMgKAAQgJAAgIgMQgHgMAAgRQAAgSAHgMQAIgMAJAAQAKAAAHAMQAIAMAAASgAGkGWQAAAQgIALQgHALgKAAQgJAAgIgLQgHgLAAgQQAAgRAHgKQAIgMAJAAQAKAAAHAMQAIAKAAARgADnlCQAAATgIAOQgHANgJAAQgKAAgIgNQgHgOAAgTQAAgSAHgOQAIgNAKAAQAJAAAHANQAIAOAAASgAA/mWQAAATgGAOQgGANgJAAQgIAAgGgNQgHgOAAgTQAAgSAHgOQAGgNAIAAQAJAAAGANQAGAOAAASgAChg7QAAAUgGAOQgGAPgJAAQgIAAgHgPQgGgOAAgUQAAgVAGgOQAHgOAIAAQAJAAAGAOQAGAOAAAVgAlkF2QAAAPgHAKQgIAKgJAAQgKAAgHgKQgIgKAAgPQAAgPAIgKQAHgKAKAAQAJAAAIAKQAHAKAAAPgAhaGSQAAAUgIAPQgIAPgMAAQgMAAgIgPQgIgPAAgUQAAgUAIgPQAIgNAMAAQAMAAAIANQAIAPAAAUgAC9EcQAAAUgIANQgHAPgJAAQgKAAgIgPQgHgNAAgUQAAgVAHgOQAIgPAKAAQAJAAAHAPQAIAOAAAVgAoTgHQAAASgIANQgIAPgMAAQgMAAgIgPQgIgNAAgSQAAgSAIgPQAIgNAMAAQAMAAAIANQAIAPAAASg");
    this.shape.setTransform(46.3,55.85);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AiKG1QgIgOAAgUQAAgVAIgOQAIgPAMAAQAMAAAIAPQAIAOAAAVQAAAUgIAOQgIAPgMgBQgMABgIgPgAF6GxQgIgLAAgQQAAgRAIgLQAHgLAKABQAKgBAHALQAIALAAARQAAAQgIALQgHAMgKgBQgKABgHgMgAmNGPQgIgKABgOQgBgPAIgLQAHgJAKAAQAKAAAGAJQAIALAAAPQAAAOgIAKQgGALgKAAQgKAAgHgLgACTE9QgHgOAAgTQAAgVAHgOQAHgOAKgBQAKABAHAOQAIAOAAAVQAAATgIAOQgHAPgKAAQgKAAgHgPgAIiC6QgIgNABgTQgBgTAIgNQAHgOAKAAQAKAAAHAOQAHANAAATQAAATgHANQgHANgKAAQgKAAgHgNgAFICRQgGgMAAgRQAAgSAGgMQAIgMAKgBQAKABAHAMQAHAMAAASQAAARgHAMQgHANgKAAQgKAAgIgNgApDAZQgIgNABgTQgBgSAIgOQAJgNAMgBQAMABAHANQAJAOAAASQAAATgJANQgHANgMAAQgMAAgJgNgAB9gZQgGgOAAgUQAAgVAGgOQAGgOAJAAQAJAAAFAOQAHAOAAAVQAAAUgHAOQgFAPgJAAQgJAAgGgPgAFrh8QgGgPAAgWQAAgVAGgQQAJgPAJAAQAKAAAHAPQAHAQAAAVQAAAWgHAPQgHAQgKAAQgJAAgJgQgAC9khQgHgNAAgUQAAgSAHgNQAHgOALAAQAJAAAHAOQAIANAAASQAAAUgIANQgHANgJAAQgLAAgHgNgAAbl1QgGgOAAgSQAAgTAGgOQAGgNAJABQAJgBAFANQAHAOAAATQAAASgHAOQgFANgJAAQgJAAgGgNg");
    this.shape_1.setTransform(46.3,55.85);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    // Layer_1
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AgphWQgLAcgGAeQgLA7AiATIBGAlQAZglACgpQADhRhqgOg");
    this.shape_2.setTransform(63.5058,-6.2899,1.3983,1.3983);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("rgba(102,204,0,0.976)").s().p("AgjAyQgigSALg8QAGgeALgcQBqAOgDBRQgCApgZAlg");
    this.shape_3.setTransform(63.5058,-6.2899,1.3983,1.3983);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Ah+AjQAAgXAKgVQAUguAzAKQBIAUAbAGQAsALASgRQALgLAAAFQABAFgJANQgbAjgwAQQgtAPhDgIQghgFgZgFg");
    this.shape_4.setTransform(80.9765,-21.7661,1.3983,1.3983);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("rgba(102,204,0,0.976)").s().p("AhEAtIg6gKQAAgXAKgVQAUguAzAKIBjAaQAsALASgRQALgLAAAFQABAFgJANQgbAjgwAQQgeAKgmAAQgUAAgYgDg");
    this.shape_5.setTransform(80.9765,-21.7661,1.3983,1.3983);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AB7ghQgNgTgVgMQgrgZgkAlQgvA6gSAVQgeAigZgEQgOgCACAEQACAEAPAFQArAPAxgPQAtgOAxguQAZgWARgTg");
    this.shape_6.setTransform(37.5366,-8.4889,1.3983,1.3983);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("rgba(102,204,0,0.976)").s().p("AhpBEQgPgFgCgEQgCgEAOACQAZAEAegiQASgVAvg6QAkglArAZQAVAMANATQgRATgZAWQgxAugtAOQgZAHgXAAQgWAAgWgHg");
    this.shape_7.setTransform(37.5366,-8.4889,1.3983,1.3983);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AgzhCIAvgQQBEA9gPBjIgeAFQgEhihCgzg");
    this.shape_8.setTransform(52.5513,-28.348,1.3983,1.3983);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("rgba(102,204,0,0.976)").s().p("AgzhCIAvgQQBEA9gPBjIgeAFQgEhihCgzg");
    this.shape_9.setTransform(52.5513,-28.348,1.3983,1.3983);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(1.5,1,1).p("AAtg9IAAABQASAZAAAjQAAACAAABQAAAhgSAYIAAABQgTAYgaAAQgZAAgSgYQgTgZAAgkQAAgBAAgCQABghASgYQASgYAZAAQAaAAATAXg");
    this.shape_10.setTransform(88.4,2.425);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AmtgYQgkgJgdgmQglgzgCgCQgagagmAAQgmAAgaAaQgZAZgNBAQgNA/APBWQAUBvAmBaQCEEMDgAqQFEA7FdgkQDdgjA+idQAhhBAAhPQAAiHhfhfQgwgwg5gYQgngQgPgYQgWgmAng4QgDgCgCgBQhNgrgFhOQgDgpAZgRQAMgJAUgCQAggFAUgpQAXgtgBglQgYhBg1g1QhhhhiKAAQiKAAhgBhQhhBhAACKQAACDBZBgQAKALAGAJQAYAkgkAHAmtgYQAKACAMgBQCsgUCXAFQAcACAQgCQBPBfAKCZQADCHiMAPQiMATiggUQiGgTADh0QAKiZBQhfg");
    this.shape_11.setTransform(50.6108,47.4453);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FF0000").s().p("AkbJxQjggqiEkMQgmhagUhvQgPhWANg/QANhAAZgZQAagaAmAAQAmAAAaAaIAnA1QAdAmAkAJQhQBfgKCZQgDB0CGATQCgAUCMgTQCMgPgDiHQgKiZhPhfQAkgHgYgkQgGgJgKgLQhZhgAAiDQAAiKBhhhQBghhCKAAQCKAABhBhQA1A1AYBBQABAlgXAtQgUApggAFQgUACgMAJQgZARADApQAFBOBNArIAFADQgnA4AWAmQAPAYAnAQQA5AYAwAwQBfBfAACHQAABPghBBQg+CdjdAjQiEANiAAAQjTAAjKgkgAFOn+QgSAYgBAhIAAAEQAAAkATAZQASAYAaAAQAaAAATgYIAAgBQARgYABghIAAgDQAAgkgSgZIAAgBQgTgXgaAAQgaAAgSAYg");
    this.shape_12.setTransform(50.6108,47.4453);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style40, new cjs.Rectangle(-21,-41,143.2,155.6), null);

//unicorn
(lib.style38 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // tail
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACFhGIAAAAQABAAABABQAZg5gdg4Qggg6hMgEQhMgDguAsQgvAsABBKQABBLA0AxQA0AxAGA0QAFAzgdAJQgbAHgHgFQABACACACQAPAOAQAJQAQAJAHACQAbAIAXgFQADAAADgBQAigHAKgbQAMgbgUgwQgFgOgJgaQgIgXgJgSQgMghAAgaQgBgqAUgWQAUgWAhAFQAhAGAMANQABABABABIAAgBQAAAAAAgBQgSgNgKgLQgMgNghgGQghgFgUAWQgTAWABAgQAAAgAgA0QACAEADAFACFhGQgEgQgOgjQgUgvg5gEQg3gFggAhQgfAhABAyQAAAyAzBTQAIAOAYA1QAZA0hAAxACFhFIAAgB");
    this.shape.setTransform(1.1595,68.0014,1.4077,1.4077);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF6600").s().p("AgmBKQghg1AAgfQgBggAUgWQAUgWAgAFQAhAGAMANQAKALASANIAAABIAAABIgCgCQgMgNghgGQgggFgUAWQgUAWABApQAAAbAMAhIgFgJg");
    this.shape_1.setTransform(9.6191,63.666,1.4077,1.4077);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FF6699").s().p("Ag6DnQgQgJgPgOIgDgDQAHAFAbgIQAdgJgFgzQgGgzg0gyQg0gxgBhKQgBhLAvgsQAugrBMADQBMADAgA7QAdA4gZA4IgCAAIAAAAQgEgQgOgjQgUgvg5gFQg3gFggAiQgfAhABAyQAAAyAzBTQAIAOAYA0QAZA1hAAxQgHgDgQgJg");
    this.shape_2.setTransform(1.1595,67.6715,1.4077,1.4077);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#6699CC").s().p("Ag9DNQBAgxgYg1QgZg0gIgOQgzhTAAgyQgBgyAfghQAggiA3AFQA5AFAUAvQAOAjAEAQIAAAAQgSgMgKgMQgMgMghgGQghgGgTAWQgUAWABAgQAAAgAhA1IAEAJQAJASAIAXIAOAoQAUAwgMAbQgKAaghAIIgGABQgJABgKAAQgPAAgRgEg");
    this.shape_3.setTransform(4.8314,73.002,1.4077,1.4077);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AAyANQACgHAAgHQAAgUgPgOQgPgPgWAAQgVAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAVAAQAMAAAKgEQADgCADgCQAFgDAEgEQALgKACgNg");
    this.shape_4.setTransform(-7.6202,90.6393,1.4083,1.4083);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#6699CC").s().p("AgjAkQgQgPAAgVQAAgUAQgPQAPgPAUAAQAWAAAPAPQAPAOAAAUQAAAHgCAHQgDANgKAKIgJAHIgGAEQgKAEgMAAQgUAAgPgPg");
    this.shape_5.setTransform(-7.6202,90.6393,1.4083,1.4083);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // horn
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AAugaQgCAegHAIQAEAVgPARQAFAXgPASQgyAJgdg0QAHgaAWgFQAIgVAUgJQAGgPATgOIAtgxIgSBBQgOgEgNgMAAlAMQgZgEgSgVAAaAyQgkACgYgj");
    this.shape_6.setTransform(108.7843,-6.6781,1.4083,1.4083);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FF6699").s().p("Ag/AwQAHgaAWgFQAIgVAUgJQAGgPATgOIAtgxIgSBBQgOgEgNgMQANAMAOAEQgCAegHAIQAEAVgPARQAFAXgPASIgPABQgnAAgZgsgAAWAyIADAAIABAAIgBAAIgDAAIAAAAIAAAAQggAAgWgeIgBgBIAAAAIgBgCIABACIAAAAIABABQAWAeAgAAIAAAAIAAAAgAAlAMQgZgEgSgVQASAVAZAEg");
    this.shape_7.setTransform(108.7843,-6.6781,1.4083,1.4083);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

    // hair
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AACgSQAYAKgHATQgBAHABAFQgdgFgFgIQgFgHABgJQACgKAHgFQABgBAAAAQAEABAHADg");
    this.shape_8.setTransform(62.4044,26.5259,1.4083,1.4083);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFCC33").s().p("AgPAKQgFgGABgKQACgJAHgGIABgBIALAEQAYAJgHAVQgBAGABAFQgdgFgFgIg");
    this.shape_9.setTransform(62.4044,26.5259,1.4083,1.4083);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AANgWQAVAYgTATQgGAHgCAGQgdgXgBgLQgBgLAHgKQAIgJAJgDQACAAABAAQADAEAHAHg");
    this.shape_10.setTransform(63.7719,21.104,1.4083,1.4083);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#66FF99").s().p("AgXAAQgBgKAHgLQAIgJAJgDIADAAIAKALQAVAYgTATQgGAHgCAGQgdgXgBgLg");
    this.shape_11.setTransform(63.7719,21.104,1.4083,1.4083);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAWgYQASAjgcASQgKAHgCAGQgeglACgNQACgOAMgKQAMgJAMAAQACAAACAAQADAHAFAKg");
    this.shape_12.setTransform(67.3909,14.6239,1.4083,1.4083);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#FF6600").s().p("AgcgIQACgOAMgKQAMgJAMAAIAEAAIAIARQASAjgcASQgKAHgCAGQgeglACgNg");
    this.shape_13.setTransform(67.3909,14.6239,1.4083,1.4083);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAggYQANAwgnAOQgNAGgFAHQgbg0AGgRQAGgRARgJQAPgIARAEQADABACAAQABAJAEAOg");
    this.shape_14.setTransform(73.9875,8.2843,1.4083,1.4083);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#FF6699").s().p("AghgSQAGgRARgJQAPgIARAEIAFABIAFAXQANAwgnAOQgNAGgFAHQgbg0AGgRg");
    this.shape_15.setTransform(73.9875,8.2843,1.4083,1.4083);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAugEQgQA/g1gHQgTgCgLAFQAChMASgRQASgQAXABQAZAAARAQQACACACACQgDALgFASg");
    this.shape_16.setTransform(83.5052,4.7665,1.4083,1.4083);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#6699CC").s().p("AghgmQASgQAXABQAZAAARAQIAEAEIgIAdQgQA/g1gHQgTgCgLAFQAChMASgRg");
    this.shape_17.setTransform(83.5052,4.7665,1.4083,1.4083);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAtASQgpAwgqgeQgPgKgLgBQAjhAAWgGQAVgFAVALQAVALAHAVQABADABACQgIAHgMANg");
    this.shape_18.setTransform(93.0817,5.4343,1.4083,1.4083);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#66FFFF").s().p("AgmAkQgPgKgLgBQAjhAAWgGQAVgFAVALQAVALAHAVIACAFIgUAUQgZAegZAAQgQAAgRgMg");
    this.shape_19.setTransform(93.0817,5.4343,1.4083,1.4083);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AC0iXQAHABAHADQAEABAEABQAHABAJABQAAgBABABAheDJQAGgVgIgcQgVhIgMhBQgMhAA2g9QA3g+BCgIQBDgJAtAXQARAIARAHAiUD2QgUATgugDQAFgEAFgFQANgMAEgRQACgHAAgJQAAgBAAgBQACgggKgeQgOgqgThmQgThlBZhYQBZhZBuAVQBuAUAiApQAZAeAOAXQACAEACADQAAABABABQgDgDgJgGAiUD2QAYgWgPg0QgahggQhRQgPhRBIhHQBHhHBfAPQBfAPAsAeQAZAQANAJAheDJQApgUgPgyQgRg6gKg0QgJgzAugvQAugwBBgWQA8gVBDARAiUD2QAugQAIgd");
    this.shape_20.setTransform(78.9403,27.7893,1.4083,1.4083);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#FF6699").s().p("AjWEGIAKgJQANgMAEgRQACgHAAgJIAAgCQACgggKgeQgOgqgThmQgThlBZhYQBZhZBuAVQBuAUAiApQAZAeAOAXIAEAHIABACIgMgJIgmgZQgsgehfgPQhfgPhHBHQhIBHAPBRQAQBRAaBgQAPA0gYAWQgRAQgnAAIgKAAg");
    this.shape_21.setTransform(78.9403,27.7893,1.4083,1.4083);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#6699CC").s().p("Ah3CPQgVhHgNhBQgMhBA3g9QA2g9BCgJQBDgJAuAXQARAJAQAGQhDgQg7AUQhBAXguAvQgvAvAKA0QAKA0ARA5QAOAygoAVQAGgVgIgdg");
    this.shape_22.setTransform(82.2612,28.9883,1.4083,1.4083);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#FFCC33").s().p("AicCdQgahggQhRQgPhRBIhHQBHhHBfAPQBfAPAsAeIAmAZIgBAAIgQgCIgIgCIgOgEQgRgHgRgIQgtgXhDAJQhCAIg3A+Qg2A9AMBAQAMBBAVBIQAIAcgGAVQgIAdguAQQAYgWgPg0g");
    this.shape_23.setTransform(81.3504,29.8614,1.4083,1.4083);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AA/AQQACgJAAgIQAAgZgTgTQgTgSgbAAQgaAAgTASQgTAUAAAZQAAAaATATQATATAaAAQAPAAANgFQADgDAFgCQAFgEAFgFQANgMAEgRg");
    this.shape_24.setTransform(49.6705,55.8188,1.4083,1.4083);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f("#6699CC").s().p("AgtAtQgTgTAAgaQAAgaATgSQATgTAaAAQAbAAATATQASASABAZIgCARQgEAQgNANIgLAJIgIAEQgMAGgPAAQgaAAgTgTg");
    this.shape_25.setTransform(49.6705,55.8188,1.4083,1.4083);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style38, new cjs.Rectangle(-20.4,-20.6,139.2,124.1), null);
//viking
(lib.style44 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACThaQBlAbAWBcQj1BBinCZQgdhEAHg+ACThaQAAhRhJhLQAVBLgXBGQAqACAhAJgAiJAfQAmhEBXg+QAtgEAnACAiJAfQApARAzAIQARA/hMAWQghgKgbgOQh1g/ANiRQAqBVBZAlg");
    this.shape.setTransform(27.0052,24.675);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AhnCqQh1hAAOiQQApBUBaAlQApASAyAIQAQA/hKAWQgigKgbgOgACGgwQAWhGgUhLQBIBLAABRQghgKgpgBg");
    this.shape_1.setTransform(20.8552,19.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#663300").s().p("AjYAtQAbAOAiAKQBLgWgQg+QgzgIgpgRQAlhFBXg+QAvgEAmACQApACAhAJQBmAbAVBdQjzBAioCZQgehEAHg+g");
    this.shape_2.setTransform(32.1829,31.8667);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style44, new cjs.Rectangle(-1,-1,56,51.4), null);

//vampire
(lib.style43 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // teth
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AgbArQgBgBAHgpQAHgogBgCQgEgDAYAFIAYAEQgDACgZAkQgaAogCAAIAAAAg");
    this.shape.setTransform(102.6187,24.8664,1.3757,1.3757);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // body
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("ADgAZQAOAMAFADQgQAEgRAEADgAZIAEgHAB9A5QgbABgcAAQhggDhYg3QgIgHgzg2Qgyg2gSgbIE8AsIANACQABAABHBAQAqAmAWATABLhiIAyCbIAcBWIA5hfIAOgX");
    this.shape_1.setTransform(63.283,42.4162,1.3757,1.3757);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#990000").s().p("ACBBkQhhgChXg3Ig7g9Qgzg2gRgbIE8AsIAxCbIgjAAIgTAAg");
    this.shape_2.setTransform(55.1666,36.5467,1.3757,1.3757);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FF0000").s().p("AghAjIgyibIANACIBHBAIBAA5IgOAWIg4BggAAzAZIAOgWIATAPIghAHgABBADIAAAAg");
    this.shape_3.setTransform(85.0872,45.477,1.3757,1.3757);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("ABvlsQAAACAAABQgBAYgMARQgNARgTAAQgTAAgNgRQgNgSAAgaQAAgBAAgBQAAgYANgRQANgSATAAQATAAANASQANASAAAZgAjjhSIAKABQCwBoC0g/QABAAACgBIAIABACegiQCUEEimCzQgCACgCACACGgkQCCELj9DD");
    this.shape_4.setTransform(78.4845,53.2495,1.3757,1.3757);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAFMhZICehGQAlgRgpgYQgEgDgDgCIAAgBQgGgGABgHIAAgBQAAgEACgEIAXgyQAHgOgOgLQgOgKguASQgtATgZgrQAAABAAAAAgfgbQANgDACgIQACgMgUgWQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuAFnAHIAAABQApAQAiAiQBEBEAABhQAAA4gYAvQgiBXhnAjQgLADgLAEQgYADgTADQguAGgSACQjXAOjKgkQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hEAFMhZQgkA1A3AmAE1HJQAMgCARgDQgKABgJACQgFABgFABQgQAEgRAA");
    this.shape_5.setTransform(50.7826,47.3426,1.3757,1.3757);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FF0000").s().p("AAPgkQATgBAEACIAAABQCVEEinCzIgVAHIAVgHIgDAEIgSADIgrAGIhAAIQD9jDiCkLgAhUlAQgOgSAAgaIAAgCQABgYANgRQANgSASAAQAUAAAMASQANASAAAZIAAADQAAAYgNARQgMARgUAAQgSAAgNgRgAhImGQgHAKgBAPIAAABQAAAQAIAKQAIALALAAQAMAAAHgLQAIgKAAgOIAAgCQAAgPgIgLQgHgKgMAAQgLAAgIAKg");
    this.shape_6.setTransform(94.9236,53.2495,1.3757,1.3757);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("ACeAUQAoARAiAiQBEBEAABgQAAA5gXAvQgiBXhnAiQCmiyiUkGgAjZgaQACgLgVgXQg/hEAAheQAAhiBFhGQBGhFBiAAQBiAABFBFQAmAmARAvQABAagQAgQgPAdgXAEQgOACgJAGQgRAMACAdQADA4A3AfIAEACQglA1A4AmIgIgBIgDABQhEAYhEAAQhuAAhuhBgAAilgQgNARAAAYIAAADQAAAZANASQANASATAAQATAAANgSQAMgRABgYIAAgCQAAgagNgSQgNgRgTAAQgTAAgNARg");
    this.shape_7.setTransform(78.5184,45.6146,1.3757,1.3757);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#000000").s().p("AjNFyQiggehei/QgbhBgPhPQgLg8AKguQAJguASgSQATgTAbAAQAbAAATATIAbAmQAVAbAaAGQg5BFgIBtQgCBTBgANQBzAOBjgNQBkgLgChgQgHhtg4hFQANgCACgJQCwBpC0g/IgEAEQCCEKj+DDQg9AEg8AAQiXAAiRgagAFJinQg3gfgEg4QgCgdASgMQAJgGAOgCQAXgEAOgdQARgggBgaIAAgBQAZAqAtgSQAugTAOALQAOAKgHAOIgXAzQgCAEAAAEIAAAAQgBAIAGAGIAAAAIAHAFQApAZglAQIieBHIgDgCg");
    this.shape_8.setTransform(50.7826,57.8663,1.3757,1.3757);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style43, new cjs.Rectangle(-20,-18.7,141.6,132.1), null);
//zorro
(lib.style45 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADTh7IhJh9IgnAWIBEB2IgyAgIAeA5QAbgRAZgTIA6BiIAwgbIhDhiQAogIBEg2IA1ACIhAhjIgaA3QgsAbg1AkgABUg3IgbgsADuhSIAAgBIgbgoACnhsIAgA1ACTgTIAZAtACUAyIgfgyIghg3IniEwQEchoDniRABghxIAVAl");
    this.shape.setTransform(35.275,73.675);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#999999").s().p("AC4h9IAhA3QjnCRkcBogADZiSIAyggIAgA1QgZATgbARg");
    this.shape_1.setTransform(25.275,80.675);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#990000").s().p("AhCBPIgbgpIABAAQA1gkArgaIAag2IBABhIg1gCQhDA2goAJg");
    this.shape_2.setTransform(65.775,57.45);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#E0BD14").s().p("AgRACIgbgrIAngOIAUAlIAeA3IgeATg");
    this.shape_3.setTransform(45.475,67.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("AgCAwIgfg1IhFh2IAogWIBHB9IAcAoIAAABIBCBiIgvAbg");
    this.shape_4.setTransform(55.45,63.35);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AEBgxQAhAkgrAtQgsAthIhAQAhhJBdALgADvh9IoOBzQgyA5ASBPIIjgVQBQAYARiXQgMgwhKg3g");
    this.shape_5.setTransform(34.135,-2.05);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#000000").s().p("AkfgKIIOhzQBKA3AMAwQgRCXhQgZIojAXQgShQAyg5gACDANQBIA/AsgsQArgtghgkIgYgBQhKAAgcA/g");
    this.shape_6.setTransform(34.135,-2.05);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style45, new cjs.Rectangle(-5.6,-15.7,81.8,115.3), null);

//witch
(lib.style46 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhcgxIB0AAAg6AyIBogyAhgAAIDBgr");
    this.shape.setTransform(13.425,126.425);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AjkmWIgUkcQgDh0BWBSIC5DYIAcAgQiGBfiMARgAjaJzILBkTIgZglIqgEIgAAUn8QAcgIAagGQBOgPAIATQAIAThDAsQhCArhlAqQhlAphOAQQhNAPgIgTQgIgUBCgrQAUgNAYgNAjSJDIgNAFIj2gTQg4BtB9BVIC2iE");
    this.shape_1.setTransform(48.7337,60.977);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#660099").s().p("AiACbIgTkbQgDh0BWBSIC4DXIAcAgQiGBfiLARg");
    this.shape_2.setTransform(38.6699,4.777);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("Aj0BkQgIgTBCgrQAUgNAXgNIADApQCMgQCFhfIgcggQAdgIAagFQBNgQAIAUQAIAThCArQhCArhmApQhlAqhNAPQgiAHgVAAQgaAAgEgLg");
    this.shape_3.setTransform(40.1747,19.1127);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#666600").s().p("AnVAcID2ATIANgFIgIAwIAIgwIKgkHIAZAlIrBESIi2CEQh9hVA4htgAmbCnIBpgzgAnBB1IDCgrgAlIBEIh1AAg");
    this.shape_4.setTransform(48.7337,114.65);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style46, new cjs.Rectangle(-1,-15.9,99.5,153.8), null);

//winterhat
(lib.style47 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_8
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ai1CvQgGgHgEgIQgrhJAWhSQAJghATgcIgFgPIgQAFIgBgRIgRACIACgRIgQgDIAEgQIgPgFIAIgPIgPgIIALgNIgNgLIANgKIgJgOIAPgHIgJgPIARgFIgEgQIARgBIgCgRIARACIACgRIAQAFIAFgPIAPAIIAIgPIANALIALgNIAKAOIAOgLIAHAQIAPgIIAFAQIAQgFIABARIARgBIgCARIARACIgFAQIAQAFIgJAPIAQAIIgLANIANALIgOALIAAABQAjgEAnAJQBRAXAqBIQAFAIAEAIQABgCADAAQAWgFAOAYIAfAzQAOAYgQARIgMAHIABACIlKC/IgLAIQggASgSggIgfg1QgOgYARgQg");
    this.shape.setTransform(21.8197,34.6523);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_9
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiXAZIgQgBAiWAZIgBAAIgJgLAiHAqIgPgRIABgRAiNA9IgBgBIAGgTIABABIAMAOIgSAFIgXAGIAAAAIAAABIgEAOAgagbIAAAAIgKgLAgagbIABgRAgagbIgRAAAhvAKIABABIgBgBIAEgLAhvAKIAAAAIgHAbIANANIAXgGAh4AAIAJAKAhuBGIAFgTIAAgBIgSAGIANAOIgSAEIAAAAIgNgNAhSAsIAAAAIADgPAhfAJIgPACAgoAOIAAABIAXgHIAAAAIAFgSIABAAIAMANIAEgRIgQAEIgPgRAgoAOIAAABIAAAAAg1ABIANANAgoAPIgEAOAg4AUIAQgGAhCAoIgQAEAhGA3IgMgLAApgIIAAAAIADgPAA5gLIgQADAANgpIAAgBIAAABgAAcgrIgPACAANgqIADgLAANgpIgIAbIANANIgRAEIANAOIAFgRIgBgBAADg0IAKAKAgDAWIgBAAIgNgOAgDAWIAEgTIgSAFAgJAqIAAAAIAKAMAgMA0IADgKIgPAEAAWAwIAGgPIgBgBIgNgPIgRAFIgGAUAArAfIgQABAAcAhIAJAMAApgIIgXAHAA1ADIgMgLABhhPIAAAAIgRgBABhhPIABgRABhhPIgKgLACJheIAAAAIgIAbIANANIAXgGACYhfIgPACIAAgBACJhdIAAgBIADgMAB/hpIAKALACxgxIgMgLACKgiIAFgTIgBgBIgRAGIgTAEIAAAAIAFgTIgOgQACYgTIAAAAIgOgPIgSAEIAFgSIANAOACngUIgPABACYgTIAKAMABwg+IgBgBABwg+IANAOIAEgTgABTglIAAABIAAgBIAXgHIANAOIABAAIgGAVIgPADABTglIAAAAABygJIALALABwAAIACgJACSgDIAGgQAC1hAIgQAEIAEgPABDggIAQgFABGgzIANAOABTgkIgEAOAh2AlIgRAFAhmBlIAHgQIAJAMAhRBUIgPABIABAAAhgBVIgOgPAiABKIAFgSIAFgTAikBDIAAABAiIBoIADgJIAAAAIALAMAiFBfIAFgVAiUBiIAPgDAi0BIIAQgFIgNgO");
    this.shape_1.setTransform(15.85,34.3,0.9,0.9,-7.2144,0,0,-1.7,-0.1);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    // Layer_10
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#4FD9FE").s().p("AgFBoIgOANIgKgRIgQAJIgGgRIgRAGIgEgTIgSAEIACgTIgUgBIAFgSIgSgFIAIgRIgRgIIALgPIgQgKIAOgNIgEgFIAHgCIADATIASgGIAFARIARgJIAJAPIAOgMIAKAKIgIACQgMAIADAGQABADAGAEIAKgCIALgJIgCgHIgEgEIAJgMIAPAKIAJgQIAQAJIAEgTIASAFIAAgTIATABIgDgTIATgCIgGgSIASgGIgKgQIAQgKIgHgIIALgCIgCATIAUABIgFATIASAEIgIARIARAIIgLAPIAQALIgPANIANANIgQAKIAKAPIgSAGIAGATIgTACIADATIgSgCIgCATIgSgEIgEASIgRgIIgIARIgPgLIgMAPgAAZBBIgHAEQAAABADAHQACAHAKgBIAIgHIgCgIQgGgEgFAAIgDABgAg1AzIgHAEQgBABACAHQADAHALgBIAHgHIgDgIQgGgEgDAAIgDABgAA0AoQgHAEgBABQgBACACAGQABAEAGADIAIgBIAJgIIgCgIQgGgEgEAAIgFABgAASAQIgHAEQgBACADAGQACAHALgBQAFgGACAAIgCgJQgGgEgEAAIgDABgAhnAWQAFAKALgCQAEgHACgBQgFgLgNgGQgHAHADAKgABEgIIgIADQAAACACAGQAEAHAKgBIAIgHIgEgHQgFgEgEAAIgDABgABYhBIgIAEQgBACAEAHQACAHAKgCIAIgGIgDgIQgFgEgEAAIgDAAgAhcgjQgDgGAFgEIAHgEIAMgDQABADAEADIACAIIgLAHIgJACQgGgDgCgDgAgSgtQgCgFAHgHQAHAAAGADIADAJQgDABgEAFIgDAAQgIAAgDgGgAg1g4QgCgFAIgHQAGgBAGAEIADAJIgHAGIgDAAQgIAAgDgGgAAZhVQgDgGAJgGQAFgBAHAEIADAJIgIAGIgBAAQgJAAgDgGgAhThXQgDgFAIgHQAHAAAGAEIADAIIgIAHIgBAAQgJAAgDgHgAgYhaQgCgFAHgHQAHAAAGADIADAJIgIAGIgCAAQgIAAgDgGg");
    this.shape_2.setTransform(8.4317,19.5507,0.9,0.9,-7.2144);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#12AED7").s().p("AAkBvQgDgGAAgCIAIgEQAFgCAIAGIACAIIgHAHIgCAAQgJAAgCgHgAgsBhQgCgGABgCIAHgEQAFgCAHAGIAEAIIgIAHIgBAAQgKAAgDgHgAA8BYQgCgGABgCQABgCAIgDQAGgDAIAGIADAIIgJAHIgJABQgFgDgCgDgAAcA/QgDgHABgCIAHgEQAFgCAIAGIADAIQgCABgGAGIgCAAQgJAAgCgGgAhXA4QgEgKAIgHQANAGAFAMQgCAAgFAIIgDAAQgIAAgEgJgAgsA3QgDgGAMgIIAIgCIgKgLIgNANIgKgRIgQAJIgGgRIgSAGIgDgTIgHACIgIgHIAQgKIgJgQIASgGIgHgSIATgCIgCgTIASABIABgTIASAFIAFgTIARAIIAIgQIAPALIAKgPIAMAOIAOgNIAKAQIAQgKIAGATIASgHIADATIAHgBIAIAIIgRAKIAKAPIgSAGIAHATIgTACIADATIgTgCIgBASIgSgEIgEASIgRgIIgJARIgOgLIgJAMIAEAFIACAHIgLAIIgKACQgGgDgBgDgAhDgPIgHAFQgFADACAGQACADAGADIAJgCIAMgHIgDgHQgDgDgCgDgAgDgKQADAHAKgBQAGgGACAAIgDgJQgHgEgGAAQgHAHACAGgAgggiQgIAHACAGQADAHALgBIAHgHIgDgJQgFgDgFAAIgCAAgAAug/QgIAHACAFQADAHAKAAIAIgHIgDgIQgGgEgFAAIgBAAgAg/hAQgHAGACAGQADAHAKgBIAIgGIgDgJQgGgDgFAAIgCAAgAgJg3QADAHAKgBIAHgHIgDgIQgGgEgFAAQgIAHACAGgABOAlQgDgHAAgBIAIgEQAFgCAIAFIADAJIgIAGIgDABQgIAAgCgHgABigSQgDgHAAgBIAIgEQAFgCAHAFIAEAJIgIAGIgEAAQgHAAgCgGg");
    this.shape_3.setTransform(6.6775,16.6219,0.9,0.9,-7.2144);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

    // Layer_13
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#4FD9FE").s().p("Ai6CQIgfg1QgOgZARgPQAEgFAGgEIBEBzQgMAHgKAAQgRAAgLgUgAi/AiIASgKIBDBzIgTAKgAigAQIASgLIBEB0IgTALgAiBgBIASgLIBEBzIgTALgAhigTIASgLIBEByIgTALgAhDglIATgLIBCBzIgSALgAgkg3IATgLIBCBzIgSALgAgFhJIASgKIBDBxIgTALgAAahbIASgLIBDByIgSALgAA5htIASgLIBEBzIgTAKgABYh/IASgLIBEBzIgTALgAB3iRIASgLIBDBxIABACIgTALgACXiiQAWgFAOAYIAfA1QAOAYgQAQg");
    this.shape_4.setTransform(25.1359,47.1342);

    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

    // Layer_11
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#12AED7").s().p("AjRBgQgrhJAWhRQAQg9AtgnQARgRAXgNQAagQAdgGQAygOA2AOQBSAXArBLIAmAvQAlAvAIAXIlnDVQhUhygEgIg");
    this.shape_5.setTransform(23.6248,41.075);

    this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

    // Layer_12
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#12AED7").s().p("AgHAEIgDgGIAHgEQADgDAHAEIAEAGIgGAHIgFAAQgEAAgDgEg");
    this.shape_6.setTransform(3.4,24.1326);

    this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style47, new cjs.Rectangle(-4.9,4.8,53.5,59.7), null);

//wig
(lib.style48 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AhQgXIAxg2IBwBmIgyA1g");
    this.shape.setTransform(-6.55,43.675);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_2
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AhZg9IDAAaQAVADAMAQQANAQgDAUQgDAUgQANQgRANgVgDIjAgaQgUgDgNgRQgMgRADgTQADgUAPgNQASgMAUADg");
    this.shape_1.setTransform(13.118,30.2801,1.3263,1.3263);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("ABZA/IjAgaQgUgDgNgRQgMgRADgTQADgUAPgNQASgMAUADIDAAaQAVADAMAQQANAQgDAUQgDAUgQANQgOAKgQAAIgIAAg");
    this.shape_2.setTransform(13.118,30.2801,1.3263,1.3263);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("Ahag9IDBAaQAUADANAPQANARgCAUQgEAVgRALQgQAOgUgDIjBgaQgTgDgOgRQgMgQADgUQADgUAQgNQARgMATADg");
    this.shape_3.setTransform(14.8525,17.0836,1.3263,1.3263);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("ABaA/IjBgaQgTgDgOgRQgMgQADgUQADgUAQgNQARgMATADIDBAaQAUADANAPQANARgCAUQgEAVgRALQgNALgQAAIgHAAg");
    this.shape_4.setTransform(14.8525,17.0836,1.3263,1.3263);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AhZg9IDBAaQAUADAMAQQANAQgDAUQgDAVgQAMQgRANgUgDIjBgaQgTgDgNgRQgNgRADgTQADgUAQgNQARgNAUAEg");
    this.shape_5.setTransform(14.8532,17.074,1.3263,1.3263);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("ABaA/IjBgaQgTgDgNgRQgNgRADgTQADgUAQgNQARgNAUAEIDBAaQAUADAMAQQANAQgDAUQgDAVgQAMQgOAKgQAAIgHAAg");
    this.shape_6.setTransform(14.8532,17.074,1.3263,1.3263);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AhZg9IDBAaQATADANAQQANAQgDAUQgDAVgRAMQgQANgUgDIjBgaQgUgDgNgRQgMgQADgUQADgUAQgNQARgNAUAEg");
    this.shape_7.setTransform(16.6094,3.9449,1.3263,1.3263);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("ABaA/IjBgaQgUgDgNgRQgMgQADgUQADgUAQgNQARgNAUAEIDBAaQATADANAQQANAQgDAUQgDAVgRAMQgNAKgQAAIgHAAg");
    this.shape_8.setTransform(16.6094,3.9449,1.3263,1.3263);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("ACjhWQiQAjAIBZQAHBaiuBeQivBfBihKQBihJgjhiQgkhhAzh7QAzh7BwgEQBxgDBVBOQBUBPiPAjg");
    this.shape_9.setTransform(19.8039,12.3781,1.3263,1.3263);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FFFFFF").s().p("AjZDzQBihJgjhiQgkhhAzh6QAzh8BwgEQBxgDBVBOQBUBPiPAjQiQAjAIBZQAHBaiuBeQhiA2gMAAQgKAAArghg");
    this.shape_10.setTransform(19.8039,12.3781,1.3263,1.3263);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style48, new cjs.Rectangle(-14.7,-25.1,69.1,76.6), null);

//superman
(lib.style37 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // hair
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("Aj5DeQgLg7AAgyQgIhTAfhFQAvhsBogyQBlgyBdAeQBHAXAzA2QASAPAPAUQgqgGgdACQgvACgQAXQgbAjAIAOQAHANAVAIQAWAHAVgKQAGgDAFgEQALgKAFgPQACgHAAgGQAKAYgJAaQgGASgNAMQgJAJgMAFQgdAPgfgKQgfgKgOgdQgGgMgCgLIhIAdQiJA5hdChIgEAHIgBgHg");
    this.shape.setTransform(61.0929,-3.0375);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // logo
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ABfAvQAAACgBACQgFAhgHAUQgLAMgJAJIiLifQgCgBgCgCQgQgTACgVQACgXAmgMQABAAABAAQABgBABAAQAzgKAtgCQAIALAIALQAPAYAJAaQAIAaADAeQAAAIAAAKQAAACAAACQAAALgBALg");
    this.shape_1.setTransform(107.8028,76.3814,1.3985,1.3978);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#F9B236").s().p("AALA9QAjAEAlgHIAHgCIgJALIgfAkgAAmAbQgMgIgKgCQgKgCgHADQgJACgCAGIgEADIgZgeIB1AJIAIABIAAATIAAAEIgbAEIgKABIgJgKgAhNgnIgKgLQgGgHALgRQAMgRAPgFQAQgFAIAAQgkAagEApIgGgFgAAugxIgogCQgWgBADgTQADgRASgEQARgDAUgBIAEAAQAPAYAJAag");
    this.shape_2.setTransform(109.5068,75.4029,1.3985,1.3978);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#D31F3A").s().p("AhNgiIgEgDQgQgTACgVQACgXAmgMIACAAIACgBQAzgJAtgDIAQAWIgEAAQgUABgRADQgTAEgCARQgDATAWABIAoACIAbADQAIAaADAdIgIgBIh1gJIAZAeIAEgDQABgGAJgCQAIgDAKACQAKACAMAIIAJAKIAKgBIAbgEQAAANgBANQglAHgjgEIAnAqIAfgkQgDAXgIAVIgUAWgAgrhnQgPAFgMARQgLARAGAHIAKALIAGAFQAEgpAkgaQgIAAgQAFg");
    this.shape_3.setTransform(107.8028,76.3814,1.3985,1.3978);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

    // body
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AgTk2QCLBiFGhWQAHAZAfATQAKAFAMAFQA5AYAvAvQBgBgAACFQAABPghBCQg+CdjeAjQlcAjlEg6QjggqiEkMQgQgngNgqQgSg4gLg/QgPhWANhAQANhAAZgZQAagaAmAAQAmAAAaAaQACACAlAzQAdAmAkAJQAKACAMgBQCsgUCXAFQAcACAQgCQAUgFABgMgAgXk6QACACACACAArhlQAEAbACAeQADCFiNAQQiLATiggUQh3gRgLhcQg4gChegOAgoklQA/BNAUBzAHkj+QjaCAjfAZAoGgFQgBgMAAgNQAKiZBQhg");
    this.shape_4.setTransform(50.7108,73.6703);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#2B6FBA").s().p("AktEmQjggqiEkLQgQgngOgqQBfAOA4ACQALBcB3AQQCgAUCLgTQCMgPgCiFQgDgegEgcQDggYDZiBIAXALQA4AXAwAwQBgBfAACHQAABOgiBCQg9CcjeAjQiEAOiAAAQjSAAjKglg");
    this.shape_5.setTransform(52.55,81.2203);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#D31F3A").s().p("AotC4QgSg4gLg/QgPhVANhAQANhAAZgZQAagaAmAAQAmAAAaAaIAnA1QAdAmAkAJQhQBfgKCZQAAANABAMQg4gChegOgABGhXQAUgFABgMQCMBiFGhWQAHAZAfATQjaB/jfAZQgUhyhAhNg");
    this.shape_6.setTransform(39.6108,53.075);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style37, new cjs.Rectangle(-20.9,-25.9,143.2,141.2), null);
//santa
(lib.style33 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADphuQASgFASgDQA2AMgOAuQjfBIi8CNQgigIgFgcQgDgQAHgYQAQgOAQgOQgdhBAwhLAiNB1QgkAcgaAQAkZBoQAIgEAKgBQAWgCARANQASAOADAWQABAIgBAHQgCAOgKALQgNASgWADQgXACgSgOQgRgNgDgXQgCgWANgSQAIgKALgFQAHgmAVg6QA6ijCngpQCkgpBhB/AhpAxQCMhxDGgu");
    this.shape.setTransform(31.2089,20.6921);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#CC0000").s().p("AizCpQgCgWgSgOQgRgNgWACQgKABgIAEQAGgmAVg6QA7ijCmgpQClgpBgB/QjFAuiMBxQgLgZAAgaQgBgqAegvQgeAvABAqQAAAaALAZIggAcQgHAYADAQQgkAcgbAQQABgHgBgIg");
    this.shape_1.setTransform(28.775,18.3732);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AkjCXQgRgNgDgXQgCgWANgSQAIgKALgFQAIgEAKgBQAWgCARANQASAOADAWQABAIgBAHQgCAOgKALQgNASgWADIgHAAQgSAAgQgMgAiNBJQgDgQAHgYIAggcQCMhxDGguIAkgIQA2AMgOAuQjfBJi8CMQgigIgFgcg");
    this.shape_2.setTransform(31.2089,25.0689);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style33, new cjs.Rectangle(-1,-1,64.4,43.4), null);
//punk
(lib.style31 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1,1,1).p("AARAfIgziDAhuBvIhGhDAiFCIIg3glAC8iHIghB/");
    this.shape.setTransform(22.6434,16.4244,1.2079,1.2079);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ADQgKIAdjNQnIgegRFzIBgBcQADhMAkgtQCPidCmAyg");
    this.shape_1.setTransform(23.0963,22.1517,1.2079,1.2079);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#33CC00").s().p("AjsB+QARlzHIAeIgdDNQimgyiPCdQgkAtgDBMgAiJBZIg2gmgAhxBAIhHhDgAANgPIgziFgACXg3IAiiAg");
    this.shape_2.setTransform(23.0963,22.1517,1.2079,1.2079);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style31, new cjs.Rectangle(-6.5,-5.2,59.2,54.7), null);
//princess
(lib.style30 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // lips
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AATAMQAYhDAHgUQAGgVgTgMQgTgMgtASQgDAngIAwQgEAUgTAyIAAACQAWAQAVApQAbgFAggSQAkgVgZgXQgagYgHgLgAg9A5QAygLAegi");
    this.shape.setTransform(62.6325,54.468);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#CC0000").s().p("Ag9A5QAygLAegiQAHALAaAYQAZAXgkAVQggASgbAFQgVgpgWgQgAg9A3QATgyAEgUQAIgwADgnQAtgSATAMQATAMgGAVIgfBXQgeAigyALg");
    this.shape_1.setTransform(62.6325,54.468);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    // eyelashes
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAlg4QgcgKgBgdAAQgTQghAOgTgmAATAbQgZASgbgSAAaA/QgKAogcgJ");
    this.shape_2.setTransform(25.6,39.7818);

    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

    // crown
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AAhgoIgfgrQADgDABgFQABgGgDgEQgEgFgFgBQgFgBgEAEQgFADgBAFQgBAGAEAFQADAEAFABQACAAABAAIgHAzIg3gVQACgDABgEQABgFgEgFQgDgEgFgBQgGgBgFADQgEAEgBAFQgBAGAEAEQADAFAGAAQAEABAEgCQAsBOABBJQA8AOAtgiQgNhRAMhMQAGABAFgEQAEgDABgGQABgFgEgFQgDgEgGgBQgFgBgFAEQgEADgBAGQgBAFADAEQABACACABg");
    this.shape_3.setTransform(8.1598,10.4828,1.4059,1.4059);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFD13B").s().p("AgbBoQgBhJgshOQgEACgEgBQgGAAgDgFQgEgEABgGQABgFAEgEQAFgDAGABQAFABADAEQAEAFgBAFIgDAHIA3AVIAHgzIgDAAQgFgBgDgEQgEgFABgGQABgFAFgDQAEgEAFABQAFABAEAFQADAEgBAGQgBAFgDADIAfArIAmgkIgDgDQgDgEABgFQABgGAEgDQAFgEAFABQAGABADAEQAEAFgBAFQgBAGgEADQgFAEgGgBQgMBMANBRQggAYgpAAQgPAAgRgEg");
    this.shape_4.setTransform(8.1598,10.4828,1.4059,1.4059);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style30, new cjs.Rectangle(-5.9,-5.7,75.80000000000001,72.60000000000001), null);

//police
(lib.style29 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // details
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#999999").s().p("AgPASQgGgIAAgKQAAgKAGgHQAGgHAJAAQAJAAAHAHQAGAHABAKQgBAKgGAIQgHAHgJAAQgJAAgGgHg");
    this.shape.setTransform(-6.545,114.1346,1.362,1.362);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#999999").s().p("AgPASQgGgIAAgKQAAgJAGgIQAGgHAJAAQAJAAAHAHQAGAIABAJQgBAKgGAIQgHAHgJAAQgJAAgGgHg");
    this.shape_1.setTransform(-5.895,126.3386,1.362,1.362);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#999999").s().p("AgPARQgGgGAAgLQAAgJAGgIQAHgHAIAAQAKAAAGAHQAGAIABAJQgBALgGAGQgGAIgKAAQgIAAgHgIg");
    this.shape_2.setTransform(-13.701,103.5416,1.362,1.362);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#999999").s().p("Ag+AoIBIhPIA1AAIhIBPg");
    this.shape_3.setTransform(-55.9485,97.7826,1.362,1.362);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // body
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AlHA8QAAAAABAAQCKgPgDiCQgKiVhOheQAZgFgFgTIHRAoQAPASAgAOQA4AXAuAvQBdBcAACDQAABNggBAQg8CYjYAiQjaAXjQgQQhKgFhIgLIgPkHQA+AAA6gIIApEf");
    this.shape_4.setTransform(-42.55,123.4325);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AlaFbIgpkfIACAAQCJgPgDiCQgKiVhNheQAZgFgFgTIHQAoQAPASAgAOQA4AXAuAvQBdBcAACDQAABNggBAQg8CYjYAiQh/ANh8AAQhYAAhXgGg");
    this.shape_5.setTransform(-36.575,123.4325);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#999999").s().p("AhBCAIgOkGQA9gBA5gHIApEdQhKgFhHgKg");
    this.shape_6.setTransform(-79.275,143.775);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

    // hat
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AAdAAQAAAMgJAJQgIAIgMAAQgLAAgJgIQgIgJAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALg");
    this.shape_7.setTransform(-70.0042,-1.1197,1.362,1.362);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#999999").s().p("AgUAUQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg");
    this.shape_8.setTransform(-70.0042,-1.1197,1.362,1.362);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AjgBCQAAgCAAgDQAAhsBChOQBChNBcAAQBdAABCBNQBCBOAABsQAAAFAAAEQgBAXgDAWAjcBxQDcAbDbgbIACACIA/BLQkTAbkkgdIA1hLIAKAAQgEgXAAgYQDhAVDggR");
    this.shape_9.setTransform(-61.2017,26.2628,1.362,1.362,-20.9075);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#000000").s().p("AkbC8IA1hLIAKAAQDcAbDbgbIACACIA/BLQiDANiIAAQiTAAiZgPgAjgBCIAAgFQAAhsBChOQBChNBcAAQBdAABCBNQBCBOAABsIAAAJQhkAIhlAAQh7AAh9gMg");
    this.shape_10.setTransform(-61.2017,26.2628,1.362,1.362,-20.9075);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#999999").s().p("AjcAQQgDgVgBgYQDhAVDggRQgBAXgDAUIgCgCQhuAOhtAAQhuAAhugOg");
    this.shape_11.setTransform(-56.5591,38.5112,1.362,1.362,-20.9075);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style29, new cjs.Rectangle(-90.7,-6,93.9,165.8), null);
//pirate
(lib.style28 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // hat
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AAEAhQgEgBgDgEIgBgDIgIABQgOgBgFgJQgFgKAFgKQAGgNAMgIQANgIANABQANABAGAJQAFAKgFAMIgEAFIABADQADAEgCAFQgBAFgEADIgLAGQgDACgEAAIgDAAgAgLAAQgDACAAACQAAABAAAAQgBABABAAQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAQABABAAAAQABAAAAABQADAAADgBIACgEQABgCgCgDQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIgFAAgAAIgLIgDADQAAADABADIAEACIAFAAQADgCAAgCQABgDgCgCIgEgDIgBgBIgEACg");
    this.shape.setTransform(28.5,20.9,1,1,0,0,0,0.2,0.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgKAcQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgBgBQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIARggQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgEIACgCQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIAAABIABAAIAEAAIADADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABIgDACIgDAAIgSAhQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgCAAg");
    this.shape_1.setTransform(31.6,26.1292);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgbAIQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAAgBIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgEIAEgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIACAEIAlgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIACAEIgCAEIgBAAIABAAIACADQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEgBIgBgCIglAAIgCADQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
    this.shape_2.setTransform(31.625,26.1688);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("Aj2CaIgWgKIAJgDQARgIAPgMQAugrgBhPQgBhRAkgzQAKgQAQgMQAHgGAXgPQABAAACgBQAAAAABgBQAHgCAHgEQASgHAUgCQA9gGBGAnQBHAoA7gUQARgHAQgLIAKgKIgDAZAEKiPIgQBzQgDAAgEABQhYAVhrA+QhpA+g+BEQgHAIgFAHIhugt");
    this.shape_3.setTransform(31.1,26.4,1,1,0,0,0,-0.2,-2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("Aj0CWQAKgGAJgIQAtgqAAhRQAAhQAjgyQAKgQAQgNQAHgHAJgFIASgIQASgIAUgBQA8gHBHAoQBGAnA7gTQASgHAOgKIgKBDIgaAFQhZAVhrA+QhpA/g9BEIgZAfg");
    this.shape_4.setTransform(33.175,29.6479);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FBBF07").s().p("AiiC+IAagfQA9hEBpg/QBqg+BZgVIAbgFIgEAgIgHABQhYAVhrA+QhpA+g9BEIgNAPgAj9CbIAEgCIgVgIIAJgEQARgIAPgNQAugqgBhPQAAhRAjgzQALgQAPgNQAHgFAXgOIADgCIABgBIAPgGQARgGAUgDQA8gHBHAoQBHAnA7gTQASgHAPgLIAKgKIgDAWIAHgGIgDAZIgFAFIgCABQgOAKgRAHQg8AThGgnQhGgog9AHQgTABgSAIIgTAIQgIAFgHAHQgQANgLAQQgjAyAABQQABBRguAqQgIAIgKAGIgCACg");
    this.shape_5.setTransform(31.525,28.4229);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // hook
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AAjAzQAWAXgCAhQgCAfgXAXQgIAAgIgBQhDgDgxgsQAAgDAAgDQACghAYgXQAZgXAgAAQANAAAKAEQAJgKABgHQAEgTgDgOQgFgOgPgbQgRgbALghQALghAXgGQAWgGAVAJQAVAIALAZQAIAQgDAPQgRAcgQgcQABgEAAgDQABgLgHgJQgIgJgKgEQgLgEgKAIQgKAJgBANQgCANARAbQADAEACAFQACAEACADQAIASACARQADAWgJARQgIASgDAFIAAAAQABACACABg");
    this.shape_6.setTransform(73.0309,120.6326,1,1,33.2303);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#2E4573").s().p("Ag8BfIAOgNIAJgIQAIgJACgIQAEgUgEgNQgEgOgRgaQgRgbAMgiQAMghAWgFQAVgGAWAIQAUAJAMAYQAHAQgDAPQgQAdgRgdIACgHQAAgLgHgIQgHgKgKgEQgKgEgKAIQgLAJgBANQgBAOAQAaIAGAKIAEAHQAHAQACARQACAXgIASIgKAWIAAABQgEAGgRAVIgGABQgUAAgEgYg");
    this.shape_7.setTransform(78.883,119.4097,1,1,33.2303);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#E9F1F8").s().p("AgUATQgEgEADgJQADgIAJgIQAIgIAIgDQAJgCAFAEQAEAFgDAJQgDAIgJAIQgIAIgIACIgGACQgFAAgDgEg");
    this.shape_8.setTransform(64.1999,124.0055,1,1,33.2303);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#4D6B7D").s().p("AAmBCQhDgDgxgsIAAgGQACggAYgXQAZgXAfgBQANABALADIgIAIIgPANQAFAbAZgEQASgVADgGIADADQAWAXgCAgQgCAegXAYIgQgBgAgXgnQgJAEgIAHQgJAJgDAIQgDAJAEAEQAFAEAJgCQAJgDAIgHQAJgIADgJQADgIgEgGQgDgCgFAAIgGAAg");
    this.shape_9.setTransform(65.8163,127.2024,1,1,33.2303);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style28, new cjs.Rectangle(3.4,7.3,85.69999999999999,129.39999999999998), null);
//parrot
(lib.style27 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AjBAHQALACALgBQCrgSCXAEQAbADAPgD");
    this.shape.setTransform(26.7,43.946);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // body
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AFyALQgEgCgEgCQhIgdAthDQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbQgRgugmgmQhGhGhiAAQgOAAgMACQhSAIg7A8Qg8A7gIBRQgCAOAAAOQAABeBABEQAiAmgfAHQAIAJAGAKQABgHABgHAFyALQAAAAAAABQgEAigTAGQgSAGgXgaQgBgBAAgBQABAPgBAOQgEAigTAGQgSAGgXgaQgIgKgHgMQgDATgHAQQgOAfgTAAQgUAAgNgfQgJgUgDgYQgJARgLAOQgXAagSgGQgTgGgEgiQgBgQACgTQgDAEgDAEQgSAUgPABQANAjAFArAHhB2QgRgggbgcQgfgegkgRAHhB2QAFAMAFAeQAEAegYARQgYARghgYQgCgBgFgPQgBATgDAJQgPAngYABQgXABgSglQgBgCAAgBQgEATgFAQQgPAmgYABQgXABgSglQgHgOgEgQQgKAUgMARQgaAggXgGQgWgGgGgpQgEgZAEgdQgQARgSANQgiAXgTgNQgJgFgDgKQgXAqhAAHQhjAOhzgOQhggOAChTQAIhtA5hEQgagGgVgcQgagkgBgBQgTgTgbAAQgbAAgTATQgSARgJAuQgKAtALA9QAPBQAbBAQBeDACgAeQDnAqD6gaQCegZAshwQAYgvAAg4QAAg6gYgvgAAiCDQAAAAAAgBQAAAAAAABIAAAAQABAKAAAJQABAigMAYAgOgIQASAbAMAi");
    this.shape_1.setTransform(50.3232,47.1425,1.3911,1.3936);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AAtAAQAAACAAABQAAAYgNARQgNARgTAAQgSAAgNgRQgNgTAAgZQAAgBAAgBQAAgYANgRQANgRASAAQATAAANARQANATAAAYg");
    this.shape_2.setTransform(87.8417,2.2936,1.3911,1.3936);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("rgba(0,51,204,0.976)").s().p("AjKEIQiggehei/QgbhAgPhPQgLg9AKguQAJguASgSQATgTAbAAQAbAAATATIAbAmQAVAbAaAGQg5BFgIBuQgCBSBgANQBzAOBjgNQBAgHAXgrQADAKAJAGQATAMAigXQASgNAQgRQgEAeAEAZQAGApAWAGQAXAGAaghQAMgQAKgUQAEAQAHAOQASAlAXgCQAYgBAPgmQAFgQAEgSIABADQASAlAXgCQAYgBAPgmQADgKABgSQAFAPACABQAhAYAYgRQAYgRgEgdQgFgegFgNQAYAwAAA4QAAA5gYAvQgsBwieAZQhfAKhbAAQiWAAiRgbg");
    this.shape_3.setTransform(50.3232,72.5411,1.3911,1.3936);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("rgba(255,204,0,0.976)").s().p("AgUBmQgHgOgEgQQgKAUgMARQgaAggXgGQgWgGgGgpQgEgZAEgdQgQARgSANQgiAXgTgNQgJgFgDgKQAMgYgBgiIgBgSIAAgBIAAABQgFgrgNgjQAPgBASgUIAGgIQgCATABAQQAEAiATAGQASAGAXgaQALgOAJgRQADAYAJAUQANAfAUAAQATAAAOgfQAHgQADgTQAHAMAIAKQAWAaASgGQATgGAEgiQABgOgBgPIABACQAXAaASgGQATgGAEgiIAAgBQAkARAfAeQAbAcARAgQAFAMAFAdQAEAegYARQgYARghgYQgCgBgFgPQgBATgDAJQgPAngYABQgXABgSglIgBgDQgEATgFAQQgPAmgYABIgBAAQgWAAgRgkg");
    this.shape_4.setTransform(85.6216,67.8673,1.3911,1.3936);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("rgba(255,0,0,0.976)").s().p("AhmEuIAAgCIAAACgAANEGQgJgTgDgZQgIASgLAOQgXAagSgGQgTgGgEgiQgBgQACgTIgGAIQgSAUgPABQgMgigTgcIACgOIgCAOQgGgKgIgJQAggHgjgmQhAhEAAhdQAAgPACgNQAIhRA8g8QA8g8BSgHQAMgCANAAQBiAABGBFQAmAnARAuQABAbgRAfQgOAdgXAFQgOABgJAHQgSAMACAcQAEA3A3AfIADACQgtBCBIAfIAIADIAAABQgEAigTAHQgSAFgXgZIgBgDQABAQgBAOQgEAigTAGQgSAGgXgaQgIgKgHgMQgDASgHAQQgOAggTAAQgUAAgNgggABljCQgNASAAAXIAAADQAAAaANARQANASATAAQATAAANgSQAMgRABgXIAAgDQAAgZgNgTQgNgRgTAAQgTAAgNARg");
    this.shape_5.setTransform(69.3747,23.3372,1.3911,1.3936);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

    // feathers
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AgIBKQA/gRAngdQApgcAdgrQAdgqgyAAQgzAAhRBJQhRBIg2gKQg2gKAEATQADATAyAGQAxAGBAgQg");
    this.shape_6.setTransform(38.9076,11.9536,1.392,1.3925,0,-38.8892,-38.9886);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("rgba(6,55,202,0.976)").s().p("Ah4BUQgzgGgCgTQgFgTA2AKQA2AKBRhIQBShJAyAAQAyAAgdAqQgdArgpAcQgnAdg/ARQguAMgnAAQgOAAgNgCg");
    this.shape_7.setTransform(38.9076,11.9536,1.392,1.3925,0,-38.8892,-38.9886);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ABKAdQgsAwgsAVQgtAWgzAGQgzAGAYgsQAXgtBngmQBmglARg0QARg0AOAMQAPAMgSAvQgSAugsAwg");
    this.shape_8.setTransform(31.7075,5.3869,1.3933,1.3912,0,-76.6855,103.2695);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("rgba(6,55,202,0.976)").s().p("AiJBYQAXgtBngmQBmglARg0QARg0AOAMQAPAMgSAvQgSAugsAwQgsAwgsAVQgtAWgzAGIgKABQgmAAAVgng");
    this.shape_9.setTransform(31.7075,5.3869,1.3933,1.3912,0,-76.6855,103.2695);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("ABKAdQgsAwgsAVQgtAWgzAGQgzAGAYgsQAXgtBngmQBmglARg0QARg0AOAMQAPAMgSAvQgSAugsAwg");
    this.shape_10.setTransform(32.3135,-8.1652,1.3929,1.3916,0,-60.1162,119.7963);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("rgba(6,55,202,0.976)").s().p("AiJBYQAXgtBngmQBmglARg0QARg0AOAMQAPAMgSAvQgSAugsAwQgsAwgsAVQgtAWgzAGIgKABQgmAAAVgng");
    this.shape_11.setTransform(32.3135,-8.1652,1.3929,1.3916,0,-60.1162,119.7963);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style27, new cjs.Rectangle(-20.9,-19.8,142.5,133.9), null);

//panda
(lib.style26 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // earfront
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgeBOQgpgsADguQADgvAigfQAggeAeABQAeABAGAkQAGAlgVAzQgVA0APAfQAPAggaAAQgaAAgngrg");
    this.shape.setTransform(57.2365,-14.4667,1.4161,1.4161);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // body
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("ABLA6IAAABQgSAYgbAAQgbAAgRgYQgTgaAAgjQAAgCAAgBQABgiASgZQARgYAbAAQAbAAASAYIAAAAQASAaAAAkQAAACAAABQAAAhgSAYQAAAOgMAQQgbAjgmAAQgkAAgbgjQgbgkAAgzQAAgDAAgCQAAgwAbgkQAbgiAkAAQAmAAAbAiQAJAMADAM");
    this.shape_1.setTransform(86,2.325);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AHKgfQgWgmAng5QgDgCgCgBQhOgrgFhQQgDgpAZgRQANgJAUgCQAggGAVgpQAXgtgBgmQgZhCg1g1QhjhjiLAAQiMAAhhBjQhjBiAACMQAACFBaBgQALALAGAKQDXDIEPiVQAPAZAnAQQA6AYAxAwQBgBgAACJQAABQghBDQg/CejgAkQliAklHg8QjjgqiFkPQgnhcgUhwQgQhXAOhAQANhBAZgZQAbgbAmAAQAmAAAbAbQACACAlAzQAdAnAlAJQALACALgBQCugUCaAFQAbADARgDQBPBgALCbQADCIiOAQQiNATiigUQiIgTADh1QAKibBRhhAgognQAkgHgYgk");
    this.shape_2.setTransform(50.6858,47.6035);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AkeJKQjjgriFkPQgnhbgUhxQgQhVAOhBQANhBAZgZQAbgbAmAAQAmAAAbAbIAnA1QAdAnAlAIQhRBhgKCbQgDB2CIATQCiAUCNgTQCOgQgDiIQgLibhPhhQAkgHgYgkQDXDJEPiVQAPAYAnARQA6AZAxAvQBgBgAACJQAABQghBCQg/CfjgAjQiGAOiBAAQjWAAjMglgAEfmaQgbglAAgzIAAgGQABgwAagjQAbgjAlAAQAmAAAbAjQAJAMADALQgSgYgbAAQgaAAgTAZQgSAYgBAiIAAAEQAAAkATAZQATAZAaAAQAbAAASgZIABgBQgBAPgMAQQgbAjgmAAQglAAgbgjg");
    this.shape_3.setTransform(50.6858,52.2785);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("AjaDrQgHgJgKgMQhahgAAiEQAAiLBihjQBjhiCKAAQCMAABiBiQA2A2AYBCQABAlgXAuQgUApghAFQgUADgNAIQgYARACApQAFBPBOArIAFADQgnA5AWAnQhzBAhqAAQiNAAh7h0gABhjeQgbAjAAAwIAAAGQAAAzAbAlQAbAjAkAAQAnAAAbgjQAMgQAAgPQARgYABghIAAgDQAAglgSgZIAAgBQgEgLgIgMQgbgjgnAAQgkAAgbAjg");
    this.shape_4.setTransform(69.7271,15.7506);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

    // earback
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AgeBOQgpgsADguQADgvAigfQAggeAeABQAeABAGAkQAGAlgVAzQgVA0APAfQAPAggaAAQgaAAgngrg");
    this.shape_5.setTransform(71.4365,-14.4667,1.4161,1.4161);

    this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style26, new cjs.Rectangle(-21.8,-31.5,145,147.1), null);


//king
(lib.style25 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADggEQgfAjhXAyQhYAyivA3IhCjmQAhgMAXgEIAPAwQAagFAagGIgPgxQAggIAggMIAOAyQAkgMAjgQIgWgvQAYgLAYgMIAUAwQAVgLAUgMIgTgwQAIgFAJgGQAJgFAJgGIAAAAgABIAaQAAAPgKAKQgKAKgPAAQgOAAgLgKQgKgKAAgPQAAgPAKgKQALgJAOAAQAPAAAKAJQAKAKAAAPgAChADIgpgaIAUg3IAlAigAhnB8IgogeIAbg/IAnAig");
    this.shape.setTransform(22.375,18.55);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#CC0000").s().p("AigBHIAcg+IAnAhIgaA7gABogtIAUg3IAkAiIgQAvg");
    this.shape_1.setTransform(24,20.825);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#66CCCC").s().p("AgYAYQgKgKAAgOQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAOgLAKQgKALgOAAQgNAAgLgLg");
    this.shape_2.setTransform(26.1,21.15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#666600").s().p("AjfgsQAhgMAXgEIAPAwQAagEAagHIgPgwQAggJAggMIAOAzQAkgNAjgPIgWgvIAwgYIAUAwIApgWIgTgxIARgLIASgLIAAAAIBXC1QgfAjhXAzQhYAxivA2gAiPBeIAoAeIAag7IgngigAAMABQgKALAAAOQAAAOAKAKQALALAOAAQAPAAAKgLQAKgKAAgOQAAgOgKgLQgKgJgPAAQgOAAgLAJgAB4gXIApAaIAQguIglgig");
    this.shape_3.setTransform(22.375,18.55);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style25, new cjs.Rectangle(-1,-1,46.8,39.1), null);
//holmes
(lib.style24 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // hat
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AghhOQAIANAFANQAGANAHAeQAHAdAkgFQAjgEgCAZQgDAWAIAWQAJAWgoADQgpACgMgfQgNgfgJgrQgIgqgNgWQgJgNgNgXIAYgFQACgDAEAHQAEAIAIANg");
    this.shape.setTransform(76.3318,69.8885);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#663300").s().p("AgKBMQgNgfgJgrQgIgqgNgWIgWgkIAYgFQACgDAEAHIAMAVQAIANAFANQAGANAHAeQAHAdAkgFQAjgEgCAZQgDAWAIAWQAJAWgoADIgGAAQgkAAgLgdg");
    this.shape_1.setTransform(76.3318,69.8885);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAGAGQghAHgUAAQgUABALgTQALgUAWAJQAWAJAHgHQAJgcARgKQAQgKAKAPQAJAQgQAPQgJAJgaARQgBgCgBgCQgCAAgEABQgCAAgCABQgIAMgYAlAA8AaQghgLABgDQABgIgNAGAAOAGQgBgCgBgBQgBACgFABQgBABgBABQgEABAGgDAAGgOQAJANgDAE");
    this.shape_2.setTransform(12.6771,0.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AB7gdQAxBPgYAZQhwBDhtAnQgmg/gYhJQgYhJAFgvQAFgvA0gnQA1goA6AuQA7AuAyBQg");
    this.shape_3.setTransform(22.32,16.8993);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#663300").s().p("AiHAtQgYhJAFgvQAFgvA0gnQA1goA6AuQA7AuAyBQQAxBPgYAZQhwBDhtAnQgmg/gYhJg");
    this.shape_4.setTransform(22.32,16.8993);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AhwBeQgjAQhPAOADjh7QhKBRgrAf");
    this.shape_5.setTransform(26.2,25.575);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AjQC9QgPgZgJgdQgbhYAmhRQAFgKAFgKQA0hbBmgfQBlggBeAwQAkASAbAaQAaAaARAhIAAAAQi3DIkNAvg");
    this.shape_6.setTransform(24.4306,18.985);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#666600").s().p("AjQC9QgPgZgJgdQgbhYAmhRIAKgUQA0hbBmgfQBlggBeAwQAkASAbAaQAaAaARAhIAAAAQi3DIkNAvg");
    this.shape_7.setTransform(24.4306,18.985);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AEhhsQALAShLAtQhLAsh4AsQh3AuhdASQhdAUgMgSQgNgTBMgsQBLguB4grQB3guBdgSQBdgTANASg");
    this.shape_8.setTransform(31.682,24.3632);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#666600").s().p("AkfBtQgNgTBMgsQBLguB4grQB3guBdgSQBdgTANASQALAShLAtQhLAsh4AsQh3AuhdASQgxALgaAAQgZAAgFgJg");
    this.shape_9.setTransform(31.682,24.3632);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("ADNiUQAMAMgzAzQgzA0hVA8QhUA/hFAiQhEAkgMgLQgNgMA0g0QAyg0BVg8QBUg+BFgjQBFgjAMALg");
    this.shape_10.setTransform(21.7352,28.8827);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#666600").s().p("AjLCVQgNgMA0g0QAyg0BVg8QBUg+BFgjQBFgjAMALQAMAMgzAzQgzA0hVA8QhUA/hFAiQg0AbgTAAQgGAAgDgCg");
    this.shape_11.setTransform(21.7352,28.8827);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style24, new cjs.Rectangle(-1,-6.5,85.9,87.9), null);

//hat
(lib.style23 = function(mode,startPosition,loop,reversed) {
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AirCKIhDAYQhlAlB8AFQEJgoDPh/QBHg4hyAOIg+AWIhwjcIkxB4gACYARIlDB5");
    this.shape.setTransform(28.4161,20.425);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AjuCiIBDgYIFDh5IA+gWQBygOhHA4QjPB/kJAoQh8gFBlglgAkJhTIExh4IBwDcIlDB5gACYARg");
    this.shape_1.setTransform(28.4161,20.425);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style23, new cjs.Rectangle(-1,-1,21.5,15.3), null);

//grandpa
(lib.style22 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // tye
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgFgaQAjBPAAAAIBWAhIgahEQgBAAhegsgAh0hTIBJgCIAkA2g");
    this.shape.setTransform(102.4292,58.0706,1.3905,1.3908);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF0000").s().p("AAeA1IgjhPIBfAsIAaBEgAh0hTIBJgCIAkA2g");
    this.shape_1.setTransform(102.4292,58.0706,1.3905,1.3908);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    // hair
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ABqh8Qg9BWA4AxQgwBRhVAsQgDgGgHgHQg/hEAAhdQAAg1AUgsQBRBEBug5g");
    this.shape_2.setTransform(51.8133,20.2058,1.3905,1.3908);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgqB7Qg/hEAAhdQAAg1AUgrQBSBEBtg6Qg9BWA4AxQgxBRhUAsIgKgNg");
    this.shape_3.setTransform(51.8133,20.2058,1.3905,1.3908);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

    // eyeglasses
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ABTg0IAbgHAhbA8QgPgEgDgLQgEgQAfgVQAdgSAugM");
    this.shape_4.setTransform(82.3564,5.359,1.3905,1.3908);

    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

    // body
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("ABFgmIAAAeQAAAUgPAOQgPAPgUAAIglAAQgUAAgPgPQgPgOAAgUIAAgeQAAgBAAgBICJAAQAAABAAABg");
    this.shape_5.setTransform(78.2055,96.7677,1.3905,1.3908);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AFQgoQkPhlj1h3QDEApCcAAQAKAJAQAHQApARAiAiQAxAwAOBAQAFAZAAAaQAAA5gXAvQgsBwifAZQjhAXjUggIgSi/QA7ABA3gHQBlgLgChfQgIhug5hFQASgDgCgN");
    this.shape_6.setTransform(73.1234,76.9243,1.3905,1.3908);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#333399").s().p("AlCDzIgSi/QA7ABA3gHQBlgLgChfQgIhug5hFQASgDgCgNQAbAOgfgTQD1B3EPBlQAFAZAAAaQAAA5gXAvQgsBwifAZQheAJhcAAQiAAAh7gSg");
    this.shape_7.setTransform(73.1234,76.9243,1.3905,1.3908);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("AkBhtQDFApCaAAQAKAJARAHQApARAiAiQAwAwAOA/QkNhkj2h3g");
    this.shape_8.setTransform(83.9002,55.8801,1.3905,1.3908);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style22, new cjs.Rectangle(24.7,-4,96.89999999999999,118.3), null);

//grandma
(lib.style21 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // hair
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABagpQALAYgTAbQgSAdglASQgkARgigEQgigEgLgXQgLgYASgcQATgdAlgRQAkgSAiAEQAiAFALAXg");
    this.shape.setTransform(35.0848,-23.6535,1.4037,1.4024,-19.4863);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgrBGQgjgEgKgXQgLgYASgcQATgdAlgRQAkgSAiAEQAhAFAMAXQALAYgTAbQgSAdglASQgdAOgbAAIgOgBg");
    this.shape_1.setTransform(35.0848,-23.6535,1.4037,1.4024,-19.4863);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ACojRQBEAygTA+QgTA+gWAYQgPgGgSAAQgkAAgaAZQgZAbAAAmQAAAmAZAbQAEAEAFAEQhABHhKAVQhTAXgyg2Qgxg2ANhiQANhiBFhWQBEhWBSgWQBUgXBFAzg");
    this.shape_2.setTransform(52.9211,-0.5547,1.4039,1.4022);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("Ai1DPQgxg2ANhiQANhiBFhWQBEhWBSgWQBUgXBFAzQBEAygTA+QgTA+gWAYQgPgGgSAAQgkAAgaAZQgZAbAAAmQAAAmAZAbIAJAIQhABHhKAVQgZAHgVAAQg0AAgjgmg");
    this.shape_3.setTransform(52.9211,-0.5547,1.4039,1.4022);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // eyeglasses
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ABTg0IAbgHAhbA8QgPgEgDgLQgEgQAfgVQAdgSAugM");
    this.shape_4.setTransform(81.8856,4.6527,1.4039,1.4022);

    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

    // body
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("ABFgmIAAAeQAAAUgPAOQgPAPgUAAIglAAQgUAAgPgPQgPgOAAgUIAAgeQAAgBAAgBICJAAQAAABAAABg");
    this.shape_5.setTransform(78.092,97.0591,1.4039,1.4022);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("ACzAvIAUg1QgLAAgGAEQgEACgCAEQgDADAAAEQgDAFgEADQgIAFgKgBQgKgCgFgHQgDgFgCgEQAAgEAAgDQgBgFgEgEQgFgHgKgCQgKgBgIAFQgEAEgDAEQgCADgBAFQgCACgEADQgIAGgKgBQgKgBgGgIQgCgEgCgEQgBgDABgEQgBgFgDgFQgHgIgJgBQgBAAAAAAAAPghQgBABgBAAQgJgBgHAGQgEAEgDAEQAAAEgCAEQgCADgEAEQgHAGgKgBQgKgBgGgHQgEgEgBgEQAAgEgBgEQgCgFgDgEQgGgHgKgBQgKgBgIAGQgEAEgCAEQAAAEgCAEQgCADgEAEQgIAGgKAAQgJgBgHgIQgEgEgBgEQAAgEgBgEQgBgFgEgEQgEgFgogBIAhAz");
    this.shape_6.setTransform(71.277,38.8092,1.4033,1.4017);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("AAPAmIAAAAQhRABhkgmIgggzQAnABAFAFQADAEABAFQACAEgBAEQACAEADAEQAHAIAKABQAJAAAIgGIAGgHQACgEAAgEQACgEAEgEQAIgGAKABQAKABAGAHQAEAEABAFQABAEAAAEQABAEAEAEQAGAIAKABQAKABAIgHIAGgHQACgEAAgEQACgEAEgEQAHgGAJABIACgBIAAAAIABAAQAJABAHAIQADAFABAFQgBAEABADQABAEADAFQAHAHAJABQAKABAIgGQAFgCACgDQAAgFACgDQADgEAEgEQAIgFAKABQAKACAGAHQADAEABAFQgBAEABADIAFAJQAFAHAKACQAKABAIgFQAEgDADgFQABgEACgDQACgDAEgDQAGgEALAAIgUA1QgZAIgiAAQgtAAg8gNg");
    this.shape_7.setTransform(71.277,39.3219,1.4033,1.4017);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ACsjbQAKAJAQAHQApARAiAiQAxAwAOBAQAFAZAAAaQAAA5gXAvQgsBwifAZQjhAXjUggIgSi/QA7ABA3gHQBlgLgChfQgIhug5hFQASgDgCgNAFQgoQkPhlj1h3");
    this.shape_8.setTransform(72.9677,76.8053,1.4039,1.4022);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FF99FF").s().p("AlCDzIgSi/QA7ABA3gHQBlgLgChfQgIhug5hFQASgDgCgNQAbAOgfgTQD1B3EPBlQAFAZAAAaQAAA5gXAvQgsBwifAZQheAJhcAAQiAAAh7gSg");
    this.shape_9.setTransform(72.9677,76.8053,1.4039,1.4022);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FFFFFF").s().p("AkBhtQDFApCaAAQAKAJARAHQApARAiAiQAwAwAOA/QkNhkj2h3g");
    this.shape_10.setTransform(83.8481,55.5884,1.4039,1.4022);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style21, new cjs.Rectangle(20.9,-36.2,101,150.7), null);
//freud
(lib.style18 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgsgjIBZAmIhYAhg");
    this.shape.setTransform(106.3477,62.0465,1.3959,1.3959,0,-14.2108,165.7892);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgsgjIBZAmIhYAhg");
    this.shape_1.setTransform(108.1345,61.4838,1.3959,1.3959,-14.2108);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    // Layer_2
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AgZA2QAAgBAAgCIAAhmQAAgKAHgIQAIgIAKAAIAAAAQALAAAHAIQAIAIAAAKIAABmQAAACAAABAgZA2QABgKAGgGQAIgIAKAAIAAAAQALAAAHAIQAHAGABAKQgBAJgHAHQgHAIgLAAIAAAAQgKAAgIgIQgGgHgBgJg");
    this.shape_2.setTransform(97.2167,34.9869,1.397,1.397,19.9855);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#663300").s().p("AAABOQgKAAgIgJQgGgGgBgJQABgKAGgGQAIgIAKAAIAAAAQALAAAHAIQAHAGABAKQgBgKgHgGQgHgIgLAAIAAAAQgKAAgIAIQgGAGgBAKIAAgDIAAhlQAAgLAHgIQAIgHAKAAIAAAAQALAAAHAHQAIAIAAALIAABlIAAADQgBAJgHAGQgHAJgLAAg");
    this.shape_3.setTransform(97.2167,34.9869,1.397,1.397,19.9855);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ACPgRQgWAJgoAPQhWAhgogHQhPgPgqhQQgrhQAThkQANhGAogzQhCAGhYBDQhXBDADCoQACCnB3BxQB2BwEAAWQEBAXAAhGQAAhHhqg/QhphAgQgpQBkg1AcgXQAcgYAQgSQAQgSAOg4IhDglQACAnglAjQgjAhhBAdQAKgEAFgCIgkAQQgqAQA4gXg");
    this.shape_4.setTransform(73.545,18.3986);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#CCCCCC").s().p("AB4FnQkAgWh2hwQh3hxgCinQgDioBXhDQBYhDBCgGQgoAzgNBGQgTBkArBQQAqBQBPAPQAoAHBWghIA+gYQg4AXAqgQIAkgQIgPAGQBBgdAjghQAlgjgCgnIBDAlQgOA4gQASQgQASgcAYQgcAXhkA1QAQApBpBAQBqA/AABHQAAA0iUAAQgvAAg+gFg");
    this.shape_5.setTransform(73.545,18.3986);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#CCCCCC").s().p("AAFgBIAWgJIgjAOIgSAHIAfgMg");
    this.shape_6.setTransform(87.325,16.844);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

    // Layer_1
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("ABagjIAbgHAhsArQgLgLADgKQAFgQAlgEQAigBAtAL");
    this.shape_7.setTransform(81.1856,2.3888,1.397,1.397);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AGnhcQgGgCgFgCQhkgrA/hdQgDgBgCgBQhNgrgEhOQgDgpAYgRQANgJATgCQAhgFAUgpQAXgtgCglAGnhcQAzAYArArQBfBeAACHQAAAGAAAGQgBAEAAADQgDBDgdA6Qg9CdjeAjQlbAjlEg6QgXgEgWgHIgYj6QgSgDgSgCQiGgTADhzQAKiYBQhhQAKACALAAQCsgUCYAEQAbADAQgDQAPgDAFgIICPDDICBgRIgDB3IHHBTAhxidQACgEAAgFQAAgEgCgCIIYBQAiFiSQBQBhAKCYQADCGiNAPQh7ARiMgNAhvimILTF+");
    this.shape_8.setTransform(59.7717,57.8453);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("Alpi8QAAgDgBgDIIYBQQAzAYArAsQBfBeAACGIAAANg");
    this.shape_9.setTransform(84.7,59.975);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#663300").s().p("AnLFEQgXgEgWgHIgXj6QCLANB7gRQCNgPgCiFQgLiZhPhhQAOgDAGgIICQDEIB/gRIgDB3IHHBSQgDBDgcA6Qg+CdjeAjQiDANh/AAQjTAAjKgkgAIPAeInHhSIADh3Ih/ARIiQjEQABgEAAgFILTF+IgBAHg");
    this.shape_10.setTransform(68.15,77.1203);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style18, new cjs.Rectangle(-2.4,-19,124.4,133.2), null);

//dinosaur
(lib.style16 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_6
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgWAZQgKgKAAgPQAAgOAKgKQAJgKANAAQANAAAKAKQAJAKAAAOQAAAPgJAKQgKAKgNAAQgNAAgJgKg");
    this.shape.setTransform(55.2723,-30.5493,1.4108,1.4108);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ABQAAQAAAigYAYQgXAZghAAQggAAgYgZQgXgYAAgiQAAghAXgZQAYgYAgAAQAhAAAXAYQAYAZAAAhg");
    this.shape_1.setTransform(50.734,-29.5249,1.4108,1.4108);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("Ag4A6QgXgYAAgiQAAghAXgYQAYgZAgAAQAhAAAYAZQAXAYAAAhQAAAigXAYQgYAZghAAQggAAgYgZg");
    this.shape_2.setTransform(50.734,-29.5249,1.4108,1.4108);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // Layer_5
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AiUg3QCShBAXAJQBOAFAcBeQAWAzAAAgQAAAhgqAJQgrAFgrhDQgRgniYA3");
    this.shape_3.setTransform(133.5,82.1683);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#669900").s().p("AAVAzQgRgniYA3IAAh6QCShBAWAJQBPAFAcBeQAWAzAAAgQAAAhgqAJIgGAAQgoAAgog+g");
    this.shape_4.setTransform(133.5,82.1683);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

    // Layer_1
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AC/CVQAjABh8gtQh7gtg7iTQgBgCgBgCQg4iPAPjoQARkNClhIQClhJCdAnQCbAnAyBgQAyBfgmB2QiIA0g2BDQg3BCgrCNQgJAbgCAcQABAMACAMQACAMAEAMQATBFA6BHQB1CQD6hkQADAxAhAaQAhAaA+BJQA9BJAACIQAABQghBCQg+CejgAjQlgAklGg7Qjigqi4jrQhKhXg3h8Qg3h9i0ElQi0EmBinIQBinHDOAKQDNAJBMBWQBNBVAaAsQAaAtgGACQhQBhgLCbQgDB1CIATQCgAUCNgTQCOgQgCiHQgLibhQhhg");
    this.shape_5.setTransform(46.7727,44.2781);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#669900").s().p("Ag1MzQjigqi4jrQhKhXg3h8Qg3h9i0ElQi0EmBinIQBinHDOAKQDNAJBMBWQBNBVAaAsQAaAtgGACQhQBhgLCbQgDB1CIATQCgAUCNgTQCOgQgCiHQgLibhQhhQAjABh8gtQh7gtg7iTIgCgEQg4iPAPjoQARkNClhIQClhJCdAnQCbAnAyBgQAyBfgmB2QiIA0g2BDQg3BCgrCNQgJAbgCAcIADAYIAGAYQATBFA6BHQB1CQD6hkQADAxAhAaQAhAaA+BJQA9BJAACIQAABQghBCQg+CejgAjQiFAOiCAAQjVAAjKglg");
    this.shape_6.setTransform(46.7727,44.2781);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

    // Layer_2
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AAPgQQAAgCAAgFQgEgJgIAEQgKACgFAYQgIAYgCACQADgBATADQAWACABACg");
    this.shape_7.setTransform(115.8104,53.896,1.4113,1.4113,-23.7448);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("AgBAaQgSgDgDABIAJgaQAHgYAJgCQAIgEAEAJIAAAHIAIAuQgBgCgXgCg");
    this.shape_8.setTransform(115.8104,53.896,1.4113,1.4113,-23.7448);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AAVAAQACgBAFgBQAGgIgGgGQgGgJgYAEQgZACgDgBQACACAEASQAHAWgCACg");
    this.shape_9.setTransform(98.9104,56.0093,1.4113,1.4113,-67.9865);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FFFFFF").s().p("AgYAAQgEgSgCgCQADABAZgCQAYgEAGAJQAGAGgGAIIgHACIgoAYQACgCgHgWg");
    this.shape_10.setTransform(98.9104,56.0093,1.4113,1.4113,-67.9865);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AAVAAQACgBAFgBQAGgIgGgGQgGgJgYAEQgZACgDgBQACACAEASQAHAWgCACg");
    this.shape_11.setTransform(83.0216,45.4148,1.4113,1.4113);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FFFFFF").s().p("AgYAAQgEgSgCgCQADABAZgCQAYgEAGAJQAGAGgGAIIgHACIgoAYQACgCgHgWg");
    this.shape_12.setTransform(83.0216,45.4148,1.4113,1.4113);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AAMAZQACABAEADQAKABACgJQADgJgPgSQgQgUgBgCQgBACgMAOQgPAQgCAAg");
    this.shape_13.setTransform(80.918,27.9525,1.4113,1.4113,-23.438);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#FFFFFF").s().p("AASAdIgGgEIgpgVQACAAAPgQQAMgOABgCQABACAQAUQAPASgDAJQgCAIgJAAIgBAAg");
    this.shape_14.setTransform(80.918,27.9525,1.4113,1.4113,-23.438);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AAIAZQABABADAEQAKADAFgIQAFgJgLgVQgLgXAAgCQgCACgPALQgTANgBgBg");
    this.shape_15.setTransform(89.7984,9.1666,1.4113,1.4113,-13.1926);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#FFFFFF").s().p("AAMAeIgEgFIgjgeQABABATgNIARgNQAAACALAXQALAVgFAJQgEAGgFAAIgGgBg");
    this.shape_16.setTransform(89.7984,9.1666,1.4113,1.4113,-13.1926);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AAOAYQACAAAEADQAKgBABgKQABgKgTgOQgUgQgBgCQAAADgKARQgLASgCAAg");
    this.shape_17.setTransform(104.9523,-0.7748,1.4113,1.4113,25.9902);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#FFFFFF").s().p("AAOAYIgtgMQACAAALgSQAKgRAAgDQABACAUAQQATAOgBAKQgBAKgKABIgGgDg");
    this.shape_18.setTransform(104.9523,-0.7748,1.4113,1.4113,25.9902);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style16, new cjs.Rectangle(-48.6,-42.3,198,173.2), null);
// deer
(lib.style15 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // lights
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAOAnQgWgFgNgSQgOgTAFgWQACgHACgGQAHAAAGAAQAWAFANASQANATgEAWQgBAHgDAGQgGAAgHAAg");
    this.shape.setTransform(28.4135,-28.6819,1.3931,1.3921);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF9900").s().p("AAOAnQgWgEgNgUQgOgRAFgYIAEgMIANAAQAWAEANAUQANASgEAWIgEANIgNAAg");
    this.shape_1.setTransform(28.4135,-28.6819,1.3931,1.3921);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AgdAcQgFgWAMgTQAMgUAWgFQAGgBAHAAQADAGABAGQAGAWgMATQgMAUgWAFQgGABgHAAQgDgGgCgGg");
    this.shape_2.setTransform(57.9415,-32.0313,1.3922,1.3928,-65.1919);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FF0000").s().p("AgdAcQgFgWAMgTQAMgUAWgFIANgBIAEAMQAGAWgMATQgMAUgWAFIgNABIgFgMg");
    this.shape_3.setTransform(57.9415,-32.0313,1.3922,1.3928,-65.1919);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AgKAoQgQgRAAgXQAAgWAQgQQAFgFAFgDQAGADAFAFQAQAQAAAWQAAAXgQARQgFAEgGAEQgFgEgFgEg");
    this.shape_4.setTransform(8.6172,-12.3538,1.3928,1.3923,31.7425);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FF0000").s().p("AgKAoQgQgRAAgXQAAgWAQgQIAKgIIALAIQAQAQAAAWQAAAXgQARIgLAHIgKgHg");
    this.shape_5.setTransform(8.6172,-12.3538,1.3928,1.3923,31.7425);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AgJAnQgRgQAAgXQAAgWARgQQAFgFAEgEQAGAEAFAFQAQAQAAAWQAAAXgQAQQgFAFgGAEQgEgEgFgFg");
    this.shape_6.setTransform(-2.296,-36.3213,1.3927,1.3924,34.9999);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#66CC00").s().p("AgKAnQgQgQAAgXQAAgWAQgQIAKgIIALAIQAQAQAAAWQAAAXgQAQIgLAIIgKgIg");
    this.shape_7.setTransform(-2.296,-36.3213,1.3927,1.3924,34.9999);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AgJAoQgRgRAAgXQAAgWARgQQAFgFAEgDQAGADAFAFQAQAQAAAWQAAAXgQARQgFAEgGAEQgEgEgFgEg");
    this.shape_8.setTransform(58.3245,-52.3612,1.3927,1.3924,-34.7361);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FF9900").s().p("AgJAoQgRgRAAgXQAAgWARgQIAJgJIALAJQAQAQAAAWQAAAXgQARIgLAIIgJgIg");
    this.shape_9.setTransform(58.3245,-52.3612,1.3927,1.3924,-34.7361);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AgJAnQgRgQAAgXQAAgWARgRQAFgEAEgEQAGAEAFAEQAQARAAAWQAAAXgQAQQgFAFgGAEQgEgEgFgFg");
    this.shape_10.setTransform(31.8511,-43.6457,1.3925,1.3926,46.7573);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#003399").s().p("AgKAoQgQgRAAgXQAAgWAQgRIAKgIIALAIQAQARAAAWQAAAXgQARIgLAIIgKgIg");
    this.shape_11.setTransform(31.8511,-43.6457,1.3925,1.3926,46.7573);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // ear
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("ABtAsQgtAghAAAQhAAAguggQgcgUgKgYQAKgXAcgTQAughBAAAQBAAAAtAhQAcATAMAXQgMAYgcAUgAA8AeQgbAIghAAQggAAgXgRQgOgJgFgMQAFgMAOgJQAXgQAgAAQAgAAAWAJQAXAHA+AVQg0AVgbAJg");
    this.shape_12.setTransform(39.3964,2.7614,1.3931,1.3921);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#FF6633").s().p("AhXAWQgOgKgFgMQAFgMAOgJQAXgQAgAAQAgAAAWAJIBVAcQg0AVgbAJQgbAIggAAQghAAgXgQg");
    this.shape_13.setTransform(43.889,2.7614,1.3931,1.3921);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#8D3300").s().p("AhuAsQgcgUgJgYQAJgXAcgTQAuggBAAAQBBAAAsAgQAcATAMAXQgMAYgcAUQgsAghBAAQhAAAgugggAg3gVQgOAJgEAMQAEAMAOAKQAXAQAgAAQAhAAAbgIQAbgJA0gVIhVgcQgWgJggAAQggAAgXAQg");
    this.shape_14.setTransform(39.3964,2.7614,1.3931,1.3921);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

    // anthlerfront
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("ADHBNQgTAVgdARQhGAohYgNQhZgNg4g7Qg3g8AGhFQAAgJABgFQAEgXATgaQASgbAlAFQAkAFAOAnQANAogYAPQgYAPgIAFQgJAGgCABQACAEADAFQATAcAWAWQgKgXAbgcQAbgdAjATQAhATgBAVQgBAWgNARQgOASgOAIQAlAMArgEQgCgCgCgCQgKgPADgSQADgSAOgMQAOgLASACQARADAKAPQAKAPgCATQgBAFgCAGQAfgKAhgEg");
    this.shape_15.setTransform(28.4893,-25.0241,1.3931,1.3921);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#8D3300").s().p("AgHCOQhZgNg4g7Qg3g8AGhFQAAgJABgFQAEgXATgaQASgbAlAFQAkAFAOAnQANAogYAPIggAUIgLAHIAFAJQATAcAWAWQgKgXAbgcQAbgdAjATQAhATgBAVQgBAWgNARQgOASgOAIQAlAMArgEIgEgEQgKgPADgSQADgSAOgMQAOgLASACQARADAKAPQAKAPgCATIgDALQAfgKAhgEIgEALQgTAVgdARQg1Aeg/AAQgVAAgVgDg");
    this.shape_16.setTransform(28.4893,-25.0241,1.3931,1.3921);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

    // nose
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#FFFFFF").s().p("AgLAMQgFgFABgHQgBgGAFgGQAFgEAGgBQAHABAFAEQAEAGAAAGQAAAHgEAFQgFAGgHgBQgGABgFgGg");
    this.shape_17.setTransform(113.0798,2.269,1.3924,1.3914);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AA6AAQAAAXgRARQgRAQgYAAQgXAAgRgQQgRgRAAgXQAAgXARgQQARgRAXAAQAYAAARARQARAQAAAXg");
    this.shape_18.setTransform(117.3344,4.1368,1.3924,1.3914);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#FF0000").s().p("AgoAoQgRgQAAgYQAAgWARgRQARgQAXAAQAYAAARAQQAQARABAWQgBAYgQAQQgRAQgYAAQgXAAgRgQg");
    this.shape_19.setTransform(117.3344,4.1368,1.3924,1.3914);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

    // Layer_2
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AjBAHQALACALgBQCrgSCWAEQAcADAQgD");
    this.shape_20.setTransform(27,44.096);

    this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

    // tail
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("AgzA7QCLiLglhyQgCAAAAAAQgmAAgZAaQgZAYgNBBQgNA8AOBOQAAAFABAEQANBDASA8");
    this.shape_21.setTransform(-13.6989,52);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("rgba(255,204,102,0.976)").s().p("Ag0gLQANhBAZgYQAZgaAmAAIACAAQAlByiLCLQgOhPANg7g");
    this.shape_22.setTransform(-13.6989,45.175);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

    // body
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("rgba(255,102,102,0.447)").s().p("AghAhQgNgNAAgUQAAgSANgOQAOgPATAAQAUAAAOAPQAOAOgBASQABAUgOANQgOAOgUABQgTgBgOgOg");
    this.shape_23.setTransform(73.4237,19.0207,1.3931,1.3921);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AnIDhQBeDACgAeQDnAqD6gaQCegZAshwQAYgvAAg4QAAhhhEhEQgigigpgRQhIgdAthDQgCgBgBgBQgbgPgPgVQgPgWgCgcQgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbQgRgugmgmQgzgzhCgOQgZgFgaAAQgOAAgMACQgNABgMACQhCAOgyAzQg8A7gIBRQgCAOAAAOQAAA7AZAwQAPAdAYAaQAiAmgfAHQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hEQgagGgVgcQgagkgBgBQgTgTgbAAQgbAAgTATQgSARgJAuQgKAtALA9QAPBQAbBAg");
    this.shape_24.setTransform(50.7218,47.5203,1.3931,1.3921);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f().s("#000000").ss(1.5,1,1).p("AAtAAQAAACAAABQAAAYgNARQgNARgTAAQgSAAgNgRQgNgTAAgZQAAgBAAgBQAAgYANgRQANgRASAAQATAAANARQANATAAAYg");
    this.shape_25.setTransform(88.293,2.7206,1.3931,1.3921);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#663300").s().p("AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQg5BEgIBtQgCBTBgAOQBzAOBjgOQBkgLgChgQgHhtg4hEQAfgHgigmQgYgagPgdQgZgwAAg7QAAgOACgOQAIhRA8g7QAygzBCgOQAMgCANgBQAMgCAOAAQAaAAAZAFQBCAOAzAzQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQACAcAPAWQAPAVAbAPIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgagADulsQgNARAAAYIAAACQAAAaANASQANARATAAQATAAANgRQAMgRABgYIAAgDQAAgZgNgSQgNgSgTAAQgTAAgNASg");
    this.shape_26.setTransform(50.7218,47.5203,1.3931,1.3921);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

    // anthlerback
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("ACeCoQgaALghADQhRAGhKgzQhKgygZhNQgZhMAjg9QAEgJAEgEQANgTAdgQQAbgPAgAUQAeAUgEApQgGAqgcADQgcADgKACQgJABgDAAQABAFAAAFQAEAjALAcQAAgYAlgPQAlgPAWAgQAXAfgKAUQgKAUgUAKQgTAKgQAAQAcAbAoAQQgBgDAAgDQgEgSAKgPQALgPASgEQASgEAOAKQAPAJADASQADASgLAPQgDAFgFAFQAhAEAfAKg");
    this.shape_27.setTransform(54.5616,-37.7443,1.393,1.3921,-4.2595);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#8D3300").s().p("Ag4CJQhKgygZhNQgZhMAjg9QAEgJAEgEQANgTAdgQQAbgPAgAUQAeAUgEApQgGAqgcADIgmAFIgMABIABAKQAEAjALAcQAAgYAlgPQAlgPAWAgQAXAfgKAUQgKAUgUAKQgTAKgQAAQAcAbAoAQIgBgGQgEgSAKgPQALgPASgEQASgEAOAKQAPAJADASQADASgLAPQgDAFgFAFQAhAEAfAKIgIAJQgaALghADIgRAAQhIAAhCgtg");
    this.shape_28.setTransform(54.5616,-37.7443,1.393,1.3921,-4.2595);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style15, new cjs.Rectangle(-20.6,-63.3,147,177.7), null);



//clown
(lib.style13 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // hat
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("AgHAlIgMAOIABgSIgQAKIAHgSIgSAFIALgPIgSgBIAPgKIgRgGIASgFIgOgMIASABIgJgQIARAHIgFgSIAPALIABgSIAKAPIAGgRIAFASIAMgOIgBASIAQgJIgHARIASgFIgLAPIASABIgPAKIARAGIgSAFIAOAMIgSgBIAKAQIgSgHIAFASIgPgLIgBASIgKgPIgGARg");
    this.shape.setTransform(-61.1404,-61.0578,1.4042,1.4042);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AArAjIgSgHIAFASIgPgLIgBASIgKgPIgGARIgFgSIgMAOIABgSIgQAKIAHgSIgSAFIALgPIgSgBIAPgKIgRgGIASgFIgOgMIASABIgJgQIARAHIgFgSIAPALIABgSIAKAPIAGgRIAFASIAMgOIgBASIAQgJIgHARIASgFIgLAPIASABIgPAKIARAGIgSAFIAOAMIgSgBg");
    this.shape_1.setTransform(-61.1214,-61.0548,1.4047,1.4047);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AhIh7IACAAIAqAyIAhApIAmAtIAtA1QhMA5hdABQgDAAgDAAIAFhNIAFhSg");
    this.shape_2.setTransform(-49.4985,-42.0217,1.4047,1.4047);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFCC00").s().p("AhAB8IAEhNQA0gfAjgwIAmAtQgtBKhPAlIgFAAgAgyh7IACAAIAqAyQgWAWgbAQg");
    this.shape_3.setTransform(-52.6239,-42.0217,1.4047,1.4047);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FF0000").s().p("AApgMIAtA1QhMA5hdABQBPglAthKgAhQg8QAcgQAWgWIAhApQgjAxg0Adg");
    this.shape_4.setTransform(-49.1825,-38.4749,1.4047,1.4047);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // hair
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AA2AEQAEAUgPARQgPATgYAEQgOAEgNgDQAEAXgQAUQgOAUgZAHQAAADABABQADALgFAIQgCAFgEADQACALAAAJQABAAACAAQAIgCAHAFQAHAFACAIQACAJgFAHQgEAHgJACQgBAAgBABQALANADATQAFAVgFATQATAGADAOQABAEgBAEQAGAEABAGQABAHgEAJQAGABAGADQANAHADAMQACAOgIANQgIALgOADQgOADgNgHQgNgHgDgOQgBgGABgHQgGADgIACQAAABAAACQAAAEAAAFQgCAFgCAFQgBABgBABQAAABAAABIgBABQgBABgBAAQgCADgDACQgDADgDABQgFADgFAAQgCAAgDAAQAAAAgBAAQgLAAgIgGQgDgDgCgCQgBgBAAAAQgEgFgBgEQgBgDgBgDQgCgFAAgFQAAgFACgEQgHgFgBgGQgBgDABgDQgFAFgHACIgBAAQAAABgBABQAAAAgBABIgBACQAAADgCADQgDAHgHABQgGACgEgDQgCAAgDAAQgBAAAAAAQgLgBgIgGQgDgDgCgCQgBAAAAgBQgEgEgBgFQgCgDgBgDQgBgEAAgFQAAgLAFgJQACgDADgEQABgBABgBQADgCACgCQADgCADgBQAAAAABAAIgBgBQgKADgLgDQgPgFgIgNQgJgPADgPQADgHADgGIgNgLQgMgCgIgJQgCACgCAAQgFABgFgGQgEgFgCgIQgDgIADgGQADgHAEgBQABAAABAAQAAgBAAgBQgFAAgEgBQgCAAgCACQgEACgFABQgCAAgDAAQgBAAAAAAQgGAAgDgCQgFgCgGgEQgCgBgCgCQgBgBgBgBQgDgEgCgFQgBgDgBgDQgBgFAAgFQAAgEABgFQABgGADgDQABgDACgCQgJgDgHgHQAAgBgBgBQgFgGgCgIQgCgFAAgFQAAgQAKgLQABgBABAAQgGgCgFgDQgDgDgCgBQAAgBgBgBQgEgEgBgFQgCgDAAgCQgCgGAAgFQAAgEACgFQAAgFADgFQACgEADgDQABgCACAAQACgCACgCQABgBAAAAQAAgBgBgCQgDgOAEgNQgCgCgDgCQAAgBgBgBQgFgGgCgIQgBgFAAgFQAAgQAJgLQACgBABgBQACgCADgCQADgCADgBQAFgBAFAAQgBgBAAgBQgEgUAMgRQAIgMAMgGQgBgDgBgCQgCgFAAgFQAAgQALgLQABgBABgBQAAgCgBgDQgDgMAFgKQAGgKAKgDQAFAAAEAAQACgBABgCQACgDADgBQAIgHAMAAQALAAAIAGQABAAACACQgFgHgBgHQgCgFAAgFQAAgPAKgLQABgCACAAQACgDACgBQAJgFAKAAQAHAAAHAEQACgCADgBQgCgEAAgFQAAgCAAgBQAAgBABAAQAAgDABgCQABgHAEgHQABgCACgCQACgCADgBQABgBAAAAQAIgGALAAQAGAAAFACQABAAABAAQABgHAEgFQABgDABgBQADgCACgCQABgBABAAQAHgGAMAAQAFAAAGACQAEACADACQABAAACACQACABABACQADACACADQABgDACgBQABgDABgCQACgCADgBQABgBABAAQAIgHALAAQAFAAAGACQACgEADgEQALgLAPAAQAAAAABAAQABgHAFgHQABgBACgCQABgDADgBQABgBABAAQAHgGALAAQAKAAAIAFQACABACACQABABABACQAFAFADAGQACAGABAGQANgKARgEQAegGAZAQQAIAGAIAIQgBgMADgKQAFgQALgCQALgDAMANQAFAHAFAJQAZgBAWAMQAIAEAGAFQACgCACgBQAIgFAKAAQAPAAAKALQALALAAAPQAAAEgBAFQgCAHgEAFQAAABgBABIAAAAQADAAAFAAQAOAAAKAKQAKALAAAQQAAAMgGAJQAGAJAAALQAAAGgBAEQACgBADAAQATAAANAOQAOAPAAATQAAAUgOAOQgNAOgTAAQgEAAgEgBQACAFAAAFQAAAMgKAIQgFAHgIACQgBAHgFAGQAAAAAAABIAAABIgBAAQgCABAAACQgLALgOAAQgPAAgKgLQgHgIgCgJQgTADgNgNQgGgGgCgKIgBAAQgDAGgFAGQgOAOgUgBQgMAAgKgFQAAABgBAAQgXANgagFQgYgEgLgTQgIAHgJAFIgBAAQAJAHAFAJQAJASgDATQgFATgRAJQgGAFgHABQAPAKAEAPg");
    this.shape_5.setTransform(-48.875,3.475);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FF6600").s().p("Ah6GpIgBAAQgLAAgIgGIgFgFIgBgBQgEgFgBgEIgCgGIgCgKQAAgFACgEQgHgFgBgGIAAgGQgFAFgHACIgBAAIgBACIgBABIgBACQAAADgCADQgDAHgHABQgGACgEgDIgFAAIgBAAQgLgBgIgGIgFgFIgBgBQgEgEgBgFIgDgGQgBgEAAgFQAAgLAFgJIAFgHIACgCIAFgEQADgCADgBIABAAIgBgBQgKADgLgDQgPgFgIgNQgJgPADgPIAGgNIgNgLQgMgCgIgJIgEACQgFABgFgGQgEgFgCgIQgDgIADgGQADgHAEgBIACAAIAAgCQgFAAgEgBIgEACIgJADIgFAAIgBAAQgGAAgDgCQgFgCgGgEIgEgDIgCgCQgDgEgCgFIgCgGIgBgKIABgJQABgGADgDIADgFQgJgDgHgHIgBgCQgFgGgCgIIgCgKQAAgQAKgLIACgBQgGgCgFgDIgFgEIgBgCQgEgEgBgFIgCgFIgCgLIACgJQAAgFADgFIAFgHIADgCIAEgEIABgBIgBgDQgDgOAEgNIgFgEIgBgCQgFgGgCgIIgBgKQAAgQAJgLIADgCIAFgEIAGgDIAKgBIgBgCQgEgUAMgRQAIgMAMgGIgCgFIgCgKQAAgQALgLIACgCIgBgFQgDgMAFgKQAGgKAKgDIAJAAIADgDIAFgEQAIgHAMAAQALAAAIAGIADACQgFgHgBgHIgCgKQAAgPAKgLIADgCIAEgEQAJgFAKAAQAHAAAHAEQACgCADgBQgCgEAAgFIAAgDIABgBIABgFQABgHAEgHIADgEQACgCADgBIABgBQAIgGALAAQAGAAAFACIACAAQABgHAEgFIACgEIAFgEIACgBQAHgGAMAAQAFAAAGACIAHAEIADACIADADIAFAFIADgEIACgFQACgCADgBIACgBQAIgHALAAQAFAAAGACQACgEADgEQALgLAPAAIABAAQABgHAFgHIADgDQABgDADgBIACgBQAHgGALAAQAKAAAIAFIAEADIACADQAFAFADAGIADAMQANgKARgEQAegGAZAQQAIAGAIAIQgBgMADgKQAFgQALgCQALgDAMANQAFAHAFAJQAZgBAWAMQAIAEAGAFIAEgDQAIgFAKAAQAPAAAKALQALALAAAPIgBAJQgCAHgEAFIgBACIAAAAIAIAAQAOAAAKAKQAKALAAAQQAAAMgGAJQAGAJAAALQAAAGgBAEIAFgBQATAAANAOQAOAPAAATQAAAUgOAOQgNAOgTAAIgIgBQACAFAAAFQAAAMgKAIQgFAHgIACQgBAHgFAGIAAABIAAABIgBAAIgCADQgLALgOAAQgPAAgKgLQgHgIgCgJQgTADgNgNQgGgGgCgKIgBAAQgDAGgFAGQgOAOgUgBQgMAAgKgFIgBABQgXANgagFQgYgEgLgTQgIAHgJAFIgBAAQAJAHAFAJQAJASgDATQgFATgRAJQgGAFgHABQAPAKAEAPQAEAUgPARQgPATgYAEQgOAEgNgDQAEAXgQAUQgOAUgZAHIABAEQADALgFAIQgCAFgEADQACALAAAJIADAAQAIgCAHAFQAHAFACAIQACAJgFAHQgEAHgJACIgCABQALANADATQAFAVgFATQATAGADAOIAAAIQAGAEABAGQABAHgEAJQAGABAGADQANAHADAMQACAOgIANQgIALgOADQgOADgNgHQgNgHgDgOQgBgGABgHIgOAFIAAADIAAAJIgEAKIgCACIAAACIgBABIgCABIgFAFIgGAEQgFADgFAAIgFAAgAiBE2IADgCIgBAAIgCACg");
    this.shape_6.setTransform(-48.875,3.475);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

    // nose
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
    this.shape_7.setTransform(15.2734,3.9371,1.4047,1.4047);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ABGAAQAAAdgUAUQgVAVgdAAQgcAAgVgVQgUgUAAgdQAAgcAUgUQAVgVAcAAQAdAAAVAVQAUAUAAAcg");
    this.shape_8.setTransform(12.2702,6.0106,1.4047,1.4047);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FF0000").s().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVg");
    this.shape_9.setTransform(12.2702,6.0106,1.4047,1.4047);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

    // check
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FF0000").s().p("AggAfQgNgNAAgSQAAgRANgOQAOgNASAAQAUAAANANQANAOAAARQAAASgNANQgNAOgUAAQgSAAgOgOg");
    this.shape_10.setTransform(-36.3,24.35,1.6855,1.6855,0,0,0,-1.3,-0.1);

    this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

    // face
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f().s("#000000").ss(1.5,1,1).p("ACZiNQAAACAAABQAAAYgNARQgNARgTAAQgSAAgNgRQgOgSAAgaQAAgBAAgBQABgYANgRQANgSASAAQATAAANASQANASAAAZgAisCIQCaByDAhP");
    this.shape_11.setTransform(-35.2763,29.0779,1.4047,1.4047);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("ADHDnQgggdAigyQgCgBgCgBQg3gfgDg4QgCgdARgMQAJgGAOgCQAXgEAPgcQAQgggBgaQgRgvgmgmQhFhFhjAAQhhAAhGBFQhFBGAABhQAABeA/BEQAQASADAK");
    this.shape_12.setTransform(-38.8191,20.556,1.4047,1.4047);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#FFFFFF").s().p("AiTC0QgDgKgQgSQg/hEAAhdQAAhiBFhGQBGhFBhAAQBjAABFBFQAmAmARAvQABAagQAgQgPAdgXAEQgOABgJAGQgRAMACAdQADA4A3AfIAEACQgiAyAgAdQhPAghJAAQhnAAhbhDgABmiMQgNARgBAYIAAADQAAAZAOASQANASASAAQATAAANgSQANgRAAgYIAAgCQAAgagNgSQgNgRgTAAQgSAAgNARg");
    this.shape_13.setTransform(-38.8191,22.8271,1.4047,1.4047);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

    // body
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#FF0000").s().p("AggAeQgOgNAAgRQAAgRAOgMQAOgMASAAQAUAAANAMQAOAMAAARQAAARgOANQgNAMgUABQgSgBgOgMg");
    this.shape_14.setTransform(-7.5342,100.7974,1.4047,1.4047);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#FF0000").s().p("AggAeQgNgNAAgRQAAgRANgMQANgNATAAQATAAAOANQANAMAAARQAAARgNANQgOANgTAAQgTAAgNgNg");
    this.shape_15.setTransform(-5.0761,75.8646,1.4047,1.4047);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#FF0000").s().p("AggAeQgOgMAAgSQAAgRAOgMQAOgNASAAQATAAAOANQAOAMAAARQAAASgOAMQgOANgTAAQgSAAgOgNg");
    this.shape_16.setTransform(-40.5438,106.0649,1.4047,1.4047);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#FF0000").s().p("AggAeQgNgMAAgSQAAgQANgNQAOgNASAAQAUAAANANQANANAAAQQAAASgNAMQgNAMgUAAQgSAAgOgMg");
    this.shape_17.setTransform(-23.6878,87.4531,1.4047,1.4047);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#FF0000").s().p("AggAeQgOgMAAgSQAAgRAOgMQANgNATAAQATAAAOANQAOAMAAARQAAASgOAMQgOANgTAAQgTAAgNgNg");
    this.shape_18.setTransform(-38.788,68.139,1.4047,1.4047);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f().s("#000000").ss(1.5,1,1).p("AgPiRIAgEj");
    this.shape_19.setTransform(-67.05,105.475);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("ACpk6QAOAOAaALQA5AYAwAvQBgBgAACGQAABQghBCQg+CdjfAjQjwAZjkgUAk+lrQADATgZAFQBQBhALCaQACCFiNAQQgLABgKAC");
    this.shape_20.setTransform(-27.75,84.5071);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#66CC00").s().p("Al4FjIggkjIAUgDQCOgQgDiFQgKiahRhhQAZgFgDgTQDYCgEPhvQAOAOAZALQA6AYAwAvQBgBgAACGQgBBQghBCQg+CdjeAjQiFAOiCAAQhnAAhmgJg");
    this.shape_21.setTransform(-27.75,84.5071);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style13, new cjs.Rectangle(-89.9,-69.7,113,191.60000000000002), null);

//chef

(lib.style12 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ABphQQAsgpA1gbQApgWgHhBQg/gFgVAqQgcA3grAsIAYATIAhAbABAgiIArAdABAgiQgfAlgYAxQACARgEATQgKAygqAqQgrArgyALQgxAJgcgcQgdgcAKgxQALgyAqgrQArgqAygKQAWgEASACQAsgVAkgbAgehlIA+AsIAgAXAAkiHIAtAk");
    this.shape.setTransform(57.0206,111.8135);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AEMADQCDh0iNgeQgJiuibB+QiCgmhrBQQhHAtgIBbQjGAyClBMQAXBxB7g4AEMADIA8BTQjbACjBCdIgZhLIgZhNAEMADIg7hR");
    this.shape_1.setTransform(23.3796,3.9418);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#999999").s().p("ABWgcIgTACQg9AGgqAYQgdAQgTAYQA8h8BuA0g");
    this.shape_2.setTransform(44.8,120.209);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#E0BD14").s().p("AgkAKQAbgTAVgXIAZAUQgWAUgSAYg");
    this.shape_3.setTransform(63.9,105.05);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#CCCCCC").s().p("AjXDXQgdgcAKgxQALgyAqgrQArgqAygKQAWgEASACQAsgVAkgbIAgAXQgfAlgYAxQACARgEATQgKAygqAqQgrArgyALQgMACgLAAQghAAgVgVgAjPCAQAUgYAdgQQArgZA8gGIATgCQgggPgdAAQhDAAgrBYgABRhjQArgsAcg3QAVgqA/AFQAHBBgpAWQg1AbgsApg");
    this.shape_4.setTransform(57.0206,111.8135);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#F0F0F0").s().p("ACWgeQi0gWh3CAQBdjrDOCBg");
    this.shape_5.setTransform(25.575,0.3099);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("AhtCqIgZhNIAZBNQh7A4gXhxQilhMDGgyQAIhbBHgtQBrhQCCAmQCbh+AJCuQCNAeiDB0Ig7hRIA7BRIA8BTQjbACjBCdgAh/AoQB3iAC0AWQhJgug7AAQhrAAg8CYgAhtCqg");
    this.shape_6.setTransform(23.3796,3.9418);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style12, new cjs.Rectangle(-10.7,-21.5,92.5,158), null);

// businessman
(lib.style11 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_2
    this.instance = new lib.duckEye();
    this.instance.setTransform(46.2,19.75,1,1,0,0,0,6.6,9);

    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiHjAQgHgQgNgLQhUhAA5hQQgpg9AHhJQACg7Awg3QAxg4BJgMQBJgLA6gBQA7gBA+APQA+AOBGAzQBEAzAfg7QAeg7gagzQgagzA0ArQA0ArgNBGQgNBFhaBLQgCAAgBACAG8AJQAGgOAMgRQgDgBgCgBQhMgrgFhNQgDgpAYgQQANgJATgDQAggFAUgoQAXgtgBglQgYhAg1g1QgLgMgNgKQiFBQilghQgOgDgMgBQgyAAg4BAQg7BAAPBEQAOBFgNAtQgIAZgXAZQgKAJgLAKQgeAWgogDQgXgJgDgSQBVALAJhTQAAgDAAgCQAAgdgKgVAgsA/QAEgBADAAIg7hcIAYACQgRgXgNgZAmuBNQALACALgBQCrgTCWAEQAcADAPgDQBPBgAKCYQADCFiLAQQiLASifgTQiFgTADhzQAKiYBPhggAEnBVIlLgXIgBAAAIRB7IASgUIhDhbIhTBQIhmgHAIRB7QAsAWAlAlQBfBfAACGQAABOghBCQg9CbjcAjAIMCAIAFgFAHBB6Ig0geAG8AJIAkADAHBB6IA0AeIAXgYIBjETIhICTIhvifgAhIgcIIEAlAF8LqQAAAAABAAIAFAAQgBAAgCAAQgBAAgBAAAGCLqIAFgBIAAgBQAsldiMk2AF8LqQhyAMhxABgAh9iJQgHgbgDgcACZL3QjgADjWgnQjegqiDkKQgmhagUhuQgPhVANhAQANg/AZgYQAagaAmAAQAlAAAaAaQACACAlAxQAcAmAkAJ");
    this.shape.setTransform(8.7608,54.6898);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF9900").s().p("AkQDPQgRgYgNgZQAXgZAIgYQANgtgOhEQgPhFA7hAQA5hAAyAAIAaAFQCkAgCFhQIAYAWQA1A1AYBBQABAlgXAsQgUAnggAGQgTACgNAJQgYARADAoQAFBOBMAqIAFADQgMARgGAPg");
    this.shape_1.setTransform(28.7796,31.125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FF0000").s().p("AhEBuIAIkMIA0AeIAXgYIgXAYIg0geIg0geIBThQIBDBbIgSAUIgFAFIBiESIhHCTg");
    this.shape_2.setTransform(59.75,82.775);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#3366FF").s().p("AiFFvQjegpiDkKQgmhZgUhuQgPhVANhAQANhAAZgYQAagbAmAAQAlAAAaAbIAnA0QAcAmAkAIQhPBggKCYQgDBzCFASQCfAUCKgTQCMgPgDiFQgKiYhQhgIAHgBIABABIFMAXQCME0gsFeIAAAAIgFABIgDAAIgDABIgBAAIjiAMIggABQjQAAjGglg");
    this.shape_3.setTransform(-6.4026,90.2107);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFF00").s().p("AlSFnQgXgJgDgRQBVAKAJhSIAAgGQAAgcgKgVQgHgQgNgMQhUg/A5hQQgpg9AHhIQACg7Awg4QAxg3BJgMQBKgMA6gBQA6AAA+AOQA+AOBGA0QBEAyAfg6QAeg7gagzQgag0A0AsQA0ArgNBFQgNBFhaBLIgDACQiFBQikggIgagFQgyAAg5A/Qg7BAAPBFQAOBFgNAtQgIAYgXAZIgVAUQgaATghAAIgLgBg");
    this.shape_4.setTransform(23.2961,14.8031);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AErGDQAsldiMk1IBmAHIhmgHIlLgXIgBAAIg7hdIAYACIIEAmIAkADIhTBQIA0AeIgJEMIBvCfIBIiTIhjkSIAFgFQAsAWAlAlQBfBfAACFQAABOghBCQg9CbjcAjgAnhBmQiFgTADhyQAKiYBPhgQALACALgBQCrgTCWAEQAcADAPgDQBQBgAKCYQADCEiMAQQhEAJhIAAQhMAAhSgKg");
    this.shape_5.setTransform(17.9967,90.375);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style11, new cjs.Rectangle(-62.7,-22.2,143,153.79999999999998), null);
// alien
(lib.style10 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_4
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AjBAGQAKADALgBQCsgTCXAEQAcADAQgD");
    this.shape.setTransform(26.85,44.1552);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_2
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AAyDOIhSkIQgQgBgOgHQgdgOgIgdQgJgcAPgcQAPgaAegKQAfgKAcAOQAbAPAJAcQAIAdgOAbQgJAOgMAJIBTEI");
    this.shape_1.setTransform(58.8597,-26.5583);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#66CC66").s().p("Aggg6QgQgBgOgHQgdgOgIgdQgJgcAPgcQAPgaAegKQAfgKAcAOQAbAPAJAcQAIAdgOAbQgJAOgMAJIBTEIIg1ARg");
    this.shape_2.setTransform(58.8597,-26.5583);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

    // Layer_1
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AGhmKQgqABgwgYQgvgYgYgkQgRgWACgUQAOgLAdgCQArAAAvAYQAwAYAXAjQARAYAAATQgQAMgdAAgAHVh8QgCgCgDgBQhNgrgEhOQgDgoAYgRQANgJATgCQAhgFAUgpQAXgsgBglQgYhBg1g1QhhhhiLAAQgSAAgSACQhzAMhTBTQhTBTgMBxQgCATAAATQAACDBZBfQAxA1gtAKQBPBeAKCZQADCGiMAPQiLATihgUQiGgTADhzQAKiZBQheQglgJgcgmQglgzgCgCQgagagmAAQgmAAgaAaQgZAZgNBAQgOA/AQBVQAUBuAmBbQCEEKDgAqQFEA7FdgkQDegjA+icQAhhBAAhPQAAiHhgheQgvgvg5gYQhlgpA/hdg");
    this.shape_3.setTransform(50.4358,47.5107);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#66CC66").s().p("AkbJuQjggqiEkKQgmhbgUhuQgQhVAOg/QANhAAZgZQAagaAmAAQAmAAAaAaIAnA1QAcAmAlAJQhQBegKCZQgDBzCGATQChAUCLgTQCMgPgDiGQgKiZhPheQAtgKgxg1QhZhfAAiDQAAgTACgTQAMhxBThTQBThTBzgMQASgCASAAQCLAABhBhQA1A1AYBBQABAlgXAsQgUApghAFQgTACgNAJQgYARADAoQAEBOBNArIAFADQg/BdBlApQA5AYAvAvQBgBeAACHQAABPghBBQg+CcjeAjQiFAOiCAAQjRAAjJglgADxoHQgCAUARAWQAYAkAvAYQAwAYAqgBQAdAAAQgMQAAgTgRgYQgXgjgwgYQgvgYgrAAQgdACgOALg");
    this.shape_4.setTransform(50.4358,47.5107);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

    // Layer_3
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AgJhKQgLgMgHgOQgLgdALgcQAMgbAcgLQAdgLAeANQAeAMAMAdQAMAcgMAcQgMAbgdAMQgQAFgPAAIhtD9Ig0gWg");
    this.shape_5.setTransform(73.9375,-27.8949);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#66CC66").s().p("Ah3CzIBuj9QgLgMgHgOQgLgdALgcQAMgbAcgLQAdgLAeANQAeAMAMAdQAMAcgMAcQgMAbgdAMQgQAFgPAAIhtD9g");
    this.shape_6.setTransform(73.9375,-27.8949);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style10, new cjs.Rectangle(-21.2,-49,143.29999999999998,163.4), null);

// builder
(lib.style3 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // trowel
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhUA1QgJgOAEgQQAEgRAOgIIBlg/QAOgJAQAEQAQAEAJAOQAJAOgEAQQgEAQgOAIIhlA/QgOAJgQgDQgQgEgJgOg");
    this.shape.setTransform(77.465,106.5125);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF6600").s().p("Ag7BHQgQgEgJgOQgJgOAEgQQAEgRAOgIIBlg/QAOgJAQAEQAQAEAJAOQAJAOgEAQQgEAQgOAIIhlA/QgKAHgLAAIgJgBg");
    this.shape_1.setTransform(77.465,106.5125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ACGArQAWAjguASQgcANg2ADIiKAKQgQACgJgOQgBgBAAgBQgIgNAJgOIBGh4QAbguAYgUQAjghAWAkg");
    this.shape_2.setTransform(56.2703,117.243);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#CCCCCC").s().p("AiHBuIgBgCQgIgNAJgOIBGh4QAbguAYgUQAjghAWAkIBbCRQAWAjguASQgcANg2ADIiKAKIgEAAQgNAAgIgMg");
    this.shape_3.setTransform(56.2703,117.243);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AgqAeIBVg7");
    this.shape_4.setTransform(68.325,112.15);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    // hat
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AiYBrQgLg3AXgyQADgGAEgHQAkhABIgVQBGgXBCAiQAZAMATATQABABABAB");
    this.shape_5.setTransform(28.2941,18.248);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AgzgzIA0gUIAzBxIgmAeg");
    this.shape_6.setTransform(50.225,10.65);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FF6600").s().p("AgzgyIA0gVIAzBwIgmAfg");
    this.shape_7.setTransform(50.225,10.65);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AjQC9QgPgZgJgdQgbhYAmhRQAFgKAFgKQA0hbBmgfQBlggBeAwQAkASAbAaQAaAaARAhIAAAAQi3DIkNAvg");
    this.shape_8.setTransform(29.7306,20.885);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FF6600").s().p("AjQC9QgPgZgJgdQgbhYAmhRIAKgUQA0hbBmgfQBlggBeAwQAkASAbAaQAaAaARAhIAAAAQi3DIkNAvg");
    this.shape_9.setTransform(29.7306,20.885);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE0iWQAPAThPA5QhOA5iAA+Qh/A/hlAeQhlAfgPgSQgRgUBQg5QBOg6CAg9QB/g/BlgeQBlgeAQASg");
    this.shape_10.setTransform(36.4793,27.7582);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#FF6600").s().p("AkyCXQgRgUBQg5QBOg6CAg9QB/g/BlgeQBlgeAQASQAPAThPA5QhOA5iAA+Qh/A/hlAeQhAAUgdAAQgSAAgFgHg");
    this.shape_11.setTransform(36.4793,27.7582);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.style3, new cjs.Rectangle(4.3,0.9,83.3,129.6), null);
(lib.base1 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.duckEye();
    this.instance.setTransform(77.45,15.1,1,1,0,0,0,4.5,6.1);

    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAgfgbQAfgHgigmQhAhEAAheQAAgOACgOQAIhRA8g7QA7g8BSgIQAMgCAOAAQBiAABGBGQAmAmARAuQAAAAAAgBQAZArAtgTQAugSAOAKQAOALgHAOIgXAyQgCAEAAAEIAAABQAAAAAAABQAAAHAFAFIAAABQADACAEADQApAYglARIieBGQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQj6AajngqQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hE");
    this.shape.setTransform(50.7631,47.2817);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AhtCLQhfgNAChTQAHhtA5hFQAIACAIgBQB6gOBsADQATACAMgCQA5BFAIBtQABBghkALQgxAGg1AAQg1AAg7gHg");
    this.shape_1.setTransform(33.6499,59.0299);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#B11B04").s().p("Ag+AZQgXgRgHgOIgIgRQADgFAGgEQAaA1A5gHQAngFA5glIAIgEQAAAHAFAFIAAABQhIArgrAIIgRABQgSAAgNgIg");
    this.shape_2.setTransform(88.575,28.6735);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f(colors[Math.floor(Math.random() * 100)]).s().p("Ag7BxQg3gfgDg4QgCgbARgMQgFAEgEAFIAJAQQAGAPAYAQQARAMAfgEQArgJBIgrIAHAFQAoAYglAQIicBHIgEgCgAhmgNQAJgHAOgBQAXgFAPgdQAQgfgBgbIAAgBQAZAqAtgSQAtgTAOALQAOALgHAOIgXAyQgCAEAAAEIgBABIABAAIAAABIgIAEQg4AkgoAGIgNAAQgvAAgXgug");
    this.shape_3.setTransform(89.648,26.8);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

    // Layer_2
    this.duckColour = new lib.duckColour();
    this.duckColour.name = "duckColour";
    this.duckColour.setTransform(50.5,47.2,1,1,0,0,0,50.5,47.2);

    this.timeline.addTween(cjs.Tween.get(this.duckColour).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.base1, new cjs.Rectangle(-1,-1,103.5,96.6), null);
