import { 
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../utils/index'
import { set, del } from '../observer/index'

export function initGlobalAPI (Vue) {
  Vue.util = {
    extend,
    mergeOptions,
    defineReactive
  }

  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick
}