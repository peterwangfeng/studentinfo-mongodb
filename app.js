/**
 * Created by WangFeng on 2017/1/21 0021.
 */
const exp = require('express');
const template = require('art-template');
const bodyParser = require('body-parser');
const app = exp();

template.config('cache', false);
app.use(bodyParser.urlencoded({extended: false}));
app.engine('.html', template.__express);
app.set('view engine', 'html');


app.use(require('./routes/index'));
app.use(require('./routes/add'));
app.use(require('./routes/update'));
app.use(require('./routes/remove'));
app.use(exp.static('static'));
app.listen(3000, ()=> {
    console.log('server running at port 3000');
});
