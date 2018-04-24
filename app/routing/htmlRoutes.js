// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 

app.get(`../public/survey.html`, function(request, response) {
    response.sendFile(__dirName + `../public/home.html`);
});