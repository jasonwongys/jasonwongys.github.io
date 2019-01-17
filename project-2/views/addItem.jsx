var React = require("react");
// Adding of new Items into Cart 
class AddItem extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Adding a Item into cart </h3>
        <form method="POST" action="/items/new" +{items.id}+ "/items/">
             <input name = "title" placeholder="Items"/> <br/>


             <a href="/items/" +{items.id}+ "/songs/"><input type = "submit" /> </a>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = AddItem;