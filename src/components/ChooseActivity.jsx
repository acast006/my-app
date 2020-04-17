import React, { Component }  from 'react';
import Running from './running.jsx';
import Hiking from './hiking.jsx';
import Meditating from './meditating.jsx';

class ChooseActivity extends Component {
      constructor(){
        super();
        this.state = {render:''}
      }
      handleClick(compName, e){
        console.log(compName);
        this.setState({render:compName});
      }
      _renderSubComp(){
          switch(this.state.render){
            case 'Running': return <Running/>
            case 'Hiking' : return <Hiking/>
            case 'Meditating': return <Meditating/>
          }
      }
      render() {
        return (
            <div className="activities">
                    <button onClick={this.handleClick.bind(this, 'Running')}>Running</button>
                    <button onClick={this.handleClick.bind(this, 'Hiking')}>Hiking</button>
                    <button onClick={this.handleClick.bind(this, 'Meditating')}>Meditating</button>
                {this._renderSubComp()}
            </div>
        );
      }
    }
export default ChooseActivity;
