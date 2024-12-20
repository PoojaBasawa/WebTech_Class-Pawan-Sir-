import react from './react'

class ClassComponent extends react.Component{
    render(){
        return(
            <>
                <h1>This is class component</h1>
            <Child/>
            </>
        )
    }
}
class Child extends react.Component{
    render(){
        return(
            <>
                <h1>Thisi Child Component</h1>
            </>
        )
    }
}

export default ClassComponent