import User from "../models/User.js";

class UserDAO {

    async create(userData) {
    const lastUser = await User.findOne().sort({ id_user: -1 });
    const newId = lastUser ? lastUser.id_user + 1 : 1;

        const user = new User({
        ...userData,
        id_user: newId
    });

    return await user.save();
    }

    async findAll() {
        return await User.find();
    }

    async findById(id_user) {
        return await User.findOne({ id_user });
    }

    async findByEmail(email) {
        return await User.findOne({ email });
    }

    async update(id_user, data) {
        return await User.findOneAndUpdate({ id_user }, data, { new: true });
    }

    async delete(id_user) {
        return await User.findOneAndDelete({ id_user });
    }
}

export default new UserDAO();