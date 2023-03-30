const fs = require('fs');
const rootDir = require('../utils/path');
const path = require('path');

const p = path.join(rootDir, 'data', 'products.json');
const getProductsFromFile = cb => {
       fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err);
            return cb([]);
        } 
        cb(JSON.parse(fileContent));
       }); 
};

module.exports = class Product{
    constructor(title, url, price, description){
        this.title = title;
        this.url = url;
        this.price = price;
        this.description = description;
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    };

    static getProducts(cb){
        getProductsFromFile(cb);
    }
}