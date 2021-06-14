
let CardGallery = (function() {
    const ClassNames = {
        galleryCard: 'gallery-card',
        galleryCardActive: 'gallery-card_active',
        galleryCardName: 'gallery-card__name',
        galleryCardNameActive: 'gallery-card__name_active',
        galleryCardNameLight: 'gallery-card__name_light',
        galleryCardNameDark: 'gallery-card__name_dark',
    };
    
    const Selectors = {
        cardGalleryContainer: undefined,
        galleryCard: `.${ClassNames.galleryCard}`,
        galleryCardActive: `.${ClassNames.galleryCardActive}`,
        galleryCardName: `.${ClassNames.galleryCardName}`,
        galleryCardNameActive: `.${ClassNames.galleryCardNameActive}`,
    };

    const Themes = {
        light: 'light',
        dark: 'dark',
    }
    
    let cardGalleryContainer = undefined;
    
    let init = function(dataForCardGallery, containerForGallery) {
        Selectors.cardGalleryContainer = containerForGallery;
        cardGalleryContainer = document.querySelector(Selectors.cardGalleryContainer);
        
        dataForCardGallery.forEach(({ url, title, style }) => {
            createGalleryCard(url, title, style);
        });

        document.querySelectorAll(Selectors.galleryCard).forEach(element => {
            element.addEventListener('mouseenter', onCardMouseenter);
            element.addEventListener('mouseleave', onCardMouseout);
            element.addEventListener('click', onCardClick);
        });
    };

    function onCardMouseenter() {
        this.classList.add(ClassNames.galleryCardActive);
        this.querySelector(Selectors.galleryCardName).classList.add(ClassNames.galleryCardNameActive);
    }

    function onCardMouseout() {
        this.classList.remove(ClassNames.galleryCardActive);
        this.querySelector(Selectors.galleryCardName).classList.remove(ClassNames.galleryCardNameActive);
    }
    
    function onCardClick() {
        let activeCard = document.querySelector(`${Selectors.cardGalleryContainer} ${Selectors.galleryCardActive}`);
        if (activeCard !== null) {
            activeCard.classList.remove(ClassNames.galleryCardActive);
            activeCard.querySelector(Selectors.galleryCardNameActive).classList.remove(ClassNames.galleryCardNameActive);
        }
        
        this.classList.add(ClassNames.galleryCardActive);
        this.querySelector(Selectors.galleryCardName).classList.add(ClassNames.galleryCardNameActive);
    }
    
    function createGalleryCard(imageUrl, cardTitle, style) {
        
        let galleryCard = document.createElement('div');
        galleryCard.className = ClassNames.galleryCard;
        galleryCard.style.backgroundImage = `url(${imageUrl})`;

        let galleryCardThemeClass = style === Themes.dark ? ClassNames.galleryCardNameDark : ClassNames.galleryCardNameLight;
        galleryCard.innerHTML = `<h3 class="${ClassNames.galleryCardName} ${galleryCardThemeClass}">${cardTitle}</h3>`;
        
        cardGalleryContainer.appendChild(galleryCard);
    }

    return {
        init: init,
    };
})();

let dataForCardGallery = [
    {
        url: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3152&q=80',
        title: 'Skin care',
        style: 'dark',
    },
    {
        url: 'https://images.unsplash.com/photo-1521223344201-d169129f7b7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'Summer collection',
        style: 'dark',
    },
    {
        url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
        title: 'Oil collection',
        style: 'light',
    },
    {
        url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
        title: 'Make Up',
        style: 'light',
    },
    {
        url: 'https://images.unsplash.com/photo-1587304791558-bee9492162ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
        title: 'Parfumes',
        style: 'dark',
    },
    {
        url: 'https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        title: 'Luxe',
        style: 'dark',
    },
    {
        url: 'https://images.unsplash.com/photo-1591130901921-3f0652bb3915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        title: 'Body care',
        style: 'light',
    },
];

let containerForGallery = '#card-gallery';

CardGallery.init(dataForCardGallery, containerForGallery);