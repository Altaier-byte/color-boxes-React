import React, { Component, PureComponent } from 'react'
import Box from './Box';
import './BoxContainer.css'
class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ['purple', 'magenta', 'green', 'pink']

    }

    render(){
        const Boxes = Array.from({length: this.props.numBoxes}).map(()=>(
            <Box  colors={this.props.allColors}/>
        ));

        return <div className='BoxContainer'>{Boxes}</div>

    }
}

export default  BoxContainer;