import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {
    

    render() {
        

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về bookingcare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/iAoGa-OqVco" title="Sức khỏe và cuộc sống: Thực dưỡng có thật sự tốt cho sức khỏe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>Nếu muốn thực hiện một chế độ ăn lành mạnh, chế độ ăn thực dưỡng là một lựa chọn tốt. Tuy không có những bằng chứng tuyệt đối, nhưng với một chế độ ăn với thành phần chủ yếu là rau xanh, trái cây, ngũ cốc nguyên hạt sẽ có khả năng rất lớn hạ thấp nguy cơ mắc một số bệnh lý, bao gồm các bệnh lý về tim mạch và ung thư.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
