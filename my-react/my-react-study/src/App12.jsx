// React 組件間參數傳遞
// 子組件
function CircleArea({r}) {
    const pi = 3.1415926;
    const area = r * r * pi;
    return (<div>{area}</div>)
}

// 子組件
const CircleArea2 = ({r}) => {
    const pi = 3.1415926;
    const area = r * r * pi;
    return (<div>{area}</div>)
}

const Fruit = ({friutName, friutPrice}) =>{
    return (<div>水果名稱:{friutName} 水果價格:{friutPrice}</div>)
} 

const Fruit2 = (props) =>{
    return (<div>水果名稱:{props.friutName} 水果價格:{props.friutPrice}</div>)
}

const Fruit3 = (props) =>{
    props.log()
    return (<div>水果名稱:{props.friutName} 水果價格:{props.friutPrice}</div>)
}

// 父組件
function App() {
    return(
        <>
            <CircleArea r="10" />
            <CircleArea2 r="10" />
            <Fruit friutName="Apple" friutPrice="50" />
            <Fruit2 friutName="Banana" friutPrice="30" />
            <Fruit3 friutName="Orange" friutPrice="40" log = {() => {console.log("我是柳丁")}} />
        </>
    )
}

export default App;
