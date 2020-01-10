/* eslint-disable no-restricted-syntax */
import os from 'os';

export default (): string => {
    const networkInterfaces = os.networkInterfaces();
    for (const networkInterface of Object.values(networkInterfaces)) {
        for (const networkInterfaceInfo of networkInterface) {
            if (networkInterfaceInfo.family === 'IPv4' && networkInterfaceInfo.address !== '127.0.0.1') {
                return networkInterfaceInfo.address;
            }
        }
    }
    return null;
};
