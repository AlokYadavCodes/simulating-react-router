const content= document.querySelector('.content');

function navigateTo(path){
    history.pushState({}, "", path)
    renderContent(path)
    const pathx= window.location.pathname
console.log(pathx)
}

function renderContent(path){
    switch(path){
        case '/':
            content.innerHTML = 'Welcome to the Home Page';
            break;
        case '/profile':
            content.innerHTML = 'Welcome to Profile Page';
            break;
        case '/dashboard':
            content.innerHTML = 'This is Dashboard Page';
            break;
        case '/about':
            content.innerHTML = 'This is About Page';
            break;
        default:
            content.innerHTML = 'Page Not Found';
    }   
}

window.onpopstate = () => {
    renderContent(window.location.pathname)
}

renderContent('/')