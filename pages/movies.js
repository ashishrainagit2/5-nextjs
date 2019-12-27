import Layout from '../components/Layout';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/movieListActions';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Head from "../components/Head";
import LoadMoreButton from '../components/UI/LoadMoreButton';

const Index = props => {
    const handler = e => {
        console.log("handler initialized");
        getPosts(2);
    };
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
                           <LoadMoreButton title="Lode More" path="movies" handler={handler}/>
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
    return { custom: 'custom' };
};

export default connect(
     state => state,
     { getPosts }
)(Index);