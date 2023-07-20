// Loader
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader')

    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 1000)
})

// cardGameInfo

class CardGame {
    constructor(src, title, rating, count, parentSelector, video, ...classes) {
        this.src = src
        this.title = title
        this.rating = rating
        this.count = count
        this.video = video
        this.classes = classes
        this.parent = document.querySelector(parentSelector)
    }

    render() {
        const element = document.createElement('div')

        if (this.classes.length === 0) {
            this.element = 'card-info'
            element.classList.add(this.element)
        } else {
            this.classes.forEach(classname => element.classList.add(classname))
        }

        element.innerHTML = `
                <video class="video-game hide" controls>
                    <source src=${this.video} type="video/mp4">
                </video>
                <img class="card-info-img" src=${this.src}  alt="">
                
                <div class="card-info-top">
                    <button>
                        <svg data-video version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                        <path id="XMLID_308_" d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999
                        \tc4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4
                        \tC32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"/>
                        </svg>
                    </button>
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
            <h1 class="card-info-text">${this.title}</h1>
                            `
        this.parent.append(element)

        class CardGameInfo {
            constructor(title, src, date, genres, desc, parentSelector, ...classes) {
                this.title = title
                this.src = src
                this.date = date
                this.genres = genres
                this.desc = desc
                this.parent = document.querySelector(parentSelector)
                this.classes = classes
            }

            render() {
                const box = document.createElement('div')

                if (this.classes.length === 0) {
                    this.box = 'box'
                    box.classList.add(this.box)
                } else {
                    this.classes.forEach(classname => box.classList.add(classname))
                    box.classList.add('hide')
                }


                box.innerHTML = `
                    <a href="index.html" class="back-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                          <path d="M0.939412 10.9392C0.353586 11.5249 0.353521 12.4747 0.939268 13.0605L10.4846 22.6071C11.0703 23.1929 12.0201 23.193 12.6059 22.6073C13.1917 22.0215 13.1918 21.0718 12.606 20.4859L4.12132 12.0001L12.6072 3.51537C13.193 2.92962 13.1931 1.97988 12.6073 1.39405C12.0216 0.808223 11.0718 0.808159 10.486 1.39391L0.939412 10.9392ZM3.0001 10.5L2.0001 10.4999L1.9999 13.4999L2.9999 13.5L3.0001 10.5Z" fill="#CB5AD6"/>
                        </svg>
                        <h1 class="back-btn1">Top games</h1>
                    </a>
                    <div class="box-text">
                        <h1>${this.title}</h1>
                        <div class="">
                            <h2>Orginal name:</h2>
                            <p>${this.title}</p>
                        </div>
                    </div>
                    <img src=${this.src} alt="">
                    <div class="box-info">
                        <h1>INFO</h1>
                        <p>Release Date: <span>${this.date}</span></p>
                        <p>Generes: <span>${this.genres}</span></p>
                    </div>
                    <div class="box-info">
                        <h1>Description</h1>
                        <p><span>${this.desc}</span></p>
                    </div>
                    `
                this.parent.append(box)
            }
        }

        new

        CardGameInfo(
            'Grand Theft Auto V',
            'img/gta_v.webp',
            '2013-09-17',
            'Action, Adventure',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem dolorum exercitationem fugiat ipsam minima odit perspiciatis! Accusantium aspernatur atque commodi culpa deserunt enim facere illum incidunt inventore ipsa iure nam natus non nostrum nulla odio perspiciatis quos reiciendis, sed suscipit tempore velit vero voluptatem.',
            'body',
            'box'
        ).render()

        new

        CardGameInfo(
            'The Witcher 3 Wild Hunt',
            'img/thewicher.jpeg',
            '2015-05-18',
            'Action, Role-Playing',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem dolorum exercitationem fugiat ipsam minima odit perspiciatis! Accusantium aspernatur atque commodi culpa deserunt enim facere illum incidunt inventore ipsa iure nam natus non nostrum nulla odio perspiciatis quos reiciendis, sed suscipit tempore velit vero voluptatem.',
            'body',
            'box'
        ).render()

    }
}


new

CardGame(
    'img/gta_v.webp',
    'Grand Theft Auto V',
    '4.47/5.0',
    '6,330',
    '.cards-info',
    'video/videoplayback.mp4',
    'card-info',
).render()

new

CardGame(
    'img/thewicher.jpeg',
    'The Witcher 3 Wild Hunt',
    '4.66/5.0',
    '6,025',
    '.cards-info',
    'video/videoplayback.mp4',
    'card-info',
).render()

const
    cardGameParent = document.querySelector('.cards-info'),
    cardGame = document.querySelectorAll('.card-info-img'),
    cardGameContent = document.querySelectorAll('.box'),
    cont = document.querySelector('.container'),
    foot = document.querySelector('.footer'),
    topGame = document.querySelector('.top-game')


function hideGameContent() {
    cardGameContent.forEach(item => {
        item.classList.add('hide',)
        item.classList.remove('show',)


    })
}

function showGameContent(i = 0) {
    cardGameContent[i].classList.add('show',)
    cardGameContent[i].classList.remove('hide')
    cardGame[i].classList.add('tabheader__item_active')
}

cardGameParent.addEventListener('click', (e) => {
    const target = e.target
    cardGame.forEach((item, idx) => {
        if (target === item) {
            hideGameContent()
            showGameContent(idx)

            cont.classList.add('hide')
            foot.classList.add('hide')
        }
    })
})
// Search

const search = document.querySelector('.search-top'),
    searchBtn = document.querySelector('.search-btn'),
    topGameBtn = document.querySelector('.top-game-btn')

searchBtn.addEventListener('click', () => {
    topGame.classList.add('hide')
    searchBtn.classList.add('active')
    topGameBtn.classList.remove('active')
    search.classList.remove('hide')
})

topGameBtn.addEventListener('click', () => {
    topGame.classList.remove('hide')
    searchBtn.classList.remove('active')
    topGameBtn.classList.add('active')
    search.classList.add('hide')
})


