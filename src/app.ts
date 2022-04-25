showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category { A = 'JavaScript', B = 'CSS', C = 'HTML' }

type Category1 = {
    A: 'JavaScript';
    B: 'CSS';
    C: 'HTML';
};

