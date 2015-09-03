module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'bower',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
