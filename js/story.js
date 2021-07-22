// index.js
function init(){
    const elList = document.querySelector('.list');
    const popup = document.querySelector('.popup');
    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','js/story.json');  
    xhr.send(null);
    xhr.onload = function(){

        res = JSON.parse(xhr.responseText);
        res.work.forEach(function(v,k){
            tagList += `<img src = ${v.photo}>`;
        
        });        
        elList.innerHTML = tagList;
        

        const elLi = document.querySelectorAll('.list img');
        for(let i=0; i<elLi.length; i++){
            
            elLi[i].addEventListener('click',function(){
             
                popup.style='display:flex';
                dataChange(i);                
              
            });
        }

        function dataChange(k){
           
            tit = res.work[k].name; 
            date = res.work[k].date;
            detail = res.work[k].detail;
            link = res.work[k].link;
            photo = res.work[k].photo;

          
            tagList = `<h2>${tit} [${date}]</h2>
                        <div>
                            ${detail} 
                            <a href="${link}" target="blank">       
                                바로가기
                            </a>
                            </div>
                            <p>* 클릭하면 사라집니다.</p>`;
            
            popup.innerHTML = tagList;
           
        }
        popup.addEventListener('click',function(){
            popup.style = 'display:none';
        })
    }
}
window.onload = init;


