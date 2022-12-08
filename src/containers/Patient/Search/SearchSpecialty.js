import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchSpecialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { getAllSpecialty } from '../../../services/userService';
import { withRouter } from 'react-router';


class SearchSpecialty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSpecialty: []

        }
    }

    async componentDidMount() {
        let res = await getAllSpecialty();
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }

    handleViewDetailSpecialty = (item) => {
        if (this.props.history){
            this.props.history.push(`/detail-specialty/${item.id}`)
        }
    }

    
    render() {
        let { dataSpecialty } = this.state;

        return (
            <div className="search-specialty-container">
                <div className="search-header">
                    <h2 className="header">Chuyên khoa</h2>
                </div>
                <div className="section-share ">
                    <div className="section-body">
                    {dataSpecialty && dataSpecialty.length > 0 &&
                                dataSpecialty.map((item, index) => {
                                    return (
                                        <div className="section-customize specialty-child"
                                            key={index}
                                            onClick={() => this.handleViewDetailSpecialty(item)}
                                        >
                                            <div className="bg-image section-specialty"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className="specialty-name">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchSpecialty));
