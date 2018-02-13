import React, { Component } from 'react';
import logo from './logo.svg';
import Seed from './seed.js';
import './App.css';

 function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

class ProductList extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: [],
    };
    this.handleProductUpVote = this.handleProductUpVote.bind(this);

    /*const products = [
      {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/daniel.jpg',
        productImageUrl: 'images/products/image-aqua.png',
      },
      {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/kristy.png',
        productImageUrl: 'images/products/image-rose.png',
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/veronika.jpg',
        productImageUrl: 'images/products/image-steel.png',
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/molly.png',
        productImageUrl: 'images/products/image-yellow.png',
      },
    ];*/
  }

  componentDidMount(){
    const products = [
      {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/daniel.jpg',
        productImageUrl: 'images/products/image-aqua.png',
      },
      {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/kristy.png',
        productImageUrl: 'images/products/image-rose.png',
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/veronika.jpg',
        productImageUrl: 'images/products/image-steel.png',
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/molly.png',
        productImageUrl: 'images/products/image-yellow.png',
      },
    ];
    this.setState({products: products});
  }

  handleProductUpVote(productId){
    const nextProducts = this.state.products.map((product) => {
      if(product.id == productId){
        return Object.assign({}, product,{votes: product.votes + 1})
      }else{
        return product;
      }
    });
    this.setState({
      products:nextProducts,
    });
    console.log(productId + 'was Upvoted');
  }

   handleProductDownVote(productId){
    const nextProducts = this.state.products.map((product) => {
      if(product.id == productId){
        return Object.assign({}, product,{votes: product.votes - 1})
      }else{
        return product;
      }
    });
    this.setState({
      products:nextProducts,
    });
    console.log(productId + 'was Upvoted');
  }

  render(){    

    // const product = Seed.products[1];
    const productsort = this.state.products.sort((a,b) => b.votes - a.votes);
    const productComponents = productsort.map((product) => (
      <Product 
        onVote={this.handleProductUpVote}
        downVote={this.handleProductDownVote.bind(this)}
        key={'product-'+product.id}
        id={product.id} title={product.title} 
        description={product.description} 
        url={product.url} votes={product.votes} 
        submitterAvatarUrl = {product.submitterAvatarUrl} 
        productImageUrl={product.productImageUrl} />));

    return (
      <ul className="list-unstyled">
      <br/>
       {productComponents}
      </ul>
      );
  }
}

class Product extends Component{
  constructor(props){
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleUpVote(){
    this.props.onVote(this.props.id);
  }

  handleDownVote(){
    this.props.downVote(this.props.id);
  }

  render() {    
    return (
      <li className="media my-4">
        <img className="mr-3" src="http://via.placeholder.com/150x150" alt=""/>
        <div className="media-body pt-4">          
           <a href="#" className="card-link" onClick={this.handleUpVote}><i className="fas fa-caret-up"></i> </a>
            <small className="text-muted">{this.props.votes} </small>
            <a href="#" className="card-link" onClick={this.handleDownVote.bind(this)}><i className="fas fa-caret-down"></i></a>
          <div className="m-0"><a href={this.props.url} className="card-link h4">{this.props.title}</a></div>
          <p className="text-secondary m-0">{this.props.description}Authentic renaissanc actors, delivered in just two weeks.</p>
          <small className="text-muted">Submitted by:  <img className="rounded-circle" src="http://via.placeholder.com/30x30"/></small>
        </div>
      </li>
    );
  }
}

export default ProductList;
