module.exports = async (err, req, res, next) => {
    if (err === 'Unauthorized') {
      return res.status(401).json({ ok: false, title: 'Warning', m: 'You dont have authorized!'})
    }
    
    return res.status(500).json({ ok: false, title: 'Error', m: err.message || err })
  }
