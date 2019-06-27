import React, { Component } from 'react' 
import TextField from 'material-ui/TextField'; 
import axios from 'axios';
import ImageResults from '../image-results/ImageResults'


class Search extends Component {
    state = {
        searchText: '',
        amount: 50,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '12755462-8c4bf759c09a3311f0a543fad',
        images: [] 
    };

    onTextChange = (e) => {

        
        const val = e.target.value;
        this.setState({[e.target.name]: val},() => {
            if(val === ''){
                this.setState({images: [] })
            }else{
                axios
                .get(
                    `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText}&image_type=photo&per_page=${
                    this.state.amount}&safesearch=true`)
                    .then(res => this.setState({images: res.data.hits}))
                    .catch(err => console.log(err)); 

            } 
        });
    };

    onAmountChange = (e, index, value) => 
    this.setState({ amount: value});
    
    render() {
        console.log(this.state.images);
        return (
            <div >
                 <div  className = "search-image">
                <TextField 
                   
                    name = "searchText"
                    value = {this.state.searchText}
                    onChange = {this.onTextChange}
                    floatingLabelText = "Search Images Here"
                    fullWidth = {true}
                /> 

                        <div className="gallery">
                                <header className="special">
                                  <h1>IMAGE RESULTS HERE</h1> 
                                </header> 
                        </div>
                        </div>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>): null }
                
            </div>
        )
    }
}

export default Search;