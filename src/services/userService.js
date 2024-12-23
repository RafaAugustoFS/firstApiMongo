const UserModel = require("../models/user.js");

const UserService = {
  create: async (user) => {
    try {
      if (!user.nome) {
        throw new Error("Nome não fornecido.");
      }
      if (!user.email) {
        throw new Error("Email não fornecido.");
      }
      if (!user.senha) {
        throw new Error("Senha não fornecida.");
      }
      
      return await UserModel.create({
        nome: user.nome,
        email: user.email,
        senha: user.senha
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar o usuário!");
    }
  },
  update: async (id, userToUpdate) => {
    try {
      const user = await UserModel.findByIdAndUpdate(id, userToUpdate);
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao atualizar o usuário.");
    }
  },
  getAll: async () => {
    try {
      const user = await UserModel.find();
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao buscar os usuários.");
    }
  },
  getOne: async (id) => {
    try {
      const user = await UserModel.findById(id);
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao buscar o usuário.");
    }
  },
  delete: async (id) =>{
    try {
        const user = await UserModel.findByIdAndDelete(id);
        if(!user){
            return null;
        }
        return user;
    } catch (error) {
        console.log(error);
        
        throw new Error("Erro ao deletar o usuário.");
    }
  }
};
module.exports=UserService;