import Layout from '../components/Layout';
import React, { Component } from 'react';
import Head from "../components/Head";

const Series = props => {
    return (
        <div>
            <Head title="test"/>
            <Layout title="Movie and Series List">
                <h2>This is series page!</h2>
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

export default Series;