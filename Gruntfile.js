/*
* http://ericnish.io/blog/compile-less-files-with-grunt
**/
module.exports = function(grunt){
    grunt.initConfig({
        /* Less task */
        less: {
            development: {
                options: {
                    compress: true,
                    //yuicompress: true,
                    //optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "css/k5.css": "css/k5.less"
                }
            }
        },
        /* Concat task */
        concat: {
            dist: {
                src: [
                    'js/lib/*.js'
                    /*
                    'js/lib/jquery-1.7.min.js',
                    'js/lib/jquery.jclock.js',
                    'js/lib/jquery.autoresize.js',
                    'js/lib/jquery.putCursorAtEnd.1.0.js',
                    'js/lib/jquery.counter-2.1.js',
                    'js/lib/jquery.hotkeys.js',
                    'js/lib/jquery.color.js',
                    'js/lib/jquery.autogrowinput.js',
                    'js/lib/jquery.textcounters.js'
                    */
                ],
                dest: 'js/k5.js'
            }
        },
        /* Watch for changes */
        watch: {
            styles: {
                files: ['css/*.less'],  // What changes to watch for
                tasks: ['less'],        // The task to run
                options: {}
            },
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat'],
                options: {}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['watch']);
};