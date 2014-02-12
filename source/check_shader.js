function CheckShader(gl) {
  this.gl = gl;
}

CheckShader.prototype.validate_vertex = function(source) {
  return this.validate_source(source, this.gl.VERTEX_SHADER);
}

CheckShader.prototype.validate_fragment = function(source) {
  return this.validate_source(source, this.gl.FRAGMENT_SHADER);
}

CheckShader.prototype.validate_source = function(source, type) {
  var shader = this.gl.createShader(type);
  this.gl.shaderSource(shader, source);
  this.gl.compileShader(shader);

  var compile_ok = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);

  this.gl.deleteShader(shader);

  return compile_ok;
}
