import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './message'
import Timer from './timer'
import TodoApp from './todo'
import MarkdownEditor from './editor'


// 程序的主入口
// class 是 es6 的语法
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showTimer: true,
        showTimer2: true,
    }
  }

  render() {
    // 用一个变量来决定是否显示 timer 组件
    var timer = this.state.showTimer ? <Timer /> : null
    var timer2 = this.state.showTimer2 ? <Timer /> : null
    // 这是三元表达式
    // a ? b : c 意思是 如果 a == true 则结果是 b 否则是 c
    // a ? b ? c : d : e
    // var timer = null
    // if(this.state.showTimer) {
    //     timer = <Timer />
    // }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Guact</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and reload.
        </p>
        <Message name='gua' />
        <Message name='hello gua' />
        <Message name='瓜' />
        <button onClick={this.handleToggleTimer}>开关 timer </button>
        {timer}
        <button onClick={this.handleToggleTimer2}>开关 timer 2 </button>
        {timer2}
        <TodoApp />
        <MarkdownEditor />
      </div>
    )
    // *** 需要注意的是, 组件必须 /> 结尾, 规定
  }

  handleToggleTimer = e => {
    // console.log('handleToggleTimer', this.state.showTimer)
    var show = !this.state.showTimer
    // 当调用 this.setState 函数改变 state 后
    // react 会自动调用 render 函数刷新页面
    this.setState({
        showTimer: show
    })
  }

  handleToggleTimer2 = e => {
    // console.log('handleToggleTimer', this.state.showTimer)
    var show = !this.state.showTimer2
    // 当调用 this.setState 函数改变 state 后
    // react 会自动调用 render 函数刷新页面
    this.setState({
        showTimer2: show
    })
  }
}

export default App;
