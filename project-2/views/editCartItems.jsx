var React = require('react');
//// page that confirms the editing of recipe

class EditCartItems extends React.Component {

  render() {
    return (
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/style.css"/>
    </head>
    <body>
      <div>
        <h1>Edit Items in Cart { this.props.id }</h1>
        <form method="POST" action={"/cart/"+this.props.id+"?_method=PUT"}>
            <input name = "id" value={this.props.id} placeholder="ID"/><br />
            <input name = "name" value={this.props.name} placeholder="Name"/> <br/>
            <input name = "price" value={this.props.price} placeholder="price "/> <br/>
            <input name = "quantity" value={this.props.quantity} placeholder="quantity"/> <br/><br/>
            <input type = "submit" value="Save Changes"/>
        </form>

        <form method="POST" action={"/cart/" + this.props.id + "?_method=DELETE"}>
            <input type="submit" value="Delete Item"/>
        </form>

      </div>
      </body>
      </html>
    );
  }
}
module.exports = EditCartItems; 