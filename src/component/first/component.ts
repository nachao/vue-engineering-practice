import { Vue, Component } from 'vue-property-decorator'
import template from './component.html'
import './component.scss'
import { ListComponent } from '../list/component'

@Component({
	template,
	components: {
        'list': ListComponent
    }
})
export class PageFirstComponent extends Vue {
	mounted () {
		console.log(111)
	}
}
