/**
 * Created by WangFeng on 2017/1/21 0021.
 */
const exp = require('express');
const Student = require('./student');
const router = exp.Router();

router.get('/', (req, res)=> {
    Student.find().exec((err, data)=> {
        if (err) {
            //跳转到错误页面 / 提醒用户重新载入
        } else {
            data = data.map((item)=> {
                item = item.toObject();
                item.id = item._id.toString();
                delete item._id;
                return item;
            });
            res.render('index', {
                data,
                header: '学生查询及管理'
            });
        }
    });
});

module.exports = router;