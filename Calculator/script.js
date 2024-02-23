function add(){
    var act=0, b=0;
    act = fin.fname.value;
    b = act.charAt(act.length-1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        fin.fname.value = act.substring(0,act.length-1);
        fin.fname.value += '+';
    }else{
        fin.fname.value += '+';
    }
}

function sub(){
    var act=0, b=0;
    act = fin.fname.value;
    b = act.charAt(act.length-1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        fin.fname.value = act.substring(0,act.length-1);
        fin.fname.value += '-';
    }else{
        fin.fname.value += '-';
    }
}

function div(){
    var act=0, b=0;
    act = fin.fname.value;
    b = act.charAt(act.length-1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        fin.fname.value = act.substring(0,act.length-1);
        fin.fname.value += '/';
    }else{
        fin.fname.value += '/';
    }
}

function mul(){
    var act=0, b=0;
    act = fin.fname.value;
    b = act.charAt(act.length-1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        fin.fname.value = act.substring(0,act.length-1);
        fin.fname.value += '*';
    }else{
        fin.fname.value += '*';
    }
}