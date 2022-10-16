import Modal from "./Modal";

class ModalArticle extends Modal{
    constructor(classes, {id, title, urlToImage, tags, content, date}) {
        super(classes);
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags= tags;
        this.content = content;
        this.date= date;
    }

    generatorContent() {
        let template = '';
        let content = document.createElement('div');
        content.classList.add('article-modal__content');

        if (this.urlToImage) {
            template += `<img src="${this.urlToImage}" alt="${this.title}" class="strategy__img">`;
        }

        if (this.title || this.tags || this.content || this.date) {
            template += `<div class="strategy__content">`;

            if (this.title) {
                template += `<h3 class="strategy__title">${this.title}</h3>`;
            }

            if (this.tags) {
                template += `<div class="strategy__tags">`;
                this.tags.map(tag => {
                    template += `<span class="tag tag_colored" data-tag="${tag}">${tag}</span>`
                });
                template += `</div>`;
            }

            if (this.content) {
                template += `<p class="strategy__text">${this.content}</p>`;
            }

            if (this.date) {
                template += `<p class="strategy__date">${this.date}</p>`;
            }
           
            template += `</div>`;
        }

        content.innerHTML = template;
        return content
    };

    buildContent() {
        let content = this.generatorContent();
        super.buildModal(content);
    }
}

export default ModalArticle