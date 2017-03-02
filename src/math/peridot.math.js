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
})()