import Layout from '../components/Layout';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/movieListActions';
import { getSeriesPosts } from '../redux/actions/seriesListAction';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Head from "../components/Head";
import Button from '../components/UI/Button';

const Index = props => {
    const handleSubmit = e => {
        e.preventDefault();
        props.getPosts();
    };
    const buttonHandler = () => {
        console.log("here")
    }
    return (
        <div>
            <Head title="test"/>
            <Layout title="Movie and Series List">
                <div>
                        <div className="movieCardHolder">
                            <h2>Popular Movies</h2>
                            {props.movieList.details.results.map((value , i)=>{
                                return (
                                <MovieCard list={value}/>
                                )
                            })}
                            <Button path="films" title="More Movies"/>
                        </div>

                        <div className="movieCardHolder">
                            <h2>Popular Series</h2>
                            {/* {console.log("==0==" ,props)} */}
                            {props.SeriesList.details.results.map((value , i)=>{
                                return (
                                    <img src= {"https://image.tmdb.org/t/p/w300/" + value.poster_path}/>
                                )
                            })}
                            <Button path="series" title="More Series"/>
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
    );
};

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
    await store.dispatch(getPosts());
    await store.dispatch(getSeriesPosts());
    return { custom: 'custom' };
};

export default connect(
     state => state
)(Index);