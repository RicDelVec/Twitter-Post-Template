// Question 2

let tweets = [];

// Question 3

const btn = document.querySelector("#tweet");

btn.addEventListener("click", tweeting);

// Question 4

function tweeting(e) {
    e.preventDefault();
    let textarea = document.querySelector("#exampleFormControlTextarea1")
    tweets.push({
        tweet: textarea.value
    });
    display(tweets);
}

// Question 5

function display(tweets) {
    const newHTML = tweets.map(t => {
        // Question 6
        return `<article id="tweet-box">
                    <img id="tweet-img" src="https://avatars3.githubusercontent.com/u/44583756?v=4">
                    <p id="tweet-name">Riccardo D. V.</p>
                    <p id="tweet-profile">@RicDelVec</p>
                    <p id="tweet-text">${t.tweet}</p>
                    <div id="tweet-icons">
                        <span class="mdi mdi-message-outline"></span>
                        <span class="mdi mdi-twitter-retweet"></span> 
                        <span class="mdi mdi-heart-outline"></span>
                        <span class="mdi mdi-upload"></span>
                    </div>
                </article>`;
    }).join("");
    const main = document.querySelector("main");
    main.innerHTML = newHTML;
}

display(tweets);