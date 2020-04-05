var imgCount = 1;
function listNext (){
    var img = document.querySelector('.gallery_active');
    imgCount++;
    if(imgCount>3){
            imgCount=1;
       };
    img.setAttribute('src', 'img/img'+imgCount+'.jpg');
};

function listPrev (){
   var img = document.querySelector('.gallery_active');
    imgCount--;
    if(imgCount===0){
            imgCount=3;
       };
    img.setAttribute('src', 'img/img'+imgCount+'.jpg'); 
};

var next = document.querySelector('.next');
next.addEventListener('click', listNext);

var prev = document.querySelector('.prev');
prev.addEventListener('click', listPrev);



let tab = function(){
    let tabNav=document.querySelectorAll('.tab'),
        tabContent=document.querySelectorAll('.item'),
        tabName;
    tabNav.forEach(item=>{
        item.addEventListener('click',selectTadNav)
    });
    function selectTadNav(){
        tabNav.forEach(item=>{
            item.classList.remove('tab_active');
        });
        this.classList.add('tab_active');
        tabName=this.getAttribute('data-tab-name');
        selectTadCont(tabName);
    }
    function selectTadCont(tabName){
        tabContent.forEach(item=>{
            item.classList.contains(tabName)?item.classList.add('tab_active'):item.classList.remove('tab_active');
        })
    }
};

tab();