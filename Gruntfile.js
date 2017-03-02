var _ = require('underscore');
module.exports = function(grunt) {
    var conf = {
        my: grunt.file.readJSON('my.json'),
        concat: {
            options: {
                separator: ';\r\n/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */\r\n'
            },
            basic_and_extras: {
                files: {
                    'target/new_board_config.js': [
                        'src/3rd/*.js',
                        'src/*.js',
                        'src/cvs/*.js'
                    ]
                }
            }
        },
        clean: ['env/html'],
        watch: {
            files: [
                'src/3rd/*.js',
                'src/*.js',
                'src/cvs/*.js'
            ],
            tasks: ['default']
        }
    };

    var defaultActions = ['concat', 'clean'];
    if (conf.my.copyToPaths) {
        _.each(conf.my.copyToPaths, function(path, name) {
            if (typeof name === 'string' && name.substring(0, 1) === '-') return;

            defaultActions.push('copy:' + name);
            conf.copy[name] = {
                files: [{
                    expand: true,
                    cwd: 'target/',
                    src: ['**'],
                    dest: path
                }]
            };
        });
    }


    grunt.initConfig(conf);
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', defaultActions);
};