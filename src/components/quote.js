import React, {Component} from 'react'

let num = 10;
export default class Quote extends Component{
	
	constructor(){
		super();
		this.state = {
			data : [],
			isLoading:true,
			chosen:{
				quote:'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.',
				character:'Vincent Van Gogh',
				color:'#27ad60'
			},
			color:['#27ad60','#74a757','#9b59b6','#f39c12','#fb6965','#14a085','#d9c2b5','#2b3e50'],
			classList:''
		}
		this.getRandomQuote = this.getRandomQuote.bind(this);

	}

	componentDidMount(){
		fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`)
		.then(response => response.json())
		.then( response =>
			this.setState(
				{
					data : response,
					isLoading:false
				}
			)
		)
	}

	getRandomQuote(){
		console.log('clicked')
		let index = Math.floor(Math.random()  * num);
		this.setState(
			{
				chosen: {
					quote: this.state.data[index].quote,
					character: this.state.data[index].character,
					color:this.state.color[Math.floor(Math.random()*this.state.color.length)],
					classList:'active'
				}
			}
		)
	}

	render(){
		return(
			<div className={`box ${this.state.classList}`} style={{backgroundColor:this.state.chosen.color,transition:'all 2s'}}>
				
				<div className="quoteBox">
					{
						this.state.isLoading ? <div> Loading </div>: null
					}
					<div className={`quote ${this.state.classList}`} style={{color:this.state.chosen.color,transition:'all 1s'}}> 
						<i><span>“</span>{this.state.chosen.quote?this.state.chosen.quote:null} </i>
					</div>
					<div className={`character ${this.state.classList}`} style={{color:this.state.chosen.color,transition:'all 1s'}}> - {this.state.chosen.character} </div>
					<div className="twitter" style={{color:this.state.chosen.color}}> <a href="#" className="fa fa-twitter" style={{color:this.state.chosen.color,transition:'all 1s'}}></a></div>
					<div className="button"> <button onClick={this.getRandomQuote} style={{backgroundColor:this.state.chosen.color,transition:'all 1s'}}>New quote</button> </div>
				</div>

				<div className="footer">
					<div> Desgined and Created By: </div>
					<div style={{color:'lightblue'}}> Andreas Sujono </div>
				</div>
			</div>
		);
	}











}