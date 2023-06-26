const body = document.querySelector('body');
const elements = body.querySelectorAll('p, h2, li a');

elements.forEach(element => {
    const text = element.textContent;
    const letters = text.split('');

    element.textContent = '';

    letters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        element.appendChild(span);

        span.addEventListener('mouseover', () => {
            span.style.color = '#EEC627';
        });

        span.addEventListener('mouseout', () => {
            span.style.color = '';
        });
    });
});

/****/
