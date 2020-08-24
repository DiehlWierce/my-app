import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
// import PropTypes from 'prop-types'

const Post = ({ nick, age }) => (
    <Fragment>
        <tr>
            <td>Nick:</td>
            <th>{nick}</th>
        </tr>
        <tr>
            <td>Age:</td>
            <th>{age}</th>
        </tr>
    </Fragment>
)



class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nick: "nameless",
            age: 0,
            posts: [],
            newPost: {}
        }
    }

    handleCreatePost = e => {
        e.preventDefault()
        const { posts, newPost, nick, age } = this.state

        this.setState({
            newPost: { 
                nick,
                age
            },
            posts: [
                ...posts,
                {
                    ...newPost,
                    id: Math.random()
                }
            ]
        })
    }

    handleChangeNewPost = name => ({ target }) => {
        const { newPost } = this.state
        this.setState({
            ...this.state,
            newPost: {
                ...newPost,
                [name]: target.value
            }
        })
    }

    render() {
        const { posts, newPost } = this.state
        
        return (
            <Fragment>
                <div className="main">
                    <form onSubmit={this.handleCreatePost}>
                        <input 
                        type = "text" 
                        placeholder = "введи свой никнейм" 
                        name = "Nickname" 
                        value={newPost.nick} 
                        onChange={this.handleChangeNewPost("nick")}
                        /> 
                        <input 
                        type = "integer" 
                        placeholder = "введите ваш возраст" 
                        name = "Age" 
                        value={newPost.age} 
                        onChange={this.handleChangeNewPost("age")}
                        />
    
                        <div class="radio-container">
                            <div class="form-item radio-btn">
                                <input type="radio" name="feeling" id="bad"/>
                                <label className="nth-1" for="bad">Bad</label>
                            </div>
                            <div class="form-item radio-btn">
                                <input type="radio" name="feeling" id="good"/>
                                <label className="nth-2" for="good">Good</label>
                            </div>
                            <div class="form-item radio-btn">
                                <input type="radio" name="feeling" id="amazing"/>
                                <label className="nth-3" for="amazing">Amazing</label>
                            </div>
                        </div>
                        
                        <input type = "submit" value = "Отправить"/>
                    </form>
                </div>
                <br/>
                <br/>
                <div className="rating">
                    <h1>Наши участники!</h1>
                    <table>
                        {posts.map(post => <Post key={post.id} {...post} />)}
                    </table>  
                </div>
            </Fragment>
        )
    }
}


const root = document.getElementById('root')
ReactDOM.render(<Input/>, root)