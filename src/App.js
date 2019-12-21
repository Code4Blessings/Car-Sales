import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/actionFeatures';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


//Step 2. Connect a component to the store to access state properties. See import section and the bottom page of this file

const App = (props) => {
  console.log(props);
   
  const removeItem = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeItem} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//mapStateToProps is a function that we define.
//It enables us to render the state as props in the App component
//What you return are all the key value pairs in the initial state from the reducer

const mapStateToProps = state => {
  console.log(state);
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    features: state.car.features,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps,
   {addFeature, removeFeature}
)(App);

//connect gets called twice
//the first call takes in a function (usually mapStateToProps), and an object that holds our action creaters and passes them on to props as well