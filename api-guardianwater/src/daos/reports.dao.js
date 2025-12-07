import Report from "../models/Report.js";

class ReportsDAO {

    async create(data) {
        return await Report.create(data);
    }

    async findAll() {
        return await Report.find();
    }

    async findById(id_report) {
        return await Report.findOne({ id_report });
    }
    async update(id_report, data) {
        data.dateUpdate = Date.now();
        return await Report.findOneAndUpdate( { id_report: id_report },data,{ new: true });
    }

    async delete(id_report) {
        return await Report.findOneAndDelete(id_report);
    }
}

export default new ReportsDAO();
