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
})()