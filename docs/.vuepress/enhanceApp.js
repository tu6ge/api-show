import Vue from 'vue'
import apishow from "../../packages/index"
import GithubButton from 'vue-github-button'
// import {ali_011807} from "../../packages/index"
// console.log(ali_011807)
let siteData = {

}



export default ({
    Vue, 
    siteData
  }) => {
    Vue.use(apishow)
    Vue.component(GithubButton.name, GithubButton)
  }