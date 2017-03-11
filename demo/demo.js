(function() {

    var cvs = window.Peridot.CVS.init();


    cvs.setSize(800, 600);
    var ctx = cvs.mc;
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

})()