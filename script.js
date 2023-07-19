// cardGameInfo

class CardGame {
    constructor(src, title, rating, count, parentSelector, ...classes) {
        this.src = src
        this.title = title
        this.rating = rating
        this.count = count
        this.classes = classes
        this.parent = document.querySelector(parentSelector)
    }

    render() {
        const element = document.createElement('div')

        if (this.classes.length === 0) {
            this.element = 'card-info'
            element.classList.add(this.element)
            console.log('none')
        } else {
            this.classes.forEach(classname => element.classList.add(classname))
            console.log('yes')
        }

        element.innerHTML = `
                <img class="card-info-img" src=${this.src}  alt="">
                
                <div class="card-info-top">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                        <path id="XMLID_308_" d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999
                        \tc4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4
                        \tC32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"/>
                    </svg>
                </div>
                
                <div class="card-info-bottom">
                <div class="card-info-bottom-l">
                    <p>Rating:</p>
                    <h1>${this.rating}</h1>
                </div>
                <div class="card-info-bottom-r">
                    <p>Reviews count</p>
                    <h1>${this.count}</h1>
                </div>
            </div>
            <h1 class="card-info-text">${this.title}V</h1>
                            `
        this.parent.append(element)
    }
}

new CardGame(
    'img/gta_v.webp',
    'Grand Theft Auto V',
    '4.47/5.0',
    '6,330',
    '.cards-info',
    'card-info',
).render()