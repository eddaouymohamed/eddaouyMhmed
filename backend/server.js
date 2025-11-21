import app from './app.js';
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});



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
