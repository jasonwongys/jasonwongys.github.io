var React = require("react");

class ViewCart extends React.Component {
  render() {
    let cart = this.props.cart.map( (cart) => {


        return (
            <div>
                <h3> {cart.id} {cart.name} {cart.price} </h3>
            </div>);

    });
    return (

            <div>
              <h1>Welcome!</h1>

              <h2> Cart Homepage</h2>
              <ul>
                {cart}
              </ul>
            </div>

    );
  }
}

module.exports = ViewCart;