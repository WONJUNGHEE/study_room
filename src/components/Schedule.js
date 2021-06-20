import React, { useState } from 'react'


const Schedule = () => {
    const [inputs, setInputs] = useState({ name: "", phone: "", count: "" })
    const [time_table, setTime_table] = useState([
        {
            using: false,time: 9,name: "",phone: "",count: ""
        }, {
            using: false,time: 10,name: "",phone: "",count: ""
        }, {
            using: false,time: 11,name: "",phone: "",count: ""
        }, {
            using: false,time: 12,name: "",phone: "",count: ""
        }, {
            using: false,time: 13,name: "",phone: "",count: ""
        }, {
            using: false,time: 14,name: "",phone: "",count: ""
        }, {
            using: false,time: 15,name: "",phone: "",count: ""
        }, {
            using: false,time: 16,name: "",phone: "",count: ""
        }, {
            using: false,time: 17,name: "",phone: "",count: ""
        }, {
            using: false,time: 18,name: "",phone: "",count: ""
        }, {
            using: false,time: 19,name: "",phone: "",count: ""
        }, {
            using: false,time: 20,name: "",phone: "",count: ""
        }, {
            using: false,time: 21,name: "",phone: "",count: ""
        }, {
            using: false,time: 22,name: "",phone: "",count: ""
        }, {
            using: false,time: 23,name: "",phone: "",count: ""
        }, {
            using: false,time: 24,name: "",phone: "",count: ""
        }
    ]);
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });

    }
    const change_table = () => {
        setTime_table(time_table.map(
            user => user.using === true
                ? {
                    ...user,
                    using:false,
                    name: inputs.name,
                    phone: inputs.phone,
                    count: inputs.count
                }
                : user
        ))
        setInputs({ name: "", phone: "", count: "" });
    }

    const handlechange = e => {
        setTime_table(time_table.map(time => time.time === +e.target.id ?  time.using=== true ?{ ...time, using: false}:{ ...time, using: true}:time));
    }

    const schedule_delete = () => {
            setTime_table(time_table.map(user => user.using === true ? {
                ...user,
                using:false,
                name: "",
                phone: "",
                count: ""
            }
                : user))
    }
    
    return (
        <div className="schedule_body">
            <table>
                <thead>
                    <tr>
                        <th className="check">체크</th>
                        <th className="time">시간</th>
                        <th>이름</th>
                        <th>핸드폰 번호</th>
                        <th>인원</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        time_table.map(
                            (time) => <tr key={time.time}>
                                <th className="check1"><input type="checkbox" id={time.time} checked={time.using} onChange={handlechange}/></th>
                                <th className="time1">{time.time}</th>
                                <th>{time.name}</th>
                                <th>{time.phone}</th>
                                <th>{time.count}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div>
                <input name="name" type="text" placeholder="이름" onChange={onChange} value={inputs.name}/>
                <input name="phone" type="text" placeholder="전화번호" onChange={onChange} value={inputs.phone}/>
                <input name="count" type="text" placeholder="인원" onChange={onChange} value={inputs.count}/>
                <button onClick={change_table}>변경</button>
                <button onClick={schedule_delete}>삭제</button>
            </div>
        </div>
    )

}
export default Schedule;