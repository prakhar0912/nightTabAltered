
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.link-panel-front[href="chrome://settings/password"]').addEventListener("click", (e) => {
        e.preventDefault()
        chrome.tabs.update({ url: 'chrome://settings/passwords' });
    })
    document.querySelector('.link-panel-front[href="chrome://downloads"]').addEventListener("click", (e) => {
        e.preventDefault()
        chrome.tabs.update({ url: 'chrome://downloads/' });
    })
    document.querySelector('.link-panel-front[href="chrome://history"]').addEventListener("click", (e) => {
        e.preventDefault()
        chrome.tabs.update({ url: 'chrome://history/' });
    })
    if(window.innerHeight > 1700){
        document.querySelector('.background-visual-video').innerHTML = `
        <div class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide"><img src="./vertical/1.jpg" alt=""></li>
                    <li class="splide__slide"><img src="./vertical/9.jpg" alt=""></li>
                    <li class="splide__slide"><img src="./vertical/10.jpg" alt=""></li>
                    <li class="splide__slide"><img src="./vertical/11.jpg" alt=""></li>
                    <li class="splide__slide"><img src="./vertical/13.jpg" alt=""></li>
                    <li class="splide__slide"><img src="./vertical/15.jpg" alt=""></li>
                </ul>
            </div>
        </div>
        `
    
        var splide = new Splide('.splide', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
        });
        
        splide.mount();
    }
})



