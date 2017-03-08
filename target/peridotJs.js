/**
 * @author Rolland Chen
 */
(function() {
    var py = {
        w: window,
        d: document
    };
    var Peridot = {
        new: function() {
            var peridot = {
                version: "0.0.1",
                init: function() {

                }
            }
            return peridot;
        }
    };
    window.py = py;
    window.Peridot = Peridot;
})();
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/**
 * @author Rolland Chen
 */
(function() {
    window.Peridot.Math = {
        /**
         * return a~b之间的随机数 f为true返回整数
         * @param int a
         * @param int b
         * @param boolean f
         */
        random: function(a, b, f) {
            var min = arguments[0] ? arguments[0] : 0;
            var max = arguments[1] ? arguments[1] : 100;
            var flag = arguments[2] ? arguments[2] : true;
            var r = ~~((Math.random() * (b - a + 1)) + a);
            if (f) {
                r = Math.round(r);
            }
            return r;
        },
        /**
         * 洗牌，随机排列数组a中的元素
         * @param array a
         */
        shuffle: function(a) {
            var m = a.length,
                t, i;
            while (m) {
                i = Math.random() * m-- | 0;
                t = a[m], a[m] = a[i], a[i] = t;
            }
            return array;
        }
    };
})();
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/**
 * @author Rolland Chen
 */
(function() {
    window.Peridot.CVS = {
        init: function(config) {
            var cvs = this;
            cvs.constructor(config);
            return cvs;
        },
        constructor: function() {
            this.py = Window.py;
            this.initStage();
            this.initEvents();
            this.initMod();
        },
        initStage: function() {
            var that = this;
            var c = py.d.createElement("canvas");
            c.id = "stage";

            c.style.position = "absolute";
            c.style.border = "1px solid";
            py.d.body.appendChild(c);
            that.stage = c;
            that.setSize(1000, 800);
            that.mc = that.stage.getContext('2d');
        },
        initEvents: function() {
            var that = this;

        },
        initMod: function() {
            var that = this;
            that.viewMod = {};
            that.selectMod = {};
            that.layers = {};

        },
        setSize: function(w, h) {
            var that = this;
            that.stage.width = w;
            that.stage.height = h;
        },
        drawRect: function(w, h, x, y) {

        }




    };
})()