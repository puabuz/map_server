const { v4: uuidv4 } = require("uuid"); //библиотека для генерации уникального id
const db = require("../db");

class UserController {
  //создать пользователя ...
  async createUser(req, res) {
    const { user_name, device_type, coord_x, coord_y } = req.body;
    const newUser = await db.query(
      `INSERT INTO user_dev (device_id, user_name, device_type, coord_x, coord_y) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [uuidv4(), user_name, device_type, coord_x, coord_y]
    );
    //возвращаем нового пользователя обратно на клиент
    res.json(newUser.rows[0]);
  }
  //получить всех пользователей ...
  async getUsers(req, res) {
    const users = await db.query(`SELECT * FROM user_dev`);
    //возвращаем всех пользователей обратно на клиент
    res.json(users.rows);
  }
  //получить  пользователя ...
  async getOneUser(req, res) {
    //забираем id, который пришел в параметрах с клиента
    const id = req.params.id;
    const user = await db.query(`SELECT * FROM user_dev where device_id = $1`, [id]);
    //возвращаем пользователя обратно на клиент
    res.json(user.rows[0]);
  }
  //обновить данные конкретного пользователя ...
  async updateUser(req, res) {
    console.log()
    const {device_id, user_name, device_type, coord_x, coord_y} = req.body
    const user = await db.query(
        `UPDATE user_dev SET user_name = $1, device_type = $2, coord_x = $3, coord_y = $4 where device_id = $5 RETURNING *`,
        [user_name, device_type, coord_x, coord_y, device_id]
    )
    res.json(user.rows[0])
  }
  //удалить пользователя ...
  async deleteUser(req, res) {
    const id = req.body.id
    const user = await db.query(`DELETE FROM user_dev where id = $1 RETURNING *`, [id])
  }
}

module.exports = new UserController();
