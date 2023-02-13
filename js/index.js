const main = document.querySelector('#main-page');
const projectDisplay = new AllProjects();
for (let i = 0; i < projectData.length; i++) {
    const oneProject = new Project(projectData[i].title, projectData[i].imageUrl, projectData[i].siteUrl);
    projectDisplay.addProject(oneProject);
}
const fillProjects = projectDisplay.allProjectsRender();
main.append(fillProjects)