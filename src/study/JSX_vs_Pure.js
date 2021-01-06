/* JSX...  */
class ShoppingList extends React.Component {
	render() {
	  return (
		<div className="shopping-list">
		  <h1>Shopping List for {this.props.name}</h1>
		  <ul>
			<li>Instagram</li>
			<li>WhatsApp</li>
			<li>Oculus</li>
		  </ul>
		</div>
	  );
	}
  }
  // 사용 예제: <ShoppingList name="Mark" />


/*#__PURE__*/React.createElement("div", { className: "shopping-list" }, 
	/*#__PURE__*/React.createElement("h1", null, "Shopping List for ", props.name), 
	/*#__PURE__*/React.createElement("ul", null, 
		/*#__PURE__*/React.createElement("li", null, "Instagram"), 
		/*#__PURE__*/React.createElement("li", null, "WhatsApp"), 
		/*#__PURE__*/React.createElement("li", null, "Oculus")
	)
);
