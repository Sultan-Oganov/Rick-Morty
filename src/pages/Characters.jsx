import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CharacterList from '../components/CharacterList/CharacterList';
import { getAllCharackters } from './../redux/reducers/charackters-reducer';


const Characters = ({ getAllCharackters, isLoading }) => {

    useEffect(() => {
        getAllCharackters()
    }, [])

    if (isLoading) {
        return <h1>LOADING...</h1>
    }

    return (
        <div>
            <h1>Characters</h1>
            <CharacterList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.charackters.isLoading
    }
}

export default connect(mapStateToProps, { getAllCharackters })(Characters);