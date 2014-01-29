Package.describe({
	summary: "Pickadate.js package for Meteor"
});

Package.on_use(function(api, where) {
	api.add_files([
		'js/picker.js',
		'js/picker.date.js',
		'js/picker.time.js',
		'js/legacy.js'
	], 'client');
});
