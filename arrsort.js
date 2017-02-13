/**
 * Created by Administrator on 2017/2/13.
 */
define(["./isArr"],function(isarr){
    function arrSort(arr){
        if(isarr(arr)){
            return arr.sort(function(a,b){
                return a-b;
            });
        }else{
            return "error";
        }
    }
    return arrSort;
})