const API = "https://api.github.com/users/";
const inputValue = document.getElementById("inputValue");
const btn = document.getElementById("btn");
const img = document.querySelector(".img");
const info = document.querySelector(".info");
const modal = document.querySelector(".modal");
const h1 = document.querySelector("h1");
const stats = document.querySelector(".stats");
const other = document.querySelector(".other");

inputValue.addEventListener("keypress", func);
btn.addEventListener("click", basefunc);

function func(e) {
    if (e.keyCode == 13) {
        basefunc();
    }
}

function basefunc() {
    let key = inputValue.value;
    fetch(`${API}${key}`)
        .then((a) => a.json())
        .then((b) => {
            console.log(b);
            if (b.login) {
                img.innerHTML = `<img src = ${b.avatar_url}>`;
                info.innerHTML = `<h1 class='name'>${b.name}</h1><a href = ${b.html_url} >@${b.login}</a><p>${b.bio}</p>`;
                stats.innerHTML = `<div class="stat1">
                                        <h4 class="followers">Followers :</h4>
                                        <span>${b.followers}</span>
                                    </div>
                                    <div class="stat2">
                                        <h4 class="following">Following :</h4>
                                        <span>${b.following}</span>
                                    </div>
                                    <div class="stat3">
                                        <h4 class="followers">Public Repos:</h4>
                                        <span>${b.public_repos}</span>
                                    </div>`;
                other.innerHTML = `<div class="a">
                                        <i class="fab fa-twitter"></i><h5>${b.twitter_username}</h5><br><br>
                                        <i class="fas fa-link"></i><a href = "https://${b.blog}" target = '_blank' class="site">${b.blog}</a>
                                    </div>
                                    <div class="b">
                                        <i class="fas fa-location-dot"></i><h5>${b.location}</h5><br><br>
                                        <i class="fas fa-building-circle-arrow-right"></i><h5>${b.company}</h5>
                                    </div>`;
                if (b.bio === null) {
                    info.innerHTML = `<h1 class='name'>${b.name}</h1><a href = ${b.html_url} >@${b.login}</a>`;
                }
                if (b.name === null) {
                    info.innerHTML = `<a href = ${b.html_url} >@${b.login}</a>`;
                }
                if (b.twitter_username === null) {
                    other.innerHTML = `<div class="a">
                    <i class="fas fa-link"></i><a href = "https://${b.blog}" target = '_blank' class="site">${b.blog}</a>
                </div>
                <div class="b">
                    <i class="fas fa-location-dot"></i><h5>${b.location}</h5><br><br>
                    <i class="fas fa-building-circle-arrow-right"></i><h5>${b.company}</h5>
                </div>`;
                }
                if (b.blog === null) {
                    other.innerHTML = `<div class="a">
                                        <i class="fab fa-twitter"></i><h5>${b.twitter_username}</h5><br><br>
                                      
                                    </div>
                                    <div class="b">
                                        <i class="fas fa-location-dot"></i><h5>${b.location}</h5><br><br>
                                        <i class="fas fa-building-circle-arrow-right"></i><h5>${b.company}</h5>
                                    </div>`;
                }
                if (b.location === null) {
                    other.innerHTML = `<div class="a">
                                        <i class="fab fa-twitter"></i><h5>${b.twitter_username}</h5><br><br>
                                        <i class="fas fa-link"></i><a href = "https://${b.blog}" target = '_blank' class="site">${b.blog}</a>
                                    </div>
                                    <div class="b">
                                      
                                        <i class="fas fa-building-circle-arrow-right"></i><h5>${b.company}</h5>
                                    </div>`;
                }
                if (b.company === null) {
                    other.innerHTML = `<div class="a">
                                        <i class="fab fa-twitter"></i><h5>${b.twitter_username}</h5><br><br>
                                        <i class="fas fa-link"></i><a href = "https://${b.blog}" target = '_blank' class="site">${b.blog}</a>
                                    </div>
                                    <div class="b">
                                        <i class="fas fa-location-dot"></i><h5>${b.location}</h5><br><br>
                                     
                                    </div>`;
                }
                if (b.blog === null && b.twitter_username === null) {
                    other.innerHTML = ` <div class="b">
            <i class="fas fa-location-dot"></i><h5>${b.location}</h5><br><br>
            <i class="fas fa-building-circle-arrow-right"></i><h5>${b.company}</h5>
        </div>`
                }
                if (b.blog === null && b.location === null) {
                    other.innerHTML = `<div class="a">
            <i class="fab fa-twitter"></i><h5>${b.twitter_username}</h5><br><br>
        </div>
        <div class="b">
            <i class="fas fa-building-circle-arrow-right"></i><h5>${b.company}</h5>
        </div>`
                } if (b.blog === null && b.company === null) {
                    other.innerHTML = `<div class="a">
            <i class="fab fa-twitter"></i><h5>${b.twitter_username}</h5><br><br>
        </div>
        <div class="b">
            <i class="fas fa-location-dot"></i><h5>${b.location}</h5><br><br>
         
        </div>`
                }
                if (b.twitter_username === null && b.location === null) {
                    other.innerHTML = `<div class="a">
            <i class="fas fa-link"></i><a href = "https://${b.blog}" target = '_blank' class="site">${b.blog}</a>
        </div>
        <div class="b">
            <i class="fas fa-location-dot"></i><h5>${b.location}</h5><br><br>
        </div>`
                }
                if (b.twitter_username === null && b.company == null) {
                    other.innerHTML = `<div class="a">
            <i class="fas fa-link"></i><a href = "https://${b.blog}" target = '_blank' class="site">${b.blog}</a>
        </div>
        <div class="b">
            <i class="fas fa-building-circle-arrow-right"></i><h5>${b.company}</h5>
        </div>`
                }
                if (b.location === null && b.company === null) {
                    other.innerHTML = `<div class="a">
            <i class="fab fa-twitter"></i><h5>${b.twitter_username}</h5><br><br>
            <i class="fas fa-link"></i><a href = "https://${b.blog}" target = '_blank' class="site">${b.blog}</a>
        </div>`
                }
                if (b.blog === null && b.location === null && b.company === null && b.twitter_username === null) {
                    other.innerHTML = ''
                }
                if (b.blog === null && b.location === null && b.twitter_username === null) {
                    other.innerHTML = `<div class="b">
            <i class="fas fa-building-circle-arrow-right"></i><h5>${b.company}</h5>
        </div>`
                }
                if (b.company === null && b.location === null && b.twitter_username === null) {
                    other.innerHTML = `<div class="a">
            <i class="fas fa-link"></i><a href = "https://${b.blog}" target = '_blank' class="site">${b.blog}</a>
        </div>`
                }
                if (b.company === null && b.location === null && b.blog === null) {
                    other.innerHTML = `<div class="a">
            <i class="fab fa-twitter"></i><h5>${b.twitter_username}</h5><br><br>
        </div>`}
                if (b.blog === null && b.company === null && b.twitter_username === null) {
                    other.innerHTML = ` <div class="b">
            <i class="fas fa-location-dot"></i><h5>${b.location}</h5><br><br>
        </div>`}
            }
           
        });
}
