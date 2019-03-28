var $ = function (id) {
    return document.getElementById(id);
};
window.onload = function() {
    $("btnDecode").onclick = fnDecode;
    $("btnEncode").onclick = fnEncode;
    $("btnClear").onclick = ClearFields;
};
function fnDecode() {
    var msg = $("textin").value;
    if (msg === "") {
        $("textin_span").innerHTML = "' Please enter a message to decode '";
        $("textin").focus();
        return ;
    } else {
        $("textin_span").innerHTML = "";
    }
    var nums = msg.split(",");
    var c;
    var outstr = "";
    for(var i=0; i < nums.length; i++) {
        var n2 = parseInt(nums[i]);
        if (isNaN(n2)) {
            outstr += "?";
        } else if (isNa11N(nums[i])) { 
            outstr += "?";   
        }
          else if (n2 === 0) {
            outstr += " ";
        } else if (n2 < 1 || n2 > 26) {
            outstr += "?";
        } else {
            outstr += String.fromCharCode(n2+64);
        }
    }
    $("textout").value = outstr;
}
function isNa11N(s) {
    //parse string to check that all characters are digits
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (isNaN(c) || c === ' ') {
            return true;
        }
    
}
return false;
}
function fnEncode() {
    var msg = $("textin").value.toUpperCase();
    $("textin").value = msg;
    var outstr = "";
    var c;
    for (var i=0; i<msg.length; i++) {
        c = msg.charCodeAt(i); //ascii : space=30, A=65, B=66, 
        //var x = msg.charAt(i);
        if (c === 32) {
            outstr += "0 ";
        } else {
            c = c - 64; //adj to A=1, B=1
            if (c < 1 || c > 26) {
                outstr += "99 ";
            } else {
                outstr += c + " ";
            }
        } 
    }
    $("textout").value = outstr;
}
function ClearFields() {
     document.getElementById("textin").value = "";
     document.getElementById("textout").value = "";
} 
