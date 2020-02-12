import backstop from 'backstopjs';
import config from '../../../backstop.json';


const createReference = async (referenceUrl: string) => {
    config.scenarios[0].referenceUrl = referenceUrl;
    console.log(typeof config);
    await backstop('reference', { config });
    return 'REFERENCE SUCCESSFUL';
};

export const startTest = async (url: string) => {
    config.scenarios[0].url = url;
    await backstop('test', { config });
    return 'TEST SUCCESSFUL';
};

createReference('https://www.dn.se/').then(() => startTest('https://www.dn.se/'));

export default createReference;
