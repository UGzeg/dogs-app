import React from 'react';
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import axios from "axios";


const apiHost = "https://5eacaf264bf71e00166a0a5b.mockapi.io";

class Homepage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            toggleActive: false
        }
    }
    componentDidMount() {
        // localstoragedan getirme
/*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/

        this.setState({
            loadingFavorites: true,
        }, () => {
            axios.get(`${apiHost}/favorites`).then((result) => {
                this.setState({
                    favorites: result.data,
                    loadingFavorites: false
                })
            }).catch((err) => {
                console.log("Axios err", err);
                this.setState(({
                    loadingFavorites: false
                }))
            })
        })
    
    }

    toggle = (dogId)=>{
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        this.setState({
            toggleActive: true
        })
        if(foundDog){
            axios.delete(`${apiHost}/favorites/${foundDog.id}`).then((result) => {
                this.setState(({
                    favorites: this.state.favorites.filter((dog) => dog.dogId !== dogId),
                    toggleActive: false
                }))
            }).catch((err) => {
                console.log(err);
            });
        }else{
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
            axios.post(`${apiHost}/favorites`, {
                dogId
            }).then((result) => {
                const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
                this.setState({
                    favorites: [...this.state.favorites, eklenenFavori],
                    toggleActive: false
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    getStatus= (dogId) =>{
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        return foundDog;
    }

    render(){
        if(this.state.loadingFavorites){
            return <div>
                <h1>Sayfa Yukleniyor.....</h1>
            </div>
        }
        return (
            <>
                    {
                        dogs.map((dog) => {
                            return <Dog toggle={this.toggle} id={dog.id} getStatus={this.getStatus} {...dog} toggleActive={this.state.toggleActive}/>
                        })
                    }
            </>
        );
    }
}

export default Homepage;