import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from '../actions/actionFeatures';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem={props.removeItem} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    features: state.car.features,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature})(AddedFeatures);
