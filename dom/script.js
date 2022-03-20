var initialcontent = $("p").html();

//pour desactiver le boutton "OK" si on n'a tapé aucun mot
function manage(txt) {
    var bt = document.getElementById('ok');
    if (txt.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
}

function raz(){
    $("p").html(initialcontent);
    $("#colors").val('').change();
    $("#style").val('normal').change();
    $("#police").val('Courier New').change();
    $("#borders").val('null').change();
    $("#first").val('Courier New').change();
    $("firstletter").val('normal').change()
}
function changeColor(col){
    document.getElementsByClassName('contenu')[0].style.background=col;

}
function changeFont(font){
    document.getElementsByClassName('contenu')[0].style.fontFamily=font;
}
function changeFirstSentenceStyle(firstfont){
    document.getElementById("first").style.fontFamily=firstfont;
}
function changeStyle(style){
    document.getElementsByClassName('contenu')[0].style.fontStyle='initial';
    document.getElementsByClassName('contenu')[0].style.textDecoration='initial';
    document.getElementsByClassName('contenu')[0].style.fontWeight='initial';
    if(style=='italic' || style=='normal'){
        document.getElementsByClassName('contenu')[0].style.fontStyle=style
    }else if(style=='underligned'){
        document.getElementsByClassName('contenu')[0].style.textDecoration='underline';
    }else{
        document.getElementsByClassName('contenu')[0].style.fontWeight='bold'
    }
    }
    function imageBorder(border){
        var picstyle=document.getElementById("pic").style.border;
        console.log(picstyle)
        if(border=='null'){
            $("img").css('border', "");
        }else if(border=='simple'){
            $("img").css('border', "2px solid yellow");
        }else{
            $("img").css('border', "5px double yellow");
        }
        
    }
function colorWord(word){
   var searchEXP = new RegExp("\\b"+word+"\\b","ig");
    var txt = $("p").html();
    var matches = txt.match(searchEXP);
    console.log(matches);
    if(word!='' || word!=' '){
        if (matches){
        $("p").html(txt.replace(searchEXP,function(match){
            return "<span class='colored'>"+match+"</span>"
        }))
    }
}}
function boldLetter(weight){
    var letter =document.getElementsByClassName("firstletter");
    for(var i=0;letter.length;i++){
        letter[i].style.fontWeight=weight;
    }
    
}