import React, {useCallback} from 'react'
import {TipsType} from "../../costansts/type-modal"
import './style.css'
import {useTipsContext} from "../../context/tips/context"

const Tips: React.FC = () => {
	const {data, setShowTips} = useTipsContext()

	const closeTips = useCallback(() => {
		setShowTips(null)
	}, [])

	const alertClass = data?.type ? `custom-alert ${data?.type === TipsType.Success ? 'success' : 'error'}` : ''
	const icon = data?.type === TipsType.Success ? require('../../assets/image/check-circle.png') : require('../../assets/image/info-circle.png')

	return (
		<div className={`custom-alert-wrapper ${data ? 'show' : 'hide'}`}>
			<div className={alertClass}>
				<img alt={'icon-tips'} style={{width: '20px', height: '20px'}} src={icon}/>
				<span>
					{data?.message}
				</span>
				<div onClick={closeTips} className='close-tips'>
					<img style={{width: '100%', height: '100%'}} alt={'icon-tips'}
						src={require('../../assets/image/close-light.png')}/>
				</div>
			</div>
		</div>
	)
}

export default Tips
