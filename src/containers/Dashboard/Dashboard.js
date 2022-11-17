import React, { Fragment } from 'react'
import Header from '../../components/Header/Header';
import PageRoutes from './PageRoutes';

const Dashboard = () => {

    return (
        <Fragment>
            <Header />
            <PageRoutes />
        </Fragment>
    );
}

export default Dashboard;