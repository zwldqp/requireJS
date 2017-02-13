/**
 * Created by Administrator on 2017/2/13.
 */
requirejs.config({
    paths:{
        "jquery":"jquery-1.12.3"
    }
});
require(["jquery","dialog"],function($,Dialog){
    $("#open").on("click",function(){
        var settings={
            title:"我的弹出层",
            content:"login.html"
        }
        var dialog=new Dialog();
        dialog.open(settings);



        //var settings={
        //    title:"我的弹出层",
        //    content:"login.html"
        //}
    });
});