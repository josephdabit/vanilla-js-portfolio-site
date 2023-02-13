class Project {
    constructor(title, imageUrl, siteUrl) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.siteUrl = siteUrl;
    }

    projectRender() {
        const li = document.createElement('li');
        li.textContent = `Title: ${this.title}, Image: ${this.imageUrl}, Site: ${this.siteUrl}`;
        li.classList.add('projectItem');
        const liSection = document.createElement('section');
        liSection.append(li);
        liSection.classList.add('projectSection');
        return liSection
    }
}