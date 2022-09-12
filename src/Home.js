import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "http://localhost:3003/data")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {

        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="card">
                <h1> Fetch data from an api in react </h1>  {
                    items.map((item) => (
                        <ol key={item.id}>
                            <img src={item.image} style={{ width: "100%" }} />
                            <h1>{item.title}</h1>
                            <p className="price">{item.price}</p>
                            <p>{item.description}</p>
                            <p><button>Add to Cart</button></p>
                        </ol>
                    ))
                }
//             </div>
        )
    }
}


// render() {

//     const data = Product.data;
//     let product = [];
//     for (let i = 0; i < data.length; i++) {
//         product.push(
//             <div className="card">
//                 <img src={data[i].image} style={{ width: "100%" }} />
//                 <h1>{data[i].title}</h1>
//                 <p className="price">{data[i].price}</p>
//                 <p>{data[i].description}</p>
//                 <p><button>Add to Cart</button></p>
//             </div>)
//     }
//     return <div>
//         {product}
//     </div>