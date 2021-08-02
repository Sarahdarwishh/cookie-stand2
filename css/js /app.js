`use strict`;


let openingHours = [`6am`, `7am`, `8am`, `9am`, `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];
const fishCookie = document.getElementById(`fishCookie`);


let seattle = {
    location: `Seattle`,
    avgCookie: 6.3,
    cInHour: 0,
    finalresult: [],
    minClient: 23,
    maxClient: 65,
    total: 0,

    getCookie: function () {

        for (let i = 0; i < openingHours.length; i++) {
            let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
            // console.log(Math.ceil(random(this.minClient,this.maxClient) *this.avgCookie))
            this.finalresult.push(randAvgNum);
            this.total = this.total + randAvgNum;
            console.log(this.total)
            // console.log(this.finalresult[i])
            
        }
        return this.total;
    },
    outputToHTML: function () {
        const h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location;
        fishCookie.appendChild(h2Element);
        const ulElement = document.createElement(`ul`);
        fishCookie.appendChild(ulElement);

        for (let i = 0; i < openingHours.length; i++) {
            const liElement = document.createElement(`li`);
            // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
            liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
            ulElement.appendChild(liElement);
            // console.log(ulElement)

        }
        const liTotal = document.createElement(`li`)
        liTotal.textContent = `${this.total} cookies`
        ulElement.appendChild(liTotal)
    }

}

seattle.getCookie();
seattle.outputToHTML();





const tokyo = {
    location: `Tokyo`,
    avgCookie: 1.2,
    cInHour: 0,
    finalresult: [],
    minClient: 3,
    maxClient: 24,
    total: 0,

    getCookie: function () {

        for (let i = 0; i < openingHours.length; i++) {
            let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
            // console.log(Math.ceil(random(this.minClient,this.maxClient) *this.avgCookie))
            this.finalresult.push(Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie))
            this.total += randAvgNum;
            console.log(this.total)
            // console.log(this.finalresult[i])
           
        }
        return this.total;
    },
    outputToHTML: function () {
        const h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location;
        fishCookie.appendChild(h2Element);
        const ulElement = document.createElement(`ul`);
        fishCookie.appendChild(ulElement);

        for (let i = 0; i < openingHours.length; i++) {
            const liElement = document.createElement(`li`);
            // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
            liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
            ulElement.appendChild(liElement);
            // console.log(ulElement)

        }
        const liTotal = document.createElement(`li`)
        liTotal.textContent = `${this.total} cookies`
        ulElement.appendChild(liTotal)
    }
}
tokyo.getCookie();
tokyo.outputToHTML();

const dubai = {
    location: `Dubai`,
    avgCookie: 3.7,
    cInHour: 0,
    finalresult: [],
    minClient: 11,
    maxClient: 38,
    total: 0,

    getCookie: function () {

        for (let i = 0; i < openingHours.length; i++) {
            let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
            // console.log(Math.ceil(random(this.minClient,this.maxClient) *this.avgCookie))
            this.finalresult.push(Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie))
            this.total += randAvgNum;
            console.log(this.total)
            // console.log(this.finalresult[i])
           
        }
        return this.total;
    },
    outputToHTML: function () {
        const h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location;
        fishCookie.appendChild(h2Element);
        const ulElement = document.createElement(`ul`);
        fishCookie.appendChild(ulElement);

        for (let i = 0; i < openingHours.length; i++) {
            const liElement = document.createElement(`li`);
            // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
            liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
            ulElement.appendChild(liElement);
            // console.log(ulElement)

        }
        const liTotal = document.createElement(`li`)
        liTotal.textContent = `${this.total} cookies`
        ulElement.appendChild(liTotal)
    }

}
dubai.getCookie();
dubai.outputToHTML();

const paris = {
    location: `paris`,
    avgCookie: 2.3,
    cInHour: 0,
    finalresult: [],
    minClient: 20,
    maxClient: 38,
    total: 0,

    getCookie: function () {

        for (let i = 0; i < openingHours.length; i++) {
            let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
            // console.log(Math.ceil(random(this.minClient,this.maxClient) *this.avgCookie))
            this.finalresult.push(Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie))
            this.total += randAvgNum;
            console.log(this.total)
            // console.log(this.finalresult[i])
           
        }
        return this.total;
    },
    outputToHTML: function () {
        const h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location;
        fishCookie.appendChild(h2Element);
        const ulElement = document.createElement(`ul`);
        fishCookie.appendChild(ulElement);

        for (let i = 0; i < openingHours.length; i++) {
            const liElement = document.createElement(`li`);
            // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
            liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
            ulElement.appendChild(liElement);
            // console.log(ulElement)

        }
        const liTotal = document.createElement(`li`)
        liTotal.textContent = `${this.total} cookies`
        ulElement.appendChild(liTotal)
    }

}
paris.getCookie();
paris.outputToHTML();

const lima = {
    location: `lima`,
    cInHour: 0,
    avgCookie: 4.6,
    finalresult: [],
    maxClient: 16,
    minClient: 2,
    total: 0,

    getCookie: function () {

        for (let i = 0; i < openingHours.length; i++) {
            let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
            this.finalresult.push(Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie))
            this.total += randAvgNum;
  
        }
        return this.total;
    },

    outputToHTML: function () {
        const h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location;
        fishCookie.appendChild(h2Element);
        const ulElement = document.createElement(`ul`);
        fishCookie.appendChild(ulElement);

        for (let i = 0; i < openingHours.length; i++) {
            const liElement = document.createElement(`li`);
            // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
            liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
            ulElement.appendChild(liElement);
            // console.log(ulElement)

        }
        let liTotal = document.createElement(`li`);
        liTotal.textContent = `Total is: ${this.total} cookies`;
        ulElement.appendChild(liTotal);
    }
}

lima.getCookie();
lima.outputToHTML();


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



