/*
* @Author: calasaba
* @Date:   2018-09-04 10:08:21
* @Last Modified by:   calasaba
* @Last Modified time: 2018-09-04 21:15:42
*/
$(function(){
    getClick("location");
    getClick("bed-and-board");
    getClick("pation-condition");
});

function getClick(a){
    $("."+a + " " + ".input_in").on('click',function(e){
        if($("."+a + " " + '.city').is('.hide')){
            $("."+a + " " + '.city').removeClass('hide');
        }else{
            $("."+a + " " + '.city').addClass('hide');
        }

        $(document).one("click",function(){
            $("."+a + " " + ".city").addClass("hide");
        })
        e.stopPropagation();
    })

    $("."+a + " " + '.city li').on('click',function(){
        $("."+a + " " +'.input_in .value').text($(this).html());
        $("."+a + " " + '.city').addClass('hide');
    })

    $("."+a + " " + 'ul li').hover(
        function(){
            $(this).css({'backgroundColor':'#fd9','font-size':'1.320755rem'});
        },function(){
            $(this).css({'backgroundColor':'#fff','font-size':'1.220755rem'});
        }
    )
}