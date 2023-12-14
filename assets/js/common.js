window.addEventListener("mousemove", function(event){
    document.querySelector(".clientX").innerHTML = event.clientX;
    document.querySelector(".clientY").innerHTML = event.clientY;
    document.querySelector(".offsetX").innerHTML = event.offsetX;
    document.querySelector(".offsetY").innerHTML = event.offsetY;
    document.querySelector(".pageX").innerHTML = event.pageX;
    document.querySelector(".pageY").innerHTML = event.pageY;
    document.querySelector(".screenX").innerHTML = event.screenX;
    document.querySelector(".screenY").innerHTML = event.screenY;
});

// 선택자
const cursor = document.querySelector(".mouse__cursor");
const mouseinfo = document.querySelectorAll(".mouse__text ul li span");

window.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX -25 + "px";
    cursor.style.top = e.clientY -25 + "px";
});

// s1
document.querySelector(".s1").addEventListener("mouseover", function(){
    cursor.classList.add("s1");
});
document.querySelector(".s1").addEventListener("mouseout", function(){
    cursor.classList.remove("s1");
});

// s2
document.querySelector(".s2").addEventListener("mouseover", function(){
    cursor.classList.add("s2");
});
document.querySelector(".s2").addEventListener("mouseout", function(){
    cursor.classList.remove("s2");
});

// s3
document.querySelector(".s3").addEventListener("mouseover", function(){
    cursor.classList.add("s3");
});
document.querySelector(".s3").addEventListener("mouseout", function(){
    cursor.classList.remove("s3");
});

// s4
document.querySelector(".s4").addEventListener("mouseover", function(){
    cursor.classList.add("s4");
});
document.querySelector(".s4").addEventListener("mouseout", function(){
    cursor.classList.remove("s4");
});

// s5
document.querySelector(".s5").addEventListener("mouseover", function(){
    cursor.classList.add("s5");
});
document.querySelector(".s5").addEventListener("mouseout", function(){
    cursor.classList.remove("s5");
});

// s6
document.querySelector(".s6").addEventListener("mouseover", function(){
    cursor.classList.add("s6");
});
document.querySelector(".s6").addEventListener("mouseout", function(){
    cursor.classList.remove("s6");
});

// s7
document.querySelector(".s7").addEventListener("mouseover", function(){
    cursor.classList.add("s7");
});
document.querySelector(".s7").addEventListener("mouseout", function(){
    cursor.classList.remove("s7");
});

// s8
document.querySelector(".s8").addEventListener("mouseover", function(){
    cursor.classList.add("s8");
});
document.querySelector(".s8").addEventListener("mouseout", function(){
    cursor.classList.remove("s8");
});

// for문
for(let i=1; i<=8; i++){
    document.querySelector(".s"+i).addEventListener("mouseover", function(){
    cursor.classList.add("s"+i);
    });
    document.querySelector(".s"+i).addEventListener("mouseout", function(){
        cursor.classList.remove("s"+i);
    });
}

// forEach문
document.querySelectorAll(".mouse__text span").forEach((span, num) => {
    span.addEventListener("mouseover", function(){
        cursor.classList.add("s"+(num+1));
    });
    span.addEventListener("mouseout", function(){
        cursor.classList.remove("s"+(num+1));
    });
});

//getAttribute();
document.querySelectorAll(".mouse__text span").forEach(function(span){
    let attr = span.getAttribute("class");
    //attr = s1 s2 s3 s4 s5 s6 s7 s8
    span.addEventListener("mouseover", function(){
        cursor.classList.add(attr);
    });
    span.addEventListener("mouseout", function(){
        cursor.classList.remove(attr);
    });
});