const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const { width, height } = imgElem;
        console.log(width, height);
        callback(null, { width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'));
};

const imgSrc = 'https://envato-shoebox-0.imgix.net/1846/dffa-0fdc-440e-ab21-c98111875abe/4H1A1612.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=4e1e92f33087336e76504c86758a5c0e';

const onImageLoaded = (error, data) => {
    if (error) {
        console.log(error)
        return;
    }
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);

export { addImage };
