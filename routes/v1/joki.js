const joki = require('../../controllers/index')
module.exports = express =>
  new express.Router()
    .get('/', joki.getListOrder)
    .get('/admin-list-order', joki.getListOrderAdmin)
    .post('/create', joki.createOrder)
    .put('/change-status/:id', joki.changeStatusOrder)
    .put('/change-approval/:id', joki.changeApprovalOrder)
    .delete('/:id', joki.deleteOrder)