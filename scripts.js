// 假设你有一组图片链接数组
const images = [
    'c1c757d4aa30e02493e2f26c9b655a8.jpg',
    'c1c757d4aa30e02493e2f26c9b655a8.jpg',
    'c1c757d4aa30e02493e2f26c9b655a8.jpg'
];

function accept() {
    alert("谢谢11！这是我收到最好的礼物！");
}

window.onload = function() {
    const photoWall = document.querySelector('.photo-wall');
    images.forEach(imageSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        photoWall.appendChild(imgElement);
    });
};