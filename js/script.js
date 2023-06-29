const slider = document.querySelector('.slider');

let isDragging = false;
let draggingSpeed = 3;
let wheelScrollDistance = 100;

function dragStop() {
    isDragging = false;
    slider.classList.remove('slider--dragging');
}

function dragging(e) {
    if (!isDragging) return;
    
    slider.classList.add('slider--dragging');
    slider.scrollLeft -= e.movementX * draggingSpeed;
}

function wheelScroll(e) {
    console.log(e);
    
    if (e.deltaY < 0) {
        // колёсико вверх
        slider.scrollLeft -= wheelScrollDistance;
    } else {
        // колёсико вниз
        slider.scrollLeft += wheelScrollDistance;
    }
}

slider.addEventListener('mousedown', () => { isDragging = true });
document.addEventListener('mouseup', dragStop);

slider.addEventListener('mousemove', dragging);
slider.addEventListener('wheel', wheelScroll);


