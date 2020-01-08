
import Layout from '../components/GroupedComponent/Layout';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/movieListActions';
import { getSeriesPosts } from '../redux/actions/seriesListAction';
import axios from 'axios';
import MovieCard from '../components/GroupedComponent/MovieCard';
import Head from "../components/GroupedComponent/Head";
import FilterNav from "../components/GroupedComponent/FilterNav";

class Index extends Component {

    scrollHandler(e){
        const lastElement = document.querySelector('.movieCardHolder > div:last-child');
            if(lastElement != null){
                const lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
                const pageOffset = window.pageYOffset + window.innerHeight;
                const bottonOffset = 30;
                counter++;
                if((pageOffset > lastElementOffset - bottonOffset)){
                    // if(this.props.movieList.pageNumber == counter){
                        console.log("more movies");
                        getPosts(this.props.movieList.pageNumber);
                    // }else {
                    //     counter--;
                    //     console.log("counter", counter)
                    //     console.log("pageNumber" ,this.props.movieList.pageNumber);
                    // }
                    
                }
            }
    }

    componentDidMount(){
        
        console.log("hello", this.props.movieList.pageNumber)
        window.addEventListener('scroll', (e) => this.scrollHandler())
    }

    render(){
        return (
            <div>
                <Head title="movies"/>
                <Layout>
                    <div>
                            <div className="movieCardHolder">
                                <h2>Popular Movies</h2>
                                <FilterNav />
                                {this.props.movieList.details.results.map((value , i)=>{
                                    return (
                                    <MovieCard list={value}/>
                                    )
                                })}
                            </div>
                    </div>
                </Layout>
                <style>{`
                    .movieCardHolder {
                        text-align: center;
                    }
                    `}
                </style>
            </div>
        )
    }
}

let counter = 0;

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
    await store.dispatch(getPosts(1));
    return { custom: 'custom' };
};

export default connect(
     state => state,
    { getPosts }
)(Index);