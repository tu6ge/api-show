import Vue from 'vue'
import apishow from "../../packages/index"
// import {ali_011807} from "../../packages/index"
// console.log(ali_011807)
let siteData = {

}

import Vssue from 'vssue'
import VssueAPI from '@vssue/api'

const vpOptions = JSON.parse(VSSUE_OPTIONS);


export default ({
    Vue, 
    siteData
  }) => {
    Vue.use(apishow)
    Vue.use(Vssue, Object.assign({}, vpOptions, {
      api: VssueAPI,
    }));
  }