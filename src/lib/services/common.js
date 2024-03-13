import pool from "../database";



export const commonServices = {

    readSingleData: async (table, keys, condition) => {
        try {
            let conditionQuery = '';
            let conditionValues = [];

            for (const element in condition) {
                if (Array.isArray(condition[element])) {
                    conditionQuery += conditionQuery === '' ? `WHERE ${element} IN(?)` : ` AND ${element} IN(?)`;
                    conditionValues.push(condition[element]);
                } else {
                    conditionQuery += conditionQuery === '' ? `WHERE ${element} = ?` : ` AND ${element} = ?`;
                    conditionValues.push(condition[element]);
                }
            }
            const sql = `SELECT ${keys} FROM ${table} ${conditionQuery} LIMIT 1`;
            console.log(':::SQL:::', sql, 'Values:', conditionValues, ':::SQL:::');
            const [rows] = await pool.query(sql, conditionValues);
            return rows;
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Database error');
        }
    },

    readAllData: async (table, columns) => {
        console.log(columns)
        try {
            const [rows] = await pool.query(`SELECT ${columns} FROM ${table}`);

            console.log(':::SQL:::', 'Read', `${columns}`, "From   Table :", `${table}`, ':::SQL:::');
            return rows;
        } catch (error) {
            console.error('Database error:', error);
        }
    },
    
    createEntry: async (table, data) => {
        try {

            const keys = Object.keys(data).join(', ');
            const values = Object.values(data).map(value => '?').join(', ');
            const sql = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
            const result = await pool.query(sql, Object.values(data));

            return result;

        } catch (error) {
            console.error('Database error:', error);
        }
    },
}