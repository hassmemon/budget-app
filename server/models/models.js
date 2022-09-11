const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//categories => field => [field, colour]
const categories_model = new Schema({
    type: { type: String, default: 'Investment' },
    color: { type: String, default: '#FCBE44' },
});
// transactions => field => [name, type, amount, date]
const transaction_model = new Schema({
    name: { type: String, default: 'Anon' },
    type: { type: String, default: 'Expenses' },
    amount: { type: Number },
    date: { type: Date, default: Date.now },
});

const Categories = mongoose.model('categories', categories_model);
const Transaction = mongoose.model('transactions', categories_model);

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction,
};
