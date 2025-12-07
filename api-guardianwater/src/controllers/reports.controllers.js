import reportsDAO from "../daos/reports.dao.js";
import User from "../models/User.js";

class ReportsController {

    async createReport(req, res) {
        try {
            
            // Validar usuario existente
            const user = await User.findOne({ id_user: req.body.user });
            if (!user)
                return res.status(404).json({ error: "User does not exist" });
                

            const report = await reportsDAO.create(req.body);
            res.status(201).json(report);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getReports(req, res) {
        try {
            const reports = await reportsDAO.findAll();
            res.json(reports);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getReport(req, res) {
        try {
            const report = await reportsDAO.findById(req.params.id_report);
             
            if (!report) return res.status(404).json({ error: "Report not found" });
            res.json(report);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateReport(req, res) {
        try {
            const report = await reportsDAO.update(req.params.id_report, req.body);
            res.json(report);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteReport(req, res) {
        try {
            await reportsDAO.delete(req.params.id_report);
            res.json({ message: "Report deleted" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

export default new ReportsController();
