const service = require('../service/service');

class Controller {
    addBookController(req, res) {
        let response = {};
        try {
            req.checkBody("id", "Id should not be empty").notEmpty();
            req.checkBody('author', "Author should not be empty").notEmpty();
            req.checkBody('title', "Title should not be empty").notEmpty();
            req.checkBody('image', "Image should not be empty").notEmpty();
            req.checkBody('quantity', "Quantity should not be empty").notEmpty();
            req.checkBody('price', "Price should not be empty").notEmpty();
            req.checkBody('description', "Description should not be empty").notEmpty();

            let error = req.validationErrors();
            if (error) {
                response.status = false;
                response.error = error;
                return res.status(422).send(response)
            } else {
                let filterData = {
                    "id": req.body.id,
                    "author": req.body.author,
                    "title": req.body.title,
                    "image": req.body.image,
                    "quantity": req.body.quality,
                    "price": req.body.price,
                    "description": req.body.describe
                };
                service.addBookService(filterData, (err, data) => {
                    if (err) {
                        response.status = false;
                        response.error = err;
                        return res.status(404).send(response);
                    } else {
                        response.status = true;
                        response.message = data;
                        return res.status(200).send(response);
                    }
                });
            }
        } catch (err) {
            response.status = false;
            response.error = err;
            return res.status(500).send(response);
        }
    }
}

module.exports = new Controller();