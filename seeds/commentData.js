const { Comment } = require('../models');

const commentdata = [
    {
        title:'Why MVP is the best way to start a project',
        content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.'
    },
    {
        title:'How to build a responsive website',
        content: 'Responsive web design is a collection of techniques for creating websites that work on a variety of devices and screen sizes. These techniques include things like using media queries to design for different screen sizes, using CSS to control the size and orientation of the page elements, and using HTML to control the layout of the page.'
    }
];


const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;