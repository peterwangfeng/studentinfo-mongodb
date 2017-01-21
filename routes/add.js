/**
 * Created by WangFeng on 2017/1/21 0021.
 */
const exp = require('express');
const Student = require('./student');
const router = exp.Router();


router.get('/add', (req, res)=> {
        res.render('add', {
            title: '添加学生',
            header: '添加学生'
        });
    }
);

router.post('/add', (req, res)=> {
    console.log(req.body);
    var stu = new Student(req.body);
    stu.save((err)=> {
        if (!err) {
            res.json({result: 1});
        } else {
            res.json({result: 0});
        }
    })
});


module.exports = router;