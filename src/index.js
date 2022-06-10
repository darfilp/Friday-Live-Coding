import Article from "./js/Article";

const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './assets/img/strategy/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
    },
    {
        id: 2,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './assets/img/strategy/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
    },
    {
        id: 3,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './assets/img/strategy/3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
    },
    // {
    //     id: 4,
    //     title: 'Increasing Prosperity With Positive Thinking',
    //     urlToImage: './src/assets/4.png',
    //     tags: ['Culture', 'Design', 'Art'],
    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    //     date: '01.01.2022'
    // },
    // {
    //     id: 5,
    //     title: 'Increasing Prosperity With Positive Thinking',
    //     urlToImage: './src/assets/5.png',
    //     tags: ['Design'],
    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    //     date: '01.01.2022'
    // },
];

window.onload = function() {

    //Render Articles
    if (data) {
        renderArticlestoDOM();
    }

    //Tags
    addTagsClickHandler();

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
    console.log(selectedTags)
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
    //console.log(generateArticle(data))
    generateArticle(data).forEach(item => {
        console.log(item);
        strategiesWrapper.append(item.generatorArticle());
    })
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
