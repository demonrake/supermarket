import { createApp } from '@vue/runtime-dom'
import Toast from './Toast'
export default{
  install: (app,options)=>{
    const toast=createApp(Toast).mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    app.config.globalProperties.$toast=toast
  }
}