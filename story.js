// index.js
function init(){
    const elUl = document.querySelector('.list');
    const popup = document.querySelector('.list__');
    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','story.json');  /* get, post */
    xhr.send(null);
    xhr.onload = function(){

        res = JSON.parse(xhr.responseText);
        //문서에서 불러온 내용을 객체타입으로 변경함(JSON.parse())
        
        res.work.forEach(function(v,k){
            tagList += `<img src = ${v.photo}>`;
            //tagList변수에 li 3개를 더하기 할당함
        });        
        elUl.innerHTML = tagList;
        //ul태그안의 html코드를 tagList(li 3개)로 변경함

        const elLi = document.querySelectorAll('.list img');
        for(let i=0; i<elLi.length; i++){
            // 화면에 출력된 li에 클릭이벤트를 발생(i값이 i++증감연산자에 의해 0,1,2값으로 변경됨)
            elLi[i].addEventListener('click',function(){
                // 첫번째 li의 i값은 0, 두번째 i값은 1, 세번째 i값은 2
                popup.style='display:flex';
                //팝업창 스타일 display:flex로 변경
                dataChange(i);                
                //팝업창의 내용을 변경(클릭한 li의 값과 일치되는 내용으로 변경)
            });
        }

        function dataChange(k){
            //json work값중 0,1,2값의 내용을 변수에 할당
            tit = res.work[k].name; 
            date = res.work[k].date;
            detail = res.work[k].detail;
            link = res.work[k].link;
            photo = res.work[k].photo;

            // 팝업안의 내용을 가져온 정보로 넣고 변수에 할당
            tagList = `<h2>${tit}[${date}]</h2>
                        <div>
                            ${detail} 
                            <a href="${link}" target="blank">       
                                바로가기 
                            </a>
                        </div>`;
            
            popup.innerHTML = tagList;
            //팝업안의 html을 tagList로 변경
        }

        popup.addEventListener('click',function(){
            popup.style = 'display:none';
        })


    }


}
window.onload = init;

// window.addEventListener('load',init);
// window.addEventListener('load',function(){  });
