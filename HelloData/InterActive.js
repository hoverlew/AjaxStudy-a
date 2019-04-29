/**
 * Created by Administrator on 2019-04-29.
 */
window.onload=function(){
    let oBtn=document.getElementById("btn");
    let oBox=document.getElementById("box");

    oBtn.onclick=function(){
        const xhr=new XMLHttpRequest();
        xhr.open("GET","Data.txt",true);
        xhr.send();
        xhr.onload=function () {
            if(this.status===200){
                oBox.innerHTML=this.responseText;
            }
        };
        xhr.onerror=function () {
            console.log("大兄弟，出错了哦！");
        }
    }

    let oBtn1=document.getElementById("btn1");
    let oBox1=document.getElementById("box1");

    oBtn1.onclick=function () {
        const xhr=new XMLHttpRequest();
        xhr.open("GET","Json.txt",true);
        xhr.send();
        xhr.onload=function () {
            if(this.status===200){
                oBox1.innerHTML=JSON.parse(this.responseText).name;
            }
        }
    }

    let oBtn2=document.getElementById("btn2");
    let oBox2=document.getElementById("box2");

    oBtn2.onclick=function () {
        const xhr=new XMLHttpRequest();
        xhr.open("GET","Array.txt",true);
        xhr.send();
        xhr.onload=function () {
            if(this.status===200){
                let arr=JSON.parse(this.responseText);
                let str="";
                for(let i=0;i<arr.length;i++){
                    str+="<li>"+arr[i].name+"</li>"
                }
                oBox2.innerHTML=str;
            }
        }
    }
}
