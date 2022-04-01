'use strict';

fetch('./items.json')
.then((response) => {
   return response.json();
})
.then((data) => {
   
   showData(data);
})

   function showData(arr) {
       let html= document.querySelector('#root');
       arr.map((element) => {
           html.innerHTML += `
             
       <div class="review">
       <div><img src="${element.images}"></div>
       <h1>${element.name}</h1>
       <div>${element.cost} eur</div>
       </div>
           `;
       })
   }

    // $('ducument').ready(function(){
    //     loadGoods();
    // })
    // function loadGoods() {
    //     $getJSON('goods.json', function(data) {
    //         var out = '';
    //         for(var key in data) {
    //            // out +='<div class="single-goods">';
    //             out += '<h3>' + data[key] ['name'] + '</h3>';
    //             out += '<p>Kaina: ' + data[key] ['cost'] + '</p>';
    //             out += 'img src="'+data[key].image+'">';
    //            // out += '<button>Pirkti</button>';
    //            // out += '</div>';
    //         }
    //         $('#goods').html(out);
    //     })
    // }