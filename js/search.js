let city_1 = [
    {v:"",t:""},
    {v:"1",t:"서울"},
    {v:"2",t:"경기도"},
    {v:"3",t:"인천"}
];

let city_child_1 = [
  {v:"11",t:"구로구"},
  {v:"12",t:"강남구"},
  {v:"13",t:"마포구"}
]
let city_child_2 = [
  {v:"21",t:"수원시"},
  {v:"22",t:"성남시"},
  {v:"23",t:"포천시"}
]
let city_child_3 = [
  {v:"31",t:"남동구"},
  {v:"32",t:"연수구"},
  {v:"33",t:"동구"}
]
function loadCity(){
    let h = [];
    city_1.forEach(item => {
        h.push('<option value="' + item.v + '">' + item.t + '</option>');
    })
    document.getElementById("city_1").innerHTML = h.join("");
}

function loadCityChild(){
    let city_1 = document.getElementById("city_1").value;
    let h = [];
    if(city_1 == ""){

    }else{
        if(city_1 == "1"){
          city_child_1.forEach(item => {
              h.push('<option value="' + item.v + '">' + item.t + '</option>');
          });
      }else if(city_1 == "2"){
          city_child_2.forEach(item => {
              h.push('<option value="' + item.v + '">' + item.t + '</option>');
          });
      }else if(city_1 == "3"){
          city_child_3.forEach(item => {
              h.push('<option value="' + item.v + '">' + item.t + '</option>');
          });
        }
    }
    document.getElementById("city_2").innerHTML = h.join("")
}

loadCity();