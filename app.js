
var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let num = [10, 11, 20, 21, 30, 31, 40, 41, 50, 51, 60, 61];

//for loop

let result1 = [];
for (let i = 0; i < companies.length; i++) {
    if (num[i] % 2 === 0) {
        result1.push(num[i]);
    }
}
console.log(result1);

//for Each

let result2 = [];
num.forEach((params) => {
    if (params % 2 === 0) {
        result2.push(params);
    }
});
console.log(result2);

// filter

let result3 = num.filter((params) => {
    return params % 2 === 0
});
console.log(result3);



var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let number = [10, 11, 20, 21, 30, 31, 40, 41, 50, 51, 60, 61];
//create a array of number which are divisible by 3 and 5

//for loop

let result4 = [];
for (i = 0; i < companies.length; i++) {
    if (num[i] % 3 === 0 && num[i] % 5 === 0) {
        result4.push(num[i]);
    }
}
console.log(result4);

//for Each

let result5 = [];
num.forEach((n) => {
    if (n % 3 === 0 && n % 5 === 0) {
        result5.push(n);
    }
});
console.log(result5);

//filter

let result6 = num.filter((params) => {
    return (params % 3 === 0 && params % 5 === 0);
});
console.log(result6)


var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//create array of obj >> start in 80s and company run for at least 10 years

//for loop

let result7 = [];
for (let i = 0; i < companies.length; i++) {
    if ((companies[i].start >= 1980 && companies[i].start <= 1989) && (companies[i].end - companies[i].start) >= 10) {
        result7.push(companies[i]);
    }
}
console.log(result7);

//for Each

let result8 = [];
companies.forEach((params) => {
    if ((params.start >= 1980 && params.start <= 1989) && (params.end - params.start) >= 10) {
        result8.push(params);
    }
});
console.log(result8);

//filter

let result9 = companies.filter((params) => {
    return ((params.start >= 1980 && params.start <= 1989) && (params.end - params.start) >= 10)
    result9.push(params);
});
console.log(result9);


//create a array of number which is divisible by 3 and double it.
let no = [100, 111, 200, 222, 300, 333, 400, 444, 500, 555, 600, 666, 700, 777];

//for loop 

let result10 = [];
for (let i = 0; i < num.length; i++) {
    if (num[i] % 3 === 0) {
        result10.push(num[i] * 2);
    }
}
console.log(result10);


//for Each

let result11 = [];
num.forEach((params) => {
    if (params % 3 === 0) {
        result11.push(params * 2);
    }
});
console.log(result11);


//filter

let result12 = num.filter((params) => {
    return (params % 3 === 0)
}).map((params) => {
    return params * 2
});
console.log(result12)


var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
    { name: "Company ten", category: "Finance", start: 1991, end: 2991 }
];

//array of comany who run at least 10 years
//(end - start >= 11)
//{ name: "Company One", category: "Finance", start: 1991, end: 2991 }

//for loop

let result13 = [];
for (let i = 0; i < companies.length; i++) {
    if (companies[i].end - companies[i].start) {
        result13.push(companies[i]);
    }
}
console.log(result13);


//for Each

let result14 = [];
companies.forEach((params) => {
    if (params.end - params.start) {
        result14.push(params);
    }
});
console.log(result14);


//filter

let result15 = companies.filter((params) => {
    return params.end - params.start >= 5;
});
console.log(result15);

var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
    { name: "Company ten", category: "Finance", start: 1991, end: 2991 }
];

//start 80s and categorty === retail

//for loop
//trim

let result16 = [];

for (let i = 0; i < companies.length; i++) {
    if (
        companies[i].start >= 1980 &&
        companies[i].start <= 1989 &&
        companies[i].category.toLowerCase().trim() === "retail") {
        result16.push(companies[i]);
    }
};
console.log(result16);

//indexof

let result17 = [];

for (let i = 0; i < companies.length; i++) {
    if (
        companies[i].start >= 1980 &&
        companies[i].start <= 1989 &&
        companies[i].category.toLowerCase().indexOf ('retail') >-1) {
        result17.push(companies[i]);
    }   
};
console.log(result17);


//inclues

let result18 = [];

for (let i = 0; i < companies.length; i++) {
    if (
        companies[i].start >= 1980 &&
        companies[i].start <= 1989 &&
        companies[i].category.toLowerCase().includes ('retail')) {
        result18.push(companies[i]);
    }   
};
console.log(result18);


//for Each
//trim

let result19 = [];
companies.forEach((params) =>{
    if (
        params.start >= 1980 &&
        params.start <= 1989 &&
        params.category.toLowerCase().trim() === "retail") 
        result19.push(params);

    });
    console.log(result19);
    

//indexof

let result20 = [];
companies.forEach((params) =>{
    if (
        params.start >= 1980 &&
        params.start <= 1989 &&
        params.category.toLowerCase().indexOf ('retail') >-1) {
        result20.push(params);
        }
    });
    console.log(result20);


//inclues
let result21 = [];
companies.forEach((params) =>{
    if (
        params.start >= 1980 &&
        params.start <= 1989 &&
        params.category.toLowerCase().includes ('retail')) {
        result21.push(params);
        }
    });
    console.log(result21);
    
//filter
//trim

let result22 = companies.filter((params) =>{
    return(
        params.start >= 1980 &&
        params.start <= 1989 &&
        params.category.toLowerCase().trim() === 'retail') 
        result22.push(params);
        });
    console.log(result22);

//indexof

let result23 = companies.filter((params) =>{
    return(
        params.start >= 1980 &&
        params.start <= 1989 &&
        params.category.toLowerCase().indexOf ('retail') >-1)
        result23.push(params);
    });
    console.log(result23);


//inclues

let result24 = companies.filter((params) =>{
   return (
        params.start >= 1980 &&
        params.start <= 1989 &&
        params.category.toLowerCase().includes ('retail'))
        result24.push(params);
    });
    console.log(result24);





