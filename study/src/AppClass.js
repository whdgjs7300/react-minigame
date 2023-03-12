// 클래스형 컴포넌트
// 호출 코드 rcc
import React, { Component } from 'react'
import BoxClass from './components/BoxClass';

export default class AppClass extends Component {

    //State 만드는 법
    // 한번에 state를 만들고 한번에 수정할 수 있음
    // 이 클래스 내에 있는(컴포넌트)를 쓰려면 this를 써야함
    // 클래스형 컴포넌트를 사용하기 위해 index.js 파일내에 <AppClass/> 변경
    constructor(props) {
        super(props)
        this.state = {
            counter2 : 0,
            num : 1,
            value : 0,
        };
    }

    increase=() => {
        // 자동으로 제공해주는 setState함수
        this.setState({
            counter2: this.state.counter2 + 1,
            value : this.state.value + 1,
        })
    };

    render() {
        return (
        <div>
            <div>
                state : {this.state.counter2}
            </div>
            <button onClick={this.increase}>클릭!</button>
            <BoxClass num={this.state.value} />
        </div>
        )
    }
    }
