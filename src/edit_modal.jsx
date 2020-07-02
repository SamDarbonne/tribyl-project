import React from 'react';


class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: props.data && props.data.name,
            description: props.data && props.data.description
        };
    }

    _onChange = (key) => {
        return (e) => {
            this.setState({
                [key]: e.target.value
            })
        }
    }

    _save = (data) => {
        return () => {
            alert(data)
        }
    }

    render() {
        return (
            <div className="edit-modal-wrapper">
                <div className={'edit-modal'}>
                    <div className={'edit-modal-content'}>
                        <div>Name: <input value={this.state.name} onChange={this._onChange('name')}></input></div>
                        <div>Description: <input value={this.state.description} onChange={this._onChange('description')}></input></div>
                        <div><button onClick={this.props.save({name: this.state.name, description: this.state.description})}>save</button>
                        <button onClick={this.props.cancel}>cancel</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditModal;