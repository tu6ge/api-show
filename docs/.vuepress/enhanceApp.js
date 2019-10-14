import Vue from 'vue'
import apishow from "../../packages/index"

let siteData = {}
export default ({
    Vue, 
    siteData
  }) => {
    Vue.use(apishow)
  }