// Live Chat 

handleKeyUp = evt => {
      const value = evt.target.value;
      
      if (evt.keyCode === 13 && !evt.shiftKey) {
        const { activeUser: user } = this.props;
        const chat = { user, message: value, timestamp: +new Date };
        
        evt.target.value = '';
        axios.post('/message', chat);
      }
}

render() {
      return (this.props.activeUser && <Fragment>
      
        <div className="border-bottom border-gray w-100 d-flex align-items-center bg-white" style={{ height: 90 }}>
          <h2 className="text-dark mb-0 mx-4 px-2">{this.props.activeUser}</h2>
        </div>
        
        <div className="border-top border-gray w-100 px-4 d-flex align-items-center bg-light" style={{ minHeight: 90 }}>
          <textarea className="form-control px-3 py-2" onKeyUp={this.handleKeyUp} placeholder="Enter a chat message" style={{ resize: 'none' }}></textarea>
        </div>
        
      </Fragment> )
}