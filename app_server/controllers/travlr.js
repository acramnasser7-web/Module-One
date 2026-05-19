const home = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways',
        heading: 'Welcome to Travlr Getaways',
        description: 'Book your dream vacations today.'
    });
};

const about = (req, res) => {
    res.render('about', {
        title: 'About Us'
    });
};

const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact Us'
    });
};

const meals = (req, res) => {
    res.render('meals', {
        title: 'Meals'
    });
};

const news = (req, res) => {
    res.render('news', {
        title: 'News'
    });
};

const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms'
    });
};

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel Packages'
    });
};

module.exports = {
    home,
    about,
    contact,
    meals,
    news,
    rooms,
    travel
};
