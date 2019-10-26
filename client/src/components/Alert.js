import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    // <div key={alert.id} className="ui warning message transition">
    //   {alert.msg}
    // </div>
    // <div key={alert.id} className="ui warning message">
    //   <i className="close icon"></i>
    //   <div className="header">{alert.msg}</div>
    // </div>
    <div key={alert.id} className="ui visible message">
      <p>{alert.msg}</p>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
