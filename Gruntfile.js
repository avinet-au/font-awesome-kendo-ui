module.exports = function(grunt) {

  function rename(name) {
    return function(dest, src) {
      return dest + name;
    }
  }

  function copyFile(from, to, as, expand) {
    var cwd = from.substring(0, from.lastIndexOf('/')+1)

    from = from.substring(from.lastIndexOf('/')+1)

    if (to[to.length-1] === '/')
      to += from;

    if (!as)
      as = to.substring(to.lastIndexOf('/')+1)

    if (to[to.length-1] !== '/')
      to = to.substring(0, to.lastIndexOf('/')+1)

    var result = {
      files: [{
        expand: !!expand,
        cwd: cwd, 
        src: [from], 
        dest: to,
        rename: rename(as)
      }]
    }
    return result;
  }

grunt.initConfig({
  less: {
    kendo: {
      options: {
        //paths: ["bower_components/bootstrap/less"],
        yuicompress: false
      },
      files: {
        "font-awesome-kendo-icons.css": "font-awesome-kendo-icons.less"
      }
    }
  },
  watch: {
    scripts: {
      files: ['*.less'],
      tasks: ['less'],
      options: {
        spawn: false,
      },
    },
  },
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', [ 'less' ]);
grunt.registerTask('deploy', [ 'default' ]);

};