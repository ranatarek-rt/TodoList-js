let arr = [];
function addEntry(){
    let inputElement = document.querySelector('.js-data');
    let dateElement = document.querySelector('.js-date');
    let date = dateElement.value;
    let data = inputElement.value.trim();
    // do not append empty string 
    if(data === '') return;
    arr.push({data,date});
    console.log(arr);
    inputElement.value ='';
    renderList();

}

function renderList(){
    let div = document.getElementById('todo-list');
    div.innerHTML = '';
    for(let i = 0 ;i<arr.length; i++){
        let p = document.createElement('p');
        let span = document.createElement('SPAN');
        let btn = document.createElement('button');
        btn.textContent = 'Delete';
        span.innerText = arr[i].date;
        p.innerText = arr[i].data;
        btn.addEventListener('click',(e)=>{
            arr.splice(i,1);
            renderList();
        })

        p.appendChild(span);
        p.appendChild(btn);
        div.appendChild(p);
    }
}



