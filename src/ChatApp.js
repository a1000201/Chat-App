// ChatApp: 原本的 HTML
const React = require ('react');
const ThreadList = require ('./ThreadList');
const ThreadItem = require ('./ThreadItem');
const MessageList = require ('./MessageList');
const MessageItem = require ('./MessageItem');



const initialState = {
  newMessage: '',
  threads: [
    {
      target: {
        name: 'Elsa',
        profilePic: 'http://lorempixel.com/50/50/people/1'
      },
      messages: [
        { fromMe:false, text: '哈', time: '12:27' },
        { fromMe:false, text: 'hello', time: '12:27' },
        { fromMe:false, text: 'world', time: '12:27' },
        { fromMe:true, text: 'yo', time: '12:27' },
        { fromMe:true, text: 'ya', time: '12:27' },
      ]
    },
    {
      target: {
        name: 'Katharine',
        profilePic: 'http://lorempixel.com/50/50/people/9'
      },
      messages: [
        { fromMe:false, text: 'cool', time: '12:27' },
      ]
    },
    {
      target: {
        name: 'Marshall',
        profilePic: 'http://lorempixel.com/50/50/people/7'
      },
      messages: [
        { fromMe:false, text: 'good', time: '12:27' },
      ]
    }
  ],
  currentIndex: 0
};


class ChatApp extends React.Component {
	
	constructor(props){
		super(props);
	    this.state = initialState;
	}
	
	clickHandle(i){
		this.setState({currentIndex: i});
	}
	
	newMessageHandle(event){
		this.setState({newMessage : event.target.value})
	}
	
	insert(event){
		 const inputValue = event.target.value;
      if (event.keyCode == 13 && inputValue !== ''){
		 const { newMessage, threads, currentIndex } = this.state;
         const target = threads[currentIndex];		 
	     const msg = target.messages;
		 msg.push({fromMe : true, text : newMessage , time : '12:38am' });
		 this.setState({threads : threads,   newMessage : ''});
 	  }
	  
	}
	
	
  render() {
	const { newMessage, threads, currentIndex } = this.state; 
	const target = threads[currentIndex];
	const name =  target.target.name;
    return (
	<div>
	<div className="chat-app clearfix">
		<div className="chat-app_left">
			<div className="heading">
				<h3 className="messenger-title" onClick={this.clickHandle.bind(this,1)}>Messager</h3>
			</div>
			<div className="thread-list">
			<ThreadList thread={threads[0]} onClick={this.clickHandle.bind(this,0)} />
			<ThreadList thread={threads[1]} onClick={this.clickHandle.bind(this,1)} />
			<ThreadList thread={threads[2]} onClick={this.clickHandle.bind(this,2)} />
			</div>
		</div>
		<div className="chat-app_right">
			<div className="heading">
				<div className="current-target">{name}</div>
			</div>
			  <MessageList threads={threads} currentIndex={currentIndex}/>
			<div className="footer">
				<input id="input" className="new-message" type="text" value={newMessage} onChange={this.newMessageHandle.bind(this)} onKeyDown={this.insert.bind(this)}/>
			</div>
		</div>
	</div>
	</div>
      // html -> jsx
    );
  }
}



module.exports=ChatApp;




