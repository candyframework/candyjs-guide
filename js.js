(function() {

var header = document.querySelector('header');
var nav = document.getElementById('rightnav');
var width = nav.clientWidth;
var height = nav.clientHeight;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var btn = document.createElement('div');

header.style.position = 'fixed';
header.style.zIndex = '10';
header.style.top = '0';
header.style.left = '0';
header.style.width = '100%';

nav.style.position = 'fixed';
nav.style.width = width + 'px';

if(winWidth > 1200) {
    nav.style.height = '560px';
    nav.style.overflowY = 'auto';
    
} else {
    nav.style.display = 'none';
    nav.style.zIndex = '5';
    nav.style.width = '50%';
    nav.style.top = '0';
    nav.style.right = '0';
    nav.style.height = '100%';
    nav.style.overflowY = 'auto';
    
    btn.innerHTML = '菜单';
    btn.style.position = 'fixed';
    btn.style.zIndex = '10';
    btn.style.right = '20px';
    btn.style.bottom = '40px';
    btn.style.width = '50px';
    btn.style.height = '50px';
    btn.style.lineHeight = '50px';
    btn.style.textAlign = 'center';
    btn.style.color = '#fff';
    btn.style.fontSize = '12px';
    btn.style.borderRadius = '25px';
    btn.style.backgroundColor = '#333';
    
    document.body.appendChild(btn);
    
    btn.onclick = (e) => {
        e.stopPropagation();
        if(nav.style.display === 'none') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
    
    document.onclick = () => {
        nav.style.display = 'none';
    }
}

})();
