module.exports = (grunt) ->
  HTTPD_PORT = 12345;

  grunt.initConfig
    shell:
      test:
        command: "slimerjs runner.js http://localhost:#{HTTPD_PORT}/test/all.html"
        options:
          stdout: true
          stderr: true
          failOnError: true
    connect:
      test:
        options:
          port: HTTPD_PORT

  grunt.loadNpmTasks 'grunt-shell'
  grunt.loadNpmTasks 'grunt-contrib-qunit'
  grunt.loadNpmTasks 'grunt-contrib-connect'

  grunt.registerTask 'test', ['connect', 'shell:test']
