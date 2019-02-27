import * as React from 'react'
import _ from 'lodash'

import ss from 'Images/video.png'

import './index.less'

export default () => {
	return (
		<div>
			<p>hellos world!2</p>
			<img src={ss} alt="" />
			<style jsx>{`
				p {
					color: green;
				}
			`}</style>
		</div>
	)
}
console.log(_.join(['index', 'module', 'loaded!'], ' '))
