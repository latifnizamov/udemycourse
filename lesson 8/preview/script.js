let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.scrollWidth,
    height = box.scrollHeight;

 console.log(width);
 console.log(height);
 console.log(box.getBoundingClientRect().left);

 console.log(document.documentElement.scrollWidth);
 console.log(document.documentElement.scrollHeight);
 console.log(document.documentElement.scrollTop);
 
 
 

 btn.addEventListener('click', function() {
    box.style.height = box.scrollHeight + 'px';   
 });
 
 scrollBy(0, 200);
 scrollTo(0,200);