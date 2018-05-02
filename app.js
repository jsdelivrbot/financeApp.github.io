var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const PORT = process.env.PORT || 8080;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('./index.ejs')
});

app.post('/total', (req, res) => {
    res.render('./total.ejs', {
        income: parseFloat(req.body.weeklyIncome),
        rent: parseFloat(req.body.rent),
        spectrum: parseFloat(req.body.spectrum),
        food: parseFloat(req.body.food),
        dte: parseFloat(req.body.dte),
        we: parseFloat(req.body.we),
        studentLoan: parseFloat(req.body.studentLoan)
    })});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));