const btnUpload = document.getElementById('upload');
const imageResult = document.getElementById('image');
const linkDownload = document.getElementById('link');

btnUpload.addEventListener('click', (e) => {
    e.preventDefault();

    const bucket = document.getElementById('buckets').value;
    const file = document.getElementById('file').files[0];
    const formData = new FormData();
    formData.append("bucket", bucket);
    formData.append("file", file);

    uploadFile(formData);
});

const uploadFile = (formData) => {
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            imageResult.src = data.Location;
            linkDownload.href = data.Location;
        });
};