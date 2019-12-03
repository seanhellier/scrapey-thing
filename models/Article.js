var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	text: {
		type: String,
		required: true,
		unique: true
	},

	author: {
		type: String,
		required: true,
		unique: true
	},
	isSaved: {
		type: Boolean,
		default: false,
		required: false,
		unique: false
	},
	// `note` is an object that stores a Note id
	// The ref property links the ObjectId to the Note model
	// This allows us to populate the Article with an associated Note
	note: {
		type: [ { type: Schema.Types.ObjectId, ref: 'Note' } ]
	}
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article; //exporting Article
