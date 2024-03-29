const image = document.getElementsByClassName('image')
let index = 0
const imageUrls= [
    'https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631',
    'https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1710346933',
    'https://rus.egamersworld.com/_next/image?url=https%3A%2F%2Fegamersworld.com%2Fuploads%2Fblog%2F1684922824505.jpg&w=1920&q=75'
];
function increment(){
    index += 1;
    image.src = imageUrls[index];
};
function decrement(){
    index -= 1;
    image.src = imageUrls[index];
};