const name_item = document.querySelectorAll('.name__item');
const element_item = document.querySelectorAll('.element__items');
const fliter_button = document.querySelectorAll('#filter__button .btn');
const h1_price = document.querySelectorAll('h1.price');
const info = document.querySelectorAll('.info');

const search_item = doucment.getElementById('search__item');
var h1Text = document.getElementById('showtext');

// assign event
search_item.addEventListener('keyup', getItem);
search_item.addEventListener('click', reset);
console.log(fliter_button.length)

function reset(){
    for(let i=0;i<filter_button.length;i++){
        filter_button[i].classList.remove('active');
    }
    Array.from(element_cakes).forEach(function(element){
        element.style.display = 'block';
    })
    filter_button[0].classList.add('active');
    
}
// search item

function getItem(event){

    let lower_item = search_item.value.toLowerCase();
    Array.from().forEach(function(cake){
        let item_Name = cake.firstElementChild.textContent;
        if(item_Name.toLowerCase().indexOf(lower_item) != -1){
            cake.parentElement.style.display = 'block';
        }
        else {            
            cake.parentElement.style.display = 'none';
            
        }
    })
    
    checkNone();
}

// function check if all infor[] has display none => textContent = 'can't find'
function checkNone(target_element){
    var sum=0;
    for(let i=0;i<target_element.length;i++){
        if(target_element[i].parentElement.style.display === 'block'){
            sum++;
        }
    }
    if(sum==0){
        h1Text.textContent = "can't find.";
    }
    else {
        h1Text.textContent = "";
    }
}

// filter
Array.from(filter_button).forEach(function(button){
    button.addEventListener('click',function(event){

        for(let i=0;i<filter_button.length;i++){
            filter_button[i].classList.remove('active');
        }
        this.classList.add('active');

        let buttonAttr = event.target.dataset.filter;
        // let buttonAttr = button.getAttribute('data-filter');
        Array.from(element_cakes).forEach(function(element){
            let elementAttr = element.dataset.item; // lấy giá trị data-* dùng getAttribute hoặc dataset
            if(buttonAttr===elementAttr  || buttonAttr === 'all'){
                element.style.display = 'block';
            }   
            else {
                element.style.display = 'none';
            }
        })
    })
})
