module.exports = function(grunt) {
    var conf = {
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';\r\n/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */\r\n'
            },
            basic_and_extras: {
                files: {
                    'target/peridotJs.js': [
                        'src/3rd/*.js',
                        'src/*.js',
                        'src/math/*.js',
                        'src/cvs/*.js'
                    ]
                }
            }
        },
        watch: {
            files: [
                'src/3rd/*.js',
                'src/*.js',
                'src/math/*.js',
                'src/cvs/*.js'
            ],
            tasks: ['default']
        }
    };

    var defaultActions = ['concat'];


    grunt.initConfig(conf);
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', defaultActions);
};