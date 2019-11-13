import Vue from 'vue'
import apishow from 'api-show'
import local_apishow from "../../packages/index"
import GithubButton from 'vue-github-button'

let siteData = {

}



export default ({
    Vue, 
    siteData
  }) => {
      if(process.env.NODE_ENV !== 'production'){
          Vue.use(local_apishow)
      }else{
        Vue.use(apishow)
      }
    
    Vue.component(GithubButton.name, GithubButton)
  }