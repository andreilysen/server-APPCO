const db = require("../config/db");
const app = require("../app");
// const mkdirp = require("mkdirp");

const PORT = process.env.PORT || 3000;
db.then(() => {
  app.listen(PORT, async () => {
    // await mkdirp(UPLOAD_DIR);
    // await mkdirp(AVATAR_OF_USERS);
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((error) => {
  console.log(`Server njt run. Error ${error.message}`);
});
