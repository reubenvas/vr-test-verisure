/* eslint-disable no-restricted-syntax */
import os from 'os';

export default (): string => {
    const networkInterfaces = os.networkInterfaces();
    let IPv4Index = -1;
    for (const networkInterface of Object.values(networkInterfaces)) {
        for (const networkInterfaceInfo of networkInterface) {
            if (networkInterfaceInfo.family === 'IPv4') {
                IPv4Index += 1;
            }
            if (IPv4Index === 1) {
                return networkInterfaceInfo.address;
            }
        }
    }
    return null;
};
