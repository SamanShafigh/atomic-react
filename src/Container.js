import componentsConfig from './config/Components';

class Container {
  constructor() {
    this.components = {};
    this.get = this.get.bind(this);

    for (var i = 0; i < componentsConfig.length; i++) {
      let componentConfig = componentsConfig[i];
      this.components[componentConfig.name] = require(`${componentConfig.path}`).default;
    }
  }

  get(id) {
    if (this.components[id] !== undefined) {
      return this.components[id];
    } else {
      throw new Error(`Can not find component ${id}`);
    }
  }
}

const container = new Container();

export default container;
