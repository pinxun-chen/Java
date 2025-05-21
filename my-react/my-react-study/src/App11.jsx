/*
表頭 StudentTableHeader
表身 StudentTablebBody
表尾 StudentTableFooter
主表 StudentTable (組合表頭+表身+表尾)
*/

function StudentTableHeader(){
    return (
        <thead>
            <tr><th>ID</th><th>姓名</th><th>分數</th><th>及格</th></tr>
        </thead>
    )
}

function StudentTablebBody({students}){
    return (
        <tbody>
            {
                students.map((student => {
                    const isPass = student.score >= 60;
                    return (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td align="right">{student.score}</td>
                            <td>{isPass ? "V" : "X"}</td>
                        </tr>
                    )
                }))
            }
        </tbody>
    )
}

function StudentTableFooter({avgScore}) {
    return (
        <tr>
            <td colspan="2" align="right">平均</td>
            <td align="right">{avgScore.toFixed(1)}</td>
            <td></td>
        </tr>
    )
}

function StudentTable({students, avgScore}) {
    return (
        <table border="1">
            <StudentTableHeader />
            <StudentTablebBody students={students} />
            <StudentTableFooter avgScore={avgScore} />
        </table>
    )
}

function App() {
    const students = [
        {id:1, name:'小明', score:55},
        {id:2, name:'小美', score:78},
        {id:3, name:'小華', score:92},
        {id:4, name:'阿強', score:40},
    ]
    const avgScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;
    return (
        <>
            <h1>學生成績表</h1>
            <StudentTable students={students} avgScore={avgScore} />
        </>
    )
}

export default App