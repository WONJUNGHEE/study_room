import React, {useState} from 'react'


const Schedule = () => {
    const [inputs, setInputs] = useState({time: 9, name: "", phone: "", count: ""})
    const [time_table, setTime_table] = useState([
        {
            time: 9,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 10,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 11,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 12,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 13,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 14,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 15,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 16,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 17,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 18,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 19,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 20,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 21,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 22,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 23,
            name: "",
            phone: "",
            count: ""
        }, {
            time: 24,
            name: "",
            phone: "",
            count: ""
        }
    ]);
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        console.log(inputs);
    }
    const change_table = () => {
        setTime_table(time_table.map(
            user => user.time === +inputs.time
                ? {
                    ...user,
                    name: inputs.name,
                    phone: inputs.phone,
                    count: inputs.count
                }
                : user
        ))
    }
    return (
        <div className="schedule_body">
            <table>
                <thead>
                    <tr>
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
                <input name="time" type="text" placeholder="시간" onChange={onChange}/>
                <input name="name" type="text" placeholder="이름" onChange={onChange}/>
                <input name="phone" type="text" placeholder="전화번호" onChange={onChange}/>
                <input name="count" type="text" placeholder="인원" onChange={onChange}/>
                <button onClick={change_table}>변경</button>
            </div>
        </div>
    )

}
export default Schedule;