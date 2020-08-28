$(document).ready(
    function(){
        $('#addbox').on('click',
            function (){
                var newBox = '<div class="box"></div>';
                $("h3").remove();
                $(".content").append(newBox);
            }
        );
    }
);