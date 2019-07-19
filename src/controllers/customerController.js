const controller = {}

controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customs) => {
            if(err) {
                res.json(err);
            }
            res.render('customer', {
                data: customs
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        const query = conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            res.redirect('/');
        })
    })
};


controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, connection) => {
        connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
        res.render('custom_edit', {
          data: rows[0]
        })
      });
    });
};

module.exports = controller;