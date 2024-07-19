const imgfile = document.querySelector("#input-file");

imgfile.addEventListener("change", (event) => {
const selectedFile = event.target.files[0];
// FormData
const formData = new FormData();
formData.append("image", selectedFile);

// config
const config = {
headers: {
Authorization: "Client-ID 4ddb1cef2cbd23a", // YOUR_CLIENT_ID Imgur
},
};

// POST
axios
.post("https://api.imgur.com/3/image", formData, config)
.then((response) => {
console.log(response.data);
// link
const { link } = response.data.data;
console.log(link);
const preview = document.querySelector("#placeholder");
preview.src = link;
const imgLink = document.querySelector("#url");
imgLink.textContent = link;
})
.catch((error) => {
console.error(error);
// error
alert("error! url imgur.");
});
});

function selectFile() {
document.getElementById("input-file").click();

let type = fileInput.files[0].type;
  mime.innerHTML = type;
}
