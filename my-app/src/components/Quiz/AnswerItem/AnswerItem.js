import React from 'react'
import classes from './AnswerItem.css'

const AnswerItem = (props) => {
    var cls = [classes.AnswerItem]
    if(props.state){
        cls.push(classes[props.state])
    }

    return (
        <li key={props.key} className={cls.join(' ')} onClick={() => {
            props.onAnswerClickHandler(props.answer.id)
        }}> {props.answer.text}</li>
    )
}

export default AnswerItem
