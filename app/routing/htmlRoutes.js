// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 
module.export = function(app){
    app.get('/survey')
}


app.get(`/survey`, function(req, res) {
    res.send('../public/home.html');
});