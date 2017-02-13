/**
 * Created by Administrator on 2017/2/13.
 */
/**
 * Created by Administrator on 2017/2/13.
 */
requirejs.config({
    paths:{
        "jquery":"jquery-1.12.3"
    }
});
define(["jquery"],function($){
    return {
        open:function(options){
            var defautS={
                width:400,
                height:300,
                title:"µ¯³ö²ã",
                content:""
            };
            $.extend(defautS,options);
            var html=
                '<div class="dialog-container">'+
                '<div class="dialog-mask"></div>'+
                '<div class="dialog-box">'+
                '<div class="dialog-title">'+
                '<div class="dialog-title-item">'+defautS.title+'</div>'+
                '<div class="dialog-title-close">[¡Á]</div>'+
                '</div>'+
                '<div class="dialog-content">'+defautS.content+'</div>'+
                '</div>'+
                '</div>';
            $("body").append(html);
            $(".dialog-box").css({
                width:defautS.width,
                height:defautS.height
            });
            $(".dialog-content").css({
                width:defautS.width,
                height:defautS.height-30
            });
            $(".dialog-content").load(defautS.content);
            $('.dialog-title-close').on("click",function(){
                $('.dialog-container').remove();
            })
        }
    }
});