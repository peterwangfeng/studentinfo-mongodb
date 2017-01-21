/**
 * Created by WangFeng on 2017/1/21 0021.
 */
const exp = require('express')
const Student = require('./student')
const router = exp.Router()

router.get('/edit/:id', (req, res)=> {
    var id = req.params.id;
    Student.findById(id).exec((err, data)=> {
        if (err) {

        } else {
            res.render('edit', {
                data,
                title: '修改学生'
            });
        }
    })
});

router.post('/api/edit/:id',(req,res)=>{
    var id = req.params.id;
    var data = req.body;
    Student.findByIdAndUpdate(id,req.body,function(err){
        if(err){
            //跳转到错误页
            res.redirect('/404.html');
        }else{
            //回到主页
            res.redirect('/')
        }
    })
});

module.exports = router;