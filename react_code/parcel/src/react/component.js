class Component {
  constructor (props = {}) {  //提供默认值，一个空对象
    this.isReactComponent = true;
    this.state = {};  //父类constructor里有的这里可以有
    this.props = props;
  }
  setState (stateChange) {
    Object.assign(this.state,stateChange); //原始对象，若干其他对象。合并对象
    
  }
}

export default Component;