import axios from 'axios'
import { Vue, Component } from 'vue-property-decorator'
import template from './component.html'
import './component.scss'

console.log(1111, template)

@Component({
	template
})
export class ListComponent extends Vue {
	mounted () {
		console.log(111)
        axios.get('https://getman.cn/mock/123')
            .then((res) => {
                console.log(res)
            })
	}
}
