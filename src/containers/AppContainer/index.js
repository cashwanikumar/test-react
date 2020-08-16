import React, { PureComponent } from 'react'
import App from '../../components/App'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.scss'

class AppContainer extends PureComponent {
	render() {
		return <App {...this.props} />
	}
}

export default AppContainer
