import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchClinic.scss';
import { getAllClinic } from '../../../services/userService';
import { withRouter } from 'react-router';

class SearchClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataClinics: []

        }
    }

    async componentDidMount() {
        let res = await getAllClinic();
        if (res && res.errCode === 0) {
            this.setState({
                dataClinics: res.data ? res.data : []
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }

    handleViewDetailClinic = (clinic) => {
        if (this.props.history) {
            this.props.history.push(`/detail-clinic/${clinic.id}`)
        }
    }

    render() {
        let { dataClinics } = this.state
        return (
            <div className="search-clinic-container">
                <div className="search-header">
                    <h2 className="header">Cơ sở y tế</h2>
                </div>
                <div className="section-share ">
                    <div className="section-body">
                    {dataClinics && dataClinics.length > 0 &&
                                dataClinics.map((item, index) => {
                                    return (
                                        <div className="section-customize clinic-child"
                                            key={index}
                                            onClick={() => this.handleViewDetailClinic(item)}
                                        >
                                            <div className="bg-image section-medical-facility"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className="clinic-name">{item.name}</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchClinic));
