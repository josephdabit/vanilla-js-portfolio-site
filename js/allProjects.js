class AllProjects {
    constructor(projects = []) {
        this.projects = projects;
        this.visibleProjects = projects;
    }

    addProject(project) {
        this.projects.push(project)
    }

    allProjectsRender() {
        const unorderedList = document.createElement('ul');
        unorderedList.classList.add('unorderedList');
        const projectMap = this.projects.map((value) => value.projectRender());
        unorderedList.replaceChildren(...projectMap);
        return unorderedList;
    }
}