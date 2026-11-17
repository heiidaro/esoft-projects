let textInput = document.querySelector('#input')
let result = document.querySelector('#result')
let btn = document.querySelector('#btn-result')

const braces = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
}

function count_result(text) {
    const arr = [];

    if (text.length > 10**4) {
        return 'Слишком длинная строка!';
    }

    for (const i of text) {
        if (i in braces) {
            arr.push(i);
        } else {
            const last = arr.pop();

            if (braces[last] !== i) {
                return false;
            }
        }
    }

    return arr.length === 0;
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    result.textContent = count_result(textInput.value);
});
