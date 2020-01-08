export default () => {
    const isOnLocalhost = window.location.hostname === 'localhost';
    const isDevelopment = process.env.NODE_ENV === 'development';
    return isOnLocalhost && isDevelopment ? 'http://localhost:3001/' : '/';
};
