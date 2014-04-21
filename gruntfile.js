module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './',
                    livereload: true,
                    //keepalive: true
                }
            }
        },

        watch: {
            all: {
                files: ['assets/css/**/*.css', 'assets/js/**/*.js', '**/*.html'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect', 'watch']);

};