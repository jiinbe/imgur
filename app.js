const input = document.getElementById('input-file');
const canvas = document.getElementById('preview');
const context = canvas.getContext('2d');
const ph = document.getElementById('placeholder');
const dlLink = document.getElementById('dl');
const frameImage = new Image();
frameImage.src = 'frame.png'; // Replace with the path to your frame image

input.addEventListener('change', drawImageFromInput);

function drawImageFromInput(callback) {
  context.clearRect(0, 0, 1024, 1024);

  if (input.files.length === 0) {
    context.drawImage(ph, 0, 0, 1024, 1024);
    if (typeof callback === 'function') callback();
  } else {
    const img = new Image();
    img.addEventListener('load', function () {
      size = Math.min(img.height, img.width);
      x1 = 0;
      y1 = 0;
      if (img.height < img.width) {
        //breit
        x1 = img.width / 2 - size / 2;
      } else if (img.height > img.width) {
        //hoch
        y1 = img.height / 2 - size / 2;
      }
      context.drawImage(img, x1, y1, size, size, 0, 0, 1024, 1024);
      context.drawImage(frameImage, 0, 0, 1024, 1024); // Add this line to apply the frame

      prepareDownloadLink();

      if (typeof callback === 'function') callback();
    });
    img.src = URL.createObjectURL(input.files[0]);
  }
}

function prepareDownloadLink() {
  if (input.files[0]) {
    dlLink.setAttribute(
      'download',
input.files[0].name.replace(/[^\\\/]*$/, 'avatar.png')
    );
  }
  dlLink.hidden = false;
  dlLink.href = canvas.toDataURL();
}

placeholder.onload = drawImageFromInput;

// input check
const output = document.getElementById("input-file");
const output = document.getElementById("output");

input.addEventListener("change", () => {
const file = input.files[0];
if (file) {
const { name, type } = file;
output.textContent = `ext: ${name.split(".").pop()}\nmime: ${type}`;
} else {
output.textContent = "";
}
});
