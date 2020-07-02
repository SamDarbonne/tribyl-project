import React from 'react';
import EditModal from './edit_modal'
import PainPoints from './pain_points'

const StorageKey = 'tribyl__pain-points'

class LandingPage extends React.Component {
    constructor() {
        super();
        const painPointsData = JSON.parse(localStorage.getItem(StorageKey));
        this.state = { painPointsData, showModal: false };
    }

    updateData(painPointsData) {
        localStorage.setItem(StorageKey, JSON.stringify(painPointsData))
        this.setState({painPointsData})
    }

    _openModal() {
        this.setState({showModal: true})
    }

    _modalSave = (data) => {
        return () => {
        this.updateData(data);
        this.setState({
            painPointsData: data,
            showModal: false
        })
    }
    }

    _modalCancel = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                {this.state.showModal && (
                    <EditModal 
                        data={this.state.painPointsData}
                        save={this._modalSave}
                        cancel={this._modalCancel}
                    ></EditModal>
                )}
                <PainPoints data={this.state.painPointsData}/>
                <button className="open-modal-btn" onClick={() => this._openModal()}>+</button>
            </div>
        );
    }
}

export default LandingPage;