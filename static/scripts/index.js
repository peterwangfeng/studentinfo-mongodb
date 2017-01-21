/**
 * Created by WangFeng on 2017/1/21 0021.
 */
$('td:last-child span').click(function(){
    var id = $(this).data('id');
    var name = $(this).data('name');
    console.log(id);
    $('#myModal .modal-body').text(`点击确定将删除${name}`);
    $('#myModal').modal('show');
    $('#myModal .modal-footer button:first').click(()=>{
        $.get(`/remove/${id}`,(res)=>{
            if(res.result === 1) {
                location.reload();
            }else{
                alert('删除数据失败，请再次尝试！');
            }
        })
    });
});