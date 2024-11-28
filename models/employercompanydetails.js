import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Job = sequelize.define('Job', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactPersonName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10, 15],
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    contactPersonProfile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jobAddress: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    sizeOfOrganization: {
        type: DataTypes.ENUM('1-10', '11-50', '51-200', '201-500', '500+'),
        allowNull: false,
    },
    hiringFrequency: {
        type: DataTypes.ENUM('weekly', 'monthly', 'quarterly', 'yearly'),
        allowNull: false,
    },
    jobTimings: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    interviewDetails: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'company-details',
    timestamps: true,
});

export default Job;
