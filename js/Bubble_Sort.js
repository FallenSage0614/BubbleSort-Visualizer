function help() {
    //    <div class="bar" id="bar1" style="height:2%;left:98.5%;"></div>
    var txt = "";
    var str1 = '           <div class="bar" id="bar';
    var str2 = '" style="height:2%;left:';
    var str3 = '%;"></div>\n';
    var left = 0.1;
    for (var i = 1; i <= 100; i++) {
        left.toFixed(1);
        txt += str1 + i + str2 + left + str3;
        left += 1;
    }
    console.log(txt);
}

function delay(ms){
        ms += new Date().getTime();
        while (new Date() < ms) { }
}

function swap(x,y){
    var txt1 = document.getElementById("bar" + x).style.height;
    var txt2 = document.getElementById("bar" + y).style.height;
    var num1 = document.getElementById("bar" + x).innerHTML;
    var num2 = document.getElementById("bar" + y).innerHTML;
    document.getElementById("bar" + x).style.height = txt2;
    document.getElementById("bar" + y).style.height = txt1;
    document.getElementById("bar" + x).innerHTML = num2;
    document.getElementById("bar" + y).innerHTML = num1;
}

function randNumber(n,min,max)
{
    var numbers="";
    var temp;
    var i=0;
    while(i<n)
    {
        temp=Math.round(Math.random() *(max-min+1)+min);
        i++;
        numbers=numbers+temp+" ";
    }
    return numbers;
}


function startSorting(str) {
    str = str.trim();
    var max = -Infinity;
    var min=Infinity;
    var arr = str.split(" ");
    for (x in arr) {
        arr[x] = parseFloat(arr[x]);
        if (isNaN(arr[x])) {
            document.getElementById('error').style.display="block";
            document.getElementById('error').innerHTML = "<span style='color:red;'>Error: Please enter numbers only</span>";
            return;
        }
        if (arr[x] > max)
            max = arr[x];
        if(arr[x]<min)
            min=arr[x];
    }
    document.getElementById('error').style.display ="none";

    var n = arr.length;
    console.log("Array Size: " + n);
    console.log("Array: " + arr);
    console.log("Max: " + max);


    var height = document.getElementById("workspace").clientHeight;
    var height2 = window.innerHeight;
    var h_perc = (height / height2) * 100;
    h_perc = Math.ceil(h_perc);
    console.log(h_perc);

    var margin = 0.1;
    var left = margin;
    var width = 100 - (n * 2 * margin);
    width = width / n;
    width.toFixed(1);

    var txt = "";
    var str1 = '           <div class="bar" id="bar';
    var str2 = '" style="height:'
    var str3 = '%;width:';
    var str4 = '%;left:';
    var str5 = '%;">';
    var str6 = '</div>\n';

    var h;
    for (var i = 0; i < n; i++) {
        h = (arr[i]-min+1) * h_perc / (max-min+1);
        h.toFixed(2);
        left.toFixed(1);
        txt += str1 + i + str2 + h + str3 +width+str4+ left +str5 + '<span style="color:white;">'+arr[i]+'</span>' + str6;
        left += width + 2 * margin;
    }

    document.getElementById("workspace").innerHTML=txt;

    var ssa=randNumber(10,20,50);
    var swaps=[];
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if(arr[i]<arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                swaps.push({i_pos:i,j_pos:j});
            }
        }
    }
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = "Here, <span style='color:blue'>Blue</span> is switching with <span style='color:red'>Red</span>";
    var swap_index=0;
    var timer=setInterval(startAnimation,50);
    function startAnimation(){
        if (swap_index != 0) {
            document.getElementById("bar" + swaps[swap_index - 1].i_pos).style.backgroundColor = "aquamarine";
            document.getElementById("bar" + swaps[swap_index - 1].j_pos).style.backgroundColor = "aquamarine";
        }
        document.getElementById("bar" + swaps[swap_index].i_pos).style.backgroundColor = "red";
        document.getElementById("bar" + swaps[swap_index].j_pos).style.backgroundColor = "blue";

        swap(swaps[swap_index].i_pos, swaps[swap_index].j_pos);
        swap_index++;
        console.log("hii");
        if(swap_index==swaps.length)
            clearInterval(timer);
    }
}


function showExample()
{
    document.getElementById("numberString").value = randNumber(30,10,80);
    startSorting(document.getElementById("numberString").value);
}