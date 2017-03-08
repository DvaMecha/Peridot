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