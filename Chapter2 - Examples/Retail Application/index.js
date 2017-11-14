var mongoose = require('mongoose');
var schema = require('./category');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var Category = mongoose.model('Category', schema, 'categories');

var category = new Category({
	_id: 'iOS',
	parent: 'Phones',
	ancestors: ['Electronics', "Phones", "iOS"]
});

category.save(function(error){
	if (error) {
		console.log(error);
		process.exit(1);
	}
	Category.find({ _id: 'iOS'}, function(error, docs){
		if (error) {
			console.log(error);
			process.exit(1);
		}
		console.log(require('util').inspect(docs));
		process.exit(0);
	});
});

/*
Other categories inserted:

var category = new Category({
	_id: 'Phones',
	parent: 'Electronics',
	ancestors: ['Electronics', "Phones"]
});

var category = new Category({
	_id: 'Electronics',
	ancestors: ['Electronics']
});

var category = new Category({
	_id: 'Android',
	parent: 'Phones',
	ancestors: ['Electronics', "Phones", "Android"]
});

*/