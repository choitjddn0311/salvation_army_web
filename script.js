document.addEventListener('DOMContentLoaded', () => {
    const saText = document.querySelector(".textBox h1"),
    maxScrollValue = 170;

    window.addEventListener("scroll" , () => {
        const scrollValue = window.scrollY,
        scaleValue = 1 + scrollValue /  700,
        translateValue = scrollValue / 1;

        if(scrollValue > maxScrollValue){
            return;
        }

        saText.style.transform = `scale(${scaleValue}) translateY(${translateValue}px)`;
    });
});