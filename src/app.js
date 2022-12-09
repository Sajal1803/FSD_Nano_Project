const express =require('express');
const path=require("path");
const app = express();
const hbs=require("hbs");
const port=process.env.port || 3000;  //jo bhi avalable port ho vo allot ho jaaye
// require('./db/conn');
const static_path = path.join("__dirname")






app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.use(express.static(static_path))

app.use(express.static('public'));       //to define public path for css and javascript

app.use('/js',express.static(__dirname+'./../public/js'));   //to add external js files

app.get("/",(req,res) => {
    res.render("index")
    });
    app.get("/index",(req,res) => {
        res.render("index")
        });
    app.get("/contacts",(req,res) => {
        res.render("contacts")
        });
        app.get("/designs",(req,res) => {
            res.render("designs")
            });
            app.get("/designers",(req,res) => {
                res.render("designers")
                });
                app.get("/information",(req,res) => {
                    res.render("information")
                    });
                                        


    app.listen(port,()=>{
        console.log(`server is running at port no. ${port}`);
    }
    )