var app = require("express")();
var bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));




var campgrounds = 
[
    {name: "Kutno", img: "https://www.asiliaafrica.com/wp-content/uploads/2016/08/Nomadic-Camp-guest-tent-new.jpg" },
    {name: "Lodz", img: "http://www.chippewalanding.com/images/sized%20280/campgrounds-campsite.jpg" },
    {name: "Warszawa", img: "https://acadiamagic.com/280x187/md-campground.jpg" },
    {name: "Krakow", img: "http://www.destination360.com/north-america/us/utah/salt-lake-city/images/s/camping.jpg" },
    {name: "Kutno", img: "https://www.asiliaafrica.com/wp-content/uploads/2016/08/Nomadic-Camp-guest-tent-new.jpg" },
    {name: "Lodz", img: "http://www.chippewalanding.com/images/sized%20280/campgrounds-campsite.jpg" },
    {name: "Warszawa", img: "https://acadiamagic.com/280x187/md-campground.jpg" },
    {name: "Krakow", img: "http://www.destination360.com/north-america/us/utah/salt-lake-city/images/s/camping.jpg" },
    {name: "Kutno", img: "https://www.asiliaafrica.com/wp-content/uploads/2016/08/Nomadic-Camp-guest-tent-new.jpg" },
    {name: "Lodz", img: "http://www.chippewalanding.com/images/sized%20280/campgrounds-campsite.jpg" },
    {name: "Warszawa", img: "https://acadiamagic.com/280x187/md-campground.jpg" },
    {name: "Krakow", img: "http://www.destination360.com/north-america/us/utah/salt-lake-city/images/s/camping.jpg" },
    {name: "Kutno", img: "https://www.asiliaafrica.com/wp-content/uploads/2016/08/Nomadic-Camp-guest-tent-new.jpg" },
    {name: "Lodz", img: "http://www.chippewalanding.com/images/sized%20280/campgrounds-campsite.jpg" },
    {name: "Warszawa", img: "https://acadiamagic.com/280x187/md-campground.jpg" },
    {name: "Krakow", img: "http://www.destination360.com/north-america/us/utah/salt-lake-city/images/s/camping.jpg" }  
]

app.get("/", function(req, res)
{
    res.render("landing");
});





app.get("/campgrounds", function(req, res)
{
    

    
    res.render("campgrounds", {campgrounds: campgrounds});
});



app.get("/campgrounds/new", function(req, res) 
{
    res.render("new.ejs");
});



app.post("/campgrounds", function(req, res)
{
    console.log(req.body);
    var name = req.body.name;
    var url = req.body.url;
    
    var obj = {name: name, img: url};
    campgrounds.push(obj);
    
    res.redirect("/campgrounds");
});
  





app.get("*", function(req, res)
{
    res.send("Page not found!!!! ");
})
app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("The YelpCamp has started!");
})