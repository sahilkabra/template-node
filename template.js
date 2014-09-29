'use strict';

// Basic template description.
exports.description = 'Create a node module.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started' +
  '\n\n' +
  'You should also search for TODO and modify as per the comment';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
	// Prompt for these values.
	init.prompt('name'),
	init.prompt('description'),
	init.prompt('version', '0.0.0'),
	init.prompt('repository'),
	init.prompt('homepage'),
	init.prompt('licenses', 'MIT'),
	init.prompt('author_name'),
	init.prompt('author_email'),
	init.prompt('author_url')
  ], function(err, props) {
	props.keywords = [];
	props.devDependencies = {
	  'grunt-contrib-concat': '~0.3.0',
	  'grunt-contrib-jshint': '~0.6.0',
	  'mocha': "latest",
	  "chai": "latest"
	};
	props.dependencies = {
		"express": "latest",
		"mongodb": "latest",
		"morgan": "latest"
	};

	// Files to copy (and process).
	var files = init.filesToCopy(props);

	// Add properly-named license files.
	init.addLicenseFiles(files, props.licenses);

	// Actually copy (and process) files.
	init.copyAndProcess(files, props, {noProcess: '.node_modules/**'});

	// Generate package.json file.
	init.writePackageJSON('package.json', props);

	// All done!
	done();
  });
};
