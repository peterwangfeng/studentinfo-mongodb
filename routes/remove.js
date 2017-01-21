/**
 * Created by WangFeng on 2017/1/21 0021.
 */
const exp = require('express');
const Student = require('./student');
const router = exp.Router();


router.get('/remove/:id', (req, res)=> {
    var id = req.params.id;
    Student.findByIdAndRemove(id, (err)=> {
        if (err) {
            res.json({result: 0});
        } else {
            res.json({result: 1});
        }
    })
});

module.exports = router;