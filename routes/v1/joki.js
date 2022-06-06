const joki = require('../../controllers/index')
module.exports = express =>
  new express.Router()
    .get('/', joki.getListOrder)
    .post('/create', joki.createOrder)
    .put('/change-status/:id', joki.changeStatusOrder)
    .post('/change-approval/create', joki.changeApprovalOrder)
    .delete('/:id', joki.deleteOrder)