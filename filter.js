var theCanvas;

function previewFile() {
var preview = document.querySelector(".prev");
var file = document.querySelector('input[type=file]').files[0];
var reader = new FileReader();

reader.addEventListener("load", function() {
preview.src = reader.result;
}, false);

if (file) {
reader.readAsDataURL(file)
theCanvas = Caman('.prev')
}
}

var filters = document.querySelectorAll('.filter')

Array.from(filters).forEach(function(node) {
node.addEventListener('click', function(e) {
if (typeof theCanvas === 'undefined') return;
    
var button = e.target,
filter = button.dataset.filter,
filterName = button.textContent;
    
button.textContent = 'Processing...';
    
theCanvas.reset();
theCanvas[filter]();
    
return theCanvas.render(function () {
button.textContent = filterName
});
})
})
