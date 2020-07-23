import React from 'react';
import withPrivateRoute from '../components/privateRouter/withPrivateRouter';

function Dashboard({auth}){
    return(
        <>
        <div>Dashboard: {auth} </div>
        </>
    )
}

Dashboard.getInitialProps = async props => {
    console.info('Congratulations! You are authorized! ######', props);
    // const tojson = props.json();
    return {};
};

export default withPrivateRoute(Dashboard)