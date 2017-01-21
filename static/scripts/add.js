/**
 * Created by WangFeng on 2017/1/21 0021.
 */
$('form').submit(function (ev) {
    ev.preventDefault();
    var data = $(this).serialize();
    console.log(data + '111');
    $.post('/add', data, (res)=> {
        //console.log(res);
        if (res.result == 1) {
            location.href = '/';
        } else {
            alert('添加失败，请再次尝试！')
        }
    });
});