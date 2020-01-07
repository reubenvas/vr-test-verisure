import os from 'os';

export default () => {
    const networkInterfaces = os.networkInterfaces();
    return networkInterfaces.en0.find((ip) => ip.family === 'IPv4').address;
};
