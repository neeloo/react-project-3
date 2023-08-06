import React from 'react'

class AddContent extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h3>Add contect</h3>
                <form className="ui form">
                    <div className="field">
                        <label >Name</label>
                        <input type="text" name='name' placeholder='Name' />
                    </div>
                    <div className="field">
                        <label >Email</label>
                        <input type="text" email='email' placeholder='Email' />
                    </div>
                    <button type="button" class="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContent;