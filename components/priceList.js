var PriceList = React.createClass({
  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch('http://localhost:8000/product/show', {
      // mode: "no-cors", // no-cors, *cors, same-origin
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type':'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      var pros = data.reduce((tot, item) => {
        return tot = [...tot, {'pk':item.pk, ...item.fields}]
      },[]);
      this.setState({
        products: pros
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },

  getInitialState: function () {
    return {
      productModal: false,
      id: null,
      products: [
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
        {
          name: "aaa",
          inPrice: "10",
          price: "10",
          stock: "10",
          desc: "aaaaa",
        },
      ],
      selectedProduct: {
        product: "",
        inPrice: "",
        price: "",
        stock: "",
        desc: "",
      },
    };
  },

  render() {
    var that = this;
    var productListHead = [
      {
        name: "Product / Service",
        val: "product",
        placeh: "Enter the product name",
        grow: "3",
        class: " phone-show",
      },
      {
        name: "In Price",
        val: "inPrice",
        placeh: "Enter in price",
        grow: "1",
        class: " phone-hidden",
      },
      {
        name: "Price",
        val: "price",
        placeh: "Enter price",
        grow: "1",
        class: " phone-show",
      },
      {
        name: "In Stock",
        val: "stock",
        placeh: "Enter stock",
        grow: "1",
        class: " phone-hidden",
      },
      {
        name: "Description",
        val: "desc",
        placeh: "Enter in price",
        grow: "3",
        class: " phone-hidden",
      },
    ];

    var searchBox = React.createElement(
      "div",
      { className: "search-box" },
      React.createElement("input", {
        className: "search-input",
        placeholder: "Search Product ..",
      }),
      React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "25",
          height: "25",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "#44dcff",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "cursor-pointer",
        },
        React.createElement("path", {
          d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
        }),
        React.createElement("path", {
          d: "M21 21l-6 -6",
        })
      )
    );

    var newButton = React.createElement(
      "div",
      {
        className:
          "flex space-between align-items-center shadow-large btn-radious cursor-pointer",
        style: {
          padding: "10px 20px",
        },
        onClick: this.newProduct,
      },
      React.createElement(
        "button",
        {
          className: "button",
        },
        "New Product"
      ),
      React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          x: "0px",
          y: "0px",
          width: "24",
          height: "24",
          preserveAspectRatio: "none",
          viewBox: "0 0 24 24",
        },
        React.createElement("rect", {
          className: "st2",
          width: "24",
          height: "24",
          style: { fill: "none" },
        }),
        React.createElement("path", {
          className: "stshockcolor",
          dataSt: "fill:#66BB6A;;",
          style: { fill: "rgb(41, 246, 118)" },
          d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10  C22,6.48,17.52,2,12,2z",
        }),
        React.createElement("path", {
          class: "st0",
          d: "M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M12,20c-4.42,0-8-3.59-8-8  c0-4.42,3.58-8,8-8c4.41,0,8,3.58,8,8C20,16.41,16.41,20,12,20z",
          style: {
            opacity: 0.2,
            fill: "rgb(255, 255, 255)",
          },
        }),
        React.createElement("polygon", {
          className: "st1",
          points:
            "17,13 13,13 13,17 11,17 11,13 7,13 7,11 11,11 11,7 13,7 13,11 17,11 ",
          style: { fill: "rgb(255, 255, 255)" },
        })
      )
    );

    var printButton = React.createElement(
      "div",
      {
        className:
          "flex space-between align-items-center shadow-large btn-radious cursor-pointer",
        style: {
          padding: "10px 20px",
        },
      },
      React.createElement(
        "button",
        {
          className: "button",
        },
        "Print List"
      ),
      React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "tabler-icon tabler-icon-printer",
          style: {
            width: "1.5rem",
            height: "1.5rem",
            fontWeight: "900",
            borderRadius: "50%",
            color: "rgb(102, 214, 242)",
            marginTop: "0px",
          },
        },
        React.createElement("path", {
          d: "M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2",
        }),
        React.createElement("path", {
          d: "M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4",
        }),
        React.createElement("path", {
          d: "M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z",
        })
      )
    );

    var buttonGroup = React.createElement(
      "div",
      { className: "button-group" },
      newButton,
      printButton
    );

    var toolbar = React.createElement(
      "div",
      { className: "toolbar" },
      searchBox,
      buttonGroup
    );

    var tableBody = this.state.products.map(function (product, i) {
      return React.createElement(
        "div",
        {
          className: "table-body",
          style: {
            display: "flex",
            alignItems: "stretch",
            marginBottom: "15px",
          },
        },
        React.createElement("input", {
          className: "td-w-3 phone-show",
          value: product.name,
          onChange: () => {},
        }),
        React.createElement("input", {
          className: "td-w-1 phone-hidden",
          value: product.inPrice,
          onChange: () => {},
        }),
        React.createElement("input", {
          className: "td-w-1 phone-show",
          value: product.price,
        }),
        React.createElement("input", {
          className: "td-w-1 phone-hidden",
          value: product.stock,
          onChange: () => {},
        }),
        React.createElement("input", {
          className: "td-w-3 phone-hidden",
          value: product.desc,
          onChange: () => {},
        }),
        React.createElement(
          "div",
          {
            className: "",
            style: {
              display: "flex",
              alignItems: "center",
            },
            onClick: () => that.seletetProduct(i),
          },
          React.createElement(
            "svg",
            {
              stroke: "currentColor",
              fill: "currentColor",
              strokeWidth: "0",
              viewBox: "0 0 16 16",
              className: "text-[#0f7ee8] cursor-pointer",
              height: "22",
              width: "22",
              xmlns: "http://www.w3.org/2000/svg",
            },
            React.createElement("path", {
              d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",
            })
          )
        )
      );
    });

    var tableHead = productListHead.map(function (item) {
      return React.createElement(
        "div",
        {
          className: item.class,
          style: {
            paddingLeft: "10px",
            textAlign: "start",
            flexGrow: item.grow,
          },
        },
        item.name
      );
    });

    var productTable = React.createElement(
      "div",
      { className: "product-table" },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "stretch",
            marginBottom: "20px",
          },
        },
        tableHead
      ),
      tableBody
    );

    var mainBoard = React.createElement(
      "div",
      { className: "main-board" },
      toolbar,
      productTable
    );

    var newProductForm = this.state.productModal
      ? React.createElement(
          "div",
          { className: "modal-panel" },
          React.createElement(
            "div",
            { className: "panel" },
            React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "row-reverse",
                  position: "absolute",
                  paddingTop: "16px",
                  borderRadius: "30px",
                  width: "40%",
                  height: "40px",
                  background: "white",
                },
              },
              React.createElement(
                "svg",
                {
                  viewBox: "0 0 15 15",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  style: {
                    width: "var(--cb-icon-size, 7%)",
                    height: "var(--cb-icon-size, 70%)",
                  },
                  onClick: that.newProduct,
                },
                React.createElement("path", {
                  d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                })
              )
            ),
            React.createElement(
              "div",
              {
                style: {
                  fontSize: "40px",
                  color: "red",
                  margin: "16px 0px",
                  marginTop: "50px",
                  textAlign: "center",
                },
              },
              "New Product"
            ),
            React.createElement(
              "div",
              {
                style: {
                  padding: "0 20px",
                },
              },
              productListHead.map(function (item) {
                return React.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                    },
                  },
                  React.createElement(
                    "label",
                    {
                      style: {
                        textAlign: "start",
                        paddingBottom: "10px",
                      },
                    },
                    item.name
                  ),
                  React.createElement("input", {
                    style: {
                      height: "24px",
                      width: "90%",
                      border: "1px solid #ccc",
                      borderRadius: "30px",
                      padding: "4px 10px",
                      marginBottom: "20px",
                    },
                    placeholder: item.placeh,
                    value: that.state.selectedProduct[item.val],
                    onChange: (e) =>
                      that.onChangeForm(item.val, e.target.value),
                  })
                );
              })
            ),
            React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  padding: "20px",
                },
                onClick: that.saveProduct,
              },
              React.createElement(
                "button",
                {
                  style: {
                    padding: "15px 30px",
                    background: "#0f7ee9",
                    borderRadius: "40px",
                    color: "white",
                    margin: "auto",
                  },
                },
                "Save"
              )
            ),
            React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                },
                onClick: that.newProduct,
              },
              React.createElement(
                "button",
                {
                  style: {
                    padding: "15px 30px",
                    background: "white",
                    borderRadius: "60px",
                    color: "#0f7ee9",
                    margin: "auto",
                  },
                },
                "Close"
              )
            )
          )
        )
      : null;

    return React.createElement(
      "div",
      {
        className: "background",
      },
      mainBoard,
      newProductForm
    );
  },

  saveProduct: function () {
    if (this.state.id == null) {
      this.setState({
        products: [...this.state.products, this.state.selectedProduct],
      });
    } else {
      var nProducts = [...this.state.products];
      nProducts[this.state.id] = this.state.selectedProduct;
      this.setState({ produts: [...nProducts] });
    }
    this.newProduct();
  },

  onChangeForm: function (index, val) {
    var prod = { ...this.state.selectedProduct };
    prod[index] = val;
    this.setState({ selectedProduct: prod });
  },

  seletetProduct: function (index) {
    this.setState({ id: index });
    this.setState({ selectedProduct: this.state.products[index] });
    this.toggleModal();
  },

  newProduct: function () {
    this.setState({ id: null });
    this.setState({
      selectedProduct: {
        product: "",
        inPrice: "",
        price: "",
        stock: "",
        desc: "",
      },
    });
    this.toggleModal();
  },

  toggleModal: function () {
    this.setState({ productModal: !this.state.productModal });
  },
});
