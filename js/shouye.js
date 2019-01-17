window.onload = function(){
    //搜索框 获得焦点 失去内容
    function shijiao(){
        $(".txt").focus(function(){
            $(".shang").css("display","none");
        })
        $(".txt").blur(function(){
                $(".shang").css("display","block"); 
        })
    }
    shijiao();
}