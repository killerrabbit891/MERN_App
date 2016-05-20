var react = require('react');
var reactDOM = require('react-dom');

var BugFilter = React.createClass({
  render: function() {
    return (
      <div>
        <select value={this.state.status} onChange={this.onChangeStatus} >
          <option value="">(Any)</option>
          <option value="New">New</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
        <select value={this.state.priority} onChange={this.onChangePriority} >
          <option value="">(Any)</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
      />
        <button onClick={this.submitHandler({priority: "P1"})}>Test Filter!</button>
      </div>
    )
  },
  
  getInitialState: function() {
    var initFilter = this.props.initFilter;
    return {status: initFilter.status, priority: initFilter.priority};
  },

  onChangeStatus: function(e) {
    this.setState({status: e.target.value});
  },
  onChangePriority: function(e) {
    this.setState({priority: e.target.value});
  },

  submit: function(e) {
    this.props.submitHandler({priority: this.state.priority, status: this.state.status});
  }
});

module.exports = BugFilter;