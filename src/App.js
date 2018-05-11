import React from "react";
import { connect } from "react-redux";

class Count extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
    this.props.load();
  }

  render() {
    const props = this.props;
    console.log('render');

    console.log(props.loading);

    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 120 }}>
          <h3>Sharks</h3>
          <h1>{props.sharks}</h1>
          <button onClick={props.incrementSharks}>+1</button>
        </div>
        <div style={{ width: 120 }}>
          <h3>Dolphins</h3>
          <h1>{props.dolphins}</h1>
          <button onClick={props.incrementDolphins}>+1</button>
        </div>
        <div style={{ width: 240 }}>
            {props.loading ? <h3>Loading</h3> : <h3>My</h3>}
            {props.my.ready ? <h1>{props.my.a} / {props.my.b}</h1> : <h1>Loading...</h1>}
          <button onClick={() => props.onMyDoClick(15)}>???</button>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  sharks: state.sharks,
  dolphins: state.dolphins,
  my: state.my,
  loading: state.loading.effects.my.load
});

const mapDispatch = dispatch => ({
  incrementSharks: dispatch.sharks.increment,
  incrementDolphins: dispatch.dolphins.increment,
  onMyDoClick: (x) => dispatch.my.doIt(x),
  load: dispatch.my.load
});

export default connect(mapState, mapDispatch)(Count);
