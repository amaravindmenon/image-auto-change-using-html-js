let data = [
    { name: "Harish", img: "https://qph.fs.quoracdn.net/main-qimg-251d478c81892a4e9046c82c43e0fa39.webp", title: "Senior Developer" },
    { name: "Ravi", img: "https://st3.cricketcountry.com/wp-content/uploads/2015/07/cl_aussie.jpg", title: "Web Developer" },
    { name: "Rakesh", img: "https://images.news18.com/ibnlive/uploads/2019/05/Yuvraj-Singh.jpg?im=FitAndFill,width=1200,height=1200", title: "Android Developer" },
    { name: "Rana", img: "https://cricketmastery.com/wp-content/uploads/2020/07/Umar-Akmal-using-Sunscreen.jpg?ezimgfmt=rs:372x279/rscb5/ng:webp/ngcb5", title: "Web Developer" },
    { name: "Akash", img: "https://static.sportzbusiness.com/uploads/2020/06/Bowlers.jpg", title: "Software Developer" },
    { name: "Ashu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMqV7jk3mDv9wWziXayKkU_aQOUMGrrmfg2ht9kQezWvXehR6VaR9GTKc8i6u-pCUslQ&usqp=CAU", title: "Crypto Developer" },
    { name: "Ashish", img: "https://cdn.wisden.com/wp-content/uploads/2017/11/GettyImages-514288564-e1520010605581.jpg", title: "Software Developer" },
    { name: "Nehra", img: "https://imgk.timesnownews.com/AP_19191368427228_1562832283__rend_4_3.jpg?tr=w-600", title: "Android Developer" },
    { name: "Bhumra", img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/04/16/cb175e63cb0108967ce265ccf52e07de.jpg?quality=80&zoom=1&ssl=1", title: "Crypto Developer" },
    { name: "Tarun", img: "https://assets.telegraphindia.com/telegraph/c3a09199-6d13-4497-882a-a64405f80824.jpg", title: "Web Developer" },
    { name: "Dhoni", img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/04/16/cb175e63cb0108967ce265ccf52e07de.jpg?quality=80&zoom=1&ssl=1", title: "Crypto Developer" },
    { name: "Virat", img: "https://assets.telegraphindia.com/telegraph/c3a09199-6d13-4497-882a-a64405f80824.jpg", title: "Web Developer" }
]

// function shuffle(data) {
//     let currentIndex = data.length,
//         randomIndex;
//     while (currentIndex != 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//         [data[currentIndex], data[randomIndex]] = [data[randomIndex], data[currentIndex]];
//     }
//     return data;
// }

// const main_box = document.getElementById("main_box");

// function newdata() {
//     data = shuffle(data);
//     let innnerhtml = "";
//     for (let i = 0; i < 4; i++) {
//         innnerhtml += `
//       <div class="person1 user">
//             <div class="user-img"><img src=${data[i].img} alt=""></div>
//         <center>${data[i].name}</center>
//         <center>${data[i].title}</center>
//       </div>
//     `
//     }
//     main_box.innerHTML = innnerhtml;
// }
// setInterval(newdata, 5000);


function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

data = shuffle(data);

const main_box = document.getElementById("main_box");

let numBerOfShow = 4;
let currentFlag = 0;
let dataLength = data.length;
let remd = dataLength % numBerOfShow;
let division = Math.floor(dataLength / numBerOfShow);
let currentIteration = 0;

const resetAllThings = () => {
    currentFlag = 0;
    currentIteration = 0;
}

const loadData = () => {
    let innnerhtml = "";
    let i = currentFlag;

    currentIteration++;

    if (i < ((currentIteration * numBerOfShow)) && currentIteration <= division) {
        while (i < ((currentIteration * numBerOfShow)) && currentIteration <= division) {
            innnerhtml += `
                <div class="person1 user">
                <div class="user-img"><img src=${data[i]?.img} alt=""></div>
                <center>${data[i]?.name}</center>
                <center>${data[i]?.title}</center>
                </div>
            `;
            i += 1;
        }
        currentFlag = i;
    } else {
        while (i < dataLength) {
            innnerhtml += `
            <div class="person1 user">
            <div class="user-img"><img src=${data[i]?.img} alt=""></div>
            <center>${data[i]?.name}</center>
            <center>${data[i]?.title}</center>
            </div>
        `;
            i += 1;
        }
        console.log('remd', remd);
        for (let index = remd; index < 4; index++) {
            i++;
            innnerhtml += `
                <div class="person1 user">
                <div class="user-img"><img src=${data[index]?.img} alt=""></div>
                <center>${data[index]?.name}</center>
                <center>${data[index]?.title}</center>
                </div>
            `;
        }

        currentFlag = i;
        resetAllThings();
        data = shuffle(data);
    }

    main_box.innerHTML = innnerhtml;
}

loadData();


setInterval(() => {
    loadData();
}, 5000);
