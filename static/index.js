var p = document.querySelector('#demo');
if (p) {
    const color = p.style.color;
    console.log(`color: ${color}`);
    p.style.color = 'black';
} else {
    console.log(`p is not selected.`);
}