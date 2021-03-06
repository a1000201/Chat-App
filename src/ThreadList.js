const React = require ('react');
const ThreadItem = require ('./ThreadItem');


class ThreadList extends React.Component {
	
	
	
  render() {
	  const thread=this.props.thread;
	  const index=this.props.index;
	  const onClick=this.props.onClick;
	  const { target, messages } = thread;
      const lastMessage = messages[messages.length - 1];
    return (
	 <ThreadItem 
	    src={target.profilePic}
        name={target.name}
        content={lastMessage.text}
        time={lastMessage.time}
		onClick={onClick}
		/>
      // html -> jsx
    );
  }
}

module.exports=ThreadList;
