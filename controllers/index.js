const { Order } = require('../models')

const pricelist = [
  {
    name: "warrior",
    rate: 1,
    price: 0
  },
  {
    name: "elite",
    rate: 2,
    price: 20000
  },
  {
    name: "master",
    rate: 3,
    price: 30000
  },
  {
    name: "grand_master",
    rate: 4,
    price: 50000
  },
  {
    name: "epic",
    rate: 5,
    price: 100000
  },
  {
    name: "legend",
    rate: 6,
    price: 150000
  },
  {
    name: "mythic_5",
    rate: 7,
    price: 250000
  },
  {
    name: "mythic_4",
    rate: 8,
    price: 250000
  },
  {
    name: "mythic_3",
    rate: 9,
    price: 250000
  },
  {
    name: "mythic_2",
    rate: 10,
    price: 250000
  },
  {
    name: "mythic_1",
    rate: 11,
    price: 250000
  },
  {
    name: "mythic_0", // mythic glory
    rate: 8,
    price: 275000
  },
]

exports.createOrder =  async (req, res, next) =>  {
  try {
    const {
      name,
      phone,
      order_type,
      address,
      current_rank,
      target_rank,
      target_win,
      price
    } = req.body

    let objOrder = {
      name: name,
      phone: phone,
      address: address,
      price: price,
      order_type: order_type
    }

    if (order_type === "rank") {
      objOrder.current_rank = current_rank
      objOrder.target_rank = target_rank
      // price calculated
    }

    if (order_type === "classic") {
      objOrder.target_win = target_win
      // price calculated
    }

    let order = await Order.create({
     ...objOrder
    })

    return res.status(200).json({ m: 'success create data', data: order })
  } catch (error) {
      return next(error)
  }
}

// list order in user panel
exports.getListOrder =  async (req, res, next) =>  {
  try {
    const {
      name
    } = req.query

    q = {
      approved: true
    }

    if (name !== "") {
      q.name = new RegExp(name, "i")
    }
    let order = await Order.find({
     ...q
    })

    return res.status(200).json({ m: 'success get data', data: order })
  } catch (error) {
      return next(error)
  }
}


// admin panel here
// approve orderan masuk
exports.changeApprovalOrder =  async (req, res, next) =>  {
  try {
    const {
      id
    } = req.params

    const {
      approved
    } = req.body

   let test = await Order.findOneAndUpdate({
      _id: id
    }, {
      $set: {
        approved: approved
      }
    }, {new: true})

    return res.status(200).json({ m: 'success update data', data: test })
  } catch (error) {
      return next(error)
  }
}

// delete orderan
exports.deleteOrder =  async (req, res, next) =>  {
  try {
    const {
      id
    } = req.params

    await Order.deleteOne({
      _id: id
    })

    return res.status(200).json({ m: 'success delete data' })
  } catch (error) {
      return next(error)
  }
}

// change status orderan
exports.changeStatusOrder =  async (req, res, next) =>  {
  try {
    const {
      id
    } = req.params

    const {
      status
    } = req.body

    await Order.findOneAndUpdate({
      _id: id
    }, {
      $set: {
        status: status
      }
    }, {new: true})

    return res.status(200).json({ m: 'success delete data' })
  } catch (error) {
      return next(error)
  }
}

// list order in admin panel
exports.getListOrderAdmin =  async (req, res, next) =>  {
  try {
    const {
      name
    } = req.query

    q = {
    }

    if (name !== "") {
      q.name = new RegExp(name, "i")
    }
    let order = await Order.find({
     ...q
    })

    return res.status(200).json({ m: 'success get data', data: order })
  } catch (error) {
      return next(error)
  }
}

