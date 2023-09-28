const { CreateUser: createUserModels } = require("../models/CreateUser");

const createUserController = {
  create: async (req, res) => {
    try {
      const createUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirmation: req.body.passwordConfirmation,
      };

      const response = await createUserModels.create(createUser);

      res.status(201).json({ response, msg: "Usuário criado com sucesso!!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = createUserController;
