var who = [
    'The dog',
    'My granma',
    'His turtle',
    'My bird'
    ]
    
    var what = [
        'eat',
        'pissed',
        'crushed',
        'broked'
    ]
    
    var when = [
        'before the class',
        'right in time',
        'when I finished',
        'during my lunch',
        'while I was praying'
    ]
    
    
    var generator=function(parts){
        return function(){
            var string="";
            for(i in parts){
                var rand=Math.floor(Math.random()*parts[i].length);
                var space=(i==parts.length-1)?"":" ";
                string+=parts[i][rand]+space;
            }
            string+=".";
            return string
    
        }
    
    }
    style=generator([who, what,when]);