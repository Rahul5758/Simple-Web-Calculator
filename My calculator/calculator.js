function update(value){
                document.getElementById("screen").value += value;
            }

function result(){
                document.getElementById("screen").value = eval(document.getElementById("screen").value);
            }

 function reset(){
                document.getElementById("screen").value = '';
            }

function remove(){
               document.getElementById("screen").value =  (document.getElementById("screen").value).substring(0,  document.getElementById("screen").value.length-1);
            }

document.addEventListener('keydown',
function key_detect_calc(evt)
            {
                    if((evt.keyCode>95) && (evt.keyCode<106))
                    {
                            var code = evt.keyCode-96;
                            update(code);
                    }
                    else if((evt.keyCode>47) && (evt.keyCode<58))
                    {
                            var code = evt.keyCode-48;
                            update(code);
                    }
                    else if(evt.keyCode==107)
                    {
                            update('+');
                    }
                    else if(evt.keyCode==109)
                    {
                            update('-');
                    }
                    else if(evt.keyCode==106)
                    {
                            update('*');
                    }
                    else if(evt.keyCode==111)
                    {
                            update('/');
                    }
                    else if(evt.keyCode==110||evt.keyCode==190||evt.keyCode==188)
                    {
                            update('.');
                    }
                    else if(evt.keyCode==13)
                    {
                            result();
                    }
                    else if(evt.keyCode==46||evt.keyCode==27)
                    {
                            reset();
                    }
                    else if(evt.keyCode==8)
                    {
                            remove();
                    }
            }
        );