import Article from "./js/Article";
import Modal from "./js/Modal";
import ModalArticle from "./js/ArticleModal";

const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: '/src/assets/img/strategy/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
    },
    {
        id: 2,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: '/src/assets/img/strategy/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
    },
    {
        id: 3,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: '/src/assets/img/strategy/3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
    },
];

window.onload = function() {

    //Render Articles
    if (data) {
        renderArticlestoDOM();
    }

    //Tags
    addTagsClickHandler();

    //Generate Modal
    addToolsClickHandler();
};

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags('.strategies__tags .tag', 'tag_active');
            selectedClickedTags(clickedTag);
            if (clickedTag.dataset.tag === "all") {
                showAllStrategies();
            } else {
                console.log(clickedTag.dataset.tag)
                filterStrategies(clickedTag.dataset.tag);
            }
        }
    });
};

const removeSelectedTags = (selectorTags, removeTag) => {
    let selectors = document.querySelectorAll(selectorTags);
    selectors.forEach(selector => {
        selector.classList.remove(removeTag);
    })
};

const selectedClickedTags = (clickedTag) => {
    clickedTag.classList.add('tag_active');
};

const showAllStrategies = () => {
    const strategies = document.querySelectorAll('.strategies-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
};

const filterStrategies = (selectedTags) => {
    const strategies = document.querySelectorAll('.strategies-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(item => {
            if (item.dataset.tag === selectedTags) {
                strategy.classList.remove('strategy_hidden');
            }
        })
    })
};

const renderArticlestoDOM = () => {
    let strategiesWrapper = getStrategiesWrapper();
    generateArticle(data).forEach(item => {
        strategiesWrapper.append(item.generatorArticle());
        
    })
    addArticleHandler();
};

const getStrategiesWrapper = () => {
    const strategiesContainer = document.querySelector('.strategies-wrapper');
    
    strategiesContainer.innerHTML = "";
    return strategiesContainer;
};

const generateArticle = (data) => {
    let articles = [];
    
    data.forEach(arcticle => {
        articles.push(new Article(arcticle))
    });

    return articles;
};

const addToolsClickHandler = () => {
    document.querySelector('.tools__button').addEventListener('click', () => {
        generateToolsModal();
    })
}

const generateToolsModal = () => {
    renderModal('hi')
}

const renderModal = (content) => {
    const modal = new Modal('tools-modal');
    modal.buildModal(content);
};

const addArticleHandler = () => {
    document.querySelector('.strategies-wrapper').addEventListener('click', (e) => {
        if (e.target.closest('.strategy')) {
            let idClicked = e.target.closest('.strategy').dataset.id;
            let acticleClicked = getDataId(idClicked);
            console.log(acticleClicked)

            renderArticleModal(acticleClicked);
        }
    })
}

const getDataId = (id) => {
    return data.find(article => article.id == id)
};

const renderArticleModal = (article) => {
    const modal = new ModalArticle('article-modal', article);
    modal.buildContent()
}
