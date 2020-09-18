function hola(){
    console.log('Hola mundo!');
    console.log(this);
}

window.onload = () => {

document.querySelectorAll(['[data-tlid]']).forEach(elem=>{
    console.log(elem.dataset.tlid)
    elem.addEventListener('click',(e)=>{
        console.log('tlid was clicked')
        console.log(e.target.dataset.tlid);
    })
});



}
