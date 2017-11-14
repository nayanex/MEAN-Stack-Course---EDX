var mongoose = require('mongoose');
var schema = require('./product');
var category = require('./index');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var Product = mongoose.model('Product', schema, 'products');

var product = new Product({
	name: "iPhone 6",
	category: category._id,
	price: {
		amount: "1600",
		currency: "USD"
	}
});

product.save(function(error){
	if (error) {
		console.log(error);
		process.exit(1);
	}
	Product.find({name: 'iPhone 6'}, function(error, docs){
		if (error) {
			console.log(error);
			process.exit(1);
		}
		console.log(require('util').inspect(docs));
		process.exit(0);
	});
});