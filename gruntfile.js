module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks();

  // Default task(s).
  grunt.registerTask('default');

};

// can add watch for when changes are made, restarts server - grunt task (watch)
// change in bin server.js port 3001 