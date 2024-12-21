const dummyController = (req, res) => {
    res.send("<h1>This is Dummy Route</h1>"); // Corrected the syntax for HTML response as a string
    console.log("This is dummy route");
};

module.exports = dummyController;
