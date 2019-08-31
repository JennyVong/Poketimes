import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className = "post card" key = {post.id}>
                        <img src = {pokeball} alt = 'A pokeball' />
                        <div className= "post-content">
                            <Link to = {'/'+ post.id}>
                                <h4 className = "title red-text">{post.title}</h4>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className = "center">You have no posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home)