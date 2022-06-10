class Article {
    constructor({id, title, urlToImage, tags, ...rest}) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags= tags;
    }

    //ArticleGenerator
    generatorArticle() {
        let template = '';
        let article = document.createElement('arcticle');
        article.classList.add('strategy', 'block-shadows');
        article.dataset.id = this.id;

        if (this.urlToImage) {
            template += `<img src="${this.urlToImage}" alt="${this.title}" class="strategy__img">`;
        }

        if (this.title || this.tags) {
            template += `<div class="strategy__content">`;

            if (this.title) {
                template += `<h3 class="strategy__title">${this.title}</h3>`;
            }

            if (this.tags) {
                template += `<div class="strategy__tags">`;
                this.tags.map(tag => {
                    template += `<span class="tag tag_colored" data-tag="art">${tag}</span>`
                });
                template += `</div>`;
            }
           
            template += `</div>`;
        }

        article.innerHTML = template;
        return article
    };
}

export default Article