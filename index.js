window.post = function(url, data) {
    return fetch('controller.php',{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(r=>r).then(d=>console.log(d));
}



window.onload = () => {

document.querySelectorAll(['[data-tlid]']).forEach(elem=>{
    elem.addEventListener('click',e=>{
        console.log(e.target.dataset.tlid);
        const answer = fetch('controller.php',{method : 'post', body : JSON.stringify({key : 'value'})})
        console.log('Answer : ',answer);
    })
});

}



let a = fetch('controller.php',{ method : 'post', body : {key : 'value'}, headers : new Headers()}).then(r=>console.log(r))

let formData = new FormData();
 formData.append('key','value')


 fetch('controller.php',{method : "POST", body : formData}).then( response =>{
     if(response.ok){
         return response.text()
     }else{
         throw new Error('Error en la llamada ajaz')
     }
 })