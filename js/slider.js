<script>
    $(document).ready(function(){
        var data = $("#slider").children();
        var data_ = [];
        var actual = 0;
        for(i=0;i<data.length;i++){
            data_.push(data[i].id);
            $("#"+data_[i]).css("display","none");
            $("#"+data_[i]).animate({opacity:'0'});
        }
        $("#"+data_[0]).css("display","inline"); 
        $("#"+data_[0]).animate({opacity:'1'},"slow");
      
        // funciones click
        $("#next").click(function(){
            actual++;
            if(actual==data_.length)
                actual=0;
            for(i=0;i<data_.length;i++){
                if(i!=actual){
                    $("#"+data_[i]).animate({opacity:'0'},1000);
                    $("#"+data_[i]).css("display","none");
                }
                else{
                    $("#"+data_[i]).css("display","inline");
                    $("#"+data_[i]).animate({opacity:'1'},1000);
                }
            }
        });
        $("#prev").click(function(){
            if(actual==0)
               actual = data_.length-1;
            else{
                actual--;
            }
            for(i=0;i<data_.length;i++){
                if(i!=actual){
                    $("#"+data_[i]).animate({opacity:'0'},1000);
                    $("#"+data_[i]).css("display","none");
                }
                else{
                    $("#"+data_[i]).css("display","inline");
                    $("#"+data_[i]).animate({opacity:'1'},1000);
                }
            }
        })
    });
</script>