import React, {useState} from 'react'
import classes from '../../App.css'

function HookCounter2(props) {
    useState();
    const [name, setName] = useState({firstName: '', lastName: ''});

    return (
            <div className={classes.content}>
                <h4 className={classes.middleHeaderStyle}> React Hooks <br/> useState object Example</h4>
                <hr/>
                <label htmlFor='fn'> First name: </label> <br/>
                <input type='text' id='fn' value={name.firstName} onChange={e => setName({...name,  firstName: e.target.value})}/> <br/>
                <label htmlFor='ln'> Last name: </label> <br/>
                <input type='text' id='ln' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
                <h4 className={classes.middleHeaderStyle}>First name is :  {name.firstName}</h4>
                <h4 className={classes.middleHeaderStyle}>Last name is : {name.lastName}</h4>
            </div>
    )
}

export default HookCounter2
