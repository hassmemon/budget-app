const routes = require('express').Router();
const model = require('..models/model');

//get categories
function create_Categories(req, res) {
    const Create = new model.Categories({
        type: 'Savings',
        color: '#1F3B5C',
    });

    Create.save(function (err) {
        if (!err) return res.json(Create);
        return res
            .status(400)
            .json({ message: `Error while creating categories ${err}` });
    });
}

module.exports = {
    create_Categories,
};
