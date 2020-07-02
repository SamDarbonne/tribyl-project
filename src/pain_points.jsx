import React from 'react';

class PainPoints extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pain-points">
                <div className="title">
                    {this.props.data && this.props.data.name}
                </div>
                <div className="content">
                    {this.props.data && this.props.data.description}
                </div>
            </div>
        );
    }
}

export default PainPoints;