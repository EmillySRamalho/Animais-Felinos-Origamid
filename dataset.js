//const div = document.querySelector('div');

//console.log(div.dataset)
//console.log(div.dataset.cor)

const div = document.querySelector('[data-cor]');
div.dataset.height = "1000";

delete div.dataset.width;

div.dataset.totalHeight = "2000";

console.log(div.dataset)