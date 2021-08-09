const { Schema, model } = require('mongoose');


const schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter name of the cat.'],
    minLength: [3, 'Name must be at least 3 characters.']
  },
  age: {
    type: Number,
    required: [true, 'Enter cat age'],
    min: [0, 'Cats can\'t be younger than 0 years!'],
    max: [38, 'The oldest cat in the world lived for 38 years and three days. If your cat is older, please contact us.']
  },
  imageUrl: { type: String, required: [true, 'Add image please'], match: [/^https?/, 'Image must be a valid URL'] },
  gender: { type: String, required: [true, 'Please choose the gender of the cat.'] },
  createdAt: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Cat', schema);