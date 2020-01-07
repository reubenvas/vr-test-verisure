export default () => {
    const inDevelopment = process.env.NODE_ENV === 'development';
    return inDevelopment ? 'http://localhost:3001/' : '/';
};
