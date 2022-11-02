// Read the width and height of the page. 
const width = window.innerWidth;
const height = window.innerHeight;

// svg
const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

const n = 100;

// Rectangles in the back (Solved with groups)
svg
.append('g')
.selectAll('rect')
.data(d3.range(n))
.join('rect')
    .attr('x', (d) => d * 20)
    .attr('width', 10)
    .attr('height', height)
    .attr('mask', 'url(#mask-2)');

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
    .attr('mask', 'url(#mask-1)');


const renderMask = (selection, id, inverted) => 
{

    // mask and rectangle with d3
    const mask = selection.append('mask').attr('id', id);

    mask
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', inverted ? 'black' : 'white');


   mask.selectAll('g')
    .data(d3.range(d3.symbols.length))
    .join((enter) =>
        enter
        .append('g')
        .attr('transform', (d) => `translate(${d * 125 +100},${height/2})`)
        .append('path')
        .attr('d', (d) => d3.symbol(d3.symbols[d], 9000)())
        .attr('fill', inverted ? 'white' : 'black'))


    
};

svg
.call(renderMask, 'mask-1', false)
.call(renderMask, 'mask-2', true);

