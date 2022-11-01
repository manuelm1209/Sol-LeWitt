// Read the width and height of the page. 
const width = window.innerWidth;
const height = window.innerHeight;

// svg
// const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
// svg.setAttribute("width", width);
// svg.setAttribute("height", height);
// document.body.appendChild(svg);

// svg with d3
// const svg = d3.select('body').append('svg');
// svg.attr("width", width);
// svg.attr("height", height);

// svg second way
const svg = d3.select('body').append('svg').attr("width", width).attr("height", height);

// const n = 100;
// for (let i = 0; i < n; i++){
// const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
// rect.setAttribute("y", i * 20);
// rect.setAttribute("width", width);
// rect.setAttribute("height", 10);
// // ad this line to put the rectangle in the mask "circle-mask".
// rect.setAttribute("mask", "url(#circle-mask)");
// svg.appendChild(rect);
// }

// // For loop and rectangles first way
// const n = 100;
// const marks = [];
// for (let i = 0; i < n; i++){
//     marks.push({
//         y: i *20,
//         width : width,
//         height: 10,
//         mask: "url(#circle-mask)",
//     });
// }

// for (let i = 0; i < n; i++){
// const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
// rect.setAttribute("x", i * 20);
// rect.setAttribute("width", 10);
// rect.setAttribute("height", height);
// // ad this line to put the rectangle in the mask "circle-mask".
// rect.setAttribute("mask", "url(#circle-mask-2)");
// svg.appendChild(rect);
// }

const n = 100;

// // Rectangles in the back (Solved with Classes)
// svg
// .selectAll('rect.vertical')
// .data(d3.range(n))
// .join('rect')
// .attr('x', (d) => d * 20)
// .attr('width', 10)
// .attr('height', height)
// .attr('class','vertical')
// .attr('mask', "url(#circle-mask-2)");

// Rectangles in the back (Solved with groups)
svg
.append('g')
.selectAll('rect')
.data(d3.range(n))
.join('rect')
    .attr('x', (d) => d * 20)
    .attr('width', 10)
    .attr('height', height)
    .attr('mask', "url(#circle-mask-2)");

// svg
// .selectAll('rect')
// .data(marks)
// .join('rect')
// .attr('y', (d) => d.y)
// .attr('width', (d) => d.width)
// .attr('height', (d) => d.height)
// .attr('mask', (d) => d.mask)


// // For loop and rectangles second way (Solved with Classes)
// svg
// .selectAll('rect.horizontal')
// .data(d3.range(n))
// .join('rect')
// .attr('y', (d) => d * 20)
// .attr('width', width)
// .attr('height', 10)
// .attr('class','horizontal')
// .attr('mask', "url(#circle-mask)");

// // For loop and rectangles second way (Solved with Classes)
// svg
// .selectAll('rect.horizontal')
// .data(d3.range(n))
// .join('rect')
// .attr('y', (d) => d * 20)
// .attr('width', width)
// .attr('height', 10)
// .attr('class','horizontal')
// .attr('mask', "url(#circle-mask)");

// For loop and rectangles second way (Solved with groups)
svg
.append('g')
.selectAll('rect')
.data(d3.range(n))
// You can replace .joint('rect') with the next line
.enter().append('rect')
// .join('rect')
    .attr('y', (d) => d * 20)
    .attr('width', width)
    .attr('height', 10)
    .attr('mask', "url(#circle-mask)");

// // mask
// const mask = document.createElementNS('http://www.w3.org/2000/svg','mask');
// mask.setAttribute("id", "circle-mask");
// svg.appendChild(mask);


// // rectangle
// const maskRect = document.createElementNS('http://www.w3.org/2000/svg','rect');
// maskRect.setAttribute("width", width);
// maskRect.setAttribute("height", height);
// maskRect.setAttribute("fill", "black");
// mask.appendChild(maskRect);

// mask and rectangle with d3
const mask = svg.append('mask').attr('id', 'circle-mask');

mask
.append('rect')
.attr('width', width)
.attr('height', height)
.attr('fill', 'black');


// // circle
// const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
// circle.setAttribute("cx", width / 2);
// circle.setAttribute("cy", height / 2);
// circle.setAttribute("r", 200);
// circle.setAttribute("fill", "white");
// mask.appendChild(circle);

// Circle with d3
mask
.append('circle')
.attr("cx", width / 2)
.attr("cy", height / 2)
.attr("r", 200)
.attr("fill", "white");


// // mask
// const mask2 = document.createElementNS('http://www.w3.org/2000/svg','mask');
// mask2.setAttribute("id", "circle-mask-2");
// svg.appendChild(mask2);


// // rectangle
// const maskRect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
// maskRect2.setAttribute("width", width);
// maskRect2.setAttribute("height", height);
// maskRect2.setAttribute("fill", "white");
// mask2.appendChild(maskRect2);

// mask2 and rectangle with d3
const mask2 = svg.append('mask').attr('id', 'circle-mask-2');

mask2
.append('rect')
.attr('width', width)
.attr('height', height)
.attr('fill', 'white');

// // circle
// const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
// circle2.setAttribute("cx", width / 2);
// circle2.setAttribute("cy", height / 2);
// circle2.setAttribute("r", 200);
// circle2.setAttribute("fill", "black");
// mask2.appendChild(circle2);

// Circle2 with d3
mask2
.append('circle')
.attr("cx", width / 2)
.attr("cy", height / 2)
.attr("r", 200)
.attr("fill", "black");
