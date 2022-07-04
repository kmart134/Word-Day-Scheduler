//change background color based on time of day

var now = moment().format('HH')
function timeTracker(){
    for(var i=0; i <25; i++){
        if(now<i){
            $("#"+i).addClass("bg-success")
        }
        if (now>i){
            $('#'+i).addClass("bg-secondary")
        }
        if (now==i){
            $('#'+i).addClass("bg-danger")
        }
    }

}

timeTracker();
