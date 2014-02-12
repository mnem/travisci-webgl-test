module("CheckShader")

var width = 200;
var height = 200;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
var gl_context = renderer.getContext();
var test_subject = new CheckShader(gl_context);

test( "Test valid vertex shader", function() {
  var source = "attribute vec3 position;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nvoid main(void) {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
  var valid_source = test_subject.validate_vertex(source);
  ok( valid_source );
});

test( "Test invalid vertex shader", function() {
  var source = "wibble";
  var valid_source = test_subject.validate_vertex(source);
  ok( !valid_source );
});

test( "Test valid fragment shader", function() {
  var source = "void main(){\ngl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);}"
  var valid_source = test_subject.validate_fragment(source);
  ok( valid_source );
});

test( "Test invalid fragment shader", function() {
  var source = "what are you doing dave"
  var valid_source = test_subject.validate_fragment(source);
  ok( !valid_source );
});
