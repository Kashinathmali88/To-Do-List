var text = document.querySelector('#text-input');

var list_added = document.querySelector('#list');

function addTask(){
    if(text.value === ''){
        alert('You must write something!')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = text.value;
        list_added.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    text.value = '';
    save_data();
}

list_added.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        save_data();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save_data();
    }
},false)

function save_data(){
    localStorage.setItem("data",list_added.innerHTML)
}

function showTask(){
    list_added.innerHTML=localStorage.getItem("data");

}

showTask();
