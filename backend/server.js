import app from './app.js';
const port = 5000 || 3000 || 3535;
const server = app.listen(port, () => {
    console.log('server is runnig on port ' + port);
})


process.on('uncaughtException', err => {
    console.error(`Error :${err.message}`);
    console.log(`server is shutting down due to unhandled exception errors `);
    process.exit(1);
})
process.on('unhandledRejection', err => {
    console.error(`Error :${err.message}`);
    console.log(`server is shutting down tue to unhandled promise rejection`);
    server.close(() => {
        process.exit(1)
    })
})
