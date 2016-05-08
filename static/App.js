var BugFilter = React.createClass({
  displayName: 'BugFilter',

  render: function () {
    return React.createElement(
      'div',
      null,
      'A way to filter the list of bugs would come here.'
    );
  }
});

var BugRow = React.createClass({
  displayName: 'BugRow',

  render: function () {
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        this.props.bug.id
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.status
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.priority
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.owner
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.title
      )
    );
  }
});

var BugTable = React.createClass({
  displayName: 'BugTable',

  render: function () {
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug.id, bug: bug });
    });
    return React.createElement(
      'table',
      null,
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Id'
          ),
          React.createElement(
            'th',
            null,
            'Status'
          ),
          React.createElement(
            'th',
            null,
            'Priority'
          ),
          React.createElement(
            'th',
            null,
            'Owner'
          ),
          React.createElement(
            'th',
            null,
            'Title'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        bugRows
      )
    );
  }
});

var BugAdd = React.createClass({
  displayName: 'BugAdd',

  getInitialState() {
    return { priority: '', status: '', owner: '', title: '' };
  },
  submitForm(e) {
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.add({ priority: form.priority.value, status: form.status.value, owner: form.owner.value, title: form.title.value });
    form.priority.value = "";
    form.status.value = "";
    form.owner.value = "";
    form.title.value = "";
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { name: 'bugAdd', onSubmit: this.submitForm },
        React.createElement('input', { type: 'text', name: 'priority', placeholder: 'Priority' }),
        React.createElement('input', { type: 'text', name: 'status', placeholder: 'Status' }),
        React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
        React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
        React.createElement('input', { type: 'submit', value: 'Post' })
      )
    );
  }
});

var bugData = [{ id: 1, priority: 'P1', status: 'Open', owner: 'Ravan', title: 'App crashes on open' }, { id: 2, priority: 'P2', status: 'New', owner: 'Eddie', title: 'Misaligned border on panel' }];

var BugList = React.createClass({
  displayName: 'BugList',

  getInitialState() {
    return { bugs: bugData };
  },
  testMethod() {
    var nextId = this.state.bugs.length + 1;
    this.addBug({ id: nextId, priority: 'P2', status: 'New', owner: 'Pieta', title: 'Warning on console' });
  },
  addBug(bug) {
    let bugData = this.state.bugs.slice();
    bug.id = this.state.bugs.length + 1;
    bugData.push(bug);
    this.setState({ bugs: bugData });
    console.log("adding new bug:", bug);
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Bug Tracker'
      ),
      React.createElement(BugFilter, null),
      React.createElement('hr', null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement('hr', null),
      React.createElement(BugAdd, { add: this.addBug })
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));
