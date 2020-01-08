export default () => {
    const inDevelopment = process.env.NODE_ENV === 'development';
    // const devUrlOrigin = window.location.href.replace(window.location.port, '3001');
    return inDevelopment ? 'http://localhost:3001/' : '/';
};
