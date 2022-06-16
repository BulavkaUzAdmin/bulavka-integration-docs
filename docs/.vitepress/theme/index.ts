import DefaultTheme from 'vitepress/theme'
import RequestBlock from './components/RequestBlock.vue'
import { EnhanceAppContext } from 'vitepress'
import apiEndpoints from './endpoints'

export default {
    ...DefaultTheme,
    enhanceApp({ app }: EnhanceAppContext) {
        app.component('RequestBlock', RequestBlock)

        app.config.globalProperties.$apiEndpoints = apiEndpoints
    }
}