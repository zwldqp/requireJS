/**
 * Created by Administrator on 2017/2/13.
 */
requirejs.config({
    paths:{
        "jquery":"jquery-1.12.3"
    }
});
define(["jquery"],function($){
    function Dialog(){
        this.defautS={
            width:400,
            height:300,
            title:"弹出层",
            content:""
        };
        this.container=$('<div class="dialog-container"></div>');
        this.mask=$('<div class="dialog-mask"></div>');
        this.box=$('<div class="dialog-box"></div>');
        this.title=$('<div class="dialog-title">');
        this.item=$('<div class="dialog-title-item">弹出层</div>');
        this.close=$('<div class="dialog-title-close">[×]</div>;');
        this.content=$('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open=function(option){
        $.extend(this.defautS,option);
        this.item.html(this.defautS.title);
        this.title.append(this.item).append(this.close);
        this.content.css({
            width:this.defautS.width,
            height:this.defautS.height-30
        });
        this.box.append(this.title).append(this.content).css({
            width:this.defautS.width,
            height:this.defautS.height
        });
        this.container.append(this.mask).append(this.box);
        $(document.body).append(this.container);
        var that=this;
        this.close.on("click",function(){
            that.closeA();
        });
    };


    Dialog.prototype.closeA=function(){
        this.container.remove();
    };
    return Dialog;



})









//    return {
//        open:function(options){
//            var defautS={
//                width:400,
//                height:300,
//                title:"弹出层",
//                content:""
//            };
//            $.extend(defautS,options);
//            var html=
//                '<div class="dialog-container">'+
//                '<div class="dialog-mask"></div>'+
//                '<div class="dialog-box">'+
//                '<div class="dialog-title">'+
//                '<div class="dialog-title-item">'+defautS.title+'</div>'+
//                '<div class="dialog-title-close">[×]</div>'+
//                '</div>'+
//                '<div class="dialog-content">'+defautS.content+'</div>'+
//                '</div>'+
//                '</div>';
//            $("body").append(html);
//            $(".dialog-box").css({
//                width:defautS.width,
//                height:defautS.height
//            });
//            $(".dialog-content").css({
//                width:defautS.width,
//                height:defautS.height-30
//            });
//            $(".dialog-content").load(defautS.content);
//            $('.dialog-title-close').on("click",function(){
//                $('.dialog-container').remove();
//            })
//        }
//    }
//});