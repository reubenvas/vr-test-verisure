import backstop from 'backstopjs';
import config from '../../backstop.json';

// export type Scenario = {
//     id?: string;
//     label: string;
//     cookiePath: string;
//     url: string;
//     referenceUrl: string;
//     readyEvent: string;
//     readySelector: string;
//     delay: number;
//     hideSelectors: string[];
//     removeSelectors: string[];
//     hoverSelector: string;
//     clickSelector: string;
//     postInteractionWait: number;
//     selectors?: string[];
//     selectorExpansion: boolean;
//     expect: number;
//     misMatchThreshold: number;
//     requireSameDimensions: boolean;
// }

export const addScenariosToTest = (scenarios) => new Promise((res, rej) => {
    try {
        config.scenarios = scenarios;
        res();
    } catch (err) {
        rej(err);
    }
});

export const createReferenceForTest = () => backstop('reference', { config });

export const startTest = () => backstop('test', { config });
