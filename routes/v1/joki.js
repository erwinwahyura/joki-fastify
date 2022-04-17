const joki = require('../../controllers/index')
module.exports = express =>
  new express.Router()
    .get('/', joki.getListJoki)
    .post('/create', joki.createJoki)