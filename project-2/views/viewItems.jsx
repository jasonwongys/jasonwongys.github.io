var React = require("react");

class ViewItems extends React.Component {
  render() {
    let items = this.props.items.map( (items) => {


        return (
            <div>
                <h3> {items.id} {items.name} {items.price} </h3>
            </div>);

    });
    return (

            <div>
              <h1>Welcome!</h1>

              <h2> List of Items Homepage</h2>
              <ul>
                {items}
              </ul>
            </div>

    );
  }
}

module.exports = ViewItems;
