

// ------------------ 1 -------------------


for (let i = 1; i < 6; i++) {

    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = (`Rad ${i}`)
    h1.style.textAlign = ("center");
    h1.style.color = ("dodgerblue");
    h1.style.backgroundColor = (`hsl(${100 + (i * 20)}, 90%, 85%, 0.9)`)
    h1.style.fontSize = (`${i}em`);
};


// ------------------- 2 ----------------------


const article = document.createElement("article");
document.body.appendChild(article);
article.style.border = ("1px black solid");
article.style.display = ("flex");
article.style.justifyContent = ("space-evenly");


for (let i = 0; i < 3; i++) {

    const ul = document.createElement("ul");
    article.appendChild(ul);
    ul.style.border = ("8px solid hsl(240, 70%, 80%)");
    ul.style.listStyleType = ("none");
    ul.style.padding = 0;
    ul.style.width = ("3em");

    if (i == 0) {
        for (let u = 0; u < 10; u++) {
            const liFirst = document.createElement("li");
            ul.appendChild(liFirst);
            liFirst.innerText = (u);

            if (u % 2 == 0) {
                liFirst.style.backgroundColor = ("black");
                liFirst.style.color = ("white");
            }

            if (u == 4) {
                liFirst.style.backgroundColor = ("hsl(240, 70%, 80%)");
            }
        }
    }

    else if (i == 1) {
        for (let j = 9; j >= 0; j--) {
            const liSecond = document.createElement("li");
            ul.appendChild(liSecond);
            liSecond.innerText = (j);
            liSecond.style.textAlign = ("center");

            if (j % 2 == 0) {
                liSecond.style.backgroundColor = ("black");
                liSecond.style.color = ("white");
            }

            if (j == 8) {
                liSecond.style.backgroundColor = ("hsl(240, 70%, 80%)");
            }
        }
    }

    else {
        for (let k = 0; k < 10; k++) {
            const liThird = document.createElement("li");
            ul.appendChild(liThird);
            const thirdNumbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
            liThird.innerText = thirdNumbers[k];
            liThird.style.textAlign = ("right");

            if (k % 2 == 0) {
                liThird.style.backgroundColor = ("black");
                liThird.style.color = ("white");
            }

            if (k == 5) {
                liThird.style.backgroundColor = ("hsl(240, 70%, 80%)");
            }
        }
    }
};