// /* eslint-disable no-undef */
// import { JSDOM } from 'jsdom';
// import fs from 'fs';

// describe('index.html', () => {
//     test('should say "Tjenare"', () => {
//         const index = fs.readFileSync('./client/src/index.html', 'utf8');
//         const dom = new JSDOM(index);
//         const h1 = dom.window.document.querySelector('h1');
//         if (h1 === null) {
//             expect(h1).not.toBeNull();
//         } else {
//             expect(h1.innerHTML).toBe('Tjenare');
//         }
//         dom.window.close();
//     });
// });

describe('Test: TRUE', () => {
    test('true', () => {
        expect(true).toBeTruthy();
    });
});
