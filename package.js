// package metadata file for Meteor.js
var packageName = 'phund:angularjs-dropdown-multiselect';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.5.2';
var summary = 'AngularJS Dropdown Multiselect directive';
var gitLink = 'https://github.com/phund/angularjs-dropdown-multiselect';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.2.0', where); // Dependencies
  // api.addFiles('stevezhu:lodash@3.5.0', where); // Files in use

  api.addFiles('src/angularjs-dropdown-multiselect.js', where); // Files in use
});   