import ReusableTable from '@/components/table/ReusableTable';
import React from 'react'

const page = () => {
    const columns = [
        { uid: "id", name: "ID", sortable: true },
        { uid: "name", name: "Name", sortable: true },
        { uid: "age", name: "Age", sortable: true },
    ];

    const users = [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },

    ];

    const statusOptions = [
        { name: "Active", uid: "active" },
        { name: "Paused", uid: "paused" },
        { name: "Vacation", uid: "vacation" },
    ];
    return (
        <div>
            <ReusableTable columns={columns} users={users} statusOptions={statusOptions} />
        </div>
    )
}

export default page