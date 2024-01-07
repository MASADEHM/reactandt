import { useEffect, useState } from "react";
import { userService } from "../services/user.services";
import { User } from "../interfaces/user.interface";

import Table, { ColumnsType } from "antd/es/table";



const Users = () => {
    const [Loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        userService.getAll().then(d => {
            console.log(d.data);
            setUsers(d.data.users);
            setLoading(false);

        })
    }, []);

    const columns: ColumnsType<any> = [{
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: 'age',
        dataIndex: 'age',
        key: 'age'

    },
    {
        title: 'firstname',
        dataIndex: 'firstName',
        key: 'firstName',
        render:(_,r)=>(
            <a onClick={()=>{alert(r.firstName)}}>{r.firstName}</a>
        )

    },
    ]
    return (<>
        <Table dataSource={users} rowKey={(r) => {
            return r.id
        }} columns={columns} loading={Loading}></Table>
    </>)
}
export default Users;